'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

const curriculum = [
  {
    title: "Asana",
    image: "/Curriculumimg/1.jpg",
    description:
      "Focus on advanced pose study, building flexibility and strength, maintaining hydration, and mastering systematic sequences including the Ashtanga Vinyasa Intermediate Series.",
  },
  {
    title: "Ashtanga",
    image: "/Curriculumimg/2.jpg",
    description:
      "Advanced Ashtanga Vinyasa postures focusing on strength, flexibility, balance, and breath control through a diverse range of seated, backbends, arm balances, and twists.",
  },
  {
    title: "Relaxation Techniques",
    image: "/Curriculumimg/3.jpg",
    description:
      "Explore Yoga Nidra’s role in intuition development, mind-heart connection, lucid and intuitive dreams, and traditional Himalayan practices.",
  },
  {
    title: "Pranayama",
    image: "/Curriculumimg/4.jpg",
    description:
      "Study breath retention (Kumbhaka), awakening Sushumna energy, balancing Nadis through Nadi Shodhanam, and understanding the five vital forces and the functions of Ida, Pingala, and Sushumna.",
  },
  {
    title: "Yoga Anatomy",
    image: "/Curriculumimg/5.jpg",
    description:
      "Explore the impact of asanas on muscles, glandular anatomy linked to chakras, major body systems, and the effects of pranayama on cardiovascular and nervous systems.",
  },
  {
    title: "Yoga Philosophy",
    image: "/Curriculumimg/6.jpg",
    description:
      "Explore meditation, spiritual heart, karma, yogic obstacles, kundalini, chakras, various yoga paths, consciousness levels, samadhi, and reincarnation in yogic science.",
  },
  {
    title: "Meditation and Concentration",
    image: "/Curriculumimg/7.jpg",
    description:
      "Learn diverse meditation techniques including mantra, chakra, third eye, yantra, and non-duality practices, while understanding and overcoming common obstacles.",
  },
  {
    title: "Mantra Yoga and Its Importance",
    image: "/Curriculumimg/8.jpg",
    description:
      "Study key mantras like So-HUM and invocation chants for wisdom, fearlessness, completeness, and the sacred bond between teacher and student.",
  },
];

const CurriculumSection300: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative py-28 px-4 sm:px-10 bg-transparent overflow-hidden">
      {/* Sparkle */}
      <div className="absolute top-10 left-10 z-0 opacity-10 pointer-events-none">
        <Sparkles size={180} strokeWidth={0.8} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight text-[#150e70] drop-shadow-sm"
        >
          CURRICULUM
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          A transformational journey packed with practical wisdom and modern tools to elevate your practice.
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 space-y-4">
        {curriculum.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden"
          >
            {/* Card Header */}
            <button
              onClick={() => toggleDropdown(i)}
              className="flex items-center justify-between w-full px-6 py-4 text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#fef3f7] rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2b0a72]">{item.title}</h3>
              </div>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Dropdown Content */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                  animate={{ height: "auto", opacity: 1, paddingTop: 16, paddingBottom: 16 }}
                  exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 30 }}
                  className="px-6 text-gray-600 text-sm sm:text-base leading-relaxed"
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

export default CurriculumSection300;
