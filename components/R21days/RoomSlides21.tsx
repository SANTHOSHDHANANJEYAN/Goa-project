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

export default function RoomSlides21() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
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
        breakpoints={{
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // tablets and small desktops
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          // medium desktops and up
          1024: {
            slidesPerView: 1.4,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="transition-all duration-500 ease-in-out overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={1200}
                height={600}
                className="w-full object-cover"
                style={{ height: 'auto', aspectRatio: '1200 / 600' }}
                priority={idx === 0} // prioritize first image loading
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}
