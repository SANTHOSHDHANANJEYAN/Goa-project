'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function AccomdationGalleryPage() {
  const images = [
    "/YogaCertificate/1.jpg", "/YogaCertificate/2.jpg", "/YogaCertificate/3.jpg",
    "/YogaCertificate/4.jpg", "/YogaCertificate/5.jpg", "/YogaCertificate/6.jpg",
    "/YogaCertificate/7.jpg", "/YogaCertificate/8.jpg", "/YogaCertificate/9.jpg",
    "/YogaCertificate/10.jpg", "/YogaCertificate/11.jpg", "/YogaCertificate/100.jpg",
    "/YogaCertificate/102.jpg", "/YogaCertificate/108.jpg", "/YogaCertificate/109.jpg",
    "/YogaCertificate/111.jpg", "/YogaCertificate/112.jpg", "/YogaCertificate/113.jpg",
    "/YogaCertificate/115.jpg", "/YogaCertificate/116.jpg", "/YogaCertificate/117.jpg",
    "/YogaCertificate/119.jpg", "/YogaCertificate/120.jpg",
  ];

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section
      className="relative min-h-screen py-12 px-4 md:px-10 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/gallery/bagal.jpg')" }}
    >
      {/* Preload the background image with Next.js optimization */}
      <Image
        src="/gallery/bagal.jpg"
        alt="Preload Background"
        width={10}
        height={10}
        className="hidden"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-600 drop-shadow-lg pt-[5rem]">
          YOGA & CERTIFICATION
        </h1>

        {/* Masonry-style image layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer"
              onClick={() => setPreview(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={600}
                height={400}
                loading="lazy"
                placeholder="empty"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl"
              />
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
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
              loading="eager"
            />
            <button
              className="absolute top-2 right-4 text-white text-4xl font-bold"
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
