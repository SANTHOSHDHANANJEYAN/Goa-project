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
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 pb-[12rem]">
        <div className="relative w-28 h-28">
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
            <div className="w-14 h-14 bg-[transparent] bg-opacity-90 rounded-full flex items-center justify-center hover:scale-125 transition-transform cursor-pointer shadow-xl">
              <svg className="w-[4rem] h-[7rem] text-white " viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Content */}
      <div className="relative z-10 w-full text-center">
        <h2 className="text-xl font-normal uppercase tracking-wider mb-2 text-shadow-md font-sans">Rishikul Yogshala Goa</h2>
        <h1 className="font-sans text-white  md:text-[50px] font-semibold leading-relaxed">
          Beauty Of Goa
         
        </h1>

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
