'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const skills: string[] = [
  "Deep understanding of yoga philosophy and history",
  "Correct alignment and adjustment techniques",
  "Effective cueing and voice modulation for classes",
  "Hands-on experience with pranayama and meditation",
  "Anatomy knowledge relevant to yoga practice",
  "Confidence in leading group and private sessions",
  "Developing personalized yoga sequences",
  "Time management and class planning",
];

const KeySkills7: React.FC = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-12">
        Why Choose Rishikul Yogshala’s 7-Day Yoga Retreat in Goa?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Animated GIF */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="/Activity/keyskill.gif"
            alt="Animated yoga skills showcase"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Key Skills List */}
        <ul className="space-y-5">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-[#150e70] text-base sm:text-lg"
            >
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeySkills7;
