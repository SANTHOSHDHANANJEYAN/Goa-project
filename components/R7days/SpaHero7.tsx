'use client';

import Image from 'next/image';
import React from 'react';

const SpaHero7: React.FC = () => {
  return (
    <div className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/RetreatBG/2.png"
        alt="Yoga retreat background in Goa"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 "
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          7 Days Yoga Holiday Retreat – Path to Serenity
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
          Find inner peace and rejuvenate your spirit with our transformative yoga experience in the serene beaches of Goa.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/Aboutyogshala"
            aria-label="Explore Program"
            className="bg-[#150e70] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Explore Program
          </a>
          <a
            href="/contact"
            aria-label="Book Now"
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default SpaHero7;
