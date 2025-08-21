'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const courseDates = [
  { date: '7 Nov - 3 Dec 2025' },
  { date: '7 Jan - 3 Feb 2026' },
  { date: '7 Feb - 3 Mar 2026' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const CourseSchedule = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-transparent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left: Course Dates */}
        <motion.div
          variants={containerVariants}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {courseDates.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: '#f8faff' }}
              className="flex items-start space-x-3 border-b pb-2 border-gray-200 rounded transition"
            >
              <FaCalendarAlt className="text-[#150e70] text-lg mt-1 shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-gray-800">{item.date}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Fee Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-start bg-gradient-to-br from-[#f8faff] to-white rounded-xl p-6 shadow-inner space-y-6"
        >
          {/* Duration */}
          <div>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">Course Duration:</p>
            <h2 className="text-xl text-[#150e70] font-extrabold">27 Days</h2>
          </div>

          {/* Fees */}
          <div>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">300 Hrs Yoga TTC Fee:</p>
            <div className="flex flex-col sm:flex-row sm:gap-6 mt-3 text-xl font-bold">
              <div className="bg-white rounded-lg shadow p-4 flex-1 border border-indigo-100 hover:border-indigo-300 transition">
                <p className="text-[#150e70]">USD 1700</p>
                <p className="text-xs font-normal text-gray-600">Private Room</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex-1 border border-indigo-100 hover:border-indigo-300 transition mt-2 sm:mt-0">
                <p className="text-[#150e70]">USD 1400</p>
                <p className="text-xs font-normal text-gray-600">Shared Room</p>
              </div>
            </div>
          </div>

          {/* BOOK NOW Button */}
          <div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#150e70] to-[#1f2d98] hover:bg-green-700 transition text-white px-8 py-3 rounded-full shadow text-sm sm:text-base w-full sm:w-auto"
              >
                BOOK NOW
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CourseSchedule;
