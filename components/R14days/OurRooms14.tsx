'use client'; // only if you're using App Router and client-side behavior

import Image from "next/image";

export default function OurRooms14() {
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
          Comfort and peace await you at Palm Paradise Resort, nestled in Goa’s lush jungle.
        </p>

        <div className="flex flex-col text-left max-w-3xl mx-auto gap-12 items-center pt-[2rem]">
          <div className="flex items-start space-x-4 gap-[1rem]">
            <img
              src="/Accomdation/Ambience.png"
              alt="Waterfalls"
              className="w-[5rem] h-[5rem] mt-1"
            />
            <p>
              <strong>Cozy Ambiance:</strong>
              <br/>
             Relax in spacious, well-appointed rooms designed<br/>for your restful stay.  
            </p>
          </div>

          <div className="flex items-start space-x-4 gap-[1rem]">
            <img
              src="/Accomdation/Modern Amenities.png"
              alt="Nature parks"
              className="w-8 h-8 mt-1"
            />
            <p>
              <strong>Modern Amenities:</strong>
              <br/>
              Enjoy all the comforts you need, from cozy beds to<br/>clean bathrooms and Wi-Fi.
            </p>
          </div>

          <div className="flex items-start space-x-4 pl-[3rem] gap-[1rem]">
            <img
              src="/Accomdation/Scenic vews.png"
              alt="Beaches"
              className="w-8 h-8 mt-1"
            />
            <p>
              <strong>Scenic Views:</strong>
              <br/>
              Wake up to the calming sights and sounds of nature right<br/>outside your window.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
