import React from 'react';
import Image from 'next/image';

const SpaHero21: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden mt-[5rem] bg-black">
      {/* Background image with optimized layout */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/RetreatBG/4.png"
          alt="21 Days Yoga Wellness Retreat Background"
          fill
          priority={false}
          loading="eager"
          className="object-cover w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
          21 Days Yoga Wellness Retreat – A Journey to Self Discovery
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Find inner peace and rejuvenate your spirit with our transformative yoga experience in the serene beaches of Goa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#program"
            className="bg-[#150e70] hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition duration-300"
          >
            Explore Program
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-medium px-8 py-3 rounded-full transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        aria-hidden="true"
      >
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

export default SpaHero21;
