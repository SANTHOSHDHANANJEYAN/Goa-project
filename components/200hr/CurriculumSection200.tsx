'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

const curriculum = [
  {
    title: "Hatha Yoga",
    image: "/Curriculumimg/1.jpg",
    description:
      "This Hatha Yoga course covers classical asanas, breath awareness, alignment, posture sequencing, and therapeutic benefits for holistic body-mind balance.",
  },
  {
    title: "Vinyasa Yoga",
    image: "/Curriculumimg/2.jpg",
    description:
      "Explore the dynamic practice of Vinyasa Yoga, including breath-synchronized movement, preparatory techniques, structured sequences, and flowing postures for strength and flexibility.",
  },
  {
    title: "Ashtanga Vinyas",
    image: "/Curriculumimg/3.jpg",
    description:
      "Ashtanga Vinyasa covers a progressive sequence of postures from the Primary Series, focusing on breath-led movement, strength, flexibility, and flow.",
  },
  {
    title: "Yoga Philosophy",
    image: "/Curriculumimg/4.jpg",
    description:
      "Yoga Philosophy explores the origin, purpose, mind-body connection, and deeper spiritual concepts like karma, chakras, kundalini, and liberation in yogic science.",
  },
  {
    title: "Yoga Anatomy",
    image: "/Curriculumimg/5.jpg",
    description:
      "Yoga Anatomy provides an understanding of the body's structure, systems, and functions to support safe, effective, and aligned yoga practice.",
  },
  {
    title: "Build Teaching Skills",
    image: "/Curriculumimg/6.jpg",
    description:
      "Learn how to cue, adjust, and guide classes confidently with methodology rooted in modern and classical yoga.",
  },
  {
    title: "Pranayama",
    image: "/Curriculumimg/7.jpg",
    description:
      "Learn the science and techniques of breath control, prana flow, nostril activation, and various pranayama practices for physical, emotional, and mental purification.",
  },
  {
    title: "Meditation Techniques",
    image: "/Curriculumimg/8.jpg",
    description:
      "Practice full-body, emotional, chakra, and deep causal relaxation methods including Yoga Nidra to promote restful sleep and mental calm.",
  },
];

const CurriculumSection200: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative pt-16 pb-12 px-4 sm:px-10 bg-transparent overflow-hidden">
      {/* Floating Sparkle */}
      <div className="absolute top-10 left-10 z-0 opacity-10">
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
            className="bg-white shadow-xl rounded-3xl border border-gray-100 overflow-hidden"
          >
            {/* Card Header */}
            <button
              onClick={() => toggleDropdown(i)}
              className="flex items-center justify-between w-full px-6 py-4 text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner ring-2 ring-[#9B7EBD]/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#2b0a72]">{item.title}</h3>
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
                  className="px-6 text-gray-600 text-sm leading-relaxed"
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

export default CurriculumSection200;
