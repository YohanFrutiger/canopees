<?php

namespace App\Controller\Admin;

use App\Entity\Service;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;


class ServiceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Service::class;
    }

   public function configureActions(Actions $actions): Actions
    {
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::NEW, Action::DELETE);  // Pas create/delete, seulement edit
        }
        return $actions;
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Service) {
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

    // Nouvelle surcharge pour les mises à jour
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Service) {
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
            TextField::new('title'),
            AssociationField::new('category', 'Catégorie') // 'category' est la propriété, 'Catégorie' est le label
                ->setRequired(true) // Obligatoire si needed
                ->autocomplete(), // Active l'autocomplétion pour un select searchable si beaucoup de catégories
                // ->setFormTypeOptions(['choice_label' => 'title']), // Affiche le 'title' de Category dans le select (ajuste si champ différent)
            TextField::new('price'),
            DateTimeField::new('createdAt')->onlyOnIndex(),
            DateTimeField::new('updatedAt')->onlyOnIndex(),
            IdField::new('user.id', 'User ID')->onlyOnIndex(),  // Changement ici : 'user.id' au lieu de 'user_id'
        ];
    }
}
