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
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-[1rem]">
        Why Choose Rishikul Yogshala’s 7-Day Yoga Retreat in Goa?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12rem] items-center ">

         {/* Right: Image */}
        <div className="relative rounded-xl overflow-hidden min-h-[500px] w-full">
          <Image
            src="/Activity/keyskill.gif" // Replace this with your actual image path
            alt="Yoga training skills"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Left: Skills List */}
        <ul className="space-y-5">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#150e70] text-lg">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>

       
      </div>
    </section>
  );
};

export default KeySkills7;
