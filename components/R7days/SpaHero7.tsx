import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden mt-[5rem]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/7home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          7-Day Yoga Retreat in Goa
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Find inner peace and rejuvenate your spirit with our transformative yoga experience in the serene beaches of Goa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#program" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-full  duration-300"
          >
            Explore Program
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-medium px-8 py-3 rounded-full  duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;