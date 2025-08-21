'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const courseDates = [
  { date: '7 Sept - 30 Sept 2025' },
  { date: '7 Oct - 30 Oct 2025' },
  { date: '7 Nov - 30 Nov 2025' },
  { date: '7 Dec - 30 Dec 2025' },
  { date: '7 Jan - 30 Jan 2026' },
  { date: '7 Feb - 28 Feb 2026' },
  { date: '7 Mar - 30 Mar 2026' },
  { date: '7 Apr - 30 Apr 2026' },
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
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
        >
          {courseDates.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: '#f8faff' }}
              className="flex items-start space-x-3 border-b pb-3 border-gray-200 rounded transition"
            >
              <FaCalendarAlt className="text-[#150e70] text-xl mt-1 shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Fee Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-start bg-gradient-to-br from-[#f8faff] to-white rounded-xl p-6 shadow-inner space-y-6"
        >
          <div>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
              Course Duration:
            </p>
            <h2 className="text-2xl text-[#150e70] font-extrabold">24 Days</h2>
          </div>

          <div>
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
              200 Hrs Yoga TTC Fee:
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-6 mt-3 text-xl font-bold">
              <div className="bg-white rounded-lg shadow p-4 flex-1 border border-indigo-100 hover:border-indigo-300 transition">
                <p className="text-[#150e70]">USD 1600</p>
                <p className="text-sm font-normal text-gray-600">Private Room</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex-1 border border-indigo-100 hover:border-indigo-300 transition">
                <p className="text-[#150e70]">USD 1300</p>
                <p className="text-sm font-normal text-gray-600">Shared Room</p>
              </div>
            </div>
          </div>

          <div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#150e70] to-[#1f2d98] hover:from-[#d9442e] hover:to-[#f05b45] transition text-white px-8 py-3 rounded-full shadow text-sm sm:text-base w-full sm:w-auto"
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
