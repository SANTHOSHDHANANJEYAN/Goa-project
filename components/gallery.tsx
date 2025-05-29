'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="bg-transparent px-4 py-10 sm:px-6 lg:px-16">
      <h1 className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-center text-indigo-800 tracking-wider drop-shadow mb-10">
        Gallery Showcase
      </h1>

      {/* Scrollable Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
      >
        {[...images, ...images].map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="snap-start relative w-[85vw] xs:w-[65vw] sm:w-[45vw] md:w-[320px] h-[60vw] xs:h-[45vw] sm:h-[280px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl bg-white/70 backdrop-blur-lg transition-all"
            onClick={() => openPreview(src, i)}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover object-center rounded-xl cursor-pointer"
              sizes="(max-width: 480px) 85vw, (max-width: 768px) 45vw, 320px"
              priority={i < 6}
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="relative w-full max-w-[95%] sm:max-w-2xl md:max-w-4xl rounded-3xl bg-white/10 p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected"
                width={1200}
                height={800}
                className="rounded-2xl object-contain w-full max-h-[75vh]"
              />

              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
              >
                &times;
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-blue-400"
              >
                &#10094;
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-blue-400"
              >
                &#10095;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
