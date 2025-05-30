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

     

      {/* Full-Width Content */}
      <div className="relative z-10 w-full text-center">
        <h2 className="text-xl font-normal uppercase tracking-wider mb-2 text-shadow-md font-sans">Rishikul Yogshala Goa</h2>
        <h1 className="font-sans text-white  md:text-[50px] font-semibold leading-relaxed">
          Beauty Of Goa
         
        </h1>
        <div className="mb-6 border-l-4 border-purple-400 pl-5 pt-[2.5rem]">
            <p className="text-lg md:text-xl font-light italic">
              “Goa is a tropical paradise known for its golden beaches, vibrant culture, and laid-back vibe. From scenic sunsets to Portuguese heritage, it’s the perfect blend of nature and charm.”
            </p>
          </div>

        {/* Full-Width Stats Grid */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-24 text-sm md:text-base font-medium bg-transparent bg-opacity-60 p-6 rounded-xl w-full max-w-none mt-[10rem]">
          <div>
            <p className="text-2xl font-bold">33%</p>
            <p>graduates return to sign up for new programs</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10,000+</p>
            <p>graduated online</p>
          </div>
          <div>
            <p className="text-2xl font-bold">6,000+</p>
            <p>graduated in Goa</p>
          </div>
          <div>
            <p className="text-2xl font-bold">18,000+</p>
            <p>graduated in India</p>
          </div>
          <div>
            <p className="text-2xl font-bold">★ 5★</p>
            <p>Google and Facebook</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2k+</p>
            <p>Instagram & Facebook community</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beauty7;
