"use client";

import React from "react";
import Image from "next/image";

interface Activity {
  title: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Temple Visit",
    description: "Discover peace at Goa’s ancient temples.",
    image: "/Activity/temple.png",
  },
  {
    title: "Visit Arambol Beach",
    description: "Relax and unwind at Arambol’s scenic shores.",
    image: "/Activity/beach.jpg",
  },
  {
    title: "Cultural Visit",
    description: "Explore Goa’s vibrant traditions and art.",
    image: "/Activity/cultural.png",
  },
  {
    title: "Satsang",
    description:
      "Join soulful gatherings with music, wisdom, and spiritual dialogue.",
    image: "/Activity/satsang.png",
  },
  {
    title: "Group Discussion",
    description: "Share and learn through group talks.",
    image: "/Activity/group.png",
  },
  {
    title: "Cooking Classes",
    description: "Learn to cook simple sattvic meals.",
    image: "/Activity/cooking.jpg",
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className="bg-transparent text-center relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Optional radial background decoration */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#150e70] mb-12 sm:mb-16">
          Activities Included in the Course
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
            >
              <div className="-mt-12 mb-4">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={96}
                  height={96}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#150e70]">
                {activity.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
