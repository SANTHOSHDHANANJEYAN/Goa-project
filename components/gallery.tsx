'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images: string[] = [
  '/gallery/1.WEBP', '/gallery/2.WEBP', '/gallery/3.WEBP',
  '/gallery/4.WEBP', '/gallery/5.WEBP', '/gallery/6.WEBP',
  '/gallery/7.WEBP', '/gallery/8.WEBP', '/gallery/9.WEBP',
  '/gallery/10.WEBP', '/gallery/11.WEBP', '/gallery/12.WEBP', '/gallery/13.WEBP'
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

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen px-4 py-12 sm:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-indigo-800 tracking-wide uppercase">
        Explore Our Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-md"
            onClick={() => openPreview(src, i)}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={500}
              height={400}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="relative max-w-[95%] sm:max-w-3xl md:max-w-4xl w-full bg-white p-4 rounded-3xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto max-h-[80vh] object-contain"
              />

              <button
                onClick={closePreview}
                className="absolute top-4 right-4 text-white text-3xl bg-black/50 hover:bg-red-500 rounded-full px-3 py-1"
              >
                &times;
              </button>

              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-indigo-300"
              >
                &#10094;
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-indigo-300"
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