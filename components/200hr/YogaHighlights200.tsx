'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  MapPin,
  Users,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const BeforeYouGoSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  const safetyFeatures = [
    { icon: <Shield className="w-6 h-6 md:w-7 md:h-7" />, text: "24-Hour On-Site Security" },
    { icon: <Users className="w-6 h-6 md:w-7 md:h-7" />, text: "Guest Pre-Registration for Any Non-Staff Member or Student" },
    { icon: <Lock className="w-6 h-6 md:w-7 md:h-7" />, text: "Safe Lockers in Our Office for Any Valuables Students May Have" },
    { icon: <MapPin className="w-6 h-6 md:w-7 md:h-7" />, text: "A quiet and peaceful, beautiful place to relax and contemplate yogic dimensions" },
    { icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />, text: "Secure travel assistance from trusted taxi drivers with years of partnership" }
  ];

  const books = [
    { title: 'Yoga Anatomy', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Anatomy.pdf', cover: '/book-anatomy.webp' },
    { title: 'Yoga Nidra', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Nidra.pdf', cover: '/book-nidra.webp' },
    { title: 'Lights of Yoga', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/lights-of-yoga.pdf', cover: '/book-lights.webp' },
    { title: 'Yoga Mala', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Mala.pdf', cover: '/book-yoga-mala.webp' },
    { title: 'Autobiography of a Yogi', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/autobiography-of-yogi.pdf', cover: '/book-autobiography.webp' },
    { title: 'Ajna Chakra', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ajna-chakra.pdf', cover: '/ajna-chakra.webp' },
    { title: 'Mudra Bandha', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Mudra-Bandha.pdf', cover: '/mudra-bandha.webp' },
    { title: 'The Ayurveda', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-ayurveda.pdf', cover: '/the-ayurveda.webp' },
    { title: 'Moola Bandha', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/moola-bandha.pdf', cover: '/moola-bandha.webp' },
    { title: 'Hatha Yoga Pradipika', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/hatha-yoga-pradipika.pdf', cover: '/hatha-yoga-pradipika.webp' },
    { title: 'Ayurveda Encyclopedia', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ayurveda-encyclopedia.pdf', cover: '/ayurveda-encyclopedia.webp' },
    { title: 'Bhagwat Gita', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/bhagwat-gita.pdf', cover: '/bhagwat-gita.webp' },
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
            200 Hour Yoga Teacher Training in Goa
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl mt-2 font-medium text-gray-700">
            What to Know Before You Go
          </h3>
          <div className="mt-3 md:mt-5 w-20 h-1 bg-[#e0b973] mx-auto rounded-full"></div>
        </motion.div>

        {/* Intro */}
        <motion.div
          variants={fadeInUp}
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 mb-10 md:mb-14 border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Heart className="w-7 h-7 text-pink-500 mt-1" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Studying yoga in its birthplace—India—is a mystical and transformative experience. Goa, with its serene beaches and vibrant community, welcomes international students warmly.
            </p>
          </div>
        </motion.div>

        {/* Safety Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-[#fff8ec] via-white to-[#e6edff] rounded-2xl p-6 sm:p-8 mb-10 md:mb-14 shadow-md"
        >
          <div className="flex items-center mb-4">
            <Shield className="w-7 h-7 text-[#150e70] mr-3" />
            <h4 className="text-xl sm:text-2xl font-semibold text-[#150e70]">Safety & Security</h4>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Goa is a welcoming, safe, and tourist-friendly region. At Rishikul Yogshala, we maintain an impeccable safety record through these measures:
          </p>
        </motion.div>

        {/* Safety Cards */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {safetyFeatures.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-col justify-center bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 min-h-[160px]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ebff] text-[#150e70] flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-gray-700 text-base leading-relaxed">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOOK SLIDER SECTION */}
        <motion.section variants={fadeInUp} className="relative text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Recommended Readings Before This Course
          </h3>
          <div className="mt-3 w-24 h-1 bg-[#150e70] mx-auto rounded-full mb-8"></div>

          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full z-10 transition"
            aria-label="Previous"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-indigo-50 text-indigo-600 p-2 rounded-full z-10 transition"
            aria-label="Next"
          >
            <ChevronRight size={26} />
          </button>

          {/* Horizontal scroll area */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar px-6 py-4 scroll-smooth"
          >
            {books.map((book, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 border border-[#16a34a] rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <a href={book.href} target="_blank" rel="noopener noreferrer">
                  {/* ↓ Reduced height */}
                  <div className="aspect-[3/4]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-[#16a34a] text-white text-center font-medium text-xs sm:text-sm py-1 px-2 flex items-center justify-center gap-1.5">
                    <span className="truncate">{book.title}</span>
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default BeforeYouGoSection;
