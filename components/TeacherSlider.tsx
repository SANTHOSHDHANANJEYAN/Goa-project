'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const teachers = [
  {
    name: 'Abin Ji',
    handle: '@Philosophy',
    image: '/Abin Ji.jpg',
  },
  {
    name: 'Arshdeep Singh Behal',
    handle: '@Teaching_Methodology',
    image: 'Arshdeep Singh Behal.jpg',
  },
  {
    name: 'Bipin Singh Pharswan',
    handle: '@Ashtanga_Vinyasa_Yoga',
    image: '/Bipin Singh Pharswan.jpg',
  },
  {
    name: ' Gangesha Chaitanya',
    handle: '@Yoga_Philosophy',
    image: '/gangesh sir.jpg',
  },
  {
    name: 'Himanshu Ji',
    handle: '@meera_Hatha_&_Ashtangad',
    image: '/Himanshu Ji.jpg',
  },
  {
    name: 'Pooja Ji',
    handle: '@Medititation_&_Pranayama',
    image: '/pooja ji.jpg',
  },
  {
    name: 'Purnima hi',
    handle: '@ Spiritual_Guidance',
    image: '/Purnima hi.jpg',
  },
  {
    name: 'Rahul Negi',
    handle: '@Hatha_Yoga_&_Ashtanga',
    image: '/Rahul Negi.jpg',
  },
  {
    name: 'Rishi Raj',
    handle: '@Philosophy_&_Meditation',
    image: '/Rishi Raj.jpg',
  },
   {
    name: 'Sukra Chaitanya',
    handle: '@Mantra_Meditation_Pranayama',
    image: '/Sukra Chaitanya.jpg',
  },
   {
    name: 'Yogesh Ji',
    handle: '@Philosophy_Meditation_&_Pranayama',
    image: '/Yogesh Ji.jpg',
  },
];

export default function TeacherSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 4;

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachers.length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
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
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Our Teacher
        </h2>
        <div className="flex justify-center items-center">
          <span className="w-10 h-px bg-blue-700 mx-2" />
          <svg
            className="w-6 h-6 text-purple-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22Z" />
          </svg>
          <span className="w-10 h-px bg-blue-900 mx-2" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto flex justify-center gap-10 flex-wrap px-4 transition-all duration-700 ease-in-out mt-16">
        {getVisibleTeachers().map((teacher, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link href="/about">
              <div className="rounded-full border-4 border-rose-300 overflow-hidden w-48 h-48 mb-5 cursor-pointer">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md text-center w-full max-w-[180px]">
              {teacher.name}
            </div>
            <p className="text-blue-900 mt-2">{teacher.handle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
