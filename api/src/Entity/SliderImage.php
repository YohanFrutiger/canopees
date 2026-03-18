<?php

namespace App\Entity;

use App\Repository\SliderImageRepository;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Attribute\Groups;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;

#[ORM\Entity(repositoryClass: SliderImageRepository::class)]
#[ORM\HasLifecycleCallbacks] // Active les callbacks pour createdAt et updatedAt
#[ApiResource(
    normalizationContext: ['groups' => ['slider_image:read']],
    operations: [
        new GetCollection(security: null),  // Public : tout le monde peut lister les categories 
        new Get(security: null),            // Public : voir une categorie
        // new Post(security: "is_granted('ROLE_SUPER_ADMIN')"),  
        // new Put(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class SliderImage
{
     // id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('slider_image:read')]
    private ?int $id = null;

    // image
    #[Assert\NotBlank(message: 'L\'image est obligatoire')]
    #[ORM\Column(length: 255)]
    #[Groups('slider_image:read')]
    private ?string $image = null;

    // active or not
    #[ORM\Column]
    #[Groups('slider_image:read')]
    private ?bool $active = null;

    // alternative description for image
    #[ORM\Column(length: 255)]
    #[Groups('category:read')]
    private ?string $altDescription = null;

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

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
    {
        $this->active = $active;

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

    public function getAltDescription(): ?string
    {
        return $this->altDescription;
    }

    public function setAltDescription(string $altDescription): static
    {
        $this->altDescription = $altDescription;

        return $this;
    }
}
