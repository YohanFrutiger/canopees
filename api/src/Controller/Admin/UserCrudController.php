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
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use EasyCorp\Bundle\EasyAdminBundle\Config\KeyValueStore;

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
                TextField::new('firstname'),
                TextField::new('lastname'),
                TextField::new('email'),
                ChoiceField::new('roles')
                    ->setChoices([
                        'Admin' => 'ROLE_ADMIN',
                        'Super Admin' => 'ROLE_SUPER_ADMIN',
                    ])
                    ->allowMultipleChoices(true)
                    ->renderExpanded(false)
                    ->setRequired(true),
            ];
        }


        // if ($pageName === Crud::PAGE_NEW || $pageName === Crud::PAGE_EDIT) {
        //     $fields[] = TextField::new('password')
        //         ->setFormType(RepeatedType::class)
        //         ->setFormTypeOptions([
        //             'type' => \Symfony\Component\Form\Extension\Core\Type\PasswordType::class,
        //             'first_options' => ['label' => 'Mot de passe'],
        //             'second_options' => ['label' => 'Confirmation du mot de passe'],
        //             'invalid_message' => 'Les mots de passe ne correspondent pas.',
        //         ])
        //         ->setRequired($pageName === Crud::PAGE_NEW);
        //         // ->onlyOnIndex();
        // }

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
        $plainPassword = $user->getPassword();

        if (!$plainPassword) return;

        if (str_starts_with($plainPassword, '$2y$')) return;

        $hashed = $this->passwordHasher->hashPassword($user, $plainPassword);
        $user->setPassword($hashed);
    }

    // Ajout pour valider et ajouter erreurs au form (au lieu d'exception globale)
    public function configureCrud(Crud $crud): Crud
    {
        return parent::configureCrud($crud)
            ->setFormOptions([
                'validation_groups' => ['Default'],  // Active tes groups si needed
            ]);
    }

    public function configureActions(Actions $actions): Actions
    {
        $user = $this->getUser();

        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            // Désactiver la liste, la création et la suppression pour les non SUPER_ADMIN
            $actions->disable(Action::INDEX, Action::NEW, Action::DELETE);

            // Sur la page d'édition, autoriser uniquement l'édition de son propre profil
            if ($this->getContext() && $this->getContext()->getCrud()->getCurrentPage() === Crud::PAGE_EDIT) {
                $entityInstance = $this->getContext()->getEntity()->getInstance();
                if ($entityInstance && $entityInstance->getId() !== $user->getId()) {
                    // Rediriger vers le dashboard si tentative d'accès à un autre profil
                    $url = $this->container->get(AdminUrlGenerator::class)
                        ->setController(\App\Controller\Admin\DashboardController::class)
                        ->generateUrl();
                    return $this->redirect($url);
                }
            }
        }

        return $actions;
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



    // Pour erreurs par champ : override createEditFormBuilder ou similar, mais simple ici avec event
    // Note : EasyAdmin 4+ intègre mieux les validators ; si version <4, ajoute ça dans un subscriber global ou ici
}
