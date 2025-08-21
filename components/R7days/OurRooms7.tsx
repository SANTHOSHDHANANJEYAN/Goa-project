'use client';

import Image from "next/image";

export default function OurRooms7() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-20 md:py-24 mb-16 md:mb-20 h-[380px] sm:h-[420px] md:h-[450px]"
      style={{ backgroundImage: "url('/rooms11.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-base sm:text-lg uppercase tracking-wide text-gray-200 mb-2">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Our Rooms
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 leading-relaxed">
          Our rooms at Rishikul Yogshala Goa are thoughtfully designed to offer a peaceful and comfortable space for rest, reflection, and rejuvenation. Surrounded by the calming energy of nature and just moments away from the beach, each room provides a serene escape from the outside world.
        </p>
      </div>
    </section>
  );
}
