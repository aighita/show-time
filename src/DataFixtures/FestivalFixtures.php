<?php

namespace App\DataFixtures;

use App\Entity\Festival;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class FestivalFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $csv = fopen(__DIR__ . '/../../data_csv/festivales_musica_2023_clean.csv', 'r');
        $header = fgetcsv($csv);

        while (($row = fgetcsv($csv)) !== false) {
            $festival = new Festival();
            $festival->setName($row[0]);
            $festival->setLocation($row[1] . ', ' . $row[9]);
            $festival->setStartDate(new \DateTime($row[2]));
            $festival->setEndDate(new \DateTime($row[3]));
            $festival->setBookingPrice((string)random_int(40, 200));

            $manager->persist($festival);
        }

        fclose($csv);
        $manager->flush();
    }
}
