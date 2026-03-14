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
import 'swiper/css/effect-coverflow';   // ← IMPORTANT pour l'effet circulaire

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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        // effect="cube"
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={0} 
        loop={true}
        navigation
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="mx-12">
            <div className="w-72 h-72 md:w-[450px] md:h-80">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg transition-all duration-500"
              />
            </div>
          </SwiperSlide>
        ))
        }
      </Swiper >
    </div >
  );
}