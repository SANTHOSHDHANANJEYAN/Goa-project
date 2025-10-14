'use client';
import React from 'react';

export default function OurExcursions() {
  return (
    <section className="bg-[#f4f5f3] py-16 px-6 sm:px-10 lg:px-20 text-[#262626] font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section 1 - Program Types */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#150e70] text-center mb-8">
            Types of 21 Day Intensive Yoga Immersion Programs
          </h2>

          <ul className="space-y-6 text-base sm:text-lg text-gray-800">
            <li>
              <strong>Online Programs:</strong> Offer flexibility and accessibility, with some programs providing lifetime access to recordings.
            </li>
            <li>
              <strong>In-Person Programs:</strong> Provide a more immersive experience, often with expert instructors and a supportive community.
            </li>
            <li>
              <strong>Specialized Programs:</strong> Focus on specific areas, such as Yoga Nidra, Sound Healing, or Reiki.
            </li>
          </ul>
        </div>

        {/* Section 2 - What to Expect */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#150e70] text-center mb-8">
            What to Expect
          </h3>

          <ul className="space-y-6 text-base sm:text-lg text-gray-800">
            <li>
              <strong>Daily Yoga Practices:</strong> Explore various yoga styles, breathing techniques, and meditation practices.
            </li>
            <li>
              <strong>Guided Sessions:</strong> Expert instructors provide guidance and support throughout the program.
            </li>
            <li>
              <strong>Community Support:</strong> Connect with like-minded individuals and share experiences on your yogic and spiritual journey.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
