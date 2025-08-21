'use client';

import Image from "next/image";

const Beauty7: React.FC = () => {
  return (
    <section className="relative w-full text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/beauty.jpg"
          alt="Beauty of Goa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative w-full text-center max-w-5xl mx-auto">
        <h2 className="text-sm sm:text-base md:text-lg font-normal uppercase tracking-widest mb-2 font-sans">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          Beauty Of Goa
        </h1>

        <div className="mb-6 border-l-4 border-purple-400 pl-5 pt-4 sm:pt-6">
          <p className="text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
            “In the heart of Goa’s vibrant yet peaceful energy, Rishikul Yogshala stands as a gateway to deeper learning and healing. Our space offers the perfect blend of beachside calm and traditional teachings — making it a truly unique environment for your yoga journey.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beauty7;
