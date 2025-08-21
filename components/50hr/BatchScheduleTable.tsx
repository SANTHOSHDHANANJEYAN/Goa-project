'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import Link from "next/link";
import { motion } from "framer-motion";

const courseDates = [
  { date: '7 Sept - 14 Sept 2025' },
  { date: '7 Oct - 14 Oct 2025' },
  { date: '7 Nov - 14 Nov 2025' },
  { date: '7 Dec - 14 Dec 2025' },
  { date: '7 Jan - 14 Jan 2026' },
  { date: '7 Feb - 14 Feb 2026' },
  { date: '7 Mar - 14 Mar 2026' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const CourseSchedule = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-transparent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Left: Course Dates */}
        <motion.div
          variants={containerVariants}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5"
        >
          {courseDates.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-3 border-b pb-3 border-gray-200 hover:bg-gray-50 rounded transition"
            >
              <FaCalendarAlt className="text-[#150e70] text-xl mt-1 shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                {item.date}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Fee Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-start bg-gradient-to-br from-[#f8faff] to-white rounded-xl p-6 shadow-inner"
        >
          <div className="space-y-6">
            {/* Duration */}
            <div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                Course Duration:
              </p>
              <h2 className="text-2xl text-[#150e70] font-extrabold">7 Days</h2>
            </div>

            {/* Fees */}
            <div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                50-Hour Yoga TTC Fees:
              </p>
              <div className="flex flex-col sm:flex-row sm:gap-10 mt-3 text-xl font-bold">
                <div className="bg-white rounded-lg shadow p-4 flex-1 border border-indigo-100 hover:border-indigo-300 transition">
                  <p className="text-[#150e70]">USD 500</p>
                  <p className="text-sm font-normal text-gray-600">
                    Private Room
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 flex-1 border border-indigo-100 hover:border-indigo-300 transition">
                  <p className="text-[#150e70]">USD 350</p>
                  <p className="text-sm font-normal text-gray-600">
                    Shared Room
                  </p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-2">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-[#150e70] to-[#1f2d98] hover:from-[#d9442e] hover:to-[#f05b45] transition text-white px-10 py-3 rounded-full shadow-lg text-sm sm:text-base font-semibold w-full sm:w-auto"
                >
                  BOOK NOW
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CourseSchedule;
