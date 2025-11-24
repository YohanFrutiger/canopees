
import { useState } from "react";

const prestations = [
  {
    title: "Conception & réalisation",
    details: [
      { service: "Étude et plan 3D", prix: "250 €" },
      { service: "Plantation arbres & arbustes", prix: "35 € / unité" },
      { service: "Engazonnement (semis ou plaques)", prix: "5 € / m²" },
      { service: "Maçonnerie paysagère", prix: "sur devis" },
      { service: "Installation d'arrosage automatique", prix: "sur devis" },
    ],
    info: "Tarifs HT • Déplacement inclus dans un rayon de 40 km autour de Saint-Agrève"
  },
  {
    title: "Entretien",
    details: [

      { service: "Tonte (pelouse < 1000 m²)", prix: "0,40 € / m²" },
      { service: "Tonte (pelouse > 1000 m²)", prix: "0,30 € / m²" },
      { service: "Débroussaillage léger", prix: "35 € / heure" },
      { service: "Débroussaillage intensif", prix: "55 € / heure" },
    ],
    info: "Contrats annuels possibles (-15 %)"
  },
  {
    title: "Taille",
    details: [
      { service: "Taille manuelle de haies", prix: "35 € / ml" },
      { service: "Taille mécanique (haies < 3m)", prix: "25 € / ml" },
      { service: "Taille d’arbustes et topiaires", prix: "45 € / heure" },
      { service: "Évacuation des déchets verts", prix: "15 € / m³" },
      { service: "Taille de fleurs", prix: "30 € / ml" },
    ],
    info: "Minimum de facturation : 2 heures"
  },
  {
    title: "Élagage & abatage",
    details: [
      { service: "Taille d’entretien", prix: "à partir de 180 €" },
      { service: "Éclaircie / réduction de couronne", prix: "sur devis" },
      { service: "Abattage par démontage (rétention)", prix: "sur devis" },
      { service: "Élagage en grande hauteur (> 20m)", prix: "sur devis" }
    ],
    info: "Devis gratuit sous 48h"
  },
  {
    title: "Valorisation des déchets verts",
    details: [
      { service: "Broyage sur place et retour au sol", prix: "inclus" },
      { service: "Transformation en plaquettes bois-énergie ", prix: "inclus" },
      { service: "Livraison en plateforme de compostage agréée", prix: "inclus" },
      { service: "Fourniture de BRF  pour vos massifs", prix: "25 € / m³" },
      { service: "Installation d'un composteur", prix: "275 €" }
    ],
    info: "Zéro mise en décharge – 100 % des déchets verts sont recyclés ou réutilisés"
  }
];

export default function PricingTable() {
  const [selected, setSelected] = useState(0);

  return (
    <div className=" mx-auto">
      {/* LISTE */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {prestations.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`  px-4 pb-4 rounded-b-full text-lg font-rosario font-medium transition-all  w-[150px] ${selected === index
              ? "bg-green text-white shadow-xl scale-105"
              : "bg-white text-gray-700 hover:bg-green/20 shadow-md hover:shadow-lg"
              }`}
          >
            {item.title}
          </button>

          
        ))}
      </div>

    

      {/* TABLEAU DES PRIX */}
      <div className="rounded-2xl shadow-xl p-4 md:p-4 bg-gray/10 md:w-[600px] mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-rosario text-gray py-8 text-center">
          {prestations[selected].title}
        </h2> */}

        <table className="md:w-[500px] mx-auto text-left">
          <thead>
            <tr className="border-b border-white">
              <th className="py-6 text-xl font-semibold text-left">{prestations[selected].title}</th>
              <th className="py-6 text-lg font-semibold text-blue text-right">Tarif H.T.</th>
            </tr>
          </thead>
          <tbody>
            {prestations[selected].details.map((line, i) => (
              <tr key={i} className="border-b border-white ">
                <td className="py-6 text-gray-700 text-base">{line.service}</td>
                <td className="py-6 text-right font-bold text-blue text-lg">
                  {line.prix}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-10 text-center text-sm text-gray-600 italic">
          {prestations[selected].info}
        </p>


      </div>
    </div>
  );
}