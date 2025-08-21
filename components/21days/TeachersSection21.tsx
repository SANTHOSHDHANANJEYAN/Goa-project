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

export default function TeachersSection21() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsiveness: show different counts based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
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
      className="relative overflow-hidden pb-20 px-4 sm:px-8 bg-gradient-to-b from-white via-indigo-50 to-white"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#150e70] tracking-tight">
          Our Beloved Teachers
        </h2>
        <p className="text-lg text-indigo-600 mt-3 max-w-2xl mx-auto">
          Meet the guiding lights of your yogic journey
        </p>
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="w-12 h-1 bg-indigo-500 rounded-full" />
          <span className="w-4 h-4 bg-indigo-300 rounded-full" />
          <span className="w-12 h-1 bg-purple-500 rounded-full" />
        </div>
      </div>

      {/* Navigation Arrows */}
      {visibleCount > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-3 rounded-full z-10 transition-transform hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-3 rounded-full z-10 transition-transform hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Teacher Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition duration-500 ease-in-out">
        <AnimatePresence mode="wait">
          {getVisibleTeachers().map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white backdrop-blur-md border border-indigo-100 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center px-6 py-8"
            >
              <Link href="/about" passHref>
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200 shadow-md mb-5 cursor-pointer transition group-hover:scale-110 group-hover:shadow-indigo-300">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-20 transition" />
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
