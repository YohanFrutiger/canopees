// src/components/features/Carrousel.jsx
// Carrousel d'images des dernières réalisations de l'entreprise (utilisé sur la page d'accueil)

import { useState } from 'react';
import { useRealizations } from '../../hooks/useRealizations'; // Ajuste le chemin vers ton hook

// Composant Carrousel
export default function Carrousel() {
  // État pour l'index de l'image actuellement au centre
  const [currentIndex, setCurrentIndex] = useState(0);

// Utilise le hook pour fetch les données
const { loading, error, data } = useRealizations();

// Prépare les images dynamiques
let images = [];
if (data && data.member) { // Changé en data.member (clé réelle dans ton JSON)
  const realizations = data.member;
  // Trie par realizedAt descendant (plus récente en premier)
  const sorted = realizations.sort((a, b) => new Date(b.realizedAt) - new Date(a.realizedAt));
  // Limite aux 6 plus récentes (ou moins si <6)
  const limited = sorted.slice(0, 6);
  // Extrait les URLs d'images (ajuste le préfixe selon ta config VichUploader)
  images = limited.map(item => `http://127.0.0.1:8000/uploads/${item.image}`); // ← Ajuste '/uploads/realizations/' si nécessaire (ex: '/media/' ou '/images/')
}

  // Passe à l'image précédente (revient à la fin si on est au début)
  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  // Passe à l'image suivante (revient au début si on est à la fin)
  function nextSlide() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  /**
   * Retourne les 3 indices d'images à afficher :
   * - image précédente
   * - image actuelle (centrale)
   * - image suivante
   * Gère le défilement circulaire (boucle infinie)
   */
  function getVisibleIndices() {
    // Calcul de l'index précédent (si on est à 0 → dernière image)
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    // Calcul de l'index suivant (si on est à la fin → première image)
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    return [prev, currentIndex, next];
  }

  const visible = getVisibleIndices();

  // Gestion du loading et error
if (loading) {
  return <div className="w-full h-96 md:h-[400px] flex items-center justify-center">Chargement des réalisations...</div>;
}

if (error || images.length === 0) {
  return <div className="w-full h-96 md:h-[400px] flex items-center justify-center">Erreur lors du chargement ou aucune réalisation disponible.</div>;
}

  return (
    <div className="w-full h-96 md:h-[400px] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4">

        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700 hover:bg-gray-500 text-white text-4xl font-thin rounded-full transition z-20"
        >
          <div className="relative bottom-1">
            ‹
          </div>
        </button>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700 hover:bg-gray-500 text-white text-4xl font-thin rounded-full transition z-20"
        >
          <div className='relative bottom-1'>
            ›
          </div>
        </button>

        {/* Carrousel */}
        <div className="flex items-center justify-center gap-6 md:gap-12 h-full">
          {visible.map((index, pos) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 flex-shrink-0 ${pos === 1 ? 'scale-125 z-10' : 'scale-90 opacity-60'
                }`}
            >
              <div className={pos === 1 ? 'w-72 h-72 md:w-80 md:h-80' : 'w-48 h-48 md:w-56 md:h-56'}>
                <img
                  src={images[index]}
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl border-8 border-white/20 shadow-2xl"
                />
              </div>

              {/* Dots */}
              {pos === 1 && (
                <div className="absolute inset-x-0 bottom-4 md:bottom-6 flex justify-center gap-3">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`rounded-full transition-all ${i === currentIndex
                        ? 'bg-white w-10 h-2.5'
                        : 'bg-white/70 w-2.5 h-2.5'
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}