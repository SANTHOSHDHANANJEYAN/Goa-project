"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
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
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % curriculum.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-20 px-4 sm:px-10 bg-cover bg-center bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/aboutpics/curriculambg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Floating Sparkle */}
      <div className="absolute top-10 left-10 z-0 opacity-10">
        <Sparkles size={180} strokeWidth={0.8} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight text-white drop-shadow-lg"
        >
          CURRICULUM
        </motion.h2>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          A transformational journey packed with practical wisdom and modern tools to elevate your practice.
        </p>

        {/* Slideshow Container */}
        <div className="relative max-w-3xl mx-auto mt-16">
          {/* Animated Slide */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/30 bg-white/90 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="p-10 flex flex-col items-center text-center text-gray-800"
              >
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-inner ring-2 ring-[#9B7EBD]/30">
                  <Image
                    src={curriculum[index].image}
                    alt={curriculum[index].title}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#2b0a72] mb-4">
                  {curriculum[index].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base max-w-md">
                  {curriculum[index].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {curriculum.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection200;
