<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Entity\Festival;
use App\Form\BookingType;
use App\Repository\FestivalRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/festival')]
final class FestivalController extends AbstractController
{

    #[Route('/all/{id}', name: 'app_festival_all', methods: ['GET', 'POST'])]
    public function book_festival(
        Festival               $festival,
        Request                $request,
        EntityManagerInterface $entityManager,
        FestivalRepository     $festivalRepository
    ): Response
    {
        $booking = new Booking();
        $booking->setFestival($festival);

        $form = $this->createForm(BookingType::class, $booking);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $booking->setCreatedAt(new \DateTime);
            $entityManager->persist($booking);
            $entityManager->flush();

            $this->addFlash('success', 'Booking confirmed!');
            return $this->redirectToRoute('app_booking_pay', ['id' => $booking->getId()]);
        }

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

        return $this->render('festival/featured.html.twig', [
            'festival' => $festival,
            'form' => $form->createView(),
            'festivals' => $festivalData,
        ]);
    }
}
