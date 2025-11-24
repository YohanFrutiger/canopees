// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import slide1 from "../../assets/images/slide-1.jpg";
// import slide2 from "../../assets/images/slide-2.jpg";
// import slide3 from "../../assets/images/slide-3.jpg";
// import slide4 from "../../assets/images/slide-4.jpg";

// export default function HeroSlider() {
//   const slides = [
//     { img: slide1},
//     { img: slide2},
//     { img: slide3},
//     { img: slide4},
//   ];

//   return (
//     <section className="relative h-screen w-full">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         // autoplay={{ delay: 5000, disableOnInteraction: false }}
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         pagination={{ clickable: true }}
//         className="h-[500px]"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[500px] w-full">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-[500px] object-cover"
//               />

//               {/* Overlay sombre + texte centré */}
//               {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
//                 <div className="max-w-4xl px-6">
//                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-rosario text-white font-bold leading-tight">
//                     {slide.title}
//                   </h1>
//                   <p className="mt-6 text-xl md:text-3xl font-outfit text-white/90">
//                     {slide.subtitle}
//                   </p>
//                   <button className="mt-10 bg-orange text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange/90 transition">
//                     Demander un devis
//                   </button>
//                 </div>
//               </div> */}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Flèches personnalisées */}
//       <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-4xl" />
//       <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-4xl" />
//     </section>
//   );
// }

// Slider temporaire
import heroImage from "../../assets/images/slide-1.jpg"; 

export default function HeroSlider() {
  return (
    <div className=" h-[300px] md:h-[450px] border border-black relative overflow-hidden -mx-6 ">
      {/* <img src={heroImage}
       alt=""
       className="absolute w-full h-full object-cover object-center"
       />   */}
    </div>





  );
}