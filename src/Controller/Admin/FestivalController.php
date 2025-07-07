<?php

namespace App\Controller\Admin;

use App\Entity\Booking;
use App\Entity\Festival;
use App\Form\BookingType;
use App\Form\FestivalType;
use App\Repository\BandRepository;
use App\Repository\FestivalRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/festival')]
final class FestivalController extends AbstractController
{
    #[Route('/', name: 'app_festival_index', methods: ['GET'])]
    public function index(FestivalRepository $festivalRepository): Response
    {
        return $this->render('festival/index.html.twig', [
            'controller_name' => 'FestivalController',
            'festivals' => $festivalRepository->findAll(),
        ]);
    }

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

    #[Route('/new', name: 'app_festival_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $festival = new Festival();
        $form = $this->createForm(FestivalType::class, $festival);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($festival);
            $entityManager->flush();

            return $this->redirectToRoute('app_festival_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('festival/new.html.twig', [
            'festival' => $festival,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_festival_show', methods: ['GET'])]
    public function show(Festival $festival): Response
    {
        return $this->render('festival/show.html.twig', [
            'festival' => $festival,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_festival_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Festival $festival, EntityManagerInterface $entityManager, BandRepository $bandRepository): Response
    {
        $form = $this->createForm(FestivalType::class, $festival);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_festival_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('festival/edit.html.twig', [
            'festival' => $festival,
            'form' => $form,
            'bands' => $bandRepository->findAll(),
        ]);
    }

    #[Route('/{id}', name: 'app_festival_delete', methods: ['POST'])]
    public function delete(Request $request, Festival $festival, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $festival->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($festival);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_festival_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{festivalId}/add-band/{bandId}', name: 'app_festival_band_add', methods: ['GET'])]
    public function addBandToFestival(
        int                    $festivalId,
        int                    $bandId,
        FestivalRepository     $festivalRepo,
        BandRepository         $bandRepo,
        EntityManagerInterface $em
    ): Response
    {
        $festival = $festivalRepo->find($festivalId);
        $band = $bandRepo->find($bandId);

        if (!$festival || !$band) {
            throw $this->createNotFoundException('Festival or Band not found.');
        }

        $festival->addBand($band);
//        $em->persist($festival);
        $em->flush();

        return $this->redirectToRoute('app_festival_edit', ['id' => $festivalId]);
    }

    #[Route('/{festivalId}/remove-band/{bandId}', name: 'app_festival_band_delete', methods: ['GET'])]
    public function removeBandFromFestival(
        int                    $festivalId,
        int                    $bandId,
        FestivalRepository     $festivalRepo,
        BandRepository         $bandRepo,
        EntityManagerInterface $em
    ): Response
    {
        $festival = $festivalRepo->find($festivalId);
        $band = $bandRepo->find($bandId);

        if (!$festival || !$band) {
            throw $this->createNotFoundException('Festival or Band not found.');
        }

        $festival->removeBand($band);
        $em->flush();

        return $this->redirectToRoute('app_festival_edit', ['id' => $festivalId]);
    }

}
