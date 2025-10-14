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
    "Any yoga aspirant can register for the 100 hours Yoga Teacher Training Program in Goa.",
    "As this is a foundational program, no prior Yoga knowledge is required.",
    "We suggest participants gear up for this intensive course prior, by beginning some asana practices at home and getting oriented with some basic elements of yoga.",
    "You can begin by downloading free PDFs attached on the website to help connect with the yogic wisdom shared in sessions.",
    "If you don’t have time to go through the books, our experienced teachers will guide you well on the yogic path of practice."
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
            100 Hour Yoga Teacher Training Course Enrolment Eligibility Criteria
          </h2>

        </motion.div>

        {/* Flex container for image and points list */}
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
