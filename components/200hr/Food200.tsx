"use client";

import Image from "next/image";

const Food200 = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8 text-left">
      {/* Left Image */}
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src="/Food/7.jpg"
          alt="Yogic Food at Rishikul Yogshala Goa"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl object-cover w-full max-h-[400px] transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Right Text */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
          Yogic Food
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Simple Yogic and Nutritious food is part of the yogic culture at Rishikul Yogshala Goa.
          In <strong>200 Hours Yoga Teacher Training In Goa</strong>, healthy and delicious vegetarian meals made
          from local seasonal vegetables will be served to you. The food prepared will fill your Indian
          taste buds and also keep you fully energized, yet feeling light and grounded in your inner experience.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We serve <strong>three tasty meals a day</strong> which adhere to the required energy during the course environment.
          From morning’s fruits and herbal teas to healthy lunches and comforting dinners — these not only fuel
          your body and mind, but also support your spiritual growth and nourishment.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The <em>sattvic</em> (pure and balanced) diet at our Goa yoga center helps in improving digestion,
          retaining concentration, and providing an experience of calmness as you move deeper into your yogic practice.
        </p>
      </div>
    </div>
  );
};

export default Food200;
