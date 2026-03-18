<?php

namespace App\Entity;

use App\Repository\ServiceRepository;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Attribute\Groups;

use ApiPlatform\Metadata\ApiResource;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;

#[ORM\Entity(repositoryClass: ServiceRepository::class)]
#[ORM\HasLifecycleCallbacks] // Active les callbacks pour createdAt et updatedAt
#[ApiResource(
    normalizationContext: ['groups' => ['service:read']],
    operations: [
        new GetCollection(security: null),  // Public : tout le monde peut lister les categories 
        new Get(security: null),            // Public : voir une categorie
        // new Post(security: "is_granted('ROLE_SUPER_ADMIN')"),  
        // new Put(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class Service
{
    // id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('service:read')]
    private ?int $id = null;

    // title
    #[Assert\NotBlank(message: 'Le titre est obligatoire')]
    #[Assert\Length(
        min: 5,
        max: 50,
        minMessage: 'Le titre doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le titre ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 255)]
    #[Groups('service:read')]
    private ?string $title = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: 'category_id', nullable: false)]
    #[Groups('service:read')]
    #[ApiProperty(readableLink: false)]
    private ?Category $category = null;

    // price
    #[Assert\NotBlank(message: 'Le prix est obligatoire')]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'Le prix doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le prix ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 50)]
    #[Groups('service:read')]
    private ?string $price = null;

    // Timestamp (creation)
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    // Timestamp (update
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;
   
    // Relation ManyToOne avec User (chaque catégorie est créée ou modifiée par un utilisateur)
    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

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

    public function __toString(): string
    {
        return $this->title ?? 'Service sans titre'; // Retourne le title, ou un fallback si null
    }
}
