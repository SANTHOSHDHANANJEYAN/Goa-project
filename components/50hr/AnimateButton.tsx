"use client";

import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative w-full bg-fixed bg-cover bg-center text-white py-16 px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/54.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Video Play Button */}
      <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-10">
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Circular Text Spinner */}
          <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              />
            </defs>
            <text fill="white" fontSize="6" fontWeight="600" letterSpacing="1.5">
              <textPath href="#circlePath" startOffset="0%">
                WATCH VIDEO • WATCH VIDEO • WATCH VIDEO •
              </textPath>
            </text>
          </svg>

          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-10 hover:scale-110 transition-transform shadow-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Headings */}
      <div className="relative z-10 w-full text-center mt-10 px-2 sm:px-6">
        <h2 className="text-xs sm:text-sm md:text-base uppercase tracking-widest mb-2 font-sans text-shadow-md">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[35px] font-semibold leading-relaxed font-sans">
          Join our life-changing community of over 34,000 students.
          <br />
          Become part of our family at one of the leading accredited
          <br />
          schools in Goa!
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 sm:mt-16 text-sm sm:text-base font-medium p-4 sm:p-6 w-full max-w-6xl mx-auto bg-black bg-opacity-40 rounded-xl">
          <div><p className="text-xl font-bold">33%</p><p>graduates return to sign up for new programs</p></div>
          <div><p className="text-xl font-bold">10,000+</p><p>graduated online</p></div>
          <div><p className="text-xl font-bold">6,000+</p><p>graduated in Goa</p></div>
          <div><p className="text-xl font-bold">18,000+</p><p>graduated in India</p></div>
          <div><p className="text-xl font-bold">★ 5★</p><p>Google and Facebook</p></div>
          <div><p className="text-xl font-bold">2k+</p><p>Instagram & Facebook community</p></div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Intro Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
