import Image from "next/image";

export default function Importance7() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 bg-white">
      {/* Left content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2 text-sm sm:text-base">
          Transform Lives
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4 leading-tight">
          Importance of Holistic wellness in our Retreat
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Recenter Your Mind, Rejuvenate Your Body, and Return Refreshed
        </p>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          Step away from the noise of daily life and immerse yourself in yoga retreat in the heart
          of Rishikesh. Practice authentic Himalayan yoga, enjoy sattvic meals, connect with
          yourself—and leave lighter, clearer, and deeply restored.
        </p>

        {/* Buttons */}
        {/* <div className="flex flex-wrap gap-3 mb-6">
          <button className="bg-[#150e70] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded shadow-md text-sm sm:text-base">
            Reserve Your Spot
          </button>
          <button className="flex items-center gap-2 border-2 border-[#150e70] text-[#150e70] hover:bg-purple-50 font-semibold py-3 px-6 rounded shadow-sm text-sm sm:text-base">
            📅 View Full Schedule
          </button>
        </div> */}

        {/* Trust Logos */}
  
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/importance.webp"
          alt="Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full max-w-full object-cover"
          style={{ height: "auto" }}
          priority
        />
      </div>
    </section>
  );
}
