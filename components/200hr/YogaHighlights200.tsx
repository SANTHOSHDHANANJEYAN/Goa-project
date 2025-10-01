'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, MapPin, Users, Heart, Globe, CheckCircle, Info } from 'lucide-react';

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

const BeforeYouGoSection: React.FC = () => {
  const safetyFeatures = [
    { icon: <Shield className="w-5 h-5" />, text: "24-Hour On-Site Security" },
    { icon: <Users className="w-5 h-5" />, text: "Guest Pre-Registration For Any Non-Staff Member or Student" },
    { icon: <Lock className="w-5 h-5" />, text: "Safe Lockers in Our Office for Any Valuables Students May Have" },
    { icon: <MapPin className="w-5 h-5" />, text: "A quiet and peaceful, beautiful place to relax and contemplate yogic dimensions" },
    { icon: <Globe className="w-5 h-5" />, text: "We also assist people to travel securely and safely to our centre from the airport by taxi drivers who personally know us and have been working with us for several years" }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
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
            200 Hour Yoga Teacher Training in Goa: 
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            What to Know Before You Go?
          </h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Many of these students rejoice at getting to study at the birthplace of yoga, and rightly so! 
                    India is an incredible location, and to have the ability to study under the classical teachers 
                    of yoga from the land of Yoga is truly mystical. Whereas some first-time travellers to India 
                    and Asia may be just slightly nervous at having to take an independent break to an international 
                    location, it's good to keep in mind - that we are in a very safe safe, city where a lot of 
                    international tourists do arrive - Goa.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 md:p-8 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-7 h-7 text-green-600 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-800">Safety & Security</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a whole, India is a very safe travel destination, and as a state, Goa itself is absolutely 
                safe to visit. The local community has been hosting international tourists for decades, and 
                they have an honourable and non-aggressive attitude towards guests. The economy operates based 
                on repeat business, and local citizens take extra precautions to have this repeat business 
                protected through precaution and respect to those who visit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a school, we have an impeccable students' safety record at Rishikul Yogshala and insist 
                on maintaining it through:
              </p>
            </div>
          </motion.div>

          {/* Safety Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 mb-10"
          >
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 flex-1">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Support Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-8"
          >
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                We also understand it would be stressful to visit any place in this world under this 
                prevailing state of climate and we would happily assist you from date of receipt of 
                this application until you return home so you would be made to feel protected and also 
                safe during your visit.
              </p>
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed">
                The vast majority of travellers come to India and feel as much at home here as to not 
                ever want to leave. It's a beautiful country, and all those sceneries, people, and 
                civilizations are so kind and rich in experience, and it's beautiful to have an effort 
                to assist support students to take that once-in-a-lifetime journey here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeYouGoSection;
