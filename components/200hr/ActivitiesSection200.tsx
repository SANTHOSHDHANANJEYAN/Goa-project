'use client';

import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle, Users, Heart, Globe, Book, Award } from 'lucide-react';

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

const EligibilityAndTeachersSection: React.FC = () => {
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

  const teacherHighlights = [
    "5 to 6 seasoned and experienced yoga teachers for every YTTC",
    "In-house Lead Trainer with E-RYT certification",
    "Thousands of hours of on-ground teaching experience",
    "Classical perspective on ancient yogic concepts",
    "All-inclusive and integrated yogic foundation",
    "Personalized attention to each student's journey"
  ];

  return (
    <>
      {/* Section 1 - Eligibility Criteria */}
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
              Section 1 - 200 Hour Yoga Teacher Training Course
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

      {/* Section 2 - Experienced Teachers */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Section 2 - Learn from Experienced Yoga Teachers from India
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Rishikul Yogshala Goa has have the best in-house best yoga teachers. This ensures 
                overall coverage of ancient yogic concepts from a very classical perspective. The 
                students can benefit and absorb the yogic techniques from these experienced teachers 
                in the most simple and effective way as possible.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Empowering aspiring students to explore their latent potential be it in theory or 
                practice is the purpose of our very core mission. This also underlines why we offer 
                5 to 6 seasoned and experienced yoga teachers to every Yoga Teacher Training Course 
                (YTTC). This group offers an all-inclusive and integrated yogic foundation to students, 
                through which the students adapt, learn and soak in the yogic experience.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                In addition to this, there also exists In-house Lead Trainer who is an E-RYT and 
                possesses about a few thousand hours of on-ground experience themselves. Their 
                presence also lends to an overall memorable yogic experience to the students.
              </p>
            </motion.div>

            {/* Right Content - Highlights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Teaching Excellence
                  </h3>
                </div>
                
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {teacherHighlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Teacher Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-3xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600 mt-1">Expert Teachers</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-3xl font-bold text-orange-600">E-RYT</div>
                  <div className="text-sm text-gray-600 mt-1">Lead Trainer</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600 mt-1">Teaching Hours</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EligibilityAndTeachersSection;
