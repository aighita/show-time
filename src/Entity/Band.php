<?php

namespace App\Entity;

use App\Enum\MusicGenre;
use App\Repository\BandRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BandRepository::class)]
class Band
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(enumType: MusicGenre::class)]
    private ?MusicGenre $genre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, Festival>
     */
    #[ORM\ManyToMany(targetEntity: Festival::class, mappedBy: 'bands')]
    private Collection $festivals;

    public function __construct()
    {
        $this->festivals = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getGenre(): ?MusicGenre
    {
        return $this->genre;
    }

    public function setGenre(MusicGenre $genre): static
    {
        $this->genre = $genre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    /**
     * @return Collection<int, Festival>
     */
    public function getFestivals(): Collection
    {
        return $this->festivals;
    }

    public function addFestival(Festival $festival): static
    {
        if (!$this->festivals->contains($festival)) {
            $this->festivals->add($festival);
        }

        return $this;
    }

    public function removeFestival(Festival $festival): static
    {
        $this->festivals->removeElement($festival);

        return $this;
    }
}
