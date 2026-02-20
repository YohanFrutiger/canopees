// src/components/features/PrestationCard.jsx
// Carte Prestation de la page Category

import { useState } from "react";
import Modal from "./Modal";
import parse from "html-react-parser";

export default function PrestationCard({ cat }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col border rounded rounded-t-md shadow-xl w-[355px] xs:min-w-[200px] overflow-hidden mb-4 text-center">

      {/* Image + titre superposé */}
      <div
        className="w-full h-60 overflow-hidden relative cursor-pointer hover:brightness-125 hover:scale-105 transition-all duration-300"
        onClick={() => setIsModalOpen(true)}>
        <img
          src={`http://127.0.0.1:8000/uploads/${cat.image}`}
          alt={cat.title}
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay sombre optionnel */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Titre sur l'image */}
        <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold px-4">
          {cat.title}
        </h3>
      </div>

      {/* MODALE */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cat={cat}
      />
    </div>
  );
}
