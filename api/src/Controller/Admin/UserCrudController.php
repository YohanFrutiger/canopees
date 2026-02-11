<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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


        if ($pageName === Crud::PAGE_NEW || $pageName === Crud::PAGE_EDIT) {
            $fields[] = TextField::new('password')
                ->setFormType(RepeatedType::class)
                ->setFormTypeOptions([
                    'type' => \Symfony\Component\Form\Extension\Core\Type\PasswordType::class,
                    'first_options' => ['label' => 'Mot de passe'],
                    'second_options' => ['label' => 'Confirmation du mot de passe'],
                    'invalid_message' => 'Les mots de passe ne correspondent pas.',
                ])
                ->setRequired($pageName === Crud::PAGE_NEW)
                ->onlyOnForms();
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

    // public function configureActions(Actions $actions): Actions
    // {
    //     $user = $this->getUser();

    //     if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
    //         // Admins simples : disable create/delete/list
    //         $actions->disable(Action::NEW, Action::DELETE, Action::INDEX);

    //         // Sur page edit seulement, allow save et check si c'est leur profil
    //         if ($this->getContext()->getCrud()->getCurrentPage() === Crud::PAGE_EDIT) {
    //             $actions->add(Crud::PAGE_EDIT, Action::SAVE_AND_RETURN);

    //             // Check si l'entité éditée est bien leur profil
    //             $entityInstance = $this->getContext()->getEntity()->getInstance();
    //             if ($entityInstance && $entityInstance->getId() !== $user->getId()) {
    //                 // Redirection vers leur propre profil
    //                 $url = $this->adminUrlGenerator  // Utilise $this->adminUrlGenerator (injecté dans AbstractCrudController)
    //                     ->setController(self::class)
    //                     ->setAction(Action::EDIT)
    //                     ->setEntityId($user->getId())
    //                     ->generateUrl();
    //                 throw new \Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException('Accès restreint à votre profil seulement.');
    //             }
    //         }
    //     }

    //     return $actions;
    // }



    // Pour erreurs par champ : override createEditFormBuilder ou similar, mais simple ici avec event
    // Note : EasyAdmin 4+ intègre mieux les validators ; si version <4, ajoute ça dans un subscriber global ou ici
}
