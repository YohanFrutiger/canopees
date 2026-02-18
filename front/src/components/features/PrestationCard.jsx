// src/components/features/PrestationCard.jsx
// Carte Prestation de la page Prestations

import { useState } from "react";
import Modal from "./Modal";
import parse from "html-react-parser";

export default function PrestationCard({ img, catTitle, text, catId, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col border rounded rounded-t-md shadow-xl w-[355px] xs:min-w-[200px] overflow-hidden mb-4 text-center">
      
      {/* Image + titre superposé */}
      <div className="w-full h-60 overflow-hidden relative">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay sombre optionnel */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Titre sur l'image */}
        <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold px-4">
          {catTitle}
        </h3>
      </div>

      {/* Texte */}
      <p className="px-4 mb-4 flex-1 mt-4 text-base">
        {parse(text)}
      </p>

      {/* Bouton */}
      <div className="px-6 pb-6 mx-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className="block w-48 border text-center py-3 bg-violet text-white rounded-lg font-semibold transition transform hover:scale-105"
        >
          Voir nos réalisations
        </button>
      </div>

      {/* MODALE */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        catId={catId}
        catTitle={catTitle}
      />
    </div>
  );
}
