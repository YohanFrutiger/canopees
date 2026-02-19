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
use Symfony\Component\Security\Core\Security;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class CategoryCrudController extends AbstractCrudController
{

    // private $security;

    // public function __construct(Security $security)
    // {
    //     $this->security = $security;
    // }

    public static function getEntityFqcn(): string
    {
        return Category::class;
        
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des catégories') // Remplace par ton titre personnalisé
            ->setPageTitle('edit', 'Modifier une catégorie'); // Remplace par ton titre personnalisé

            

    }

    public function configureActions(Actions $actions): Actions
    {
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::NEW, Action::DELETE);  // Pas create/delete, seulement edit
        }
        return $actions
            // Pour le bouton "Add Category" sur la page liste (INDEX)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setLabel('Ajouter une catégorie'); // Ton label personnalisé
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
        if (!$entityInstance instanceof Category) {
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
        if (!$entityInstance instanceof Category) {
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
        //$this->denyAccessUnlessGranted('ROLE_ADMIN'); // Assure que seuls les admins accèdent à ce CRUD
        $user = $this->getUser();
        // $person = $user->getFirstname() . ' ' . $user->getLastname();
 
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title','Titre'),
            TextEditorField::new('description'),
            ImageField::new('image', 'Image')
                ->setBasePath('uploads/')
                ->setUploadDir('public/uploads')
                ->setUploadedFileNamePattern('[randomhash].[extension]')
                ->setRequired(false),
            TextField::new('tag'),
            TextEditorField::new('info'),
            DateTimeField::new('createdAt','Crée le')->onlyOnIndex(),
            DateTimeField::new('updatedAt','Mis à jour le')->onlyOnIndex(),
            IdField::new('user.lastname', 'Dernier utilisateur')->onlyOnIndex(),  // Changement pour afficher le prénom de l'utilisateur
        ];
    }
}
