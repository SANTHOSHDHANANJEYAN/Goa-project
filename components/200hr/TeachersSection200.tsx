'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Users, BookOpen, Star } from 'lucide-react';

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

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % teachers.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line
  }, []);

  const getVisibleTeachers = () => {
    return Array.from({ length: visibleCount }, (_, i) => teachers[(currentIndex + i) % teachers.length]);
  };

  const teacherHighlights = [
    { icon: <Users className="w-5 h-5" />, text: "5 to 6 seasoned yoga teachers for every YTTC" },
    { icon: <Award className="w-5 h-5" />, text: "In-house Lead Trainer with E-RYT certification" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Classical perspective on ancient yogic concepts" },
    { icon: <Star className="w-5 h-5" />, text: "Thousands of hours of teaching experience" },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Section 2 Header */}
      <div className="text-center mb-12 px-4 pl-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
        >
          Learn from Experienced Yoga Teachers from India
        </motion.h2>
        <div className="w-24 h-1 bg-[#e0b973] mx-auto mb-8"></div>

        {/* Flex container for text and image */}
        <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-center gap-10">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-left md:w-1/2"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Rishikul Yogshala Goa has have the best in-house best yoga teachers. This ensures 
              overall coverage of ancient yogic concepts from a very classical perspective. The 
              students can benefit and absorb the yogic techniques from these experienced teachers 
              in the most simple and effective way as possible.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Empowering aspiring students to explore their latent potential be it in theory or 
              practice is the purpose of our very core mission. This also underlines why we offer 
              5 to 6 seasoned and experienced yoga teachers to every Yoga Teacher Training Course 
              (YTTC). This group offers an all-inclusive and integrated yogic foundation to students, 
              through which the students adapt, learn and soak in the yogic experience.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In addition to this, there also exists In-house Lead Trainer who is an E-RYT and 
              possesses about a few thousand hours of on-ground experience themselves. Their 
              presence also lends to an overall memorable yogic experience to the students.
            </p>
          </motion.div>
          {/* Image on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center items-center"
          >
            <div className="rounded-lg overflow-hidden shadow-lgmax-w-sm mx-auto md:mx-0">
              <Image
                src="/aboutpics/242.jpg"
                alt="Yoga Teachers"
                width={600}
                height={400}
                className="object-cover "
              />
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-6xl mx-auto"
        >
          {teacherHighlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-[#e0b973]">{highlight.icon}</div>
              <span className="bg-[#e0b973]">{highlight.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Teachers Slider Section */}
      <div
        className="relative px-4 sm:px-8"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {/* Slider Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl font-extrabold text-black">Our Beloved Teachers</h3>
          <p className="text-lg text-black mt-2 max-w-xl mx-auto">
            Meet the guiding lights of your yogic journey
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className="w-10 h-1 bg-[#e0b973] rounded-full" />
            <span className="w-4 h-4 bg-[#e0b973] rounded-full" />
            <span className="w-10 h-1 bg-[#e0b973] rounded-full" />
          </div>
        </div>

        {/* Navigation Arrows */}
       <button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 shadow-lg p-2 rounded-full z-10 transition"
  style={{ backgroundColor: '#e0b973', color: '#ffffff' }}
  aria-label="Previous"
>
  <ChevronLeft size={28} />
</button>

<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 -translate-y-1/2 shadow-lg p-2 rounded-full z-10 transition"
  style={{ backgroundColor: '#e0b973', color: '#ffffff' }}
  aria-label="Next"
>
  <ChevronRight size={28} />
</button>


        {/* Teacher Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {getVisibleTeachers().map((teacher, index) => (
              <motion.div
                key={teacher.name + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white backdrop-blur-md border border-indigo-100 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center px-6 py-8"
              >
                <Link href="/about" passHref>
                 <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 shadow-md mb-4 cursor-pointer transition group-hover:scale-105" style={{ borderColor: '#e0b973' }}>
  <Image
    src={teacher.image}
    alt={teacher.name}
    width={128}
    height={128}
    className="object-cover w-full h-full"
  />
</div>

                </Link>
                <h3 className="text-lg font-semibold text-black">{teacher.name}</h3>
                <p className="text-sm text-indigo-500 mt-1">
                  {teacher.handle.replaceAll('_', ' ')}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
