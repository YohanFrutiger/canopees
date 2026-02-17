// src/components/features/PrestationCard.jsx
// Carte Prestation de la page Prestations

import { useState } from "react";
import { realisations } from "../../data/realisations";
import Modal from "./Modal";
import parse from "html-react-parser";

export default function PrestationCard({ img, title, text, tag, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col border-2 border-violet/90 bg-violet/10 rounded rounded-t-2xl shadow-lg md:max-w-[355px] overflow-hidden mb-4 text-center">
      {/* Titre */}
      <h3 className="px-4 pb-4">
        {title}
      </h3>

      {/* Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Texte */}
      <p className=" py-8 px-4 flex-1">
        {parse(text)}
      </p>

      {/* Bouton qui ouvre la modale */}
      <div className="px-6 pb-6 mx-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className="block w-48  border text-center py-3 bg-violet text-white rounded-lg font-semibold  transition transform hover:scale-105"
        >
          Voir nos réalisations
        </button>
      </div>

      {/* MODALE */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        realisations={realisations[tag]}
      />
    </div>

  );

}