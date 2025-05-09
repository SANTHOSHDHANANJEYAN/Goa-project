import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Section container animation
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Staggered list item animation
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CurriculumSection: React.FC = () => {
  const leftItems = [
    "Asana techniques & alignment",
    "Yoga philosophy & ethics",
    "Teaching methodology",
    "Anatomy & physiology",
  ];
  const rightItems = [
    "Meditation & pranayama",
    "Practice teaching sessions",
    "Class sequencing & theming",
    "Business of yoga",
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative mb-20 px-4 py-16 rounded-3xl shadow-2xl overflow-hidden bg-[url('/mandala-bg.png')] bg-no-repeat bg-center bg-cover md:bg-contain"
    >
      {/* Optional white overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[-40px] left-[-40px] w-56 h-56 bg-pink-200 rounded-full opacity-30 blur-3xl z-10"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-[-40px] right-[-40px] w-56 h-56 bg-blue-200 rounded-full opacity-30 blur-3xl z-10"
      />

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
      >
        Curriculum Overview
      </motion.h2>

      {/* Curriculum Lists */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 text-gray-700">
        {[leftItems, rightItems].map((items, colIndex) => (
          <ul key={colIndex} className="space-y-6">
            {items.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className="flex items-center text-lg transition-transform transform hover:scale-105 hover:text-indigo-700"
              >
                <CheckCircle className="text-green-500 w-6 h-6" />
                <span className="ml-4">{item}</span>
              </motion.li>
            ))}
          </ul>
        ))}
      </div>
    </motion.section>
  );
};

export default CurriculumSection;
