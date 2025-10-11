'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Coffee, Home, Award, MapPin, BookOpen, Plane, ShoppingBag, Calendar, Snowflake, Activity } from 'lucide-react';

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

const InclusionsExclusionsSection: React.FC = () => {
  const inclusions = [
    {
      icon: <Home className="w-5 h-5" />,
      text: "Private Rooms or Double Shared Rooms Accommodation During The 50 YTTC Program"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      text: "3 Sattvic Vegetarian Meals With Herbal Tea"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Yoga Materials and Props"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Tours to Local Attractions and Refreshing Activities"
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "100 Hour YTT Course Certification"
    }
  ];

  const exclusions = [
    {
      icon: <Plane className="w-5 h-5" />,
      text: "Travel Costs To and From the Yoga School"
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      text: "Personal Expenses Such as Laundry, Telephone, and Extra Meals"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      text: "Optional Additional Activities or Trips Not Mentioned in the Program"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Extra Stay Beyond Course Dates"
    },
    {
      icon: <Snowflake className="w-5 h-5" />,
      text: "AC Charges if you have not booked for an AC Accommodation"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f4f5f3]  rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Is Included and Excluded?
          </h2>
          <div className="w-24 h-1 bg-[#e0b973] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Inclusions Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-400"
          >
            <div className="bg-white p-6">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-black">Inclusions</h3>
              </div>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 md:p-8 space-y-4"
            >
              {inclusions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 border border-green-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Exclusions Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-400"
          >
            <div className="bg-white p-6">
              <div className="flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-black">Exclusions</h3>
              </div>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 md:p-8 space-y-4"
            >
              {exclusions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200 border border-red-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Optional: Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Please review these details carefully to understand what your course fee covers. 
            For any questions or clarifications, feel free to contact our support team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InclusionsExclusionsSection;
