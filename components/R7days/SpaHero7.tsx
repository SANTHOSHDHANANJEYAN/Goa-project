import React from 'react';

const SpaHero7: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[url('/gallery/11.WEBP')] bg-cover bg-center bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Running Text */}
      <div className="absolute top-4 w-full overflow-hidden z-20">
        <div className="whitespace-nowrap animate-marquee text-white text-sm md:text-base font-light">
          Rejuvenating Spa | Beachfront Yoga | Ayurvedic Treatments | Wellness Retreat | House of Om Goa |
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <p className="text-sm md:text-base tracking-widest uppercase mb-4">
          Rishikul Yogshala Goa
        </p>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Experience Tranquility Among Goa's Natural Beauty
        </h1>
      </div>
    </div>
  );
};

export default SpaHero7;
