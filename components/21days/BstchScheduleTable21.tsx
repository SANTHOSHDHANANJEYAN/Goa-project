'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const courseDates = [
  { date: 'October 2025' },
  { date: 'November 2025' },
  { date: 'December 2025' },
  { date: 'January 2026' },
  { date: 'February 2026' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const CourseSchedule: React.FC = () => {
  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-16 bg-white"
      aria-label="Yoga Teacher Training Course Schedule"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-black"
      >
        {/* Left: Course Dates */}
        <motion.div
          variants={containerVariants}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
        >
          {courseDates.map(({ date }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: '#f8faff' }}
              className="flex items-start gap-3 border-b pb-3 border-gray-200 rounded transition"
            >
              <FaCalendarAlt
                className="text-[#150e70] text-lg mt-1 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-base font-semibold">{date}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Fee Info */}
        <motion.aside
          variants={itemVariants}
          className="flex flex-col justify-start bg-gradient-to-br from-[#f8faff] to-white rounded-xl p-6 shadow-inner space-y-5"
        >
          {/* Duration */}
          <div>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
              Course Duration:
            </p>
            <h2 className="text-xl text-[#150e70] font-bold">21 Days</h2>
          </div>

          {/* Fees */}
          <div>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
              21-Days Practice Fees:
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-6 mt-2 text-lg font-bold">
              <div className="bg-white rounded-lg shadow p-3 flex-1 border border-indigo-100 hover:border-indigo-300 transition">
                <p className="text-[#150e70]">USD 800</p>
                <p className="text-xs font-normal text-gray-600">Rooms</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Link href="/contact" aria-label="Book the 21-day yoga course now">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#150e70] to-[#1f2d98] hover:from-[#d9442e] hover:to-[#f05b45] transition text-white px-8 py-3 rounded-full shadow text-sm sm:text-base w-full sm:w-auto"
              >
                BOOK NOW
              </motion.button>
            </Link>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
};

export default CourseSchedule;
