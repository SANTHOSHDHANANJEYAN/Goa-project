"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const TwoHundredHourTTPage = () => {
  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/dacf20d1-7a8f-4da2-b27e-da4c18e5be45.png')" }}>
      {/* Overlay to darken background for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 mt-[6rem] p-6 md:p-12 max-w-4xl mx-auto text-white">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-indigo-300 uppercase tracking-wider mb-1">
            21-days Accredited Yoga Teacher Training
          </h2>
          <p className="text-lg text-gray-200">In Amersham, Bali</p>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Become a certified yoga teacher by Yoga Alliance
        </h1>
        <p className="text-lg mb-6 text-center">
          and take part in an exciting journey of 21 days in Bali
        </p>

        <div className="flex justify-center items-center mb-4">
          <span className="text-xl line-through text-gray-300 mr-4">USD 2350</span>
          <span className="text-4xl font-bold text-green-400">USD 2000</span>
        </div>
        <p className="text-center text-sm text-gray-300 mb-6">
          *early bird offer -15%
        </p>

        <div className="text-center mb-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full">
            BOOK YOUR SPOT
          </button>
        </div>

        <div className="text-center text-sm text-gray-200 mb-8">
          <p className="mb-1">3 spots left on the next training:</p>
          <p className="font-semibold">May 26th - Jun 16th, 2025</p>
        </div>

        {/* Course Info Section */}
        <section className="bg-white bg-opacity-10 rounded-xl p-6 text-center mb-12">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
            After completing the course...
          </h3>
          <div className="flex justify-center items-center gap-6 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-12 h-12">
                <Image
                  src="/rys 200.png"
                  alt={`RYS ${i * 100}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-200">
            You will receive a Yoga Alliance certificate.
            <br />
            Recognised and accepted worldwide.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TwoHundredHourTTPage;
