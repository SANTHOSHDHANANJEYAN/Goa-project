'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AccommodationGalleryPage() {
  const images = [
    "/Accomdation/1.jpg", "/Accomdation/2.jpg", "/Accomdation/3.webp", "/Accomdation/4.webp",
    "/Accomdation/5.avif", "/Accomdation/6.jpg", "/Accomdation/7.jpg", "/Accomdation/8.avif",
    "/Accomdation/9.jpg", "/Accomdation/10.jpg", "/Accomdation/11.avif", "/Accomdation/12.jpg",
    "/Accomdation/13.avif", "/Accomdation/14.avif", "/Accomdation/15.avif", "/Accomdation/16.avif",
    "/Accomdation/17.jpg", "/Accomdation/18.jpg", "/Accomdation/19.avif", "/Accomdation/20.jpg",
    "/Accomdation/21.avif"
  ];

  const [preview, setPreview] = useState<string | null>(null);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (preview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [preview]);

  return (
    <section
      className="relative min-h-screen py-12 px-4 md:px-10 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/gallery/bagal.jpg')" }} // Use your preferred fixed bg image here
    >
      {/* Preload background */}
      <Image
        src="/gallery/bagal.jpg"
        alt="Background"
        width={10}
        height={10}
        className="hidden"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content above overlay */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-yellow-600 drop-shadow-lg pt-[5rem]">
          ACCOMODATION
        </h1>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer"
              onClick={() => setPreview(src)}
            >
              <Image
                src={src}
                alt={`Accommodation Image ${index + 1}`}
                width={500}
                height={300}
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
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
          <div className="relative w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain"
              priority
            />
            <button
              className="absolute top-2 right-2 text-white text-4xl font-bold"
              onClick={() => setPreview(null)}
              aria-label="Close Preview"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
