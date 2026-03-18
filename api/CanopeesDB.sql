-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 23 fév. 2026 à 10:38
-- Version du serveur : 8.4.7
-- Version de PHP : 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `canopees`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tag` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  `info` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `IDX_64C19C1A76ED395` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `title`, `description`, `image`, `tag`, `created_at`, `updated_at`, `user_id`, `info`) VALUES
(1, 'Conception & réalisation', '<div>Étude, plan 3D, choix des végétaux, maçonnerie paysagère, arrosage automatique, Canopées conçoit et réalise le jardin ou l’espace professionnel qui vous ressemble, durable, esthétique et parfaitement adapté à votre terrain et à vos envies.</div>', 'conception.webp', 'conception', '2026-02-12 11:45:00', '2026-02-20 14:33:41', 6, '<div>Tarifs H.T.</div>'),
(3, 'Entretien des espaces verts', '<div>Tonte, désherbage manuel, taille légère, nettoyage saisonnier : Canopées assure l’entretien régulier de vos jardins, parcs d’entreprise ou espaces publics. Contrats annuels ou interventions ponctuelles, votre extérieur reste impeccable toute l’année.</div>', 'd8f8e56cbdd69f65712d24b16bcde8ebfcc899d2.webp', 'entretien', '2026-02-12 13:58:00', '2026-02-12 15:52:41', 6, '<div>Contrats annuels possibles (-15 %)</div>'),
(4, 'Taile de haies & arbustes', '<div>Haies, arbustes, topiaires et arbres fruitiers : Canopées pratique une taille raisonnée qui respecte le cycle naturel de chaque plante pour une forme parfaite, une floraison généreuse et une santé renforcée année après année.</div>', '985e493f08d46f725d1a2df11a39d368df2c3643.webp', 'taille', '2026-02-12 14:20:00', '2026-02-12 16:50:40', 6, '<div>Minimum de facturation : 2 heures</div>'),
(5, 'Élagage & abattage', '<div>Taille douce, réduction de couronne, éclaircie ou abattage complexe : nos cordistes certifiés interviennent en hauteur et en toute sécurité, même en zone sensible. Canopées préserve la beauté de vos arbres et la sécurité de votre propriété.</div>', 'afb0530f66047062fa51a859390ea99deede4b4b.webp', 'elagage', '2026-02-12 15:54:20', '2026-02-12 16:50:57', 6, '<div>Devis gratuit sous 48h</div>'),
(6, 'Valorisation des déchets', '<div>Aucun déchet laissé chez vous. Branchages broyés pour paillage, transformés en plaquettes bois-énergie ou compostés : Canopées recycle ou réutilise localement 100 % des déchets verts. Zéro décharge, un geste concret à chaque chantier.</div>', 'a98e2d7dd3e14246757333a4715c3b2cf29b1188.webp', 'valorisation', '2026-02-12 15:55:18', NULL, 6, '<div>Tarifs HT • Déplacement inclus dans un rayon de 40 km autour de Saint-Agrève</div>');

-- --------------------------------------------------------

--
-- Structure de la table `contact_message`
--

DROP TABLE IF EXISTS `contact_message`;
CREATE TABLE IF NOT EXISTS `contact_message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `treated` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contact_message`
--

INSERT INTO `contact_message` (`id`, `nom`, `prenom`, `email`, `message`, `created_at`, `treated`) VALUES
(4, 'Dupont', 'Jean', 'jean.dupont@gmail.com', 'Bonjour,  je m\'appelle Jean Dupont', '2026-02-20 11:46:11', 0);

-- --------------------------------------------------------

--
-- Structure de la table `content_section`
--

DROP TABLE IF EXISTS `content_section`;
CREATE TABLE IF NOT EXISTS `content_section` (
  `id` int NOT NULL AUTO_INCREMENT,
  `section_key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F27BA35CA76ED395` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `content_section`
--

INSERT INTO `content_section` (`id`, `section_key`, `title`, `content`, `created_at`, `updated_at`, `user_id`) VALUES
(2, 'about-us-introducing', 'Introduction', '<div>Depuis 2020, <strong>Canopées</strong> met sa passion et le respect de la nature au service de vos espaces verts. <strong>Conception, entretien, taille, élagage, abattage</strong> : nous intervenons avec la même exigence chez les particuliers, les entreprises et les collectivités dans toute la régio Rhône-Alpes. <strong>Un jardin bien pensé vous ressemble.</strong> C’est notre conviction, et c’est ce que nous réalisons chaque jour sur le terrain.</div>', '2026-02-12 16:31:40', '2026-02-13 09:39:38', 8),
(3, 'about-us-our-values', 'Nos valeurs et nos engagements', '<div>Nous plaçons <strong>le respect de l’arbre et de la nature</strong> au cœur de chaque intervention : taille raisonnée, zéro produit chimique, recyclage systématique des déchets verts. <strong>Sécurité absolue</strong> grâce à nos cordistes certifiés et à un matériel rigoureusement contrôlé, <strong>transparence totale</strong> avec un interlocuteur unique et des <strong>devis gratuits sous 48 h</strong>, réactivité même en urgence après tempête. <strong>Particuliers, entreprises ou collectivités</strong>, nous travaillons avec la même exigence : faire vivre vos arbres plus longtemps et vos espaces verts plus beaux, tout simplement.</div>', '2026-02-13 13:16:38', NULL, 6),
(4, 'team-section-title', 'Une équipe de professionnels passionnés à votre écoute', NULL, '2026-02-16 08:32:17', NULL, 6),
(5, 'home-presentation', 'Présentation de la société', '<div>&nbsp;Depuis 2020, <strong>Canopées</strong> met sa passion et le respect de la nature au service de vos espaces verts. <strong>Conception, entretien, taille, élagage, abattage </strong>: nous intervenons avec la même exigence chez les particuliers, les entreprises et les collectivités dans toute la régio Rhône-Alpes. <strong>Un jardin bien pensé vous ressemble</strong>. C’est notre conviction, et c’est ce que nous réalisons chaque jour sur le terrain.</div>', '2026-02-16 08:58:51', '2026-02-16 09:08:23', 6),
(6, 'target-card', 'Un savoir-faire au service de tous', NULL, '2026-02-16 09:09:48', '2026-02-16 09:14:41', 6),
(7, 'prestations-intro', 'Introduction', '<div>Découvrez nos prestations !</div>', '2026-02-16 09:59:56', '2026-02-19 17:51:27', 6),
(8, 'prices-intro', 'Introduction', '<div>Aucun frais caché, aucune mauvaise surprise, découvrez nos tarifs !</div>', '2026-02-16 10:17:28', '2026-02-19 17:37:04', 6),
(9, 'contact-intro', 'Introduction', '<div><strong>Par téléphone, par mail ou directement en agence, nous sommes à l\'écoute de toutes vos envies !</strong></div>', '2026-02-16 10:24:40', NULL, 6),
(10, 'contact-info', 'Informations de contact', '<div>📞 Tél. : 04 72 32 45 67</div><div>📧 Email : <a href=\"mailto:contact@canopees.fr\">contact@canopees.fr</a></div><div>📍 Adresse : 35 Rue du Dr Tourasse 07320 Saint-Agrève</div>', '2026-02-16 10:30:15', '2026-02-18 11:18:56', 6),
(11, 'terms-and-conditions', 'Conditions Générales de Vente et d’Utilisation', '<div>Dernière mise à jour : 27 novembre 2025</div><div><strong><br>1. Présentation de l’entreprise<br></strong><br></div><div>Les prestations et le site www.canopees.fr sont exploités par Canopées, entreprise individuelle immatriculée au RCS de Bourg-en-Bresse sous le numéro SIRET 912 345 678 00019, siège social : 12 rue des Pins Verts, 01600 Trévoux. Tél : 04 74 00 12 34 – Email : contact@canopees.fr</div><div><strong><br>2. Objet<br></strong><br></div><div>Les présentes CGV/CGU s’appliquent à l’ensemble des prestations de conception, entretien, taille, élagage et valorisation des déchets verts ainsi qu’à l’utilisation du site internet www.canopees.fr.</div><div><strong><br>3. Acceptation des conditions<br></strong><br></div><div>Toute commande ou utilisation du site vaut acceptation pleine et entière des présentes conditions.</div><div><strong><br>4. Devis et commande</strong></div><div><br>4.1. Établissement du devis<br><br></div><div>Le devis est gratuit, valable 30 jours et établi après visite sur site ou sur la base des éléments transmis par le client.</div><div><br>4.2. Validation<br><br></div><div>La commande devient définitive à réception du devis signé avec la mention « Bon pour accord » et, le cas échéant, du versement de l’acompte de 30 %.</div><div><strong><br>5. Tarifs et paiement</strong></div><div><br>5.1. Prix<br><br></div><div>Les prix sont exprimés en euros HT et TTC. TVA 20 % ou 10 % (services à la personne pour l’entretien des jardins des particuliers).</div><div><br>5.2. Règlement<br><br></div><div>Acompte de 30 % à la commande. Solde à réception de facture, payable sous 10 jours. En cas de retard, pénalités de trois fois le taux d’intérêt légal.</div><div><strong><br>6. Exécution des prestations</strong></div><div><br>6.1. Délais<br><br></div><div>Les délais indiqués sont purement indicatifs sauf mention contraire écrite sur le devis.</div><div><br>6.2. Intempéries et force majeure<br><br></div><div>Canopées peut reporter sans indemnité toute intervention en cas de conditions météorologiques défavorables ou de force majeure.</div><div><strong><br>7. Valorisation des déchets verts<br></strong><br></div><div>Tous les déchets verts sont broyés sur place ou valorisés localement (paillage, compost, bois-énergie). Aucun déchet n’est laissé chez le client sauf demande expresse.</div><div><strong><br>8. Responsabilité et assurance<br></strong><br></div><div>Canopées est couvert par une assurance responsabilité civile professionnelle. Le client s’engage à signaler tout élément dangereux ou risque particulier sur le terrain.</div><div><strong><br>9. Droit de rétractation<br></strong><br></div><div>Pour les particuliers : délai de 14 jours sauf si l’exécution a commencé avec votre accord exprès avant la fin de ce délai.</div><div><strong><br>10. Réclamations<br></strong><br></div><div>Toute réclamation doit être formulée par écrit dans les 48 heures suivant la fin de l’intervention.</div><div><strong><br>11. Données personnelles</strong></div><div><br>11.1. Données collectées<br><br></div><div>Nom, adresse, téléphone, email – uniquement aux fins de gestion de la relation client.</div><div><br>11.2. Conservation<br><br></div><div>5 ans après la dernière intervention.</div><div><br>11.3. Vos droits<br><br></div><div>Droit d’accès, rectification, suppression et portabilité en écrivant à contact@canopees.fr.</div><div><strong><br>12. Propriété intellectuelle<br></strong><br></div><div>Les photos, plans et contenus du site restent la propriété exclusive de Canopées.</div><div><strong><br>13. Droit applicable et litiges<br></strong><br></div><div>Droit français. Tribunaux de Bourg-en-Bresse exclusivement compétents.</div><div><strong><br>14. Contact<br></strong><br></div><div>Canopées – 25 rue Rossignel, 07320 Saint-Agrève – Tél : 04 74 00 12 34 – contact@canopees.fr</div><div>En passant commande ou en utilisant ce site, vous acceptez sans réserve les présentes Conditions Générales de Vente et d’Utilisation.</div>', '2026-02-17 18:10:36', '2026-02-17 18:29:13', 6),
(12, 'legal-notices', 'Mentions légales', '<div>Dernière mise à jour : 27 novembre 2025</div><div><strong><br>1. Éditeur du site<br></strong><br></div><div>Le site www.canopees.fr est édité par Canopées.<br>SIRET : 912 345 678 00019<br>Siège social : 25 rue Rossignol 07320 Saint-Agrève<br>Téléphone : 04 74 00 12 34<br>Email : contact@canopees.fr</div><div><strong><br>2. Directeur de la publication<br></strong><br></div><div>Mathieu Durand – Gérant de Canopées</div><div><strong><br>3. Hébergement<br></strong><br></div><div>Le site est hébergé par OVHcloud, dont le siège social est situé 2 rue Kellermann, 59100 Roubaix, SIRET : 424 761 419 00045.</div><div><strong><br>4. Propriété intellectuelle<br></strong><br></div><div>L’ensemble des textes, photos, vidéos, logo, plans et réalisations présentés sur le site sont la propriété exclusive de Canopées ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation écrite préalable.</div><div><strong><br>5. Données personnelles<br></strong><br></div><div>Les données collectées via le formulaire de contact ou les demandes de devis sont utilisées uniquement pour la gestion de votre demande et des relations commerciales. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, de suppression et de portabilité de vos données en contactant contact@canopees.fr.</div><div><strong><br>6. Cookies<br></strong><br></div><div>Le site dépose des cookies techniques nécessaires à son fonctionnement ainsi que des cookies d’analyse d’audience avec recueil préalable de votre consentement via le bandeau dédié.</div><div><strong><br>7. Droit applicable<br></strong><br></div><div>Le présent site et son contenu sont soumis au droit français. Tout litige relatif à son utilisation relève de la compétence exclusive des tribunaux français.</div><div><strong><br>8. Contact<br></strong><br></div><div>Pour toute question relative aux présentes mentions légales : Canopées – 25 rue Rossignel, 07320 Sain-Agrève – Email : contact@canopees.fr</div>', '2026-02-17 18:44:45', '2026-02-17 18:47:35', 6),
(13, 'carrousel', 'Un œil sur nos dernières réalisations', NULL, '2026-02-17 19:09:52', NULL, 6),
(14, 'target-individual', 'Particuliers', '<div>Vous avez un jardin, une résidence secondaire, une grande propriété ou une simple haie à tailler ? Nous entretenons et sublimons votre espace de vie comme si c’était le nôtre : avec soin, discrétion et respect de vos arbres.</div>', '2026-02-19 17:01:11', '2026-02-19 18:04:14', 6),
(15, 'target-society', 'Entreprises', '<div>Parcs d’activité, bureaux, hôtels, restaurants, zones commerciales… Des espaces verts impeccables valorisent votre image et accueillent vos clients et collaborateurs dans un cadre agréable toute l’année.</div>', '2026-02-19 17:02:15', '2026-02-19 18:04:21', 6),
(16, 'target-community', 'Collectivités', '<div>Mairies, écoles, cimetières, parcs publics, bords de route… Nous répondons aux marchés publics et intervenons avec rigueur, sécurité et traçabilité pour maintenir le patrimoine arboré de votre commune.</div>', '2026-02-19 17:03:24', '2026-02-19 17:22:27', 6);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20260210100213', '2026-02-10 11:02:37', 62),
('DoctrineMigrations\\Version20260210102344', '2026-02-10 11:27:21', 87),
('DoctrineMigrations\\Version20260210102714', '2026-02-10 11:48:04', 2),
('DoctrineMigrations\\Version20260210102904', '2026-02-10 11:48:04', 109),
('DoctrineMigrations\\Version20260210103102', '2026-02-10 11:55:35', 3),
('DoctrineMigrations\\Version20260210104030', '2026-02-10 11:56:22', 2),
('DoctrineMigrations\\Version20260210104652', '2026-02-10 11:56:46', 3),
('DoctrineMigrations\\Version20260210105417', '2026-02-10 11:56:46', 153),
('DoctrineMigrations\\Version20260210110527', '2026-02-10 12:05:36', 162),
('DoctrineMigrations\\Version20260210111402', '2026-02-10 12:14:08', 219),
('DoctrineMigrations\\Version20260210151906', '2026-02-10 15:19:19', 218),
('DoctrineMigrations\\Version20260210152920', '2026-02-10 15:31:17', 228),
('DoctrineMigrations\\Version20260210154452', '2026-02-10 15:44:57', 199),
('DoctrineMigrations\\Version20260211123712', '2026-02-11 12:37:36', 275),
('DoctrineMigrations\\Version20260212113007', '2026-02-12 11:30:41', 277),
('DoctrineMigrations\\Version20260212150424', '2026-02-12 15:04:37', 262),
('DoctrineMigrations\\Version20260212160807', '2026-02-12 16:09:54', 296),
('DoctrineMigrations\\Version20260216081455', '2026-02-16 08:16:13', 277),
('DoctrineMigrations\\Version20260216083105', '2026-02-16 08:31:16', 538),
('DoctrineMigrations\\Version20260217100120', '2026-02-17 10:02:04', 276),
('DoctrineMigrations\\Version20260219130548', '2026-02-19 13:06:22', 271);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750` (`queue_name`,`available_at`,`delivered_at`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `realization`
--

DROP TABLE IF EXISTS `realization`;
CREATE TABLE IF NOT EXISTS `realization` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `realized_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_CDAA30C6A76ED395` (`user_id`),
  KEY `IDX_CDAA30C612469DE2` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `realization`
--

INSERT INTO `realization` (`id`, `description`, `image`, `realized_at`, `created_at`, `updated_at`, `category_id`, `user_id`) VALUES
(2, '<div><em>Végétalisation de l’aéroport Lyon-Saint-Exupéry</em></div>', 'f2c9d245f97ad86a4d96b46e5203b83e43f131cd.webp', '2026-01-06 17:22:00', '2026-02-12 16:23:11', '2026-02-19 16:03:16', 1, 8),
(3, '<div><em>Aménagement d’un jardin privé à Annonay</em></div>', '87b648914b7f5de544d604ab802146a633214813.webp', '2026-02-01 17:23:00', '2026-02-12 16:23:47', '2026-02-18 09:35:09', 1, 6),
(4, '<div><em>Entretien du parc de La Croix-Haute à Montluçon</em></div>', '09d823d1cbc2b9909c917af927b53b3f9c5d4b7b.webp', '2025-10-16 17:25:00', '2026-02-12 16:25:59', '2026-02-18 09:35:24', 3, 6),
(5, '<div><em>Entretien d’un jardin privé à Bourg-lès-Valence</em></div>', 'e258a4637d84b117074b6a065e449313076f0909.webp', '2025-10-09 17:26:00', '2026-02-12 16:26:36', '2026-02-18 09:35:34', 3, 6);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

DROP TABLE IF EXISTS `service`;
CREATE TABLE IF NOT EXISTS `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E19D9AD212469DE2` (`category_id`),
  KEY `IDX_E19D9AD2A76ED395` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `service`
--

INSERT INTO `service` (`id`, `title`, `price`, `created_at`, `updated_at`, `category_id`, `user_id`) VALUES
(1, 'Étude et plan 3D', '250 €', '2026-02-12 15:07:00', '2026-02-20 12:13:28', 1, 8),
(3, 'Plantation arbres & arbustes', '35 € / unité', '2026-02-12 14:27:13', '2026-02-12 15:56:20', 1, 6),
(4, 'Engazonnement (semis ou plaques)', '5 € / m²', '2026-02-12 15:56:42', NULL, 1, 6),
(5, 'Maçonnerie paysagère', 'sur devis', '2026-02-12 15:57:02', NULL, 1, 6),
(6, 'Installation d\'arrosage automatique', 'sur devis', '2026-02-12 15:57:24', NULL, 1, 6),
(7, 'Tonte (pelouse < 1000 m²)', '0,40 € / m²', '2026-02-12 15:57:45', '2026-02-16 20:08:07', 3, 6),
(8, 'Tonte (pelouse > 1000 m²)', '0,30 € / m²', '2026-02-12 15:58:04', NULL, 3, 6),
(9, 'Débroussaillage léger', '35 € / heure', '2026-02-12 15:58:40', '2026-02-16 20:08:24', 3, 6),
(10, 'Débroussaillage intensif', '55 € / heure', '2026-02-12 15:58:59', '2026-02-12 16:01:44', 3, 6),
(11, 'Taille manuelle de haies', '35 € / ml', '2026-02-12 15:59:23', NULL, 4, 6),
(12, 'Taille mécanique (haies < 3m)', '25 € / ml', '2026-02-12 15:59:46', NULL, 4, 6),
(13, 'Taille d’arbustes et topiaires', '45 € / h', '2026-02-12 16:00:12', NULL, 4, 6),
(14, 'Évacuation des déchets verts', '15 € / m³', '2026-02-12 16:00:31', NULL, 4, 6),
(15, 'Taille de rosiers et vivaces', '30 € / heure', '2026-02-12 16:00:49', NULL, 4, 6),
(16, 'Taille d’entretien', 'à partir de 180 €', '2026-02-12 16:02:18', '2026-02-16 20:09:18', 4, 6),
(17, 'Éclaircie / réduction de couronne', 'sur devis', '2026-02-12 16:02:33', NULL, 5, 6),
(18, 'Abattage par démontage (rétention)', 'sur devis', '2026-02-12 16:02:49', NULL, 5, 6),
(19, 'Élagage en grande hauteur (> 20m)', 'sur devis', '2026-02-12 16:03:03', NULL, 5, 6),
(20, 'Broyage sur place et retour au sol', 'inclus', '2026-02-12 16:03:19', NULL, 6, 6),
(21, 'Transformation en plaquettes bois-énergie', 'inclus', '2026-02-12 16:03:37', NULL, 6, 6),
(22, 'Livraison en plateforme de compostage agréée', 'inclus', '2026-02-12 16:03:54', NULL, 6, 6),
(23, 'Fourniture de BRF pour vos massifs', '25 € / m³', '2026-02-12 16:04:12', NULL, 6, 6),
(24, 'Installation d\'un composteur', '275 €', '2026-02-12 16:04:28', NULL, 6, 6);

-- --------------------------------------------------------

--
-- Structure de la table `slider_image`
--

DROP TABLE IF EXISTS `slider_image`;
CREATE TABLE IF NOT EXISTS `slider_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  `alt_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_4389483BA76ED395` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `slider_image`
--

INSERT INTO `slider_image` (`id`, `image`, `active`, `created_at`, `updated_at`, `user_id`, `alt_description`) VALUES
(3, 'e3f17c00a650e6f3726d7301c11cd4bcce311d79.webp', 1, '2026-02-12 15:06:20', '2026-02-12 16:27:52', 6, 'homme entrain d\'élaguer un arbre'),
(4, 'd94f0236754c8762c22b824f27f6bd2239323066.webp', 1, '2026-02-12 16:28:28', '2026-02-16 13:51:30', 6, 'des gants de jardinage sur une table'),
(5, 'cd8baecd2fdc216f49e5798af103d28a6fd47b09.webp', 1, '2026-02-12 16:33:19', NULL, 6, 'Un grand arbre dans un jardin public');

-- --------------------------------------------------------

--
-- Structure de la table `team_member`
--

DROP TABLE IF EXISTS `team_member`;
CREATE TABLE IF NOT EXISTS `team_member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `biography` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_6FFBDA1A76ED395` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `team_member`
--

INSERT INTO `team_member` (`id`, `lastname`, `firstname`, `biography`, `image`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Duval', 'Tom', '<div><strong>Tom</strong> est un passionné d’arboriculture depuis l’âge de 16 ans. Il commence comme grimpeur-élagueur avant de se former au métier de cordiste en montagne. Diplômé du Certificat de Spécialisation Élagage et titulaire du CQP Cordiste, il crée en 2020 avec une conviction : allier technicité, sécurité et respect de l’arbre. Aujourd’hui, Tom dirige l’équipe sur le terrain et réalise les chantiers les plus techniques.</div>', '8463e1eb6bb42f03b94cec0382fc5506fb292f3c.jpg', '2026-02-12 15:18:30', '2026-02-13 09:15:56', 8),
(2, 'Gow', 'Bob', '<div><strong>Bob</strong> est paysagiste de formation et spécialiste de l’entretien et de la création d’espaces verts depuis plus de 12 ans. Titulaire d’un BTSA Aménagements Paysagers. Il rejoint l’aventure Canopées en 2021. Tonte, taille de haies, création de massifs, arrosage automatique, maçonnerie paysagère : Bob gère tous les chantiers « au sol » avec le même sens du détail.</div>', 'a835449702e88d31a5d9e3ab6fd73742d94800fc.jpg', '2026-02-12 16:29:41', NULL, 6);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `firstname`, `lastname`) VALUES
(6, 'superadmin@mail.fr', '[\"ROLE_SUPER_ADMIN\"]', '$2y$13$idu5GCyNzRR0/vb4VUxwg.LXbT9tOmJQXrwy7Q4GpVghHVfIKOJIm', 'John', 'Doe'),
(8, 'admin@admin.fr', '[\"ROLE_ADMIN\"]', '$2y$13$P.NdS2tKQh0aJW0MT3RNJu13EFrL4/W8ES2PWVXVO2M7KyvPnSr/S', 'Yohan', 'Frutiger'),
(9, 'jacquesmartin@mail.fr', '[\"ROLE_ADMIN\"]', '$2y$13$jRf.4HmtnNym5Hz1oJ6couZLzHOXD1UOwoiQpMHvO.RmKh8hvKT/G', 'martin', 'jacques');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
