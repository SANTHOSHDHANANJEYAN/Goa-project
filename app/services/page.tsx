"use client";

import React from "react";
import Image from "next/image";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-24 px-6 md:px-12 max-w-5xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-sm md:text-base font-semibold text-indigo-600 uppercase tracking-wide">
          21-Day Accredited Yoga Teacher Training
        </h2>
        <p className="text-lg text-gray-600">In Amersham, Bali</p>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Join an exciting and life-changing 21-day journey in Bali
      </p>

      {/* Pricing Section */}
      <div className="flex justify-center items-center text-center mb-2">
        <span className="text-xl line-through text-gray-400 mr-4">USD 2350</span>
        <span className="text-4xl font-bold text-green-600">USD 2000</span>
      </div>
      <p className="text-center text-sm text-gray-600 mb-6">
        *Early bird offer – Save 15%
      </p>

      {/* CTA Button */}
      <div className="text-center mb-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
          Book Your Spot
        </button>
      </div>

      {/* Upcoming Dates */}
      <div className="text-center text-sm text-gray-700 mb-12">
        <p className="mb-1">Only <strong>3 spots left</strong> for the next training:</p>
        <p className="font-semibold">May 26th – June 16th, 2025</p>
      </div>

      {/* Image and Certification Section */}
      <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
        <div className="w-full h-auto">
          <Image
            src="/course2.jpg"
            alt="Yoga retreat in Bali"
            width={1200}
            height={600}
            className="w-full object-cover max-h-[600px]"
            priority
          />
        </div>
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            After Completing the Course...
          </h3>

          {/* Certification Logos */}
          <div className="flex justify-center items-center gap-6 mb-4">
            {["200", "300", "500"].map((level, i) => (
              <div key={i} className="relative w-12 h-12">
                <Image
                  src={`/rys ${level}.png`}
                  alt={`RYS ${level} Badge`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600">
            You'll receive a Yoga Alliance certificate —<br />
            internationally recognized and accepted.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TwoHundredHourTTPage;
