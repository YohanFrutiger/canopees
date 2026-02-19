<?php

namespace App\Controller\Admin;

use App\Entity\ContactMessage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
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
            ->setPageTitle('index', 'Messages reçus') // Remplace par ton titre personnalisé
            ->setPageTitle('edit', 'Traitement du messsage'); // Remplace par ton titre personnalisé
    }

    public function configureActions(Actions $actions): Actions
    {
        $actions->disable(Action::NEW);
        return $actions;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('email', 'Email')
                ->setRequired(false)  // Non obligatoire (déjà validé ailleurs si besoin)
                ->setFormTypeOption('disabled', true),  // Rend read-only en édition (non éditable)
            TextareaField::new('message', 'Message')  // Champ texte pour le contenu
                ->setRequired(false)  // Non obligatoire (déjà validé ailleurs si besoin)
                ->hideOnIndex()  // Pas dans la liste pour éviter surcharge
                ->setFormTypeOption('disabled', true),  // Rend read-only en édition (non éditable)
            BooleanField::new('treated', 'Traité')  // Le champ booléen modifiable
                ->renderAsSwitch(false),  // Affiche comme toggle pour facilité
            DateTimeField::new('createdAt', 'Date de réception')->onlyOnIndex(),  // Exemple pour autres champs read-only
        ];
    }
}
