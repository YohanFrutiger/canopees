// src/components/features/Carrousel.jsx

// Hook
import { useRealizations } from '../../hooks/useRealizations';

// Swiper
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';   

export default function Carrousel() {
  const UPLOADS_URL = import.meta.env.VITE_UPLOADS_URL || '';

  const { loading, error, data } = useRealizations();

  // Préparation des 6 dernières réalisations (tri + limite)
  let slides = [];
  if (data && data.member) {
    const realizations = data.member;
    const sorted = realizations.sort((a, b) => new Date(b.realizedAt) - new Date(a.realizedAt));
    const limited = sorted.slice(0, 6);

    slides = limited.map(item => ({
      id: item.id,
      image: `${UPLOADS_URL}/${item.image}`,
      title: item.title || `Réalisation ${item.id}`,
    }));
  }

  if (loading) {
    return <div className="w-full h-96 md:h-[400px] flex items-center justify-center">Chargement des réalisations...</div>;
  }

  if (error || slides.length === 0) {
    return <div className="w-full h-96 md:h-[400px] flex items-center justify-center">Aucune réalisation disponible.</div>;
  }

  return (
    <div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          effect="coverflow"
          // centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation
          pagination={{ clickable: true }}
         coverflowEffect={{
            rotate: -15,
            stretch: 0,
            depth:250,
            modifier: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            // 320: { slidesPerView: 1 },
             640: { slidesPerView: 3 },
            // 1024: { slidesPerView: 3 },
            //  640:{spaceBetween:10}
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} >
              <div className="w-72 h-72 md:w-[450px] md:h-80 mx-auto border-8 border-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full  object-cover transition-all duration-500"
                />
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper >
      </div>

      ///////////////////////
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          effect="coverflow"
          // centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={true, 1000}
          navigation
          pagination={{ clickable: true }}
           coverflowEffect={{
            rotate: -15,
            stretch: 0,
            depth:500,
            modifier: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            // 320: { slidesPerView: 1 },
            //  640: { slidesPerView: 3 },
            // 1024: { slidesPerView: 3 },
            //  640:{spaceBetween:10}
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} >
              <div className="absolute block top-200 z-99 w-full h-72  md:h-80 mx-auto border-8 border-white">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute  left-0 w-full h-[400px] overflow-hidden bg-black object-cover"
                />
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper >

      </div>
      /////////////////
    </div >
  );
}