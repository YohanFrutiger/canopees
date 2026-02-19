<?php

namespace App\Controller\Admin;

use App\Entity\ContentSection;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class ContentSectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ContentSection::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Contenus du site') // Remplace par ton titre personnalisé
            ->setPageTitle('edit', 'Modifier un contenu'); // Remplace par ton titre personnalisé
    }

    public function configureActions(Actions $actions): Actions
    {
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::NEW, Action::DELETE);  // Pas create/delete, seulement edit
        }
                return $actions
            // Pour le bouton "Add Category" sur la page liste (INDEX)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setLabel('Ajouter un contenu'); // Ton label personnalisé
            })
            // Pour les liens "Edit" sur la page edit
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE, function (Action $action) {
                return $action->setLabel('Enregistrer et continuer les modifications'); // Ton label personnalisé
            })
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_RETURN, function (Action $action) {
                return $action->setLabel('Enregistrer'); // Ton label personnalisé
            });
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof ContentSection) {
            return;
        }

        // Récupère l'utilisateur connecté
        $currentUser = $this->getUser();

        if ($currentUser) {
            $entityInstance->setUser($currentUser);
        }

        // Le createdAt est déjà géré par l'entité, pas besoin de le setter ici

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof ContentSection) {
            return;
        }

        $currentUser = $this->getUser();
        if ($currentUser) {
            $entityInstance->setUser($currentUser); // Met à jour avec l'utilisateur qui modifie
        }

        // Le updatedAt est déjà géré par l'entité via PreUpdate

        parent::updateEntity($entityManager, $entityInstance);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('section_key'),
            TextField::new('title','Titre'),
            TextEditorField::new('content','Contenu'),
            DateTimeField::new('createdAt', 'Crée le')->onlyOnIndex(),
            DateTimeField::new('updatedAt', 'Mis à jour le')->onlyOnIndex(),
            IdField::new('user.id', 'Dernier utilisateur')->onlyOnIndex(),  // Changement ici : 'user.id' au lieu de 'user_id'
        ];
    }
}
