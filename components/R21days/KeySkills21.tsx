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

const KeySkills21: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-10 leading-snug">
        Why Choose Rishikul Yogshala’s 14-Days Yoga Retreat in Goa?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Skills List - Left on desktop, below on mobile */}
        <ul className="space-y-5 order-2 lg:order-1">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#150e70] text-base sm:text-lg">
              <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>

        {/* Image - Right on desktop, above on mobile */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden order-1 lg:order-2">
          <Image
            src="/Activity/keyskill.gif"
            alt="Yoga training skills"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default KeySkills21;
