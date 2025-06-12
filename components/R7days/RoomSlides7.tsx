'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { id: 1, image: '/Accomdation/1.jpg' },
  { id: 2, image: '/Accomdation/3.webp' },
  { id: 3, image: '/Accomdation/6.jpg' },
  { id: 4, image: '/Accomdation/7.jpg' },
  { id: 5, image: '/Accomdation/8.avif' },
  { id: 6, image: '/Accomdation/9.jpg' },
  { id: 7, image: '/Accomdation/10.jpg' },
  { id: 8, image: '/Accomdation/11.avif' },
  { id: 9, image: '/Accomdation/15.avif' },
  { id: 10, image: '/Accomdation/18.jpg' },
  { id: 11, image: '/Accomdation/19.avif' },
];

export default function RoomSlides7() {
  const [isClient, setIsClient] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-transparent pb-20 px-4 text-center">
      {isClient && (
        <Swiper
          spaceBetween={20}
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
          {testimonials.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <div
                className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
                onClick={() => setPreviewImage(image)}
              >
                <Image
                  src={image}
                  alt={`Room ${id}`}
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
      {isClient && previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              width={1000}
              height={600}
              className="rounded-xl object-contain w-full h-auto max-h-[80vh]"
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
