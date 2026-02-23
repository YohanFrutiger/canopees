<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Category;
use App\Entity\Service;
use App\Entity\Realization;
use App\Entity\SliderImage;
use App\Entity\TeamMember;
use App\Entity\ContentSection;
use App\Entity\ContactMessage;

use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

use Symfony\Component\HttpFoundation\Response;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    public function index(): Response
    {
        $user = $this->getUser();
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        $editUrl = $adminUrlGenerator
            ->setController(UserCrudController::class)
            ->setAction('edit')
            ->setEntityId($user->getId())
            ->generateUrl();
        return $this->render('admin/my_profile.html.twig', [
            'user' => $user,
            'editUrl' => $editUrl,
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Tableau de bord');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToRoute('Mon profil', 'fas fa-user', 'admin');
        if ($this->isGranted('ROLE_SUPER_ADMIN')) {
            yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-list', User::class);
        }        
        yield MenuItem::linkToCrud('Catégories', 'fas fa-list', Category::class);
        yield MenuItem::linkToCrud('Services', 'fas fa-list', Service::class);
        yield MenuItem::linkToCrud('Réalisations', 'fas fa-list', Realization::class);
        yield MenuItem::linkToCrud('Slider', 'fas fa-list', SliderImage::class);
        yield MenuItem::linkToCrud('Équipe', 'fas fa-list', TeamMember::class);
        yield MenuItem::linkToCrud('Contenu du site', 'fas fa-list', ContentSection::class);
        yield MenuItem::linkToCrud('Messages', 'fas fa-envelope', ContactMessage::class);
    }
   
}
 

