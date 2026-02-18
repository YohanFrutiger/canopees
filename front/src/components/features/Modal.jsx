// src/components/features/Modal.jsx
// Fenêtre modale pour l'affichage des réalisations d'une catégorie (ouverte depuis PrestationCard)

import { useRealizations } from "../../hooks/useRealizations";  // Toutes les réalisations 
import parse from "html-react-parser";

export default function Modal({ isOpen, onClose, catTitle, catId }) {
  if (!isOpen) return null;
  const realizations = useRealizations();  // Toutes les réalisations 
  const filteredRealizations = realizations.getRealizationsByCategory(catId);  // Filtre par ID

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
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
        {filteredRealizations.map((real, index) => (

          <div className="overflow-hidden ">
            <img
              key={real.id}
              src={`http://127.0.0.1:8000/uploads/${real.image}`}
              alt={real.alt}
              className="w-full h-80 object-cover rounded-xl"
            />
            <p className="h-full p-2  ">
              {parse(real.description)}
            </p>

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
          className="absolute top-6 right-6 z-50 text-white bg-black/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-4xl hover:bg-black/50 hover:scale-110 transition-all duration-200"
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        {/* En-tête violet */}
        <div className="bg-violet/90 text-white text-center rounded-t-3xl">
          <h1 className="text-4xl md:text-4xl font-rosario font-bold my-4 mb-2 ">
            {catTitle}
          </h1>
          <p className="text-xl mb-4 text-white">Découvrez nos réalisations !</p>
        </div>

        <div className="overflow-y-auto bg-gray-50">
          <div className="px-2"></div>
          {modalGallery}
        </div>
      </div>
    </div>
  );
}