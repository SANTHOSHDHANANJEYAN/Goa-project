"use client";

import React, { useState, memo } from "react";
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
    title: "Teaching Practicum & Feedback",
    image: "/Curriculumimg/7.jpg",
    description:
      "Gain real-world teaching experience through guided practice sessions, peer reviews, and expert feedback to refine your skills and build confidence.",
  },
  {
    title: "Personal Growth & Wellness",
    image: "/Curriculumimg/8.jpg",
    description:
      "Cultivate mindful self-reflection, journaling insights, and sustainable self-care practices to manage stress and prevent burnout.",
  },
];

const CurriculumSectionDropdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pt-[4rem] px-4 sm:px-10 bg-transparent overflow-hidden">
      {/* Floating Sparkle */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 z-0 opacity-10"
      >
        <Sparkles size={180} strokeWidth={0.8} />
      </motion.div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight text-[#150e70] drop-shadow-md"
        >
          CURRICULUM
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          A transformational journey packed with practical wisdom and modern tools to elevate your practice.
        </motion.p>
      </div>

      {/* Dropdown List */}
      <div className="max-w-3xl mx-auto mt-12 space-y-4 relative z-10">
        {curriculum.map((item, i) => (
          <div
            key={item.title + i}
            className="bg-white/80 border border-gray-200 shadow-md rounded-2xl overflow-hidden backdrop-blur-md"
          >
            {/* Button Header */}
            <button
              onClick={() => toggleDropdown(i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-indigo-100 shadow">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#2b0a72]">
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

            {/* Dropdown Content */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(CurriculumSectionDropdown);
