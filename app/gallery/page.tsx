'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images: string[] = [
  '/gallery/1.WEBP', '/gallery/2.WEBP', '/gallery/3.WEBP',
  '/gallery/4.WEBP', '/gallery/5.WEBP', '/gallery/6.WEBP',
  '/gallery/7.WEBP', '/gallery/8.WEBP', '/gallery/9.WEBP',
  '/gallery/10.WEBP', '/gallery/11.WEBP', '/gallery/12.WEBP', 
  '/gallery/13.WEBP', '/gallery/13.WEBP','/gallery/13.WEBP',
    '/gallery/1.WEBP', '/gallery/2.WEBP', '/gallery/3.WEBP',
  '/gallery/4.WEBP', '/gallery/5.WEBP', '/gallery/6.WEBP',
  '/gallery/7.WEBP', '/gallery/8.WEBP', '/gallery/9.WEBP',
  '/gallery/10.WEBP', '/gallery/11.WEBP', '/gallery/12.WEBP', 
  '/gallery/13.WEBP', '/gallery/13.WEBP','/gallery/13.WEBP',
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openPreview = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const closePreview = () => setSelectedImage(null);

  const showPrev = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setSelectedIndex(newIndex);
  };

  const showNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') closePreview();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-indigo-100 min-h-screen px-3 py-10 sm:px-6 md:px-12 lg:px-20 pt-[7rem]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-indigo-700 tracking-tight uppercase drop-shadow pb-[3rem]">
        Explore Our Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => openPreview(src, i)}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={500}
              height={400}
              className="w-full h-full object-cover aspect-[4/3] transition duration-300 hover:brightness-105"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="relative w-full max-w-4xl sm:max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected Preview"
                width={1200}
                height={800}
                className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-2 right-2 text-white text-2xl bg-black/50 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-indigo-300 px-2"
                aria-label="Previous"
              >
                &#10094;
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-indigo-300 px-2"
                aria-label="Next"
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
