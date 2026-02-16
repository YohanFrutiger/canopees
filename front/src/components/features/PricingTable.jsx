// src/components/features/PricingTable.jsx
// Composant : Tableau des tarifs de la page Tarifs

import { useState } from "react";
import { usePrestations } from "../../hooks/usePrestations";  // Categories (prestations)
import { useServices } from "../../hooks/useServices";  // Services filtrés par catégorie


export default function PricingTable() {
  const [selected, setSelected] = useState(0);
  const prestations = usePrestations();  // Categories
  const services = useServices();  // Tous les services

  // Gestion loading/error commun (attend les deux hooks)
  if (prestations.loading || services.loading) {
    return <p className="text-center">Chargement des tarifs...</p>;
  }

  if (prestations.error || services.error) {
    return <p className="text-center text-red-500">Erreur lors de la récupération des données.</p>;
  }

  if (!prestations.data?.member?.length) {
    return <p className="text-center">Aucune prestation disponible.</p>;
  }

  // Onglets dynamiques (prestations = catégories)
  const prestationsTabs = (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {prestations.data.member.map((presta, index) => (
        <button
          key={presta.id}
          onClick={() => setSelected(index)}
          className={`px-4 py-4 rounded-3xl text-xl font-rosario font-semibold uppercase transition-all w-48 shadow-lg ${
            selected === index ? "bg-violet text-white scale-105 shadow-2xl" : "bg-violet/20 text-gray-900 hover:bg-violet/30"
          }`}
        >
          {presta.title}
        </button>
      ))}
    </div>
  );

  // Filtre services pour la catégorie sélectionnée (via méthode du hook)
  const selectedCategory = prestations.data.member[selected];  // Catégorie actuelle
  const servicesData = services.getServicesByCategory(selectedCategory.id);  // Filtre par ID (ajuste si IRI '/api/categories/1')

  // Tableau des tarifs (si services pour cette cat)
  const pricingTable = (
    <div className="rounded-2xl shadow-2xl p-4 md:p-8 bg-violet/10 border-2 border-violet/90 max-w-2xl mx-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2 border-violet/30">
            <th className="py-6 text-2xl font-rosario font-bold text-violet">
              {selectedCategory.title}
            </th>
            <th className="py-6 text-2xl font-semibold text-blue text-right">
              Tarif H.T.
            </th>
          </tr>
        </thead>
        <tbody>
          {servicesData.length > 0 ? (
            servicesData.map((service) => (
              <tr key={service.id} className="border-b border-violet/30">
                <td className="py-5 text-gray-900">{service.title}</td>  
                <td className="py-5 text-right font-bold text-blue">
                  {service.price}  
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="py-5 text-center text-gray-600">
                Aucun service disponible pour cette prestation.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="mt-8 text-center text-sm text-gray-600 font-light">
        {selectedCategory.info}  // Info de la catégorie
      </p>
    </div>
  );

  return (
    <div className="mx-auto py-4 px-4">
      {prestationsTabs}
      {pricingTable}
    </div>
  );
}