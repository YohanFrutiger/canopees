<?php

namespace App\Controller\Admin;

use App\Entity\Category;

use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des catégories') 
            ->setPageTitle('edit', 'Modifier une catégorie');
    }

    public function configureActions(Actions $actions): Actions
    {
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::NEW, Action::DELETE);
        }
        return $actions
            // Pour le bouton "Add Category" sur la page liste (INDEX)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setLabel('Ajouter une catégorie');
            })
            // Pour les liens "Edit" sur la page edit
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE, function (Action $action) {
                return $action->setLabel('Enregistrer et continuer les modifications');
            })
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_RETURN, function (Action $action) {
                return $action->setLabel('Enregistrer'); 
            });
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Category) {
            return;
        }

        $currentUser = $this->getUser();

        if ($currentUser) {
            $entityInstance->setUser($currentUser);
        }

        parent::persistEntity($entityManager, $entityInstance);
    }

    // Nouvelle surcharge pour les mises à jour
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Category) {
            return;
        }

        $currentUser = $this->getUser();
        if ($currentUser) {
            $entityInstance->setUser($currentUser);
        }

        parent::updateEntity($entityManager, $entityInstance);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title', 'Titre'),
            TextEditorField::new('description'),
            ImageField::new('image', 'Image')
                ->setBasePath('uploads/')
                ->setUploadDir('public/uploads')
                ->setRequired(false)
                ->setUploadedFileNamePattern('[randomhash].[extension]'),
            TextField::new('tag'),
            TextEditorField::new('info'),
            DateTimeField::new('createdAt', 'Crée le')->onlyOnIndex(),
            DateTimeField::new('updatedAt', 'Mis à jour le')->onlyOnIndex(),
            AssociationField::new('user', 'Dernier utilisateur')
            ->formatValue(function ($value, $entity) {
                $user = $entity->getUser();
                return $user ? $user->getFirstname() . ' ' . $user->getLastname() : 'N/A';
            })
            ->onlyOnIndex(),    
        ];
    }
}
