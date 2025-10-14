'use client';

import React from 'react';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const EligibilitySection: React.FC = () => {
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
            300 Hour Yoga Teacher Training Course Enrolment Eligibility Criteria
          </h2>
        </motion.div>

        {/* Flex container for image and content */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-300 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
          
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

          {/* Right content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6 w-full md:w-2/3 text-gray-700 leading-relaxed"
          >
            <motion.p variants={fadeInUp}>
              There exists a famous phrase: <span className="italic">“Learning is a lifelong process”</span> — and this is applicable in every profession and every sphere of life. More so, it’s very true for Yoga, since Yoga is a lifestyle and as long as we are alive, we need to take care of our lifestyle.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Yoga is a lifestyle which proves that it has the ability to cure our mental as well as physical health. This regular practice of adopting yoga as a lifestyle gets rid of the toxins within (the body and mind), resulting in better health — both mental and physical.
            </motion.p>

            <motion.p variants={fadeInUp}>
              The 300-hour Yoga Teacher Training in Goa is a program for advanced practitioners of yoga, which has guided students from all around the world to learn and deepen their knowledge in yogic wisdom.
            </motion.p>

            <motion.p variants={fadeInUp}>
              To be eligible for the 300 hour Yoga Teacher Training program, students must have completed the 200 hour Yoga Teacher Training program from a Yoga Alliance registered school.
            </motion.p>

            <motion.p variants={fadeInUp}>
              At the end of this course, you would receive your Yoga Alliance 300-hour certification, thus becoming suitable for a 500-hour RYT (Registered Yoga Teacher). After completion of this program, you would be eligible to teach anywhere in the world as well as run workshops too.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
