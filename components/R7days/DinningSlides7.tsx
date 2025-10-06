'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  '/Food/1.jpg',
  '/Food/2.jpg',
  '/Food/3.jpg',
  '/Food/5.jpg',
  '/Food/6.jpg',
  '/Food/7.jpg',
  '/Food/8.jpg',
  '/Food/9.jpg',
  '/Food/10.JPG',
  '/Food/11.jpg',
  '/Food/13.jpg',
];

export default function DinningSlides7() {
  const [isClient, setIsClient] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
<section className="bg-transparent pb-20 px-4 text-center">
  {/* Swiper Carousel */}
  <Swiper
    spaceBetween={20}
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
    className="max-w-6xl mx-auto mb-16"
  >
    {images.map((src, i) => (
      <SwiperSlide key={i}>
        <div
          className="relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
          onClick={() => setPreviewImage(src)}
        >
          <Image
            src={src}
            alt={`Food ${i + 1}`}
            width={400}
            height={300}
            loading="lazy"
            className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Modal Preview */}
  {previewImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
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
          loading="lazy"
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

  {/* Yogic Food Section */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8 text-left">
    {/* Left Image */}
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src="/images/yogic-food.jpg" // 🖼️ Replace with your actual image path
        alt="Yogic Food at Rishikul Yogshala Goa"
        width={600}
        height={400}
        className="rounded-2xl shadow-xl object-cover w-full max-h-[400px] transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Right Text */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
        Yogic Food
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Simple Yogic and Nutritious food is part of the yogic culture at Rishikul Yogshala Goa.
        In <strong>200 Hours Yoga Teacher Training In Goa</strong>, healthy and delicious vegetarian meals made
        from local seasonal vegetables will be served to you. The food prepared will fill your Indian
        taste buds and also keep you fully energized, yet feeling light and grounded in your inner experience.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We serve <strong>three tasty meals a day</strong> which adhere to the required energy during the course environment.
        From morning’s fruits and herbal teas to healthy lunches and comforting dinners — these not only fuel
        your body and mind, but also support your spiritual growth and nourishment.
      </p>
      <p className="text-gray-700 leading-relaxed">
        The <em>sattvic</em> (pure and balanced) diet at our Goa yoga center helps in improving digestion,
        retaining concentration, and providing an experience of calmness as you move deeper into your yogic practice.
      </p>
    </div>
  </div>
</section>

  );
}
