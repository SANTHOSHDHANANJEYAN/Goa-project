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
  const eligibilityPoints = [
    "The 500 Hour Yoga Teacher Training Rishikesh involves two parts: the first month covers the foundational 200 Hour Yoga Teacher Training syllabus, and the second month covers the intensive 300 Hour Yoga Teacher Training.",
    "Anyone with a reasonable level of fitness, eagerness to learn, and willingness to understand and adopt Yoga as a lifestyle is welcome.",
    "Participants should be able to dedicate 2 months to complete the program."
  ];

  return (
    <section className="py-20 bg-[#f4f5f3]">
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
            500 Hour Yoga Teacher Training Course Enrolment Eligibility Criteria
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The 500 Hour Yoga Teacher Training in Rishikesh is open to dedicated yoga aspirants who want to deepen their practice and adopt Yoga as a lifestyle.
          </p>
        </motion.div>

        {/* Flex container for image and points list */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-500 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
          
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

          {/* Right points list */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6 w-full md:w-2/3"
          >
            {eligibilityPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
