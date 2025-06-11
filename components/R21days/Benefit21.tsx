import Image from "next/image";

export default function Benefit21() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Left image */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <Image
          src="/Imp&bene/bene - Copy.jpg"
          alt="Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg h-[22rem] w-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2 text-sm sm:text-base">
          Transform Lives
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4 leading-tight">
          Benefits of our retreats 
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Recenter Your Mind, Rejuvenate Your Body, and Return Refreshed
        </p>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          Escape the noise and chaos of daily life and step into a sanctuary of peace in the heart of Rishikesh. Surrounded by the sacred Himalayas and the flowing Ganga, our retreat offers a chance to reconnect with your true self.
          Experience the healing power of authentic Himalayan yoga, guided meditation, and mindful breathwork. Nourish your body with pure sattvic meals and embrace a slower, more intentional rhythm.
          Leave behind stress and stagnation and return home feeling lighter, clearer, and deeply rejuvenated in body, mind, and soul.
        </p>
      </div>

    </section>
  );
}
