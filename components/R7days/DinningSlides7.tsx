'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const images = [
  '/images/yoga1.jpg',
  '/images/yoga2.jpg',
  '/images/yoga3.jpg',
  '/images/yoga4.jpg',
  '/images/yoga5.jpg',
];

export default function ModernImageSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.4}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation, Pagination]}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden rounded-3xl shadow-xl ${
                  isActive
                    ? 'scale-100 blur-0 opacity-100'
                    : 'scale-90 blur-sm opacity-60'
                }`}
              >
                <Image
                  src={src}
                  alt={Slide ${idx}}
                  width={1200}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}