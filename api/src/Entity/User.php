<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Constraints\PasswordStrength;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    //User id
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // User firstname
    #[Assert\NotBlank(message: 'Le prénom est obligatoire')]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'Le prénom doit avoir au moins 2 caractères',
        maxMessage: 'Le prénom ne doit pas dépasser 50 caractères',
    )]
    #[ORM\Column(length: 255)]
    private ?string $firstname = null;

    // User lastname
    #[Assert\NotBlank(message: 'Le nom est obligatoire')]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: 'Le nom doit avoir au moins 2 caractères',
        maxMessage: 'Le nom ne doit pas dépasser 50 caractères',
    )]
    #[ORM\Column(length: 255)]
    private ?string $lastname = null;

    // User email
    #[Assert\Email(message: 'L\'adresse email est invalide')]
    #[Assert\NotBlank(message: 'L\'adresse email est obligatoire')]
    #[ORM\Column(length: 180)]
    private ?string $email = null;

    // User role
    #[Assert\NotBlank(message: 'Veuillez choisir le rôle de l\'utilisateur')]
    #[ORM\Column(type: 'json')]
    private array $roles = [];

    // Plain password (non persisté en base)
    #[Assert\NotBlank(message: 'Le mot de passe est obligatoire', groups: ['create'])]
    #[Assert\PasswordStrength(
        minScore: PasswordStrength::STRENGTH_MEDIUM,
        message: 'Le mot de passe n\'est pas assez fort',
        groups: ['create']
    )]
    private ?string $plainPassword = null;


    /**
     * @var string The hashed password
     */
    // #[Assert\NotBlank(message: 'Le mot de passe est obligatoire')]
    // #[Assert\PasswordStrength(
    //     minScore: PasswordStrength::STRENGTH_VERY_STRONG, // Very strong password required
    //     message: 'Le mot de passe n\'est pas assez fort'
    // )]
    #[ORM\Column]
    private ?string $password = null;

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): static
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Ensure the session doesn't contain actual password hashes by CRC32C-hashing them, as supported since Symfony 7.3.
     */
    public function __serialize(): array
    {
        $data = (array) $this;
        $data["\0" . self::class . "\0password"] = hash('crc32c', $this->password);

        return $data;
    }

    #[\Deprecated]
    public function eraseCredentials(): void
    {
        // @deprecated, to be removed when upgrading to Symfony 8
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

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }
}
