"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-fixed bg-cover bg-center text-white py-16 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/54.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Play Button */}
      <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              />
            </defs>
            <text fill="white" fontSize="8" fontWeight="600" letterSpacing="2">
              <textPath href="#circlePath" startOffset="0%">
                WATCH VIDEO • WATCH VIDEO • WATCH VIDEO • 
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:scale-125 transition-transform cursor-pointer shadow-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center mt-10">
        <h2 className="text-sm sm:text-base md:text-lg font-normal uppercase tracking-wider mb-2 font-sans text-shadow-md">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="font-sans text-white text-lg sm:text-xl md:text-2xl lg:text-[35px] font-semibold leading-relaxed">
          Join our life-changing community of over 34,000 students.
          <br />
          Become part of our family at one of the leading accredited
          <br />
          schools in Goa!
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-sm sm:text-base font-medium p-6 w-full max-w-5xl mx-auto bg-black bg-opacity-40 rounded-xl">
          <div>
            <p className="text-xl sm:text-2xl font-bold">33%</p>
            <p>graduates return to sign up for new programs</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">10,000+</p>
            <p>graduated online</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">6,000+</p>
            <p>graduated in Goa</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">18,000+</p>
            <p>graduated in India</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">★ 5★</p>
            <p>Google and Facebook</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">2k+</p>
            <p>Instagram & Facebook community</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
