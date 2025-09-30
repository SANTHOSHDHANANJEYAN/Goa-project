"use client";

import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

const curriculum = [
  {
    title: "Foundations of Yoga & Teaching",
    image: "/Curriculumimg/1.jpg",
    description:
      "Explore the origins, philosophies, diverse styles of yoga, and the essential role of a yoga teacher.",
  },
  {
    title: "Asana Mastery & Alignment Techniques",
    image: "/Curriculumimg/2.jpg",
    description:
      "Learn key yoga poses with proper alignment, modifications, hands-on adjustments, and guided practice to ensure safety, strength, and mindfulness.",
  },
  {
    title: "Pranayama & Energetic Awareness",
    image: "/Curriculumimg/3.jpg",
    description:
      "Discover powerful breathwork techniques, their benefits, and how to harness breath and energy flow through pranayama, chakra awareness, and mindful movement.",
  },
  {
    title: "Yoga Anatomy & Safe Movement",
    image: "/Curriculumimg/4.jpg",
    description:
      "Understand the body’s structure, key muscle groups, breath mechanics, and injury prevention to support safe, effective, and informed yoga practice.",
  },
  {
    title: "Teaching Methodology & Class Leadership",
    image: "/Curriculumimg/5.jpg",
    description:
      "Learn to communicate effectively, structure balanced classes, apply teaching techniques, and embody the ethics and responsibilities of a yoga teacher.",
  },
  {
    title: "Sequencing & Intentional Class Design",
    image: "/Curriculumimg/6.jpg",
    description:
      "Master the art of creating balanced, level-appropriate class sequences with purposeful themes, effective timing, and engaging flow from start to finish.",
  },
  {
    title: "Teaching Practicum & Constructive Feedback",
    image: "/Curriculumimg/7.jpg",
    description:
      "Gain real-world teaching experience through guided practice sessions, peer reviews, and expert feedback to refine your skills and build confidence as a yoga teacher.",
  },
  {
    title: "Personal Growth & Wellness for Yoga Teachers",
    image: "/Curriculumimg/8.jpg",
    description:
      "Cultivating mindful self-reflection, journaling insights, and sustainable self-care to manage stress and prevent burnout.",
  },
];

const CurriculumSection100: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative pt-16 px-4 sm:px-10 bg-transparent overflow-hidden">
      {/* Floating Sparkle */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 z-0 opacity-10 pointer-events-none"
      >
        <Sparkles size={180} strokeWidth={0.8} />
      </motion.div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[#150e70] drop-shadow-sm"
        >
          CURRICULUM
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          A transformational journey packed with practical wisdom and modern tools to elevate your practice.
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="relative z-10 max-w-3xl mx-auto mt-16 space-y-4">
        {curriculum.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden"
          >
            {/* Title Row */}
            <button
              onClick={() => toggleDropdown(i)}
              className="flex items-center justify-between w-full px-6 py-4 text-left text-lg font-bold text-[#2b0a72] hover:text-[#9B7EBD] transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-inner ring-2 ring-[#9B7EBD]/20">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Yoga Curriculum`}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                {item.title}
              </div>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Smooth Dropdown Content */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                  animate={{ height: "auto", opacity: 1, paddingTop: 16, paddingBottom: 16 }}
                  exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 30 }}
                  className="px-6 text-gray-600 text-sm leading-relaxed"
                >
                  {item.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(CurriculumSection100);
