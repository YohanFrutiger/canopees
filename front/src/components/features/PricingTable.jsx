// src/components/features/PricingTable.jsx
// Composant : Tableau des tarifs de la page Tarifs

import { useState } from "react";
import parse from "html-react-parser";
import { useCategories } from "../../hooks/useCategories";  
import { useServices } from "../../hooks/useServices"; 


export default function PricingTable() {
  const [selected, setSelected] = useState(0);
  const categories = useCategories();  
  const services = useServices();  

  // Gestion loading/error
  if (categories.loading || services.loading) {
    return <p className="text-center">Chargement des tarifs...</p>;
  }
  if (categories.error || services.error) {
    return <p className="text-center text-red-500">Erreur lors de la récupération des données.</p>;
  }
  if (!categories.data?.member?.length) {
    return <p className="text-center">Aucune catégorie disponible.</p>;
  }

  // Onglets dynamiques
  const categoriesTabs = (
    <div className="flex">
      {categories.data.member.map((cat, index) => (
        <button
          key={cat.id}
          onClick={() => setSelected(index)}
          className={`  px-4 border-r border-violet   transition-all w-full  ${
            selected === index ? "text-xl text-violet font-extrabold " : "text-lg text-violet/90 hover:scale-105 hover:text-violet/80 "
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );

  // Filtre services pour la catégorie sélectionnée (via méthode du hook)
  const selectedCategory = categories.data.member[selected];  // Catégorie actuelle
  const servicesData = services.getServicesByCategory(selectedCategory.id);  // Filtre par ID (ajuste si IRI '/api/categories/1')

  // Tableau des tarifs (si services pour cette catégorie, sinon message)
  const pricingTable = (
    <div className=" p-4 md:p-8 max-w-2xl w-[6500px]">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2 border-violet/30">
            <th className="py-6 text-2xl  font-bold text-violet">
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
                Aucun service disponible pour cette catégorie.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="mt-8 text-center text-sm text-gray-600 font-light">
        {selectedCategory.info ? parse(selectedCategory.info) : "Aucune information disponible pour cette catégorie."}
      </p>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center mt-12 lg:gap-8 lmd:gap-32 gap-4 ">
      {categoriesTabs}
      {pricingTable}
    </div>
  );
}