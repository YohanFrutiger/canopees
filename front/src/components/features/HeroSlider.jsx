// Slider.jsx
import { useState } from 'react';
import ContactButton from './ContactButton';
import Slide1 from "../../assets/images/slider/slide-1.jpg"
import Slide2 from "../../assets/images/slider/slide-2.jpg"
import Slide3 from "../../assets/images/slider/slide-3.jpg"
import Slide4 from "../../assets/images/slider/slide-4.jpg"

const slides = [
  {
    id: 1,
    image: Slide1
  },
  {
    id: 2,
    image: Slide2
  },
  {
    id: 3,
    image: Slide3
  },
  {
    id: 4,
    image: Slide4
  },
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);


  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  function goToSlide(index) {
    setCurrentIndex(index);
  };





  return (
    <div className="absolute top-16 left-0 w-full h-[400px] overflow-hidden bg-black"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

          </div>

        ))}

        {/* Overlay*/}

      </div>

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10">


        {/* Bouton  */}
        <ContactButton
          btnContent="Votre devis en 48h !"
        />
      </div>

      {/* Flèche gauche -  */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-4xl font-thin rounded-full transition z-10"
        aria-label="Précédent"
      >
        <div className="relative bottom-1">
          ‹
        </div>
      </button>

      {/* Flèche droite  */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-4xl font-thin rounded-full transition z-10"
        aria-label="Suivant"
      >
        <div className="relative bottom-1">
          ›
        </div>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentIndex
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



