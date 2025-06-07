"use client";

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

      {/* Play Button */}
      

      {/* Full-Width Content */}
      <div className="relative z-10 w-full text-center">
        <h2 className="text-xl font-normal uppercase tracking-wider mb-2 text-shadow-md font-sans">Rishikul Yogshala Goa</h2>
        <h1 className="font-sans text-white  md:text-[50px] font-semibold leading-relaxed">
          Beauty Of Goa
         
        </h1>
        <div className="mb-6 border-l-4 border-purple-400 pl-5 pt-[2.5rem]">
            <p className="text-lg md:text-xl font-light italic">
              “In the heart of Goa’s vibrant yet peaceful energy, Rishikul Yogshala stands as a gateway to deeper learning and healing. Our space offers the perfect blend of beachside calm and traditional teachings - making it a truly unique environment for your yoga journey.”
            </p>
          </div>


      </div>
    </section>
  );
};

export default Beauty7;
