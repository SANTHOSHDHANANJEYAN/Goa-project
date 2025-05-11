import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Animation variants
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

const listItemVariants = {
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
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative py-20 px-4 sm:px-8 bg-transparent bg-no-repeat bg-center bg-cover"
    >
      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-[-60px] left-[-60px] w-48 h-48 bg-pink-300 rounded-full opacity-30 blur-3xl z-10"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-blue-300 rounded-full opacity-30 blur-3xl z-10"
      />

      {/* Section Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center text-[#150e70] mt-[4rem]">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 drop-shadow-lg"
        >
          Curriculum Overview
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-center ">
          {[leftItems, rightItems].map((group, colIdx) => (
            <ul key={colIdx} className="space-y-6">
              {group.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  className="flex items-start text-lg font-medium hover:text-indigo-300 transition ml-[10rem]"
                >
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-[#150e70]" />
                  <span className="ml-3">{item}</span>
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CurriculumSection;
