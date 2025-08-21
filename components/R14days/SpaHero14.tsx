'use client';

import Image from 'next/image';
import React from 'react';

const SpaHero14: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/RetreatBG/3.png"
          alt="Retreat background"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/RetreatBG/3-blur.png" // optional low-res placeholder
        />
        
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          14 Days Yoga Detox Retreat – Balance Body & Mind
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Find inner peace and rejuvenate your spirit with our transformative yoga experience on the serene beaches of Goa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/Aboutyogshala"
            className="bg-[#150e70] hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition duration-300"
            aria-label="Explore the program"
          >
            Explore Program
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-medium px-8 py-3 rounded-full transition duration-300"
            aria-label="Book the retreat now"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
    </section>
  );
};

export default SpaHero14;
