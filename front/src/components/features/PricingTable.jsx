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
    // return <p className="text-center">Chargement des tarifs...</p>;
  }
  if (categories.error || services.error) {
    return <p className="text-center text-red-500">Erreur lors de la récupération des données.</p>;
  }
  if (!categories.data?.member?.length) {
    return <p className="text-center"></p>;
  }

  // Onglets dynamiques
  const categoriesTabs = (
    <div className="flex bg-gray-200">
      {categories.data.member.map((cat, index) => (
        <button
          key={cat.id}
          onClick={() => setSelected(index)}
          className={`  px-4 transition-all w-full border-white border-r ${
            selected === index ? "text-xl bg-gray-600 text-white font-extrabold " : "font-light hover:scale-105 hover:text-gray-500 "
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );

  // Filtre services pour la catégorie sélectionnée (via méthode du hook)
  const selectedCategory = categories.data.member[selected];  // Catégorie actuelle
  const servicesData = services.getServicesByCategory(selectedCategory.id);  // Filtre par ID 

  // Tableau des tarifs (si services pour cette catégorie, sinon message)
  const pricingTable = (
    <div className="l">
      <table className="w-[450px]">
        <tbody>
          {servicesData.length > 0 ? (
            servicesData.map((service) => (
              <tr key={service.id} >
                <td className="py-2 text-left">{service.title}</td>  
                <td className="py-2 text-right font-bold">
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
      <p className="mt-8 text-center text-sm text-whitefont-light">
        {selectedCategory.info ? parse(selectedCategory.info) : "Aucune information disponible pour cette catégorie."}
      </p>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center mt-12 lg:gap-8 md:gap-32 gap-4">
      {categoriesTabs}
      {pricingTable}
    </div>
  );
}