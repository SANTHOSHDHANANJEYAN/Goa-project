import Image from "next/image";

export default function Importance21() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white gap-[2rem]">
      {/* Left content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <p className="text-orange-500 font-medium tracking-wide uppercase mb-2">Transform Lives</p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-[#150e70] mb-4">
          Importance of Holistic wellness in our Retreat
        </h1>
        <p className="text-gray-800 font-semibold mb-4">
          Recenter Your Mind, Rejuvenate Your Body, and Return Refreshed
        </p>
        <p className="text-gray-600 mb-6">
            Step away from the constant noise and distractions of everyday life.
            Immerse yourself in a transformative yoga retreat in the heart of Rishikesh.
            Surrounded by the serene Himalayan foothills and sacred Ganga river,
            You’ll experience the depth of traditional Himalayan yoga practices.
            Nourish your body with wholesome, sattvic vegetarian meals each day.
            Connect deeply with your inner self through meditation and mindful silence.
            Rediscover balance, clarity, and a sense of calm in a sacred space.
            Leave feeling lighter, clearer, and profoundly rejuvenated.
        </p>



      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/importance.webp"
          alt="Yoga Retreat"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
