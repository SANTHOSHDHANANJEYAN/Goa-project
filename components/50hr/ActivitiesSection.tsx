"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f7faff] to-white py-16 sm:py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#150e70] mb-16 text-center"
        >
          Activities Included in the Course
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
            >
              {/* Circular Image */}
              <div className="-mt-20 mb-6 relative">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full border-4 border-white shadow-lg"
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#150e70] text-center group-hover:text-[#4377B2] transition">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#150e70] mt-3 text-center leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
