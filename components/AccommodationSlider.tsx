'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['/1.jpg', '/2.jpg', '/3.jpg','/1.jpg','/2.jpg','/3.jpg','/1.jpg','/2.jpg','/3.jpg','/1.jpg','/2.jpg','/3.jpg'];

export default function AccommodationSlider() {
  return (
    <section className="relative w-full py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">

        {/* Custom Arrows */}
        <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2  rounded-full ">
          <ChevronLeft size={20} />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ">
          <ChevronRight size={20} />
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 2.2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform duration-300"
              style={{ width: '736px', height: '471px' }}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination mt-4 text-center" />
      </div>

      {/* Slide effects styling */}
      <style jsx global>{`
        .swiper-slide {
          opacity: 0.2;
          filter: blur(3px);
          transition: all 0.3s ease-in-out;
        }
        .swiper-slide-active {
          opacity: 1 !important;
          filter: blur(0) !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #000;
        }
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
