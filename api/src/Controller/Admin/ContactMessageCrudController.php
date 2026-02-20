<?php

namespace App\Controller\Admin;

use App\Entity\ContactMessage;

use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class ContactMessageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ContactMessage::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Messages reçus') 
            ->setPageTitle('edit', 'Traitement du messsage');
    }

    public function configureActions(Actions $actions): Actions
    {
        $actions->disable(Action::NEW);
        if (!$this->isGranted('ROLE_SUPER_ADMIN')) {
            $actions->disable(Action::DELETE);
        }
        return $actions;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('nom', 'Nom')
                ->setRequired(false)  
                ->setFormTypeOption('disabled', true),  // read-only en édition (non éditable)
            TextField::new('prenom', 'Prenom')
                ->setRequired(false)  
                ->setFormTypeOption('disabled', true),  // read-only en édition (non éditable)
            TextField::new('email', 'Email')
                ->setRequired(false)  
                ->setFormTypeOption('disabled', true),  // read-only en édition (non éditable)
            TextareaField::new('message', 'Message')  // Champ texte pour le contenu
                ->setRequired(false)  
                ->hideOnIndex()  // Pas dans la liste pour éviter surcharge
                ->setFormTypeOption('disabled', true),  // read-only en édition (non éditable)
            DateTimeField::new('createdAt', 'Date de réception')->onlyOnIndex(), 
            BooleanField::new('treated', 'Traité') 
                ->renderAsSwitch(false),
        ];
    }
}
