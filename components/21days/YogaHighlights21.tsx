'use client';
import React from 'react';
import { FaLeaf, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const idealFor: string[] = [
  "Yoga enthusiasts who want to deepen their practice and understand yoga on a more meaningful level.",
  "If you’re considering becoming a certified yoga instructor but want to ease into the training with a shorter course.",
  "If you’re a practicing instructor seeking ways to refine your teaching techniques, refresh knowledge, or explore a new yoga style.",
  "If you’re looking for personal growth and an immersive yoga experience in a supportive community.",
];

const trainingHighlights: string[] = [
  "Equal emphasis on philosophy, anatomy, and physical practice",
  "Yoga Sutras, Vedanta, Samkhya, and other modern philosophies",
  "Traditional Ashtanga Vinyasa yoga course",
  "Primary series taught with Sanskrit counting",
  "An intensive course hosted by an international team of yogis and yoga masters",
  "Practice yoga in the land of its origin and experience true Vedic culture",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const YogaHighlights: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#4377B2]/10 py-16 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-14"
      >
        Discover What Makes Our 21-Days YTTC Special
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
        {/* Left: Ideal For */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-8 border-l-4 border-[#150e70]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#150e70] mb-6">
            Who Is This Course For?
          </h3>
          <ul className="space-y-4">
            {idealFor.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <FaLeaf className="text-[#150e70] mt-1 transition transform group-hover:scale-110" />
                <span className="text-[#150e70] leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Training Highlights */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-8 border-l-4 border-[#150e70]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#150e70] mb-6">
            Training Highlights
          </h3>
          <ul className="space-y-4">
            {trainingHighlights.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <FaStar className="text-[#150e70] mt-1 transition transform group-hover:scale-110" />
                <span className="text-[#150e70] leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default YogaHighlights;
