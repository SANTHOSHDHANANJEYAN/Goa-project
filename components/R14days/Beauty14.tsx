'use client';

import React from "react";

const Beauty7: React.FC = () => {
  return (
    <section
      className="relative w-full bg-fixed bg-cover bg-center text-white py-16 px-4 md:px-8"
      style={{
        backgroundImage: "url('/beauty.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Full-Width Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal uppercase tracking-wider mb-2 font-sans text-gray-200 text-shadow-md">
          Rishikul Yogshala Goa
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-semibold leading-snug md:leading-relaxed font-sans mb-6">
          Beauty Of Goa
        </h1>

        <div className="inline-block text-left border-l-4 border-purple-400 pl-5 pt-6 md:pt-8">
          <p className="text-base sm:text-lg md:text-xl font-light italic text-gray-100 leading-relaxed">
            “In the heart of Goa’s vibrant yet peaceful energy, Rishikul Yogshala stands as a gateway to deeper learning and healing. Our space offers the perfect blend of beachside calm and traditional teachings — making it a truly unique environment for your yoga journey.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beauty7;
