'use client'; // only if you're using App Router and client-side behavior

import Image from "next/image";

export default function OurRooms21() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[450px]"
      style={{
        backgroundImage: "url('/room.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Rooms</h1>
        <p className="text-lg mb-10">
          Our rooms at Rishikul Yogshala Goa are thoughtfully designed to offer a peaceful and comfortable space for rest, reflection, and rejuvenation. Surrounded by the calming energy of nature and just moments away from the beach, each room provides a serene escape from the outside world.
        </p>


      </div>
    </section>
  );
}
