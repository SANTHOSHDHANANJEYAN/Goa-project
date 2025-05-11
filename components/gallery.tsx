'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/gallery/1.WEBP",
  "/gallery/2.WEBP",
  "/gallery/3.WEBP",
  "/gallery/4.WEBP",
  "/gallery/5.WEBP",
  "/gallery/6.WEBP",
  "/gallery/7.WEBP",
  "/gallery/8.WEBP",
  "/gallery/9.WEBP",
  "/gallery/10.WEBP",
  "/gallery/12.WEBP",
  "/gallery/13.WEBP",
  "/gallery/11.WEBP"
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const cardWidth = 320; // Adjust based on your card width + margin
    const interval = setInterval(() => {
      scrollAmount += cardWidth;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openPreview = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  const showPrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(selectedIndex - 1 + images.length) % images.length]);
  };

  const showNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(selectedIndex + 1) % images.length]);
  };

  return (
    <div className=" bg-gradient-to-b from-white to-blue-50 px-4 overflow-hidden">
      <h1 className="text-4xl font-extrabold text-center mb-16 text-[#150e70] uppercase tracking-wider">
        Gallery
      </h1>

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap space-x-4 scroll-smooth"
      >
        {/* Duplicate images for infinite scroll effect */}
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative w-[300px] h-[400px] flex-shrink-0 rounded-2xl shadow-lg overflow-hidden"
            onClick={() => openPreview(src, i)} // Open preview on click
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover object-top rounded-2xl cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <div
            className="relative max-w-[90%] md:max-w-3xl bg-white p-4 rounded-3xl"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            {/* Image */}
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-3xl object-contain"
            />

            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={showPrev}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-400"
            >
              &#10094;
            </button>
            <button
              onClick={showNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-400"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
