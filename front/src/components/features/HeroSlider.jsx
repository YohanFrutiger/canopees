// src/components/features/Slider.jsx
// Hero Slider de la page d'accueil

import { useState } from 'react';
import ContactButton from './ContactButton';
import { useSlider } from '../../hooks/useSlider';

function HeroSlider() {
  const slider = useSlider();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtrage des images actives uniquement
  const activeSlides = slider.data?.member
    ?.filter(item => item.active === true)         
    ?.map(item => ({
      id: item.id,
      image: `https://yohanfrutiger.alwaysdata.net/uploads/${item.image}`, 
      alt: item.alt || `Photo slider ${item.id}`,
    })) || [];

  // Gestion du currentIndex si jamais le nombre d'images change
  const totalSlides = activeSlides.length;

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  // Gestion loading/error
  // if (slider.loading) {
  //   return (
  //     <div className="absolute top-16 left-0 w-full h-[400px] bg-black flex items-center justify-center">
  //       <p className="text-white text-xl">Chargement du slider...</p>
  //     </div>
  //   );
  // }
  if (slider.error) {
    return (
      <div className="absolute top-16 left-0 w-full h-[400px] bg-black flex items-center justify-center">
        <p className="text-red-400">Erreur lors du chargement du slider</p>
      </div>
    );
  }
  if (totalSlides === 0) {
    return (
      <div className="absolute top-16 left-0 w-full h-[400px] bg-black flex items-center justify-center">
        {/* <p className="text-white">Aucune image active dans le slider</p> */}
      </div>
    );
  }

  return (
    <div className="absolute top-16 left-0 w-full h-[400px] overflow-hidden bg-black">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {activeSlides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay sombre + bouton */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10">
        <ContactButton btnContent="Votre devis en 48h !" />
      </div>

      {/* Flèche gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-4xl font-thin rounded-full transition z-10"
        aria-label="Précédent"
      >
        ‹
      </button>

      {/* Flèche droite */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-4xl font-thin rounded-full transition z-10"
        aria-label="Suivant"
      >
        ›
      </button>

      {/* Dots (indicateurs) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {activeSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-white w-10 h-3'
                : 'bg-white/60 hover:bg-white/90 w-3 h-3'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;