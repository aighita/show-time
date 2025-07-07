<?php

namespace App\Controller\Admin;

use App\Repository\BandRepository;
use App\Repository\BookingRepository;
use App\Repository\FestivalRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/dashboard')]
final class DashboardController extends AbstractController
{
    #[Route('/', name: 'app_dashboard')]
    public function index(
        BandRepository     $bandRepo,
        FestivalRepository $festivalRepo,
        BookingRepository  $bookingRepo
    ): Response
    {
        // Main counts
        $festivalCount = $festivalRepo->count([]);
        $bandCount = $bandRepo->count([]);
        $bookingCount = $bookingRepo->count([]);

        // TODO: Replace with actual query methods
        $upcomingFestivals = 0;
        $bookingsThisMonth = 0;

        // Fallbacks or real data
        $festivalList = []; // You can later fetch with $festivalRepo->findAll() or custom
        $bandList = [];     // You can use $bandRepo->findAll()
        $bookingList = [];  // You can use $bookingRepo->findAll()

        return $this->render('dashboard/index.html.twig', [
            'summary' => [
                'festivals' => $festivalCount,
                'bands' => $bandCount,
                'bookings' => $bookingCount,
            ],
            'festivals' => $festivalList,
            'bands' => $bandList,
            'bookings' => $bookingList,
        ]);
    }
}
