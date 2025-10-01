'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Users, Heart, Globe, Book } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const EligibilitySection: React.FC = () => {
  const eligibilityCriteria = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Age",
      description: "Participants between the age group of 18 years to 65 years"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health and Fitness",
      description: "It is necessary to have a reasonable level of physical fitness and good health to participate at Rishikul Yogshala. Individuals suffering from health problems such as mild asthma, controlled hypertension, and minor musculoskeletal problems can apply."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Yoga Experience",
      description: "While it is not necessary to have prior yoga experience, it helps to have some experience of yoga practice and fundamental postures knowledge"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Language Proficiency",
      description: "Simple Spoken English would be the means of communication."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
           200 Hour Yoga Teacher Training Course
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            Enrolment Eligibility Criteria
          </h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The 200 Hour Yoga Teacher Training Goa typically has the following eligibility requirements:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {criteria.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {criteria.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {criteria.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilitySection;
