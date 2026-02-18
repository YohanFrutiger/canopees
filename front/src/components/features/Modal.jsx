// src/components/features/Modal.jsx
// Fenêtre modale pour l'affichage du composant Gallery

// import Gallery from "./Gallery";
import { useRealizations } from "../../hooks/useRealizations";  // Tous les services (services)


export default function Modal({ isOpen, onClose, title, catId }) {
  if (!isOpen) return null;
  const realizations = useRealizations();  // Tous les services
  const filteredRealizations = realizations.getRealizationsByCategory(catId);  // Filtre par ID

  let modal;
  if (realizations.loading) {
    // modal = <p className="text-center">Chargement des réalisations...</p>;
  } else if (realizations.error) {
    modal = <p className="text-center text-red-500">Erreur lors de la récupération des données.</p>;
  } else if (filteredRealizations.length === 0) {
    modal = <p className="text-center">Aucune réalisation disponible pour cette catégorie.</p>;
  } else {
    modal = (
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
            <h1 className="text-4xl md:text-5xl font-rosario font-bold my-4 mb-2 ">
              {title}
            </h1>
            <p className="text-xl mb-4 text-white">Découvrez nos réalisations !</p>
          </div>

          <div className="overflow-y-auto bg-gray-50">
            <div className="p-2">
              {/* Galerie de photos des réalisations pour la catégorie  */}
              <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
                {filteredRealizations.map((real, index) => (

                  <div className="overflow-hidden ">
                    <img
                      key={real.id}
                      src={`http://127.0.0.1:8000/uploads/${real.image}`}
                      alt={real.alt}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    {/* <p className=" text-center font-semibold h-full p-2  ">
                      {parse(real.description)}
                    </p> */}

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
            <h1 className="text-4xl md:text-5xl font-rosario font-bold my-4 mb-2 ">
              {title}
            </h1>
            <p className="text-xl mb-4 text-white">Découvrez nos réalisations !</p>
          </div>

          <div className="overflow-y-auto bg-gray-50">
            <div className="p-2"></div>
            {modal}
          </div>
        </div>
      </div>
  );
}