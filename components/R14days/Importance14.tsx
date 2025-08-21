import Image from "next/image";

export default function Importance14() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white gap-8">
      {/* Left content */}
      <div className="w-full lg:w-1/2">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2 text-sm sm:text-base">
          Transform Lives Through Holistic Wellness
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4 leading-snug">
          Importance of Holistic Wellness in our Retreat
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Recenter Your Mind, Rejuvenate Your Body, and Return Renewed
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Step into a serene retreat in Rishikesh, where the Himalayas and Ganga river create the perfect space for healing. Reconnect with yourself through traditional yoga, meditation, and breathwork. Nourish your body with sattvic meals and embrace mindful silence. Leave feeling lighter, clearer, and truly transformed — inside and out.
        </p>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/Imp&bene/imp1 - Copy.JPG"
          alt="Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
          priority
        />
      </div>
    </section>
  );
}
