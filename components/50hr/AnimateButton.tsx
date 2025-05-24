"use client";

import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative w-full bg-fixed bg-cover bg-center text-white py-16 px-4"
      style={{ backgroundImage: "url('/54.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Video Play Button */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <div
          className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              />
            </defs>
            <text fill="white" fontSize="6" fontWeight="600" letterSpacing="1.5">
              <textPath href="#circlePath" startOffset="0%">
                WATCH VIDEO • WATCH VIDEO •
              </textPath>
            </text>
          </svg>
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
      <div className="relative z-10 w-full text-center px-4 mt-10">
        <h2 className="text-xs sm:text-sm uppercase tracking-wider mb-2 font-sans">
          Rishikul Yogshala Goa
        </h2>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed font-sans">
          Join our life-changing community of over 34,000 students.
          <br />
          Become part of our family at one of the leading accredited
          <br />
          schools in Goa!
        </h1>

        {/* Stats */}
        <div className="mt-10 w-full max-w-xl mx-auto grid grid-cols-1 gap-6 bg-black bg-opacity-40 rounded-xl p-6 text-sm sm:text-base font-medium">
          <div className="text-center">
            <p className="text-xl font-bold">33%</p>
            <p>graduates return to sign up for new programs</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">10,000+</p>
            <p>graduated online</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">6,000+</p>
            <p>graduated in Goa</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">18,000+</p>
            <p>graduated in India</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">★ 5★</p>
            <p>Google and Facebook</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">2k+</p>
            <p>Instagram & Facebook community</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4 overflow-auto">
          <div className="relative w-full max-w-[90vw] sm:max-w-2xl aspect-video mt-8 mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Intro Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
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
