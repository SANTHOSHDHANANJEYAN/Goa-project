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
  Info,
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
  const safetyFeatures = [
    { icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, text: "24-Hour On-Site Security" },
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, text: "Guest Pre-Registration for Any Non-Staff Member or Student" },
    { icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />, text: "Safe Lockers in Our Office for Any Valuables Students May Have" },
    { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, text: "A quiet and peaceful, beautiful place to relax and contemplate yogic dimensions" },
    { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, text: "Secure travel assistance from trusted taxi drivers with years of partnership" }
  ];

  const books = [
    { title: 'Yoga Anatomy', author: 'Leslie Kaminoff', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Anatomy.pdf', cover: '/books/yoga-anatomy.jpg' },
    { title: 'Yoga Nidra', author: 'Swami Satyananda Saraswati', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Nidra.pdf', cover: '/books/yoga-nidra.jpg' },
    { title: 'Lights of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/lights-of-yoga.pdf', cover: '/books/lights-of-yoga.jpg' },
    { title: 'Yoga Mala', author: 'Sri K. Pattabhi Jois', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Mala.pdf', cover: '/books/yoga-mala.jpg' },
    { title: 'Autobiography of a Yogi', author: 'Paramahansa Yogananda', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/autobiography-of-yogi.pdf', cover: '/books/autobiography-of-a-yogi.jpg' },
    { title: 'Ajna Chakra', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ajna-chakra.pdf', cover: '/books/ajna-chakra.jpg' },
    { title: 'Mudra Bandha', author: 'Swami Satyananda Saraswati', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Mudra-Bandha.pdf', cover: '/books/mudra-bandha.jpg' },
    { title: 'The Ayurveda', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-ayurveda.pdf', cover: '/books/the-ayurveda.jpg' }
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amt = Math.round(sliderRef.current.clientWidth * 0.9);
    sliderRef.current.scrollBy({ left: dir === 'left' ? -amt : amt, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-purple-50 py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#150e70] leading-tight">
            200 Hour Yoga Teacher Training in Goa
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl mt-2 font-medium text-gray-700">
            What to Know Before You Go
          </h3>
          <div className="mt-3 md:mt-5 w-20 h-1 bg-[#150e70] mx-auto rounded-full"></div>
        </motion.div>

        {/* Intro */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 md:p-10 mb-10 md:mb-14 border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mt-1" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Studying yoga in its birthplace—India—is a mystical and transformative experience. Goa, with its serene beaches and vibrant community, welcomes international students warmly. It’s one of the safest and most peaceful destinations for yoga learning.
            </p>
          </div>
        </motion.div>

        {/* Safety */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#fff8ec] via-white to-[#e6edff] rounded-2xl p-6 sm:p-8 md:p-10 mb-10 md:mb-14 shadow-md"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#150e70] mr-0 sm:mr-3 mb-2 sm:mb-0" />
            <h4 className="text-xl sm:text-2xl font-semibold text-[#150e70]">Safety & Security</h4>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
            Goa is a welcoming, safe, and tourist-friendly region. The local community has decades of experience hosting international guests and treats them with kindness and respect.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            At Rishikul Yogshala, we maintain an impeccable safety record through these measures:
          </p>
        </motion.div>

        {/* Safety Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-16"
        >
          {safetyFeatures.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl p-4 sm:p-5 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#e8ebff] text-[#150e70] flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-4 sm:p-6 mb-10 md:mb-14 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1" />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We’re dedicated to ensuring every student feels safe and cared for from arrival to departure. Assistance is available at every step of your journey.
            </p>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#fdf2ff] to-[#e7f1ff] rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-lg mb-14 md:mb-20"
        >
          <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-[#150e70] mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Most travellers fall in love with India’s spirit — the people, the traditions, and the energy. We invite you to embark on this life-changing yoga journey with confidence and an open heart.
          </p>
        </motion.div>

        {/* Recommended Books */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#150e70]">
            Recommended Readings Before This Course
          </h3>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            These books and resources will help you deepen your understanding before beginning your 200-hour journey.
          </p>
          <div className="mt-3 sm:mt-4 w-20 sm:w-24 h-1 bg-[#150e70] mx-auto rounded-full mb-6 sm:mb-10"></div>

          <div className="relative">
            <button
              onClick={() => scrollByAmount('left')}
              className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white shadow-lg rounded-full justify-center items-center ring-1 ring-[#150e70]/20 hover:ring-[#150e70]/40 transition"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#150e70]" />
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white shadow-lg rounded-full justify-center items-center ring-1 ring-[#150e70]/20 hover:ring-[#150e70]/40 transition"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#150e70]" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 sm:pb-3 px-1 scrollbar-hide"
            >
              {books.map((book, idx) => (
                <div key={idx} className="snap-start min-w-[180px] sm:min-w-[230px] md:min-w-[260px] lg:min-w-[300px]">
                  <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col">
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 via-white to-[#e6edff] overflow-hidden">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-3 sm:p-4 flex-1 text-left">
                      <h4 className="font-semibold text-base sm:text-lg text-gray-800">{book.title}</h4>
                      {book.author && (
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">By {book.author}</p>
                      )}
                    </div>
                    <div className="p-3 sm:p-4 pt-0">
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-[#150e70] text-white py-2 sm:py-2.5 rounded-lg font-medium shadow hover:brightness-110 transition text-sm sm:text-base"
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default BeforeYouGoSection;
