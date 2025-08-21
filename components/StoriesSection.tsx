'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StoriesSection: React.FC = () => {
  return (
    <section className="relative text-center bg-transparent py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#150e70] mb-4 animate-slide-up">
          Rishikul Yogshala Goa – Your transformation starts here.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-[#150e70] mb-6 animate-slide-up animation-delay-200">
          A place to learn, love, and find your true path.
        </p>

        {/* Tagline */}
        <p className="text-lg text-gray-900 dark:text-gray-400 mb-10 animate-slide-up animation-delay-400">
          Whether you’re just beginning or have walked this path for years, you belong.
        </p>

        {/* Button */}
        <Link href="/Aboutyogshala">
          <button className="bg-[#150e70] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300">
            OUR STORIES
          </button>
        </Link>

        {/* Image */}
        <div className="mt-10 rounded-[3rem] overflow-hidden shadow-xl">
          <Image
            src="/stories.png"
            alt="Scenic Goa"
            width={1920}
            height={700}
            className="w-full h-auto rounded-[3rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
