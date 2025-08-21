'use client';

import Image from "next/image";

export default function OurRooms21() {
  return (
    <section
      role="region"
      aria-label="Our Rooms at Rishikul Yogshala Goa"
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[450px]"
      style={{ backgroundImage: "url('/room.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Our Rooms
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-10">
          Our rooms at Rishikul Yogshala Goa are thoughtfully designed to offer a peaceful and comfortable space for rest, reflection, and rejuvenation. Surrounded by the calming energy of nature and just moments away from the beach, each room provides a serene escape from the outside world.
        </p>

        {/* Optional CTA */}
        <a
          href="/book"
          className="inline-block mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Book a Room
        </a>
      </div>
    </section>
  );
}
