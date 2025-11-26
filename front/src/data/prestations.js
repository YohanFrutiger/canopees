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
    // // img: "https://picsum.photos/600/400?random=2",
    text: "De l’idée au premier arbre planté : étude, plan 3D, choix des végétaux, maçonnerie paysagère, arrosage automatique… Nous concevons et réalisons le jardin ou l’espace professionnel qui vous ressemble, durable, esthétique et parfaitement adapté à votre terrain et à vos envies.",
    tag: "conception"
  },
  {
    id: 2,
    title: "Entretien des espaces verts",
    img: imgEntretien,
    // img: "https://picsum.photos/600/400?random=3",
    text: "Tonte, désherbage manuel, taille légère, nettoyage saisonnier : nous assurons l’entretien régulier de vos jardins, parcs d’entreprise ou espaces publics. Contrats annuels ou interventions ponctuelles, vous gardez un extérieur impeccable toute l’année, sans y penser.",
    tag: "entretien"
  },
  {
    id: 3,
    title: "Taille de haies & arbustes",
    // img: "https://picsum.photos/600/400?random=4",
    img: imgTaille,
    text: "Haies, arbustes, topiaires et arbres fruitiers : nous pratiquons une taille raisonnée qui respecte le cycle naturel de chaque plante. Résultat : forme parfaite, floraison généreuse et santé renforcée, année après année, pour un jardin toujours élégant.",
    tag: "taille"
  },
  {
    id: 4,
    title: "Élagage & abattage",
    // img: "https://picsum.photos/600/400?random=5",
    img: imgElagage,
    text: "Taille douce, réduction de couronne, éclaircie ou abattage complexe par démontage avec rétention : nos cordistes certifiés interviennent en hauteur et en toute sécurité, même près des habitations ou en zone sensible. Votre arbre reste beau, votre propriété protégée.",
    tag: "elagage"
  },
  {
    id: 5,
    title: "Valorisation des déchets",
    // img: "https://picsum.photos/600/400?random=6",
    img: imgRecyclage,
    text: "Aucun déchet laissé chez vous. Branchages broyés sur place pour paillage naturel, transformés en plaquettes bois-énergie ou compostés : 100 % des rémanents sont recyclés ou réutilisés localement. Zéro mise en décharge, un geste concret pour l’environnement à chaque chantier.",
    tag: "valorisation"
  },
];