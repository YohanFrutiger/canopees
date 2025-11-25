// src/components/features/Modal.jsx
import Gallery from "./Gallery";

export default function PrestationsModal({ isOpen, onClose, title, realisations }) {
  if (!isOpen) return null;
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
          aria-label="Fermer"
        >
          ×
        </button>

        {/* En-tête violet */}
        <div className="bg-violet/90 text-white text-center py-4 rounded-t-3xl">
          <h1 className="text-3xl md:text-3xl font-rosario font-bold px-16">
            {title}
          </h1>
          <p className="text-xl mt-3 opacity-90">Découvrez nos réalisations !</p>
        </div>

        <div className="overflow-y-auto bg-gray-50">
          <div className="p-8 md:p-12">
            <Gallery realisations={realisations || []} />
          </div>
        </div>
        
      </div>
    </div>
  );
}