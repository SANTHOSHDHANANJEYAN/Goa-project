'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const imageSlides = [
  '/HVA/Ashtanga 1.jpg',
  '/HVA/Ashtanga 5.jpg',
  '/HVA/Ashtanga2.jpg',
  '/HVA/Hatha 5.jpg',
  '/HVA/Hatha Yoga 1 .jpg',
  '/HVA/Hatha yoga 3.jpg',
  '/HVA/Hatha yoga 4.jpg',
  '/HVA/Vinyasa 5.jpg',
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imageSlides[current]}
            alt="Hero Slide"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Static Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 min-h-screen">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold leading-snug mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Flow, Relax, and Renew
          <br />
          <span className="text-yellow-400">– Carnival Capital Goa</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Awaken your spirit and embrace peace by the ocean breeze.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/Aboutyogshala" passHref>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Discover More →
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {imageSlides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-yellow-400 scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
