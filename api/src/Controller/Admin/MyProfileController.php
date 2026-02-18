<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/my-profile', name: 'admin_my_profile')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
class MyProfileController extends AbstractController
{
    public function __invoke(): Response
    {
        $user = $this->getUser();
        return $this->render('admin/my_profile.html.twig', [
            'user' => $user,
        ]);
    }
}
