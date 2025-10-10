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

const accommodationFeatures = [
  'Clean Attached Bathroom',
  '24 hours high speed Wifi Access',
  'A Table and Chair for reading',
  'A Calm Serene peaceful space for contemplation'
];

export default function Accommodation200() {
  const [isClient, setIsClient] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
<section className="bg-[#f4f5f3] py-16 md:py-20">
  {/* Section Header */}
  <div className="container mx-auto px-4 mb-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        Yogic Accommodation
      </h2>
      <div className="w-24 h-1 bg-[#e0b973] mx-auto"></div>
    </div>

    {/* Description + Right Image */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
      {/* Left Text Section */}
      <div>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Experience the best and most comfortable stay in your 200 Hour Yoga Teacher Training
          in Goa at Rishikul Yogshala. Located few minutes walking distance from Arambol scenic
          beach, our yoga centre provides just the best blend of Nature and therapeutic yoga
          practices to enhance your Yogic Experience. With an appealing smell of sea waves in
          the air, your accommodation provides an ideal environment either for an intense practice
          session or a calm and a serene hour of unwinding experience.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          We provide comfortable and furnished Private Rooms and Double Shared Rooms.
          Each of the Rooms is furnished with:
        </p>

        {/* Features List */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <ul className="space-y-3">
            {accommodationFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src="/Accomdation/11.avif" // 🖼️ Replace with your image path
          alt="Yoga Accommodation in Goa"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl object-cover w-full max-h-[400px] transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  </div>

  {/* Image Slider */}
  <div className="px-4">
    {isClient && (
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        speed={2000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="max-w-6xl mx-auto"
      >
        {roomImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl"
              onClick={() => setPreviewImage(image)}
            >
              <Image
                src={image}
                alt={`Room ${index + 1}`}
                width={400}
                height={300}
                className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )}
  </div>

  {/* Image Preview Modal */}
  {isClient && previewImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={() => setPreviewImage(null)}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={previewImage}
          alt="Preview"
          width={1000}
          height={600}
          className="rounded-xl object-contain w-full h-auto max-h-[80vh] shadow-2xl"
        />
        <button
          onClick={() => setPreviewImage(null)}
          className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 hover:scale-110"
          aria-label="Close preview"
        >
          ✕
        </button>
      </div>
    </div>
  )}

  {/* Custom Styles for Swiper Pagination */}
  <style jsx global>{`
    .swiper-pagination {
      bottom: -40px !important;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: #cbd5e1;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #f97316;
      width: 30px;
      border-radius: 5px;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }
  `}</style>
</section>

  );
}
