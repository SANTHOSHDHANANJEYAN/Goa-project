'use client';

import Image from "next/image";

export default function Importance7() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-white gap-8">
      {/* Left content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2">
          Embrace Coastal Serenity
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4">
          Importance of Holistic Wellness in Our Goa Retreat
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Heal Your Mind, Rejuvenate Your Body & Refresh Your Soul
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Escape to the pristine beaches of Goa, where golden sands and soothing waves set the stage for ultimate relaxation.
          Reconnect with yourself through traditional yoga, meditation, and breathwork sessions by the sea.
          Enjoy nourishing sattvic meals and embrace mindful living amidst nature’s beauty. 
          Leave our retreat feeling lighter, recharged, and deeply transformed — inside and out.
        </p>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[20rem] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/Imp&bene/imp1 - Copy.JPG"
            alt="Goa Yoga Retreat"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
