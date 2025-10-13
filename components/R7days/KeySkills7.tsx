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

const schedule = [
  { time: "6:30 AM", text: "Gentle Asana Practice" },
  { time: "8:00 AM", text: "Mindful breath work in Pranayam" },
  { time: "9:00 AM", text: "Nutritious Breakfast" },
  { time: "10:30 AM Onwards", text: "Treatments, Optional Activities and Lunch" },
  { time: "4:15 PM Onwards", text: "Tea Break, Sunset Meditation / Nature Walk" },
  { time: "6:30 PM", text: "Nutritious Dinner" },
  { time: "8:00 PM", text: "Relaxation and Free Time" },
];

const KeySkills7: React.FC = () => {
  return (
    <section className="bg-white text-black py-14 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Daily Tentative Schedule */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 leading-snug">
          Daily Tentative Schedule
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6">
          Daily schedule for this 7 Day Yoga Holiday Retreat adheres gently to the following rhythm—moving, being mindful, and peace. With Hatha Yoga, Pranayam and guided meditation, the schedule is tailored towards the restoration of energy, the alleviation of tension, and the promotion of enduring well-being.
        </p>
        <ul className="max-w-2xl mx-auto space-y-3">
          {schedule.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold">{item.time}</span>
              <span>–</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-snug">
        Why Choose Rishikul Yogshala’s 7-Day Yoga Retreat in Goa?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[5/3] rounded-xl overflow-hidden">
          <Image
            src="/Activity/keyskill.gif"
            alt="Animated yoga skills showcase"
            fill
            loading="lazy"
            className="object-cover object-center rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Skills List */}
        <ul className="space-y-5">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-black text-base sm:text-lg leading-relaxed"
              aria-label={`Key skill ${idx + 1}`}
            >
              <FaCheckCircle className="text-black mt-1 shrink-0" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeySkills7;