// src/data/prestations.js
import imgConception from "../assets/images/prestations/conception.jpg";
import imgEntretien from "../assets/images/prestations/entretien.jpg";
import imgTaille from "../assets/images/prestations/taille.jpg";
import imgElagage from "../assets/images/prestations/elagage.jpg";
import imgRecyclage from "../assets/images/prestations/recyclage.jpg";

export const prestations = [
  {
    id: 1,
    title: "Conception & réalisation",
    img: imgConception,
    alt: "Plan 3D d’un jardin réalisé par Canopées – terrasse en bois, massifs fleuris et éclairage intégré",
    text: "De l’idée au premier arbre planté : étude, plan 3D, choix des végétaux, maçonnerie paysagère, arrosage automatique… Canopées conçoit et réalise le jardin ou l’espace professionnel qui vous ressemble, durable, esthétique et parfaitement adapté à votre terrain et à vos envies.",
    tag: "conception"
  },
  {
    id: 2,
    title: "Entretien des espaces verts",
    img: imgEntretien,
    alt: "Entretien de pelouse et bordures par un jardinier Canopées dans un jardin résidentiel",
    text: "Tonte, désherbage manuel, taille légère, nettoyage saisonnier : Canopées assure l’entretien régulier de vos jardins, parcs d’entreprise ou espaces publics. Contrats annuels ou interventions ponctuelles, votre extérieur reste impeccable toute l’année.",
    tag: "entretien"
  },
  {
    id: 3,
    title: "Taille de haies & arbustes",
    img: imgTaille,
    alt: "Taille sculptée d’une haie de charmilles réalisée par Canopées",
    text: "Haies, arbustes, topiaires et arbres fruitiers : Canopées pratique une taille raisonnée qui respecte le cycle naturel de chaque plante pour une forme parfaite, une floraison généreuse et une santé renforcée année après année.",
    tag: "taille"
  },
  {
    id: 4,
    title: "Élagage & abattage",
    img: imgElagage,
    alt: "Élagage en hauteur d’un grand chêne par un élagueur cordiste Canopées avec rétention",
    text: "Taille douce, réduction de couronne, éclaircie ou abattage complexe : nos cordistes certifiés interviennent en hauteur et en toute sécurité, même en zone sensible. Canopées préserve la beauté de vos arbres et la sécurité de votre propriété.",
    tag: "elagage"
  },
  {
    id: 5,
    title: "Valorisation des déchets verts",
    img: imgRecyclage,
    alt: "Broyage de branches sur place et paillage naturel réalisés par Canopées – valorisation à 100 % des rémanents",
    text: "Aucun déchet laissé chez vous. Branchages broyés pour paillage, transformés en plaquettes bois-énergie ou compostés : Canopées recycle ou réutilise localement 100 % des déchets verts. Zéro décharge, un geste concret à chaque chantier.",
    tag: "valorisation"
  },
];