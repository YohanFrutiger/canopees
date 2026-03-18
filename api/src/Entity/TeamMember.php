<?php

namespace App\Entity;

use App\Repository\TeamMemberRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Attribute\Groups;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;

#[ORM\Entity(repositoryClass: TeamMemberRepository::class)]
#[ORM\HasLifecycleCallbacks] // Active les callbacks pour createdAt et updatedAt
#[ApiResource(
    normalizationContext: ['groups' => ['team_member:read']],
    operations: [
        new GetCollection(security: null),  // Public : tout le monde peut lister les categories 
        new Get(security: null),            // Public : voir une categorie
        // new Post(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Put(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class TeamMember
{
    // id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('team_member:read')]
    private ?int $id = null;

    // lastname
    #[Assert\NotBlank(message: 'Le nom est obligatoire')]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'Le nom doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le nom ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 255)]
    #[Groups('team_member:read')]
    private ?string $lastname = null;

    // firstname
    #[Assert\NotBlank(message: 'Le prénom est obligatoire')]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'Le prénom doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le prénom ne doit pas dépasser {{ limit }} caractères',
    )]
    #[Groups('team_member:read')]
    #[ORM\Column(length: 255)]
    
    private ?string $firstname = null;

    // biography
    #[Assert\NotBlank(message: 'La biographie est obligatoire')]
    #[Assert\Length(
        min: 20,
        max: 1000,
        minMessage: 'La biographie doit avoir au moins {{ limit }} caractères',
        maxMessage: 'La biographie ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(type: Types::TEXT)]
    #[Groups('team_member:read')]
    private ?string $biography = null;

    // image
    #[Assert\NotBlank(message: 'L\'image est obligatoire')]
    #[ORM\Column(length: 255)]
    #[Groups('team_member:read')]
    private ?string $image = null;

    // Timestamp (creation)
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    // Timestamp (update)
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getBiography(): ?string
    {
        return $this->biography;
    }

    public function setBiography(string $biography): static
    {
        $this->biography = $biography;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    #[ORM\PrePersist] // Callback exécuté avant la persistance
    public function setCreatedAtValue(): void
    {
        $this->createdAt = new \DateTimeImmutable(); // Date et heure actuelles
    }

    // Nouveau callback pour PreUpdate (updatedAt)
    #[ORM\PreUpdate]
    public function setUpdatedAtValue(): void
    {
        $this->updatedAt = new \DateTimeImmutable(); // Date et heure actuelles
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
