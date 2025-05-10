'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openSlider = (index: number) => setSelectedIndex(index);
  const closeSlider = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );

  return (
    <div className="mb-20 bg-gradient-to-b from-white to-blue-50 px-4 overflow-hidden">
      <motion.h1
        className="text-6xl font-extrabold text-center mb-16 text-blue-900 uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h1>

      {/* Larger Autoplay Carousel */}
     <div className="relative w-full max-w-6xl h-[500px] mx-auto overflow-hidden rounded-3xl shadow-2xl">
  <AnimatePresence>
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center w-full h-full"
      onClick={() => openSlider(currentIndex)}
    >
      <Image
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        width={1200}
        height={800}
        className="rounded-3xl cursor-pointer object-contain transition-transform duration-500 hover:scale-105"
      />
    </motion.div>
  </AnimatePresence>
</div>


      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
            onClick={closeSlider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-[90%] h-[90%] md:h-[85%]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Full view of image ${selectedIndex + 1}`}
                fill
                className="rounded-lg object-contain shadow-2xl"
              />
              <button
                onClick={closeSlider}
                className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-400"
              >
                &times;
              </button>
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-5xl hover:text-blue-400"
              >
                &#10094;
              </button>
              <button
                onClick={showNext}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-5xl hover:text-blue-400"
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
