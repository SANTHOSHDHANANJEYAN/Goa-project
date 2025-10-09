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
    { icon: <Shield className="w-6 h-6 md:w-7 md:h-7" />, text: "24-Hour On-Site Security" },
    { icon: <Users className="w-6 h-6 md:w-7 md:h-7" />, text: "Guest Pre-Registration for Any Non-Staff Member or Student" },
    { icon: <Lock className="w-6 h-6 md:w-7 md:h-7" />, text: "Safe Lockers in Our Office for Any Valuables Students May Have" },
    { icon: <MapPin className="w-6 h-6 md:w-7 md:h-7" />, text: "A quiet and peaceful, beautiful place to relax and contemplate yogic dimensions" },
    { icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />, text: "Secure travel assistance from trusted taxi drivers with years of partnership" }
  ];

const books = [
  { title: 'Yoga Anatomy', author: 'Leslie Kaminoff', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Anatomy.pdf', cover: '/books/yoga-anatomy.jpg' },
  { title: 'Yoga Nidra', author: 'Swami Satyananda Saraswati', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Nidra.pdf', cover: '/books/yoga-nidra.jpg' },
  { title: 'Lights of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/lights-of-yoga.pdf', cover: '/books/lights-of-yoga.jpg' },
  { title: 'Yoga Mala', author: 'Sri K. Pattabhi Jois', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Mala.pdf', cover: '/books/yoga-mala.jpg' },
  { title: 'Autobiography of a Yogi', author: 'Paramahansa Yogananda', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/autobiography-of-yogi.pdf', cover: '/books/autobiography-of-a-yogi.jpg' },
  { title: 'Ajna Chakra', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ajna-chakra.pdf', cover: '/books/ajna-chakra.jpg' },
  { title: 'Mudra Bandha', author: 'Swami Satyananda Saraswati', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Mudra-Bandha.pdf', cover: '/books/mudra-bandha.jpg' },
  { title: 'The Ayurveda', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-ayurveda.pdf', cover: '/books/the-ayurveda.jpg' },

  // Added books
  { title: 'Moola Bandha', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/moola-bandha.pdf', cover: '/books/moola-bandha.jpg' },
  { title: 'Hatha Yoga Pradipika', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/hatha-yoga-pradipika.pdf', cover: '/books/hatha-yoga-pradipika.jpg' },
  { title: 'Ayurveda Encyclopedia', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ayurveda-encyclopedia.pdf', cover: '/books/ayurveda-encyclopedia.jpg' },
  { title: 'Bhagwat Gita', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/bhagwat-gita.pdf', cover: '/books/bhagwat-gita.jpg' },
  { title: 'Yogic Management', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yogic-management.pdf', cover: '/books/yogic-management.jpg' },
  { title: 'Yoga Sutras', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yoga-sutras.pdf', cover: '/books/yoga-sutras.jpg' },
  { title: 'Tattwa Shuddhi', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/tattwa-shuddhi.pdf', cover: '/books/tattwa-shuddhi.jpg' },
  { title: 'Prana and Pranayama', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/prana-and-pranayama.pdf', cover: '/books/prana-and-pranayama.jpg' },
  { title: 'Scientific Keys Volume 1', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/scientific-keys-volume-01.pdf', cover: '/books/scientific-keys-volume-01.jpg' },
  { title: 'Kundalini Tantra', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/kundalini-tantra.pdf', cover: '/books/kundalini-tantra.jpg' },
  { title: 'Hatha Yoga Illustrated', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/hatha-yoga-illustrated-by-martin-kirk.pdf', cover: '/books/hatha-yoga-illustrated-by-martin-kirk.jpg' },
  { title: 'Ashtanga Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ashtanga-yoga.pdf', cover: '/books/ashtanga-yoga.jpg' },
  { title: 'The Inner Tradition of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-inner-tradition-of-yoga.pdf', cover: '/books/the-inner-tradition-of-yoga.jpg' },
  { title: 'The Art of Vinyasa', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-art-of-vinyasa.pdf', cover: '/books/the-art-of-vinyasa.jpg' },
  { title: 'Teaching Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/teaching-yoga.pdf', cover: '/books/teaching-yoga.jpg' },
  { title: 'Stretching Anatomy', author: '', href: 'http://rishikulyogshalarishikesh.com/ebooks/stretching-anatomy.pdf', cover: '/books/stretching-anatomy.jpg' },
  { title: 'Scientific Keys Volume 2', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/scientific-keys-volume-02.pdf', cover: '/books/scientific-keys-volume-02.jpg' },
  { title: 'The Seven Spiritual Laws of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-seven-spiritual-laws-of-yoga.pdf', cover: '/books/the-seven-spiritual-laws-of-yoga.jpg' },
  { title: 'Yoga Therapy', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yoga-therapy.pdf', cover: '/books/yoga-therapy.jpg' },
  { title: 'Yoga of the Subtle Body', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yoga-of-the-subtle-body.pdf', cover: '/books/yoga-of-the-subtle-body.jpg' },
  { title: 'Yin Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yin-yoga.pdf', cover: '/books/yin-yoga.jpg' },
  { title: 'Vinyasa Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/vinyasa-yoga.pdf', cover: '/books/vinyasa-yoga.jpg' },
  { title: 'The Power of Ashtanga Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-power-of-ashtanga-yoga.pdf', cover: '/books/the-power-of-ashtanga-yoga.jpg' }
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
          className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 md:p-10 mb-10 md:mb-14 border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mt-1" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Studying yoga in its birthplace—India—is a mystical and transformative experience. Goa, with its serene beaches and vibrant community, welcomes international students warmly.
            </p>
          </div>
        </motion.div>

        {/* Safety Section */}
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
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Goa is a welcoming, safe, and tourist-friendly region. At Rishikul Yogshala, we maintain an impeccable safety record through these measures:
          </p>
        </motion.div>

        {/* Equal Height Safety Cards */}
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
              className="flex flex-col justify-center bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl p-5 sm:p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 h-full min-h-[150px]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ebff] text-[#150e70] flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-gray-700 text-base">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-5 sm:p-6 mb-10 md:mb-14 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-yellow-500 mt-1" />
            <p className="text-gray-700 text-base leading-relaxed">
              We’re dedicated to ensuring every student feels safe and cared for from arrival to departure.
            </p>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#fdf2ff] to-[#e7f1ff] rounded-2xl p-8 text-center shadow-lg mb-16"
        >
          <Globe className="w-12 h-12 text-[#150e70] mx-auto mb-4" />
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Most travellers fall in love with India’s spirit — the people, the traditions, and the energy. We invite you to embark on this life-changing yoga journey.
          </p>
        </motion.div>

        {/* Book Section */}
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
          <div className="mt-3 w-24 h-1 bg-[#150e70] mx-auto rounded-full mb-8"></div>

          {/* Desktop slider */}
          <div className="relative hidden md:block">
            <button
              onClick={() => scrollByAmount('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white/90 hover:bg-white shadow-lg rounded-full justify-center items-center ring-1 ring-[#150e70]/20 hover:ring-[#150e70]/40 transition flex"
            >
              <ChevronLeft className="w-6 h-6 text-[#150e70]" />
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white/90 hover:bg-white shadow-lg rounded-full justify-center items-center ring-1 ring-[#150e70]/20 hover:ring-[#150e70]/40 transition flex"
            >
              <ChevronRight className="w-6 h-6 text-[#150e70]" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 px-1 scrollbar-hide"
            >
              {books.map((book, idx) => (
                <div key={idx} className="snap-start min-w-[280px] flex-shrink-0">
                  <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col h-full">
                    <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">{book.title}</h4>
                        {book.author && <p className="text-sm text-gray-600 mt-1">By {book.author}</p>}
                      </div>
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-[#150e70] text-white py-2.5 rounded-lg font-medium shadow hover:brightness-110 transition mt-4"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
            {books.map((book, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-md flex flex-col">
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">{book.title}</h4>
                    {book.author && <p className="text-xs text-gray-600 mt-1">By {book.author}</p>}
                  </div>
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#150e70] text-white py-1.5 rounded-md text-xs font-medium mt-3"
                  >
                    <Download className="w-3 h-3 mr-1" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default BeforeYouGoSection;
