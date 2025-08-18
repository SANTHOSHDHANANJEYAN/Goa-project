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
  }, [startAutoSlide]);

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
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-indigo-800">Our Beloved Teachers</h2>
        <p className="text-lg text-indigo-600 mt-2 max-w-xl mx-auto">
          Meet the guiding lights of your yogic journey
        </p>
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="w-10 h-1 bg-indigo-500 rounded-full" />
          <span className="w-4 h-4 bg-indigo-300 rounded-full" />
          <span className="w-10 h-1 bg-purple-500 rounded-full" />
        </div>
      </div>
      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between z-10">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full transition"
          aria-label="Previous"
          style={{ top: '50%', transform: 'translateY(-50%)', left: '1rem', position: 'absolute' }}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full transition"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white backdrop-blur-md border border-indigo-100 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <Link href="/about" passHref>
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200 shadow-md mb-4 cursor-pointer transition group-hover:scale-105">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <h3 className="text-lg font-semibold text-indigo-900">{teacher.name}</h3>
              <p className="text-sm text-indigo-500 mt-1">{teacher.handle.replaceAll('_', ' ')}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
