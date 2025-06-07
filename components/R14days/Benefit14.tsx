import Image from "next/image";

export default function Benefit14() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Left image */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <Image
          src="/benefits.webp"
          alt="Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2">Transform Lives</p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4">
          Benefits of our retreats 
        </h1>
        <p className="text-gray-800 font-semibold mb-4">
          Recenter Your Mind, Rejuvenate Your Body, and Return Refreshed
        </p>
        <p className="text-gray-600 mb-6">
          Step away from the noise of daily life and immerse yourself in yoga retreat in the heart
          of Rishikesh. Practice authentic Himalayan yoga, enjoy sattvic meals, connect with
          yourself—and leave lighter, clearer, and deeply restored.
        </p>

        {/* Buttons */}
        {/* <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-[#150e70] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded shadow-md">
            Reserve Your Spot
          </button>
          <button className="flex items-center gap-2 border-2 border-[#150e70] text-[#150e70] hover:bg-purple-50 font-semibold py-3 px-6 rounded shadow-sm">
            📅 View Full Schedule
          </button>
        </div> */}

      </div>
    </section>
  );
}
