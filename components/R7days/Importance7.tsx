import Image from "next/image";

export default function Importance7() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-white gap-8">
      {/* Left content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2">
          Transform Lives Through Holistic Wellness
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4">
          Importance of Holistic wellness in our Retreat
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Recenter Your Mind, Rejuvenate Your Body, and Return Renewed
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          Step into a serene retreat in Rishikesh, where the Himalayas and Ganga river create the perfect space for healing.
          Reconnect with yourself through traditional yoga, meditation, and breathwork. Nourish your body with sattvic meals
          and embrace mindful silence. Leave feeling lighter, clearer, and truly transformed — inside and out.
        </p>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[20rem] relative">
          <Image
            src="/Imp&bene/imp1 - Copy.JPG"
            alt="Yoga Retreat"
            fill
            className="rounded-xl shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
