import Image from "next/image";

export default function Importance21() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white gap-10">
      {/* Left content */}
      <article className="w-full lg:w-1/2 mb-10 lg:mb-0 space-y-4">
        <p className="text-orange-500 font-medium tracking-wide uppercase text-sm sm:text-base">
          Embrace Coastal Wellness
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70]">
          Importance of Holistic Wellness in Our Goa Retreat
        </h1>
        <p className="text-gray-800 font-semibold">
          Reconnect With Nature, Revive Your Energy & Refresh Your Soul
        </p>
        <p className="text-gray-600 leading-relaxed">
          Step into a serene retreat in Goa, where golden beaches, swaying palms, and the calming waves of the Arabian Sea create the perfect setting for healing and self-discovery. 
          Reconnect with your inner self through traditional yoga, guided meditation, and rejuvenating breathwork sessions by the sea. 
          Nourish your body with wholesome sattvic meals and embrace a slower, more mindful rhythm of life. 
          Leave our retreat feeling lighter, clearer, and truly transformed — inside and out.
        </p>
      </article>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/Imp&bene/imp1 - Copy.JPG"
          alt="Goa Yoga Retreat"
          width={800}
          height={500}
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
