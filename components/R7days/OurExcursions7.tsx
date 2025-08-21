'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const excursions = [
  '/excursion/7.jpg','/excursion/6.jpg','/excursion/3.jpg','/excursion/1.jpg',
  '/excursion/10.jpg','/excursion/11.jpg','/excursion/11.jpg','/excursion/12.jpg',
  '/excursion/13.jpg','/excursion/1.jpg','/excursion/15.jpg','/excursion/16.jpg',
  '/excursion/17.jpg','/excursion/18.jpg','/excursion/19.jpg'
];

export default function OurExcursions7() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isClient = typeof window !== 'undefined';

  return (
    <section className="bg-transparent pb-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#4c2a65] mb-4">
        Our Excursions
      </h2>
      <p className="text-lg text-[#3d3d3d] max-w-2xl mx-auto mb-12">
        Explore real moments from our Yoga Teacher Training students — raw, honest, and deeply moving.
      </p>

      {isClient && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          speed={2000}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-6xl mx-auto"
        >
          {excursions.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
                onClick={() => setSelectedImage(src)}
                role="button"
                aria-label={`Open excursion image ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`Excursion ${idx + 1}`}
                  width={400}
                  height={300}
                  className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Modal */}
      {isClient && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4 sm:mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Excursion Preview"
              width={1000}
              height={600}
              className="rounded-xl object-contain w-full h-auto"
              priority
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
