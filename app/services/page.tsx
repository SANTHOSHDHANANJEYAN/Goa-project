import React from "react";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-6 p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
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

      <div className="text-center text-sm text-gray-700">
        <p className="mb-1">3 spots left on the next training:</p>
        <p className="font-semibold">May 26th - Jun 16th, 2025</p>
      </div>

      {/* You can add more sections here with details about the training, curriculum, accommodation, etc. */}
    </div>
  );
};

export default TwoHundredHourTTPage;