'use client'; // 👈 REQUIRED to make Swiper work in Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    image: "/excursion1.webp",
    videoUrl: "#",
  },
  {
    id: 2,
    image: "/excursion2.jpg",
    videoUrl: "#",
  },
  {
    id: 3,
    image: "/excursion3.avif",
    videoUrl: "#",
  },
  {
    id: 4,
    image: "/excursion4.avif",
    videoUrl: "#",
  },
];

export default function OurExcursions14() {
  return (
    <section className="bg-[#fff8f5] py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#4c2a65] mb-4">
        Our Excursions
      </h2>
      <p className="text-lg text-[#3d3d3d] max-w-2xl mx-auto mb-12">
        These are real stories from our Yoga Teacher Training students — raw, honest, and deeply
        moving. See how yoga has helped them heal, grow, and reconnect with themselves.
      </p>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-3xl overflow-hidden group shadow-md">
              <Image
                src={item.image}
                alt={`Testimonial ${item.id}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
              >
                <div className="bg-orange-400 p-4 rounded-full">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
