'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teachers = [
  { name: 'Abin Ji', handle: 'Philosophy', image: '/Abin Ji.jpg' },
  { name: 'Arshdeep Singh Behal', handle: 'Teaching_Methodology', image: '/Arshdeep Singh Behal.jpg' },
  { name: 'Bipin Singh Pharswan', handle: 'Ashtanga_Vinyasa_Yoga', image: '/Bipin Singh Pharswan.jpg' },
  { name: 'Gangesha Chaitanya', handle: 'Yoga_Philosophy', image: '/gangesh sir.jpg' },
  { name: 'Himanshu Ji', handle: 'meera_Hatha_&_Ashtangad', image: '/Himanshu Ji.jpg' },
  { name: 'Pooja Ji', handle: 'Medititation_&_Pranayama', image: '/pooja ji.jpg' },
  { name: 'Purnima G', handle: 'Spiritual_Guidance', image: '/Purnima hi.jpg' },
  { name: 'Rahul Negi', handle: 'Hatha_Yoga_&_Ashtanga', image: '/Rahul Negi.jpg' },
  { name: 'Rishi Raj', handle: 'Philosophy_&_Meditation', image: '/Rishi Raj.jpg' },
  { name: 'Sukra Chaitanya', handle: 'Mantra_Meditation_Pranayama', image: '/Sukra Chaitanya.jpg' },
  { name: 'Yogesh Ji', handle: 'Philosophy_Meditation_&_Pranayama', image: '/Yogesh Ji.jpg' },
];

export default function TeacherSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 4;

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
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
      className="py-20 px-4 bg-transparent relative overflow-hidden mt-[4rem]"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-indigo-800 mb-4">Our Beloved Teachers</h2>
        <p className="text-lg text-indigo-600 max-w-xl mx-auto">Meet the guiding lights of your yogic journey</p>
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="w-10 h-1 bg-indigo-500 rounded-full" />
          <span className="w-4 h-4 bg-indigo-300 rounded-full" />
          <span className="w-10 h-1 bg-purple-500 rounded-full" />
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full z-10"
        aria-label="Next"
      >
        <ChevronRight size={28} />
      </button>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-500 ease-in-out px-4">
        {getVisibleTeachers().map((teacher, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center p-5"
          >
            <Link href="/about">
              <div className="rounded-full overflow-hidden w-36 h-36 border-4 border-indigo-300 mb-4 cursor-pointer">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <h3 className="text-xl font-semibold text-indigo-800">{teacher.name}</h3>
            <p className="text-sm text-purple-600 mt-1">{teacher.handle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
