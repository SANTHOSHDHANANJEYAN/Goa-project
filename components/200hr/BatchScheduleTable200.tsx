'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

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
    <>
      {/* Existing Course Schedule Section */}
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
                  className="bg-gradient-to-r from-[#150e70] to-[#1f2d98] hover:bg-green-700 transition text-white px-8 py-3 rounded-full shadow text-sm sm:text-base w-full sm:w-auto"
                >
                  BOOK NOW
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW SECTION — YTTC Certification (Goa) */}
      <section className="bg-gradient-to-b from-[#fff8e1] to-[#fffef8] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900">
              YTTC Certification
            </h2>
            <p className="text-green-700 italic font-semibold mt-2 text-lg">
              200 hour Yoga TTC certification in Goa
            </p>
            <p className="text-gray-700 mt-4 max-w-3xl">
              After successful completion of 200 hour Yoga TTC in Goa, Rishikul Yogshala provides
              certification to participants. Get your Yoga Certification Course Today.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Certificate Image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/certificates.jpg" // replace with your certificate image
                alt="YTTC Certificate"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-gray-300"
              />
            </div>

            {/* Group Photo */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/gallery/3.jpg" // replace with your group photo
                alt="Yoga TTC Graduates"
                width={700}
                height={400}
                className="rounded-lg shadow-lg border border-gray-300 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSchedule;
