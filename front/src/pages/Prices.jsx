// src/pages/Prices.jsx
import { useContentSections } from '../hooks/useContentSections';
import PriceCard from "../components/features/PriceCard";
import { useCategories } from '../hooks/useCategories';
import { useServices } from '../hooks/useServices';
import ContactButton from "../components/features/ContactButton";
import parse from "html-react-parser";

// Swiper
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';   // ← IMPORTANT pour l'effet circulaire

export default function Prices() {
  const content = useContentSections();
  const pricesPageIntroSection = content.getSectionByKey('prices-intro');
  const categories = useCategories();
  const services = useServices();

  // Intro (inchangé)
  let pricesIntroContent;
  if (content.loading) {
    pricesIntroContent = <p className="text-center mt-16">Chargement des tarifs...</p>;
  } else if (content.error) {
    pricesIntroContent = <p className="text-center mt-16 text-red-500">Erreur lors du chargement.</p>;
  } else if (pricesPageIntroSection) {
    pricesIntroContent = (
      <section className="text-center mt-16">
        <p className="prose mx-auto">{parse(pricesPageIntroSection.content)}</p>
      </section>
    );
  }

  return (
    <div className="min-h-screen">
      {pricesIntroContent}

      {/* CARROUSEL AVEC EFFET CIRCULAIRE */}
      <div className="py-12 px-6 relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 225,
            modifier: 1.8,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="mySwiper"
        >
          {categories.data?.member?.map((cat) => {
            const servicesByCat = services.getServicesByCategory(cat.id);
            return (
              <SwiperSlide key={cat.id}>
                <PriceCard cat={cat} services={servicesByCat} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <ContactButton btnContent="Demandez un devis gratuit !" />
    </div>
  );
}