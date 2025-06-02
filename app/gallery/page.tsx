'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/gallery/1.WEBP', title: 'Accomdation', slug: '/components/AccomdationGallery' },
  { src: '/gallery/2.WEBP', title: 'Excursion', slug: '/components/ExcursionGallery' },
  { src: '/gallery/3.WEBP', title: 'Food and Dishes', slug: '/components/FoodGallery' },
  { src: '/gallery/4.WEBP', title: 'Yoga & Certification', slug: '/components/YCGallery' },
];

export default function GalleryPage() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen pt-[7rem] px-4 sm:px-6 lg:px-16 pb-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-16 drop-shadow tracking-tight uppercase">
        Explore Our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map(({ src, slug, title }, i) => (
          <Link key={i} href={`/gallery/${slug}`} className="group block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-indigo-100 dark:border-gray-700"
            >
              <Image
                src={src}
                alt={title}
                width={600}
                height={400}
                className="w-full h-[29rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 backdrop-blur-sm">
                <h2 className="text-white text-lg font-semibold drop-shadow-sm">{title}</h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
