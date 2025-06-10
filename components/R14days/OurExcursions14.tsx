'use client';

import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const excursions = [
  { id: 1, image: "/excursion/7.jpg" },
  { id: 2, image: "/excursion/6.jpg" },
  { id: 3, image: "/excursion/3.jpg" },
  { id: 4, image: "/excursion/1.jpg" },
  { id: 5, image: "/excursion/10.jpg" },
  { id: 6, image: "/excursion/11.jpg" },
  { id: 7, image: "/excursion/11.jpg" },
  { id: 8, image: "/excursion/12.jpg" },
  { id: 9, image: "/excursion/13.jpg" },
  { id: 10, image: "/excursion/1.jpg" },
  { id: 11, image: "/excursion/15.jpg" },
  { id: 12, image: "/excursion/16.jpg" },
  { id: 13, image: "/excursion/17.jpg" },
  { id: 14, image: "/excursion/18.jpg" },
  { id: 15, image: "/excursion/19.jpg" },
];

export default function OurExcursions14() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close modal on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    },
    [selectedImage]
  );

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  return (
    <section className="bg-[#fff8f5] py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#4c2a65] mb-4">
        Our Excursions
      </h2>
      <p className="text-lg text-[#3d3d3d] max-w-2xl mx-auto mb-12">
        These are real stories from our Yoga Teacher Training students — raw, honest, and deeply
        moving. See how yoga has helped them heal, grow, and reconnect with themselves.
      </p>

      {isClient && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-6xl mx-auto"
        >
          {excursions.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => setSelectedImage(item.image)}
                className="relative rounded-3xl overflow-hidden shadow-md group cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(item.image);
                  }
                }}
                aria-label={`View larger image of Excursion ${item.id}`}
              >
                <Image
                  src={item.image}
                  alt={`Excursion ${item.id}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Modal */}
      {isClient && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              width={1000}
              height={600}
              className="rounded-xl object-contain w-full h-auto"
              priority
              style={{ width: "100%", height: "auto" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close preview"
              title="Close preview"
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
