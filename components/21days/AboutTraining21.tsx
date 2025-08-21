// components/AboutTraining.tsx
"use client";

import { MdHotelClass } from "react-icons/md";
import Image from "next/image";

const features = [
  "Yoga Alliance Accredited Certificate (valid worldwide)",
  "21-Days / 20-Nights in a luxurious boutique resort in Goa",
  "Three healthy vegan/vegetarian buffet meals daily",
  "Daily Asana Practice, Meditation & Pranayama Sessions",
  "Teaching Methodology & Hands-on Teaching Practice",
  "Comfortable accommodation in a peaceful, nature-filled setting",
  "Small Group Size for personalized attention and guidance",
  "Personal Growth & Transformation in a supportive community",
];

export default function AboutTraining() {
  return (
    <section className="relative py-14 px-5 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <div>
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-indigo-900 rounded-full" />
            About the Training
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-6">
            Join us for 21 days yoga immersion Course
          </h2>

          <ul className="space-y-4 text-[#150e70]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <MdHotelClass className="text-[#150e70] mt-1 flex-shrink-0" size={22} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Content */}
        <div className="grid grid-cols-2 gap-4 pb-2">
          {/* Main Image */}
          <div className="col-span-2">
            <Image
              src="/aboutpics/000.jpg"
              alt="Yoga Group"
              className="rounded-xl object-cover w-full h-[325px]"
              width={600}
              height={325}
              priority // Optimize LCP
            />
          </div>

          {/* Secondary Images */}
          <div>
            <Image
              src="/aboutpics/113.jpg"
              alt="Vegan Food"
              className="rounded-xl object-cover w-full h-[160px]"
              width={300}
              height={160}
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src="/aboutpics/115.jpg"
              alt="Resort Room"
              className="rounded-xl object-cover w-full h-[160px]"
              width={300}
              height={160}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
