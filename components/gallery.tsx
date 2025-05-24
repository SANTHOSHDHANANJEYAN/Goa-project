'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images: string[] = [
  '/gallery/1.WEBP', '/gallery/2.WEBP', '/gallery/3.WEBP',
  '/gallery/4.WEBP', '/gallery/5.WEBP', '/gallery/6.WEBP',
  '/gallery/7.WEBP', '/gallery/8.WEBP', '/gallery/9.WEBP',
  '/gallery/10.WEBP', '/gallery/12.WEBP', '/gallery/13.WEBP',
  '/gallery/11.WEBP'
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const cardWidth = 320;
    const interval = setInterval(() => {
      scrollAmount += cardWidth;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
      scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const openPreview = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index % images.length);
  };

  const closePreview = () => setSelectedImage(null);

  const showPrev = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#150e70] uppercase tracking-wider">
        Gallery
      </h1>

      {/* Scrollable Image Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-6 scroll-smooth"
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative w-[80vw] sm:w-[45vw] md:w-[300px] h-[60vw] sm:h-[300px] md:h-[400px] flex-shrink-0 rounded-2xl shadow-lg overflow-hidden"
            onClick={() => openPreview(src, i)}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover object-top rounded-2xl cursor-pointer"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 300px"
            />
          </div>
        ))}
      </div>

      {/* Image Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-[90%] sm:max-w-2xl md:max-w-4xl bg-white p-4 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-3xl object-contain w-full h-auto"
            />

            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>

            {/* Prev / Next Arrows */}
            <button
              onClick={showPrev}
              className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl hover:text-blue-400"
            >
              &#10094;
            </button>
            <button
              onClick={showNext}
              className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-4xl hover:text-blue-400"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
