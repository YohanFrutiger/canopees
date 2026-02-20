<?php

namespace App\Entity;

use App\Repository\CategoryRepository;

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

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ORM\HasLifecycleCallbacks] // Active les callbacks pour createdAt et updatedAt
#[ApiResource(
    normalizationContext: ['groups' => ['category:read']],
    operations: [
        new GetCollection(security: null),  // Public : tout le monde peut lister les categories 
        new Get(security: null),            // Public : voir une categorie
        // new Post(security: "is_granted('ROLE_SUPER_ADMIN')"),  
        // new Put(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class Category
{
    // id    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('category:read')]
    private ?int $id = null;

    // title
    #[Assert\NotBlank(message: 'Le titre est obligatoire')]
    #[Assert\Length(
        min: 4,
        max: 50,
        minMessage: 'Le titre doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le titre ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 255)]
    #[Groups('category:read')]
    private ?string $title = null;

    // description
    #[Assert\NotBlank(message: 'La description est obligatoire')]
    #[Assert\Length(
        min: 10,
        max: 1000,
        minMessage: 'La description doit avoir au moins {{ limit }} caractères',
        maxMessage: 'La description ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(type: Types::TEXT)]
    #[Groups('category:read')]
    private ?string $description = null;

    // image
    #[Assert\NotBlank(message: 'L\'image est obligatoire')]
    #[ORM\Column(length: 255)]
    #[Groups('category:read')]
    private ?string $image = null;

    // info
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups('category:read')]
    private ?string $info = null;

    // tag
    #[Assert\NotBlank(message: 'Le tag est obligatoire')]
    #[Assert\Length(
        min: 3,
        max: 20,
        minMessage: 'Le tag doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le tag ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 50)]
    #[Groups('category:read')]
    private ?string $tag = null;

    // Timestamp (creation)
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    // Timestamp (update)
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

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

    public function getTag(): ?string
    {
        return $this->tag;
    }

    public function setTag(string $tag): static
    {
        $this->tag = $tag;

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

    public function getInfo(): ?string
    {
        return $this->info;
    }

    public function setInfo(?string $info): static
    {
        $this->info = $info;

        return $this;
    }

    public function __toString(): string
    {
        return $this->title ?? 'Catégorie sans titre'; // Retourne le title, ou un fallback si null
    }
}
