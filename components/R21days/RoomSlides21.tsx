'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const roomImages = [
  '/Accomdation/1.jpg',
  '/Accomdation/3.webp',
  '/Accomdation/6.jpg',
  '/Accomdation/7.jpg',
  '/Accomdation/8.avif',
  '/Accomdation/9.jpg',
  '/Accomdation/10.jpg',
  '/Accomdation/11.avif',
  '/Accomdation/15.avif',
  '/Accomdation/18.jpg',
  '/Accomdation/19.avif',
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
          loop
          speed={2000}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-6xl mx-auto"
        >
          {roomImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
                onClick={() => setPreviewImage(image)}
              >
                <Image
                  src={image}
                  alt={`Room ${idx + 1}`}
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
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Room preview"
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
