<?php

namespace App\Controller;

use App\Repository\BookingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class BookingController extends AbstractController
{
    #[Route('/booking', name: 'app_booking')]
    public function index(BookingRepository $bookingsRepository): Response
    {
        return $this->render('booking/index.html.twig', [
            'controller_name' => 'BookingController',
            'bookings' => $bookingsRepository->findAll(),
        ]);
    }
}
