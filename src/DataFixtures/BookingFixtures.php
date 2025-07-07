<?php

namespace App\DataFixtures;

use App\Entity\Booking;
use App\Repository\FestivalRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class BookingFixtures extends Fixture implements FixtureGroupInterface
{
    private string $csvPath;
    private FestivalRepository $festivalRepo;

    public function __construct(ParameterBagInterface $params, FestivalRepository $festivalRepo)
    {
        $this->csvPath = $params->get('kernel.project_dir') . '/data_csv/Customer_Names.csv';
        $this->festivalRepo = $festivalRepo;
    }

    public static function getGroups(): array
    {
        return ['booking'];
    }

    public function load(ObjectManager $manager): void
    {
        $festivals = $this->festivalRepo->findAll();
        if (count($festivals) === 0) {
            throw new \RuntimeException("No festivals in DB to assign bookings to.");
        }

        $handle = fopen($this->csvPath, 'r');
        if (!$handle) {
            throw new \RuntimeException("CSV file not found at {$this->csvPath}");
        }

        $firstRow = true;
        while (($row = fgetcsv($handle)) !== false) {
            if ($firstRow) {
                $firstRow = false;
                continue;
            }

            [$firstName, $lastName] = $row;
            $booking = new Booking();

            $fullName = "{$firstName} {$lastName}";
            $email = strtolower("{$firstName}.{$lastName}@example.com");

            $booking->setFullName($fullName);
            $booking->setEmail($email);
            $booking->setPaid((bool)random_int(0, 1));

// Always assign a valid festival entity
            $festival = $festivals[array_rand($festivals)];
            $booking->setFestival($festival);

            $manager->persist($booking);
        }

        fclose($handle);
        $manager->flush();
    }
}
