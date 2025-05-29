'use client';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const skills: string[] = [
  "Scenic Location: Retreat set in a tranquil, picturesque spot in Goa with beach and nature views.",
  "Expert Guidance: Led by experienced yoga instructors specializing in Hatha, Vinyasa, and Ashtanga.",
  "All Levels Welcome: Classes tailored to beginners and advanced practitioners alike.",
  "Holistic Approach: Includes meditation, pranayama, and mindfulness workshops for full well-being.",
  "Personalized Experience: Focus on individual growth and support throughout the retreat.",
  "Affordable Pricing: High-quality retreat at a budget-friendly rate.",
  "Comfortable Stay: Clean, cozy, and fully equipped accommodations.",
  "Transformative Journey: Designed for deep relaxation, self-discovery, and spiritual renewal.",
];

const KeySkills7: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-[1rem]">
        Why Choose Rishikul Yogshala’s 7-Day Yoga Retreat in Goa?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Skills List */}
        <ul className="space-y-5">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#150e70] text-lg">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>

        {/* Right: Image */}
        <div className="relative rounded-xl overflow-hidden min-h-[500px] w-full">
          <Image
            src="/keyskill.avif" // Replace this with your actual image path
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

export default KeySkills7;
