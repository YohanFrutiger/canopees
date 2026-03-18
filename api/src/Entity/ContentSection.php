<?php

namespace App\Entity;

use App\Repository\ContentSectionRepository;
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

#[ORM\Entity(repositoryClass: ContentSectionRepository::class)]
#[ORM\HasLifecycleCallbacks] // Active les callbacks pour createdAt et updatedAt
#[ApiResource(
    normalizationContext: ['groups' => ['content_section:read']],
    operations: [
        new GetCollection(security: null),  // Public : tout le monde peut lister les categories 
        new Get(security: null),            // Public : voir une categorie
        // new Post(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Put(security: "is_granted('ROLE_SUPER_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class ContentSection
{
    // id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('content_section:read')]
    private ?int $id = null;

    // section key
    #[Assert\NotBlank(message: 'section-key obligatoire')]
    #[Assert\Length(
        min: 4,
        max: 50,
        minMessage: 'section-key doit avoir au moins {{ limit }} caractères',
        maxMessage: 'section-key ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 50)]
    #[Groups('content_section:read')]
    private ?string $section_key = null;

    // title
    #[Assert\NotBlank(message: 'Le titre est obligatoire')]
    #[Assert\Length(
        min: 4,
        max: 50,
        minMessage: 'Le titre doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le titre ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(length: 255)]
    #[Groups('content_section:read')]
    private ?string $title = null;

    // content
    #[Assert\NotBlank(message: 'Le contenu est obligatoire')]
    #[Assert\Length(
        min: 20,
        max: 2000,
        minMessage: 'Le contenu doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Le contenu ne doit pas dépasser {{ limit }} caractères',
    )]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups('content_section:read')]
    private ?string $content = null;

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

    public function getSectionKey(): ?string
    {
        return $this->section_key;
    }

    public function setSectionKey(string $section_key): static
    {
        $this->section_key = $section_key;

        return $this;
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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

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
