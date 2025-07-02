<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/signin')]
final class SignInController extends AbstractController
{
    #[Route('/', name: 'app_sign_in')]
    public function index(): Response
    {
        return $this->render('sign_in/index.html.twig', [
            'controller_name' => 'SignInController',
        ]);
    }
}
