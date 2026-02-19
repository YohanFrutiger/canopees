<?php

namespace App\Entity;

use App\Repository\RealizationRepository;
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


#[ORM\Entity(repositoryClass: RealizationRepository::class)]
#[ORM\HasLifecycleCallbacks] // Active les callbackspour createdAt et updatedAt
#[ApiResource(
    normalizationContext: ['groups' => ['realization:read']],
    operations: [
        new GetCollection(security: null),  // Public : tout le monde peut lister les categories 
        new Get(security: null),            // Public : voir une categorie
        // new Post(security: "is_granted('ROLE_SUPER_ADMIN')"),  
        // new Put(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class Realization
{
    // id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('realization:read')]
    private ?int $id = null;

    // description
    #[Assert\NotBlank(message: 'La description est obligatoire')]
    #[Assert\Length(
        min: 10,
        max: 1000,
        minMessage: 'La description doit avoir au moins {{ limit }} caractères',
        maxMessage: 'La description ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(type: Types::TEXT)]
    #[Groups('realization:read')]
    private ?string $description = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: 'category_id', nullable: false)]
    #[Groups('realization:read')]
    private ?Category $category = null;

    // image
    #[Assert\NotBlank(message: 'L\'image est obligatoire')]    
    #[ORM\Column(length: 255)]
    #[Groups('realization:read')]
    private ?string $image = null;

    // Timestamp (realization)
    #[ORM\Column]
    private ?\DateTimeImmutable $realizedAt = null;

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

    public function getRealizedAt(): ?\DateTimeImmutable
    {
        return $this->realizedAt;
    }

    public function setRealizedAt(\DateTimeImmutable $realizedAt): static
    {
        $this->realizedAt = $realizedAt;

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
}
