import { useState } from 'react';
import photo1 from "../../assets/images/realisations/conception-4.jpg"
import photo2 from "../../assets/images/realisations/elagage-4.jpg"
import photo3 from "../../assets/images/realisations/taille-1.jpg"
import photo4 from "../../assets/images/realisations/conception-1.jpg"
import photo5 from "../../assets/images/realisations/taille-2.jpg"
import photo6 from "../../assets/images/realisations/conception-5.jpg"


const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

function getVisibleIndices() {
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  }

  const visible = getVisibleIndices();

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
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl border-8 border-white/20 shadow-2xl"
                />
              </div>

              {/* Dots*/}
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