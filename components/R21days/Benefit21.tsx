import Image from "next/image";

export default function Benefit21() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Left image */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <Image
          src="/Imp&bene/bene - Copy.jpg"
          alt="Goa Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full h-auto max-h-[28rem] object-cover"
        />
      </div>

      {/* Right content */}
      <article className="w-full lg:w-1/2 lg:pl-12">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2 text-sm sm:text-base">
          Awaken Your Inner Bliss
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#150e70] mb-6 leading-tight">
          Benefits of Our Goa Retreats
        </h1>
        <p className="text-gray-800 font-semibold mb-4 text-base sm:text-lg">
          Refresh Your Mind, Rejuvenate Your Body & Rediscover Your Soul
        </p>
        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          Escape the hustle of daily life and immerse yourself in the serene charm of Goa’s pristine beaches. 
          Surrounded by swaying palms and the soothing sounds of the Arabian Sea, our retreat offers a chance to reconnect with your inner self. 
          Experience revitalizing sunrise yoga sessions, guided meditation, and calming breathwork while soaking in the coastal breeze. 
          Relish nourishing sattvic meals and embrace a slower, more mindful rhythm of life. 
          Leave behind stress and chaos, returning home with a lighter heart, a clearer mind, and a deeply rejuvenated soul.
        </p>
      </article>
    </section>
  );
}
