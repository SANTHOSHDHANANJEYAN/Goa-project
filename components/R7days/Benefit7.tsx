'use client';

import Image from "next/image";

export default function Benefit7() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 bg-white gap-10">
      {/* Left image */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[22rem] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/Imp&bene/bene - Copy.jpg"
            alt="Goa Yoga Retreat"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            priority
          />
        </div>
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2 text-sm sm:text-base">
          Awaken Your Inner Bliss
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4 leading-tight">
          Benefits of Our Goa Retreats
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Rejuvenate by the Waves, Recharge Your Spirit & Refresh Your Soul
        </p>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          Escape the hustle of daily life and immerse yourself in the tranquil beauty of Goa’s golden beaches.
          Our retreat offers a unique blend of traditional yoga, meditation, and mindful practices right by the Arabian Sea.
          Experience soulful sunrise yoga sessions, guided breathwork, and deep relaxation under swaying palms.
          Relish nourishing sattvic meals while embracing the peaceful rhythm of coastal living.
          Leave behind stress and chaos, returning home fully recharged — with a renewed sense of balance, clarity, and inner harmony.
        </p>
      </div>
    </section>
  );
}
