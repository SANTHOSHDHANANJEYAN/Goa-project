'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const images = [
  '/Accomdation/Accom1.jpg',
  '/Accomdation/Accom2.jpg',
  '/Accomdation/Accom3.jpg',
  '/Accomdation/Accom4.jpg',
  '/Accomdation/Accom5.jpg',
  '/Accomdation/Accom6.jpg',
];

export default function RoomSlides14() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.4}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        modules={[Navigation, Pagination, Autoplay]}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="transition-all duration-500 ease-in-out overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={src}
                alt={`Slide ${idx}`}
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
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
