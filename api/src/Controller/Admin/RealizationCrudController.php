<?php

namespace App\Controller\Admin;

use App\Entity\Realization;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class RealizationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Realization::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des réalisations')
            ->setPageTitle('edit', 'Modifier une réalisation');
    }

    public function configureActions(Actions $actions): Actions
    {
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::NEW, Action::DELETE);  // Pas create/delete, seulement edit
        }
        return $actions
            // Pour le bouton "Add Category" sur la page liste (INDEX)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setLabel('Ajouter une réalisation');
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
        if (!$entityInstance instanceof Realization) {
            return;
        }

        // Récupère l'utilisateur connecté
        $currentUser = $this->getUser();

        if ($currentUser) {
            $entityInstance->setUser($currentUser);
        }

        parent::persistEntity($entityManager, $entityInstance);
    }

    // Nouvelle surcharge pour les mises à jour
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Realization) {
            return;
        }

        $currentUser = $this->getUser();
        if ($currentUser) {
            $entityInstance->setUser($currentUser); // Met à jour avec l'utilisateur qui modifie
        }

        parent::updateEntity($entityManager, $entityInstance);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextEditorField::new('description'),
            AssociationField::new('category', 'Categorie') // 'service' est la propriété, 'Catégorie' est le label
                ->setRequired(true) // Obligatoire si needed
                ->autocomplete(), // Active l'autocomplétion pour un select searchable si beaucoup de catégories
            DateTimeField::new('realizedAt', 'Réalisé le'),
            ImageField::new('image', 'Image')
                ->setBasePath('uploads/')
                // ->setUploadDir('public/uploads') // dev
                ->setUploadDir('public/uploads')  //prod
                ->setUploadedFileNamePattern('[randomhash].[extension]')
                ->setRequired(false),
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
