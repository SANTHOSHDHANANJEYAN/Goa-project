'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teachers = [
  { name: 'Abin Ji', handle: 'Philosophy', image: '/Abin Ji.jpg' },
  { name: 'Arshdeep Singh Behal', handle: 'Teaching_Methodology', image: '/Arshdeep Singh Behal.jpg' },
  { name: 'Bipin Singh Pharswan', handle: 'Ashtanga_Vinyasa_Yoga', image: '/Bipin Singh Pharswan.jpg' },
  { name: 'Gangesha Chaitanya', handle: 'Yoga_Philosophy', image: '/gangesh sir.jpg' },
  { name: 'Himanshu Ji', handle: 'Meera_Hatha_&_Ashtanga', image: '/Himanshu Ji.jpg' },
  { name: 'Pooja Ji', handle: 'Meditation_&_Pranayama', image: '/pooja ji.jpg' },
  { name: 'Purnima Ji', handle: 'Spiritual_Guidance', image: '/Purnima hi.jpg' },
  { name: 'Rahul Negi', handle: 'Hatha_Yoga_&_Ashtanga', image: '/Rahul Negi.jpg' },
  { name: 'Rishi Raj', handle: 'Philosophy_&_Meditation', image: '/Rishi Raj.jpg' },
  { name: 'Sukra Chaitanya', handle: 'Mantra_Meditation_Pranayama', image: '/Sukra Chaitanya.jpg' },
  { name: 'Yogesh Ji', handle: 'Philosophy_Meditation_&_Pranayama', image: '/Yogesh Ji.jpg' },
];

export default function TeachersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 4;

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const getVisibleTeachers = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(teachers[(currentIndex + i) % teachers.length]);
    }
    return visible;
  };

  return (
    <section
      className="relative overflow-hidden py-20 px-4 sm:px-8 bg-transparent"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Heading */}
      <div className="text-center mb-14 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 relative inline-block"
        >
          Our Beloved Teachers
          <span className="absolute left-0 bottom-1 w-full h-3 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 opacity-50 rounded-lg -z-10"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-indigo-600 mt-4 max-w-xl mx-auto"
        >
          Meet the guiding lights of your yogic journey
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex justify-center items-center gap-4"
        >
          <span className="w-10 h-1 bg-indigo-500 rounded-full animate-pulse" />
          <span className="w-4 h-4 bg-indigo-300 rounded-full animate-bounce" />
          <span className="w-10 h-1 bg-purple-500 rounded-full animate-pulse" />
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between z-10">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white/70 backdrop-blur-md shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full transition transform hover:scale-110"
          aria-label="Previous"
          style={{ top: '50%', transform: 'translateY(-50%)', left: '1rem', position: 'absolute' }}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white/70 backdrop-blur-md shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full transition transform hover:scale-110"
          aria-label="Next"
          style={{ top: '50%', transform: 'translateY(-50%)', right: '1rem', position: 'absolute' }}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Teacher Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition duration-500 ease-in-out">
        <AnimatePresence mode="wait">
          {getVisibleTeachers().map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-indigo-100 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center p-6"
            >
              <Link href="/about" passHref>
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 shadow-md mb-4 cursor-pointer transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
              <h3 className="text-lg font-semibold text-indigo-900">{teacher.name}</h3>
              <p className="text-sm text-indigo-500 mt-1">
                {teacher.handle.replaceAll('_', ' ')}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
