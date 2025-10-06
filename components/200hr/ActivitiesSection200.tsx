'use client';

import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const EligibilitySection: React.FC = () => {
  const eligibilityCriteria = [
    { title: "Age", description: "Aspirants should be at least 18 years old and up to 70 years old." },
    { title: "Language", description: "Most sessions are in English; basic understanding is recommended." },
    { title: "Skill Level", description: "No prior experience needed, but familiarity with yoga is helpful." },
    { title: "Commitment", description: "A genuine intention to learn and grow is required, not just earning a certificate." }
  ];

  return (
    <section className="py-20 bg-[#fffaf5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Eligibility Criteria For Joining The 200 Hour Yoga Teacher Training Course
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aspirants who are ready to deepen their yoga practice are always welcome in the{" "}
            <span className="text-orange-600 font-semibold">
              200 Hour Yoga Teacher Training in India
            </span>
            . Some eligibility criteria include:
          </p>
        </motion.div>

        {/* Flex container for image and eligibility list */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
          
          {/* Left image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-1/3 h-64 md:h-80"
          >
            <img
              src="/aboutpics/333.jpg" // Replace with your actual image path
              alt="Yoga practice"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>

          {/* Right eligibility list */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6 w-full md:w-2/3"
          >
            {eligibilityCriteria.map((criteria, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 text-lg font-semibold mb-1">
                    {criteria.title}:
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {criteria.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
