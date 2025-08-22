import Image from "next/image";

export default function Importance14() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white gap-8">
      {/* Left content */}
      <div className="w-full lg:w-1/2">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2 text-sm sm:text-base">
          Embrace Coastal Wellness
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4 leading-snug">
          Importance of Holistic Wellness in Our Goa Retreat
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Reconnect With Nature, Revive Your Energy & Refresh Your Soul
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Step into a serene retreat in Goa, where the golden beaches and the calming sound of the Arabian Sea create the perfect environment for healing and self-discovery.
          Reconnect with yourself through traditional yoga, guided meditation, and revitalizing breathwork while surrounded by lush coconut palms.
          Savor nourishing sattvic meals and embrace mindful living at your own pace.
          Leave our retreat feeling rejuvenated, lighter, and deeply transformed — inside and out.
        </p>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/Imp&bene/imp1 - Copy.JPG"
          alt="Goa Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
          priority
        />
      </div>
    </section>
  );
}
