import React from "react";
import Image from "next/image";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-[6rem] p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 uppercase tracking-wider mb-1">
          200-Hour Accredited Yoga Teacher Training
        </h2>
        <p className="text-lg text-gray-600">In Amersham, Bali</p>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Become a certified yoga teacher by Yoga Alliance
      </h1>
      <p className="text-lg mb-6 text-center">
        and take part in an exciting journey of 20 days in Bali
      </p>

      <div className="flex justify-center items-center mb-4">
        <span className="text-xl line-through text-gray-500 mr-4">USD 2350</span>
        <span className="text-4xl font-bold text-green-600">USD 2000</span>
      </div>
      <p className="text-center text-sm text-gray-700 mb-6">
        *early bird offer -15%
      </p>

      <div className="text-center mb-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full">
          BOOK YOUR SPOT
        </button>
      </div>

      <div className="text-center text-sm text-gray-700 mb-8">
        <p className="mb-1">3 spots left on the next training:</p>
        <p className="font-semibold">May 26th - Jun 16th, 2025</p>
      </div>

      {/* New Section */}
      <section className="mb-8 rounded-md overflow-hidden shadow-md flex md:flex-row flex-col gap-6 md:gap-12">
  <div className="relative w-full md:w-1/2 h-64 md:h-auto">
    <Image
      src="https://i.ibb.co/zJpVn5G/yoga-group-waterfall.jpg" // Replace with your actual image URL
      alt="Yoga practitioners by a waterfall"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="bg-gray-100 p-6 text-center md:text-left flex flex-col justify-center">
    <h3 className="text-xl font-semibold mb-2">After completing the course...</h3>
    <div className="flex justify-center md:justify-start items-center space-x-4 mb-2">
      <div className="relative w-12 h-12">
        <Image
          src="https://i.ibb.co/tY0F3W5/yoga-alliance-logo.png" // Replace with your actual logo URL
          alt="Yoga Alliance Certified"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative w-12 h-12">
        <Image
          src="https://i.ibb.co/tY0F3W5/yoga-alliance-logo.png" // Replace with your actual logo URL
          alt="Yoga Alliance Certified"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative w-12 h-12">
        <Image
          src="https://i.ibb.co/tY0F3W5/yoga-alliance-logo.png" // Replace with your actual logo URL
          alt="Yoga Alliance Certified"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
    <p className="text-sm text-gray-700">
      You will receive a Yoga Alliance certificate.
      <br />
      Recognised and accepted worldwide.
    </p>
  </div>
</section>

      {/* You can add more sections here with details about the training, curriculum, accommodation, etc. */}
    </div>
  );
};

export default TwoHundredHourTTPage;