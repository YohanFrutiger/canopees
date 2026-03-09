# 🌿 Canopees – Backend

Backend de l'application web **Canopees**, développé avec **Symfony et API Platform**.

Ce projet fournit une **API REST** permettant de gérer les contenus du site vitrine.

Le projet a été réalisé dans le cadre d’une **mise en situation professionnelle** durant la formation **Développeur Web et Web Mobile (RNCP37674)**.

---

## Accès administration

Un espace d'administration est disponible pour gérer les contenus du site.

URL : https://yohanfrutiger.alwaysdata.net/login

Compte de démonstration :

email : admin@canopees.fr  
mot de passe : admin123

# 🛠 Technologies utilisées

* PHP
* Symfony
* API Platform
* Doctrine ORM
* MySQL

---

# 📋 Fonctionnalités de l’API

L’API permet de gérer les données suivantes :

* utilisateurs administrateurs
* prestations
* tarifs
* images du slider
* réalisations
* messages du formulaire de contact

Les routes API permettent de :

* consulter les données du site
* ajouter/modifier/supprimer du contenu via le back-office

---

# 🔐 Authentification

Le back-office est sécurisé grâce à un système d’authentification permettant à l’administrateur de :

* se connecter
* gérer les contenus du site
* consulter les messages envoyés par les utilisateurs

---

# ⚙ Installation du projet

Clone du repository :

```bash
git clone https://github.com/yohanfrutiger/canopees-backend.git
```

Installation des dépendances :

```bash
composer install
```

Configuration du fichier `.env` :

```
DATABASE_URL="mysql://user:password@127.0.0.1:3306/canopees"
```

Création de la base de données :

```bash
php bin/console doctrine:database:create
```

Migration de la base :

```bash
php bin/console doctrine:migrations:migrate
```

Lancer le serveur :

```bash
symfony server:start
```

L’API sera accessible sur :

```
http://localhost:8000
```

---

# 🔗 Frontend

Le frontend du projet est disponible ici :

https://github.com/yohanfrutiger/canopees-frontend

---

# 👨‍💻 Auteur

Projet réalisé par **Yohan Frutiger**

GitHub :
https://github.com/yohanfrutiger

Dans le cadre de la formation **Développeur Web et Web Mobile**.
