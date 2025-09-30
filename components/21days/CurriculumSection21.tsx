"use client";

import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

const curriculum = [
  {
    title: "Daily Asana Practice",
    image: "/Curriculumimg/1.jpg",
    description:
      "Learn and practice Hatha, Vinyasa, and Restorative yoga to improve strength, flexibility, and posture. Each session is designed to deepen body awareness and energize your day.",
  },
  {
    title: "Pranayama & Breath Control",
    image: "/Curriculumimg/2.jpg",
    description:
      "Explore powerful breathing techniques to calm the mind and balance emotions. Build a daily routine that supports clarity, energy, and relaxation.",
  },
  {
    title: "Meditation & Mindfulness",
    image: "/Curriculumimg/3.jpg",
    description:
      "Practice guided meditation, mantra, and silent sitting to develop inner stillness. Cultivate focus, peace, and a deeper connection to yourself.",
  },
  {
    title: "Yoga Philosophy & Lifestyle",
    image: "/Curriculumimg/4.jpg",
    description:
      "Understand the core teachings of yoga beyond the mat, including Yamas & Niyamas. Learn how to live with awareness, balance, and purpose.",
  },
  {
    title: "Anatomy & Body Awareness",
    image: "/Curriculumimg/5.jpg",
    description:
      "Discover how your body works during yoga with simple, practical anatomy lessons. Improve alignment, prevent injury, and support safe practice.",
  },
  {
    title: "Ayurveda & Yogic Nutrition",
    image: "/Curriculumimg/6.jpg",
    description:
      "Learn basic Ayurveda principles for healthy living and natural detox. Explore diet, routines, and herbs to support your yoga journey.",
  },
  {
    title: "Chakra & Energy Work",
    image: "/Curriculumimg/7.jpg",
    description:
      "Understand the body’s energy centers and how yoga affects your inner flow. Balance your chakras through breath, sound, and movement.",
  },
  {
    title: "Nature Excursions & Healing Activities",
    image: "/Curriculumimg/8.jpg",
    description:
      "Enjoy time in nature with beach yoga, forest walks, and waterfall visits. Let nature recharge your spirit and deepen your retreat experience.",
  },
];

const CurriculumSection50: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-24 px-4 sm:px-10 bg-transparent overflow-hidden"
      aria-label="Yoga Teacher Training Curriculum"
    >
      {/* Decorative Sparkle */}
      <div className="absolute top-10 left-10 z-0 opacity-10 pointer-events-none">
        <Sparkles size={180} strokeWidth={0.8} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#150e70] drop-shadow-sm"
        >
          CURRICULUM
        </motion.h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          A transformational journey packed with practical wisdom and modern tools to elevate your practice.
        </p>
      </div>

      {/* Curriculum Dropdowns */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 space-y-6">
        {curriculum.map((item, i) => (
          <div
            key={item.title}
            className="bg-white shadow-xl rounded-3xl backdrop-blur-md border border-gray-100 overflow-hidden"
          >
            {/* Header row */}
            <button
              onClick={() => toggleCard(i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#9B7EBD] rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#2b0a72]">
                  {item.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={22} />
              </motion.div>
            </button>

            {/* Description */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0.9 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-6 origin-top text-gray-700 text-sm sm:text-base leading-relaxed"
                >
                  {item.description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(CurriculumSection50);
