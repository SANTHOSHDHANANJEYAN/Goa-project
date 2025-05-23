'use client'; // only if you're using App Router and client-side behavior

import Image from "next/image";

export default function OurRooms21() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[750px]"
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
          Palm Paradise Resort amidst jungle paradise in Goa
        </p>

        <div className="flex flex-col text-left max-w-3xl mx-auto gap-12 items-center pt-[2rem]">
          <div className="flex items-start space-x-4">
            <img
              src="/icons/waterfall-icon.svg"
              alt="Waterfalls"
              className="w-8 h-8 mt-1"
            />
            <p>
              <strong>Discover Goa&apos;s cascade gems:</strong>
              <br />
              more than 10 waterfalls within 10 km
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/icons/nature-icon.svg"
              alt="Nature parks"
              className="w-8 h-8 mt-1"
            />
            <p>
              <strong>Exploring Goa’s natural beauty:</strong>
              <br />
              3 biggest parks in a 20-minute drive
            </p>
          </div>

          <div className="flex items-start space-x-4 pl-[3rem]">
            <img
              src="/icons/beach-icon.svg"
              alt="Beaches"
              className="w-8 h-8 mt-1"
            />
            <p>
              <strong>Enjoy swimming, surfing and relaxation:</strong>
              <br />
              at Goa’s 3 beaches within 10 km
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
