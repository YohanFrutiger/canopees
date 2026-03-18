<?php

namespace App\Controller\Admin;

use App\Entity\User;

use Doctrine\ORM\EntityManagerInterface;

use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;


use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use EasyCorp\Bundle\EasyAdminBundle\Config\KeyValueStore;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use App\Form\ChangePasswordType;


class UserCrudController extends AbstractCrudController
{
    private UserPasswordHasherInterface $passwordHasher;
    private ValidatorInterface $validator;

    public function __construct(UserPasswordHasherInterface $passwordHasher, ValidatorInterface $validator)
    {
        $this->passwordHasher = $passwordHasher;
        $this->validator = $validator;
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $user = $this->getUser();
        $fields = [
            IdField::new('id')->hideOnForm(),
            TextField::new('firstname'),
            TextField::new('lastname'),
            TextField::new('email'),
        ];

        if ($this->isGranted('ROLE_SUPER_ADMIN')) {
            $fields = [
                IdField::new('id')->hideOnForm(),
                TextField::new('firstname', 'Nom'),
                TextField::new('lastname', 'Prénom'),
                TextField::new('email'),
                ChoiceField::new('roles', 'Rôle')
                    ->setChoices([
                        'Admin' => 'ROLE_ADMIN',
                        'Super Admin' => 'ROLE_SUPER_ADMIN',
                    ])
                    ->allowMultipleChoices(true)
                    ->renderExpanded(false)
                    ->setRequired(true),
                TextField::new('plainPassword', 'Mot de passe')
                    ->onlyWhenCreating()
                    ->setFormType(RepeatedType::class)
                    ->setFormTypeOptions([
                        'type' => PasswordType::class,
                        'first_options' => ['label' => 'Mot de passe'],
                        'second_options' => ['label' => 'Confirmer le mot de passe'],
                        'invalid_message' => 'Les mots de passe ne correspondent pas.',
                    ])
            ];
        }

        return $fields;
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof User) return;

        $this->hashPassword($entityInstance);

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof User) return;

        $this->hashPassword($entityInstance);

        parent::updateEntity($entityManager, $entityInstance);
    }

    private function hashPassword(User $user): void
    {
        $plainPassword = $user->getPlainPassword();

        if (!$plainPassword) {
            return;
        }

        $hashed = $this->passwordHasher->hashPassword($user, $plainPassword);
        $user->setPassword($hashed);

        // On efface le mot de passe en clair
        $user->setPlainPassword(null);
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des utilisateurs')
            ->setPageTitle('edit', 'Modifier un utilisateur');
    }

    public function configureActions(Actions $actions): Actions
    {
        $user = $this->getUser();

        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::NEW, Action::DELETE);  // Pas create/delete, seulement edit
        }


        // 🔐 Bouton modifier mot de passe (uniquement sur son propre profil)
        $changePassword = Action::new('changePassword', 'Modifier mon mot de passe')
            ->linkToRoute('admin_change_password')
            ->setCssClass('btn btn-warning')
            ->displayIf(function ($entity) use ($user) {
                if (!$entity || !$user) {
                    return false;
                }

                // visible uniquement si l'utilisateur édite SON profil
                return $entity->getId() === $user->getId();
            });

        $actions->add(Crud::PAGE_EDIT, $changePassword);

        // 🔒 Restrictions pour non super admin
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {

            // pas accès liste, création, suppression
            $actions->disable(Action::INDEX, Action::NEW, Action::DELETE);

            // empêche édition autre profil (sécurité UI)
            $actions->update(
                Crud::PAGE_EDIT,
                Action::SAVE_AND_RETURN,
                fn(Action $action) => $action->displayIf(function ($entity) use ($user) {
                    return $entity && $entity->getId() === $user->getId();
                })
            );
        }

        return $actions
            // Pour le bouton "Add Category" sur la page liste (INDEX)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setLabel('Ajouter un utilisateur'); // Ton label personnalisé
            })
            // Pour les liens "Edit" sur la page edit
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE, function (Action $action) {
                return $action->setLabel('Enregistrer et continuer les modifications'); // Ton label personnalisé
            })
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_RETURN, function (Action $action) {
                return $action->setLabel('Enregistrer'); // Ton label personnalisé
            });
    }

    public function edit(AdminContext $context): Response|KeyValueStore
    {
        $user = $this->getUser();
        $entityInstance = $context->getEntity()->getInstance();

        if (!$this->isGranted('ROLE_SUPER_ADMIN') && $entityInstance && $entityInstance->getId() !== $user->getId()) {
            throw $this->createAccessDeniedException('Vous ne pouvez éditer que votre propre profil.');
        }

        // Appel à parent pour traiter le formulaire (GET: affiche form, POST: valide et sauve si OK)
        $response = parent::edit($context);

        // Si non super admin et que c'est une redirection (sauvegarde réussie), override vers dashboard
        if (!$this->isGranted('ROLE_SUPER_ADMIN') && $response instanceof RedirectResponse) {
            return $this->redirectToRoute('admin');
        }

        return $response;
    }

    #[Route('/admin/change-password', name: 'admin_change_password')]
    public function changePassword(
        Request $request,
        EntityManagerInterface $em
    ): Response {
        $user = $this->getUser();

        $form = $this->createForm(ChangePasswordType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $currentPassword = $form->get('currentPassword')->getData();
            $newPassword = $form->get('newPassword')->getData();

            // Vérifier ancien mot de passe
            if (!$this->passwordHasher->isPasswordValid($user, $currentPassword)) {
                $this->addFlash('danger', 'Mot de passe actuel incorrect.');
            } else {
                // Injecte le nouveau mot de passe dans plainPassword
                $user->setPlainPassword($newPassword);

                // Valide uniquement plainPassword
                $errors = $this->validator->validate($user, null, ['create']);

                if (count($errors) > 0) {
                    foreach ($errors as $error) {
                        $this->addFlash('danger', $error->getMessage());
                    }
                } else {
                    // Hash seulement si validation OK
                    $hashed = $this->passwordHasher->hashPassword($user, $newPassword);
                    $user->setPassword($hashed);
                    $user->setPlainPassword(null);

                    $em->flush();

                    $this->addFlash('success', 'Mot de passe modifié avec succès.');

                    return $this->redirectToRoute('admin');
                }
            }
        }

        return $this->render('admin/change_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }




    // Pour erreurs par champ : override createEditFormBuilder ou similar, mais simple ici avec event
    // Note : EasyAdmin 4+ intègre mieux les validators ; si version <4, ajoute ça dans un subscriber global ou ici
}
