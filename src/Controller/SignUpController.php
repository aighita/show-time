<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/signup', name: 'app_sign_up')]
final class SignUpController extends AbstractController
{
    #[Route('/', name: 'app_sign_up')]
    public function index(): Response
    {
        return $this->render('sign_up/index.html.twig', [
            'controller_name' => 'SignUpController',
        ]);
    }
}
