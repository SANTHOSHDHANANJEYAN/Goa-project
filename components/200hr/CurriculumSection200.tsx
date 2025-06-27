import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const curriculum = [
  {
    title: "Hatha Yoga ",
    image: "/Curriculumimg/1.jpg",
    description:
      "This Hatha Yoga course covers classical asanas, breath awareness, alignment, posture sequencing, and therapeutic benefits for holistic body-mind balance.",
  },
  {
    title: "Vinyasa Yoga",
    image: "/Curriculumimg/2.jpg",
    description:
      "Explore the dynamic practice of Vinyasa Yoga, including breath-synchronized movement, preparatory techniques, structured sequences, and flowing postures for strength and flexibility.",
  },
  {
    title: "Ashtanga Vinyas",
    image: "/Curriculumimg/3.jpg",
    description:
      "Ashtanga Vinyasa covers a progressive sequence of postures from the Primary Series, focusing on breath-led movement, strength, flexibility, and flow.",
  },
  {
    title: "Yoga Philosophy",
    image: "/Curriculumimg/4.jpg",
    description:
      "Yoga Philosophy explores the origin, purpose, mind-body connection, and deeper spiritual concepts like karma, chakras, kundalini, and liberation in yogic science.",
  },
  {
    title: "Yoga Anatomy",
    image: "/Curriculumimg/5.jpg",
    description:
      "Yoga Anatomy provides an understanding of the body's structure, systems, and functions to support safe, effective, and aligned yoga practice.",
  },
  {
    title: "Build Teaching Skills",
    image: "/Curriculumimg/6.jpgP",
    description:
      "Learn how to cue, adjust, and guide classes confidently with methodology rooted in modern and classical yoga.",
  },
  {
    title: "Pranayama",
    image: "/Curriculumimg/7.jpg",
    description:
      "Learn the science and techniques of breath control, prana flow, nostril activation, and various pranayama practices for physical, emotional, and mental purification.",
  },
  {
    title: "Meditation Techniques",
    image: "/Curriculumimg/8.jpg",
    description:
      "Practice full-body, emotional, chakra, and deep causal relaxation methods including Yoga Nidra to promote restful sleep and mental calm.",
  },
];

const CurriculumSection200: React.FC = () => {
  return (
    <section className="relative pt-[4rem] pb-[3rem] px-4 sm:px-10 bg-transparent overflow-hidden">
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

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mt-16">
        {curriculum.map((item, i) => (
          <motion.div
            key={item.title + i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#c4e0eb] shadow-2xl rounded-3xl p-6 backdrop-blur-md border border-gray-100 hover:scale-[1.03] transition transform duration-300 group text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-[#fef3f7] rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#2b0a72] mb-2 group-hover:text-pink-500 transition">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection200;
