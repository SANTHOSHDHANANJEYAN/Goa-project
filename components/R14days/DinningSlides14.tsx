'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  '/Food/1.jpg', '/Food/2.jpg', '/Food/3.jpg', '/Food/5.jpg',
  '/Food/6.jpg', '/Food/7.jpg', '/Food/8.jpg', '/Food/9.jpg',
  '/Food/10.JPG', '/Food/11.jpg', '/Food/13.jpg'
];

export default function DinningSlides7() {
  const [isClient, setIsClient] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-transparent pb-20 px-4 text-center relative">
      {isClient && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-6xl mx-auto"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
                onClick={() => setPreviewImage(img)}
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${idx + 1}`}
                  width={400}
                  height={300}
                  className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Modal Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              width={1000}
              height={600}
              className="rounded-xl object-contain w-full max-h-[80vh]"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
              aria-label="Close preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
