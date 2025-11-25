// src/components/features/PrestationCard.jsx
import { useState } from "react";
// Importation des données
import { realisations } from "../../data/realisations";
import Modal from "./Modal";

export default function PrestationCard({ img, title, text, category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="flex flex-col border-4 border-violet/90 bg-violet/10 rounded rounded-t-2xl shadow-lg md:max-w-[355px] overflow-hidden">
      {/* Titre */}
      <h3 className="text-xl uppercase font-bold font-rosario py-4 text-center tracking-wide">
        {title}
      </h3>

      {/* Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Texte */}
      <p className="text-center px-6 pt-4 pb-8 flex-1 text-gray-800">
        {text}
      </p>

      {/* Bouton qui ouvre la modale */}
      <div className="px-6 pb-6 mx-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className="block w-48 text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
        >
          Voir nos réalisations
        </button>
      </div>

      {/* MODALE */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        realisations={realisations[category]}
      />

    </div>

  );

}