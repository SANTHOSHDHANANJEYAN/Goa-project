"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images: string[] = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay fade slider
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
    <div className="mb-16 bg-gradient-to-b from-white to-blue-50  px-4 overflow-hidden">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 text-blue-900 uppercase tracking-widest"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h1>

      {/* Fade-based Autoplay Carousel */}
      <div className="relative w-full max-w-4xl h-[320px] mx-auto overflow-hidden rounded-xl shadow-xl">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
            onClick={() => openSlider(currentIndex)}
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              layout="fill"
              className="object-cover rounded-xl cursor-pointer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeSlider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90vw] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Full view of image ${selectedIndex + 1}`}
                width={1200}
                height={1000}
                className="rounded-lg w-full h-auto shadow-2xl"
              />
              <button
                onClick={closeSlider}
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-400"
              >
                &times;
              </button>
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-5xl hover:text-blue-400"
              >
                &#10094;
              </button>
              <button
                onClick={showNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-5xl hover:text-blue-400"
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
