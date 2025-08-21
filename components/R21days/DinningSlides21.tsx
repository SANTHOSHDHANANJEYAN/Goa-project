'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { id: 1, image: '/Food/1.jpg', alt: 'Delicious vegan meal 1' },
  { id: 2, image: '/Food/2.jpg', alt: 'Healthy breakfast 2' },
  { id: 3, image: '/Food/3.jpg', alt: 'Nutritious lunch 3' },
  { id: 4, image: '/Food/5.jpg', alt: 'Refreshing smoothie 4' },
  { id: 5, image: '/Food/6.jpg', alt: 'Plant-based dessert 5' },
  { id: 6, image: '/Food/7.jpg', alt: 'Organic salad 6' },
  { id: 7, image: '/Food/8.jpg', alt: 'Detox juice 7' },
  { id: 8, image: '/Food/9.jpg', alt: 'Evening tea 8' },
  { id: 9, image: '/Food/10.JPG', alt: 'Yogic meal 9' },
  { id: 10, image: '/Food/11.jpg', alt: 'Vegan dinner 10' },
  { id: 12, image: '/Food/13.jpg', alt: 'Fruit platter 12' },
];

export default function DinningSlides7() {
  const [isClient, setIsClient] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = previewImage ? 'hidden' : 'auto';
  }, [previewImage]);

  return (
    <section className="bg-transparent pb-20 px-4 text-center">
      {isClient && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
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
          {testimonials.map(({ id, image, alt }) => (
            <SwiperSlide key={id}>
              <div
                className="relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
                onClick={() => setPreviewImage(image)}
              >
                <Image
                  src={image}
                  alt={alt}
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

      {/* Modal Preview */}
      {isClient && previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
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
