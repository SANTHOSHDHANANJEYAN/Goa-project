// components/AboutTraining100.tsx
"use client";
import React, { memo } from "react";
import { MdHotelClass } from "react-icons/md";
import Image from "next/image";

const AboutTraining100 = () => {
  return (
    <section className="relative py-14 px-4 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-indigo-900 rounded-full inline-block" />
            About the Training
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-6 leading-snug">
            Join us for <br />
            100 Hrs Multi Style Yoga Teacher Training
          </h2>

          <ul className="space-y-3 text-[#150e70] text-base leading-relaxed">
            {[
              "Yoga Alliance Accredited Certificate (valid worldwide)",
              "12-Days / 11-Nights in a luxurious boutique resort in Goa",
              "Three healthy vegan/vegetarian buffet meals daily",
              "Daily Asana Practice, Meditation & Pranayama Sessions",
              "Teaching Methodology & Hands-on Teaching Practice",
              "Comfortable accommodation in a peaceful, nature-filled setting",
              "Small Group Size for personalized attention and guidance",
              "Personal Growth & Transformation in a supportive community",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <MdHotelClass className="text-[#150e70] flex-shrink-0 mt-1" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative h-[300px]">
            <Image
              src="/aboutpics/116.jpg"
              alt="Yoga Group"
              className="rounded-xl object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative h-[150px]">
            <Image
              src="/aboutpics/222.jpg"
              alt="Vegan Food"
              className="rounded-xl object-cover"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 300px"
            />
          </div>
          <div className="relative h-[150px]">
            <Image
              src="/aboutpics/242.jpg"
              alt="Resort Room"
              className="rounded-xl object-cover"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutTraining100);
