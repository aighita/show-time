<?php

namespace App\Controller;

use App\Repository\FestivalRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/')]
final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(FestivalRepository $festivalRepository): Response
    {
        $festivals = $festivalRepository->findAll();

        $festivalData = array_map(function ($festival) {
            return [
                'id' => $festival->getId(),
                'name' => $festival->getName(),
                'location' => $festival->getLocation(),
                'startDate' => $festival->getStartDate()->format('Y-m-d'),
                'endDate' => $festival->getEndDate()->format('Y-m-d'),
            ];
        }, $festivals);

        return $this->render('home/index.html.twig', [
            'festivals' => $festivalData,
        ]);
    }
}
