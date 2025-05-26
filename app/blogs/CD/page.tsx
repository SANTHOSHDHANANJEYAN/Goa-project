'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const trainingDates = [
  { start: '7th Oct 2024', end: '30th Oct 2024' },
  { start: '7th Nov 2024', end: '30th Nov 2024' },
  { start: '7th Dec 2024', end: '30th Dec 2024' },
  { start: '7th Jan 2025', end: '30th Jan 2025' },
  { start: '7th Feb 2025', end: '2nd Mar 2025' },
  { start: '7th Mar 2025', end: '30th Mar 2025' },
  { start: '7th Apr 2025', end: '30th Apr 2025' },
];

const YogaTeacherTraining = () => {
  return (
    <section className="bg-transparent py-16 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          200-Hour Yoga Teacher Training in Goa
        </h2>
        <p className="text-lg text-gray-600">
          Transform and Elevate Your Practice to New Heights
        </p>
      </div>
      {/* Image and Overview */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <Image
            src="/images/yoga-training-goa.jpg"
            alt="Yoga Teacher Training in Goa"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Highlights
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>24 Days Accommodation & Food</li>
            <li>All Meals Included</li>
            <li>Yoga Alliance USA Certification</li>
            <li>3 Adventure Excursions</li>
            <li>Multi-Style Yoga: Hatha, Vinyasa, Iyengar</li>
            <li>Comprehensive Curriculum Covering Asanas, Pranayama, Meditation, Anatomy, Philosophy, and Teaching Methodology</li>
            <li>Experienced Instructors with Years of Expertise</li>
            <li>Globally Recognized Certification</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/apply"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
              
                Apply Now
              
            </Link>
          </div>
        </div>
      </div>
      {/* Upcoming Dates */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Upcoming Training Dates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingDates.map((date, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                {date.start} - {date.end}
              </h4>
              <p className="text-gray-600">Shared Room: $1250</p>
              <p className="text-gray-600">Private Room: $1550</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gray-100 py-12 px-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          What Our Students Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="text-gray-700 italic">
            I had the privilege of completing both the 200HR and 300HR programs at this renowned yoga school! The entire journey was filled with valuable teachings, enriching my knowledge of yoga and enabling me to confidently teach yoga to the students. The atmosphere at Rishikul is really serene and conducive to personal growth!
            <span className="block mt-4 font-semibold">— Sabari Arumugam</span>
          </blockquote>
          <blockquote className="text-gray-700 italic">
            I completed the 200-hour teacher training programme at Rishikul Yogshala, and I am incredibly appreciative of this life-altering opportunity. With all of them being incredible teachers, I gained a lot of knowledge about yoga (philosophy, pranayama, mantras, meditation, anatomy) and, specifically, kundalini yoga.
            <span className="block mt-4 font-semibold">— Jyoti Vaidik</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default YogaTeacherTraining;
 