<?php

namespace App\Controller\Admin;

use App\Repository\BandRepository;
use App\Repository\BookingRepository;
use App\Repository\FestivalRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin')]
final class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
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

        $festivalList = [];
        $bandList = [];
        $bookingList = [];

        $revenuePerMonth = [];
        
        for ($i = 1; $i < 7; $i++) {
            $from = new \DateTime('-' . $i . 'month');
            $to = new \DateTime('-' . ($i - 1) . 'month');

            $qb = $bookingRepo->createQueryBuilder('b');
            $qb
                ->andWhere('b.createdAt BETWEEN :from AND :to')
                ->setParameter('from', $from)
                ->setParameter('to', $to);
            $result = $qb->getQuery()->getResult();

            $revenuePerMonth[$from->format('Y-m')] = $result;
        }

        return $this->render('dashboard/index.html.twig', [
            'summary' => [
                'festivals' => $festivalCount,
                'bands' => $bandCount,
                'bookings' => $bookingCount,
            ],
            'festivals' => $festivalList,
            'bands' => $bandList,
            'bookings' => $bookingList,
            'analytics' => [
                'revenueData' => $revenuePerMonth,
                'userData' => []
            ]
        ]);
    }
}
