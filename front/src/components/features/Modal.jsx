// src/components/features/Modal.jsx
// Fenêtre modale pour l'affichage des réalisations d'une catégorie

import { useRealizations } from "../../hooks/useRealizations";  // Toutes les réalisations 
import parse from "html-react-parser";

export default function Modal({ isOpen, onClose, cat }) {
  if (!isOpen) return null;
  const realizations = useRealizations();  // Toutes les réalisations 
  const filteredRealizations = realizations.getRealizationsByCategory(cat.id);  // Filtre par ID

  // Gestion loading/error
  let modalGallery; // Galerie dans la modale
  if (realizations.loading) {
    // modalGallery = <p className="text-center">Chargement des réalisations...</p>;
  } else if (realizations.error) {
    modalGallery = <p className="text-center text-red-500 p-2 min-h-12">Erreur lors de la récupération des données.</p>;
  } else if (filteredRealizations.length === 0) {
    modalGallery = <p className="text-center p-2 min-h-12">Aucune réalisation disponible pour cette catégorie.</p>;
  } else {
    {/* Galerie de photos des réalisations pour la catégorie  */ }
    modalGallery = (
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8">
        {filteredRealizations.map((real, index) => (
          <div className="">
            <p className="p-2 font-light ">
              {parse(real.description)}
            </p>
            <img
              key={real.id}
              src={`https://yohanfrutiger.alwaysdata.net/uploads/${real.image}`}
              alt={real.alt}
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      {/* MODALE */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col"
        style={{ maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOUTON X  */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 z-50 text-white bg-black/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-4xl hover:bg-black/50 hover:scale-110 transition-all duration-200"
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        {/* En-tête avec descritpion de la catégorie */}
        <div className="bg-green/10 text-left rounded-t-3xl">
          <p className="pl-8 pr-24 py-4  leading-tight ">{parse(cat.description)}</p>
        </div>

        <div className="overflow-y-auto bg-gray-50">
          <div className="px-2"></div>
          {modalGallery}
        </div>
      </div>
    </div>
  );
}