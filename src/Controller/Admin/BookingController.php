<?php

namespace App\Controller\Admin;

use App\Repository\BookingRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/bookings')]
final class BookingController extends AbstractController
{
    #[Route('/', name: 'app_booking')]
    public function index(
        Request                $request,
        BookingRepository      $bookingsRepository,
        EntityManagerInterface $em,
        PaginatorInterface     $paginator
    ): Response
    {
        $search = $request->query->get('search');

        $qb = $bookingsRepository->createQueryBuilder('b');

        if ($search) {
            $qb->andWhere('LOWER(b.fullName) LIKE :search')
                ->setParameter('search', '%' . strtolower($search) . '%');
        }

        $bookingsQuery = $qb->getQuery();

        $bookings = $paginator->paginate(
            $bookingsQuery,
            $request->query->getInt('page', 1),
            25
        );

        // 👇 This is the key step
        $bookings->setTemplate('pagination/tailwind.html.twig');

        return $this->render('booking/index.html.twig', [
            'bookings' => $bookings,
            'search' => $search,
        ]);
    }
}
