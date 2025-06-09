'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function AccomdationGalleryPage() {
  const images = [
    "/Food/1.jpg", "/Food/2.jpg", "/Food/3.jpg", "/Food/3.jpg", "/Food/4.jpg",
    "/Food/5.jpg", "/Food/6.jpg", "/Food/7.jpg", "/Food/8.jpg", "/Food/9.jpg",
    "/Food/10.JPG", "/Food/11.jpg", "/Food/12.jpg", "/Food/13.jpg"
  ];

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section
      className="relative min-h-screen py-12 px-4 md:px-10 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/gallery/bagal.jpg')" }}
    >
      {/* Preload background using Next Image */}
      <Image
        src="/gallery/bagal.jpg"
        alt="Preload Background"
        width={10}
        height={10}
        className="hidden"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-600 drop-shadow-lg pt-[5rem]">
          FOOD & DISHES
        </h1>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer"
              onClick={() => setPreview(src)}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={500}
                  height={300}
                  loading="lazy"
                  placeholder="empty"
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {preview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreview(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setPreview(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
