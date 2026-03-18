<?php

namespace App\Entity;

use App\Repository\ContactMessageRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: ContactMessageRepository::class)]
#[ApiResource(
    operations: [
        // new GetCollection(security: "is_granted('ROLE_ADMIN')"),
        // new Get(security: "is_granted('ROLE_ADMIN')"), 
        new Post(
            uriTemplate: '/contact_messages',
            normalizationContext: ['groups' => ['contact_message:read']],
            denormalizationContext: ['groups' => ['contact_message:write']]
        ),
        // new Put(security: "is_granted('ROLE_ADMIN')"),
        // new Delete(security: "is_granted('ROLE_SUPER_ADMIN')"),
    ]
)]
class ContactMessage
{
    // id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // nom
    #[ORM\Column(length: 100)]
    #[Groups(['contact_message:write', 'contact_message:read'])]
    #[Assert\NotBlank]
    private ?string $nom = null;

    // prenom
    #[ORM\Column(length: 100)]
    #[Groups(['contact_message:write', 'contact_message:read'])]
    #[Assert\NotBlank]
    private ?string $prenom = null;

    // email
    #[ORM\Column(length: 255)]
    #[Groups(['contact_message:write', 'contact_message:read'])]
    #[Assert\NotBlank]
    #[Assert\Email]
    private ?string $email = null;

    // message
    #[ORM\Column(type: 'text')]
    #[Groups(['contact_message:write', 'contact_message:read'])]
    #[Assert\NotBlank]
    private ?string $message = null;

    // createdAt
    #[ORM\Column]
    #[Groups(['contact_message:read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Groups(['contact_message:read'])]
    private bool $treated = false;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function isTreated(): ?bool
    {
        return $this->treated;
    }

    public function setTreated(bool $treated): static
    {
        $this->treated = $treated;

        return $this;
    }
}