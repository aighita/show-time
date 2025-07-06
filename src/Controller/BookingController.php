<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Repository\BookingRepository;
use App\Service\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

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

    #[Route('/booking/pay/{id}', name: 'app_booking_pay')]
    public function pay(Booking $booking, StripeService $stripe, EntityManagerInterface $em): Response
    {
        // Already paid
        if ($booking->isPaid()) {
            $this->addFlash('info', 'This booking has already been paid.');
            return $this->redirectToRoute('app_payment_success', ['id' => $booking->getId()]);
        }

        // Reuse existing session
        if ($booking->getStripeSessionUrl()) {
            return $this->redirect($booking->getStripeSessionUrl(), 303);
        }

        // Create a new session
        $festival = $booking->getFestival();
        $amount = (int)(floatval($festival->getBookingPrice()) * 100);

        $session = $stripe->createCheckoutSession([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => $festival->getName() . ' Ticket',
                    ],
                    'unit_amount' => $amount,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => $this->generateUrl('app_payment_success', [
                'id' => $booking->getId()
            ], UrlGeneratorInterface::ABSOLUTE_URL),
            'cancel_url' => $this->generateUrl('app_payment_cancel', [
                'id' => $booking->getId()
            ], UrlGeneratorInterface::ABSOLUTE_URL),
            'metadata' => [
                'booking_id' => $booking->getId(),
            ],
            'expires_at' => time() + 3600 * 24, // 24 hours
        ]);

        // Save session info
        $booking->setStripeSessionUrl($session->url);
        $booking->setStripeSessionId($session->id);
        $em->flush();

        return $this->redirect($session->url, 303);
    }

    #[Route('/booking/success/{id}', name: 'app_payment_success', methods: ['GET'])]
    public function success(Request $request, Booking $booking): Response
    {
        $this->addFlash('success', 'Payment successful! Your booking is confirmed.');

        return $this->render('booking/success.html.twig', [
            'booking' => $booking,
            'festival' => $booking->getFestival(),
        ]);
    }

    #[Route('/booking/cancel/{id}', name: 'app_payment_cancel', methods: ['GET'])]
    public function cancel(Booking $booking): Response
    {
        $this->addFlash('warning', 'Payment was cancelled.');

        return $this->render('booking/canceled.html.twig', [
            'booking' => $booking,
            'festival' => $booking->getFestival(),
        ]);
    }
}
