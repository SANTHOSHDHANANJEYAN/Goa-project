'use client';

import Image from "next/image";

export default function OurDinning21() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-96 sm:h-[450px] md:h-[550px]"
      style={{
        backgroundImage: "url('/dinning.jpg')",
      }}
      role="region"
      aria-label="Our Dining Experience"
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dining</h1>
        <p className="text-lg mb-10">
          At Rishikul Yogshala Goa, food is more than fuel - it’s a part of your healing journey. Our dining experience is rooted in the principles of sattvic living, offering freshly prepared vegetarian meals that nourish the body, calm the mind, and uplift the spirit.
        </p>
      </div>
    </section>
  );
}
