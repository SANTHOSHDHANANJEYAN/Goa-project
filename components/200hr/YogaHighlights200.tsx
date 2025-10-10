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
  { title: 'Yoga Anatomy', author: 'Leslie Kaminoff', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Anatomy.pdf', cover: '/yoga-anatomy.webp' },
  { title: 'Yoga Nidra', author: 'Swami Satyananda Saraswati', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Nidra.pdf', cover: '/yoga-nidra.webp' },
  { title: 'Lights of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/lights-of-yoga.pdf', cover: '/lights-of-yoga.webp' },
  { title: 'Yoga Mala', author: 'Sri K. Pattabhi Jois', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Yoga-Mala.pdf', cover: '/yoga-mala.webp' },
  { title: 'Autobiography of a Yogi', author: 'Paramahansa Yogananda', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/autobiography-of-yogi.pdf', cover: '/autobiography-of-a-yogi.webp' },
  { title: 'Ajna Chakra', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ajna-chakra.pdf', cover: '/ajna-chakra.webp' },
  { title: 'Mudra Bandha', author: 'Swami Satyananda Saraswati', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/Mudra-Bandha.pdf', cover: '/mudra-bandha.webp' },
  { title: 'The Ayurveda', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-ayurveda.pdf', cover: '/the-ayurveda.webp' },

  { title: 'Moola Bandha', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/moola-bandha.pdf', cover: '/moola-bandha.webp' },
  { title: 'Hatha Yoga Pradipika', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/hatha-yoga-pradipika.pdf', cover: '/hatha-yoga-pradipika.webp' },
  { title: 'Ayurveda Encyclopedia', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ayurveda-encyclopedia.pdf', cover: '/ayurveda-encyclopedia.webp' },
  { title: 'Bhagwat Gita', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/bhagwat-gita.pdf', cover: '/bhagwat-gita.webp' },
  { title: 'Yogic Management', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yogic-management.pdf', cover: '/yogic-management.webp' },
  { title: 'Yoga Sutras', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yoga-sutras.pdf', cover: '/yoga-sutras.webp' },
  { title: 'Tattwa Shuddhi', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/tattwa-shuddhi.pdf', cover: '/tattwa-shuddhi.webp' },
  { title: 'Prana and Pranayama', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/prana-and-pranayama.pdf', cover: '/prana-and-pranayama.webp' },
  { title: 'Scientific Keys Volume 1', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/scientific-keys-volume-01.pdf', cover: '/scientific-keys-volume-01.webp' },
  { title: 'Kundalini Tantra', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/kundalini-tantra.pdf', cover: '/kundalini-tantra.webp' },
  { title: 'Hatha Yoga Illustrated', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/hatha-yoga-illustrated-by-martin-kirk.pdf', cover: '/hatha-yoga-illustrated-by-martin-kirk.webp' },
  { title: 'Ashtanga Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/ashtanga-yoga.pdf', cover: '/ashtanga-yoga.webp' },
  { title: 'The Inner Tradition of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-inner-tradition-of-yoga.pdf', cover: '/the-inner-tradition-of-yoga.webp' },
  { title: 'The Art of Vinyasa', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-art-of-vinyasa.pdf', cover: '/the-art-of-vinyasa.webp' },
  { title: 'Teaching Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/teaching-yoga.pdf', cover: '/teaching-yoga.webp' },
  { title: 'Stretching Anatomy', author: '', href: 'http://rishikulyogshalarishikesh.com/ebooks/stretching-anatomy.pdf', cover: '/stretching-anatomy.webp' },
  { title: 'Scientific Keys Volume 2', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/scientific-keys-volume-02.pdf', cover: '/scientific-keys-volume-02.webp' },
  { title: 'The Seven Spiritual Laws of Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-seven-spiritual-laws-of-yoga.pdf', cover: '/the-seven-spiritual-laws-of-yoga.webp' },
  { title: 'Yoga Therapy', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yoga-therapy.pdf', cover: '/yoga-therapy.webp' },
  { title: 'Yoga of the Subtle Body', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yoga-of-the-subtle-body.pdf', cover: '/yoga-of-the-subtle-body.webp' },
  { title: 'Yin Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/yin-yoga.pdf', cover: '/yin-yoga.webp' },
  { title: 'Vinyasa Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/vinyasa-yoga.pdf', cover: '/vinyasa-yoga.webp' },
  { title: 'The Power of Ashtanga Yoga', author: '', href: 'https://www.rishikulyogshalarishikesh.com/ebooks/the-power-of-ashtanga-yoga.pdf', cover: '/the-power-of-ashtanga-yoga.webp' }
];

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amt = Math.round(sliderRef.current.clientWidth * 0.8);
    sliderRef.current.scrollBy({ left: dir === 'left' ? -amt : amt, behavior: 'smooth' });
  };

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

        {/* Equal Height Safety Cards */}
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

        {/* Mobile + Desktop Book Slider */}
        <motion.section
          variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Recommended Readings Before This Course
          </h3>
          <div className="mt-3 w-24 h-1 bg-[#150e70] mx-auto rounded-full mb-8"></div>

          {/* Scrollable slider (all devices) */}
          <div className="relative">
            <button
              onClick={() => scrollByAmount('left')}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex justify-center items-center ring-1 ring-[#150e70]/20 hover:ring-[#150e70]/40 transition"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#16a34a]" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 px-1 scrollbar-hide"
            >
              {books.map((book, idx) => (
                <div key={idx} className="snap-start min-w-[220px] sm:min-w-[260px] flex-shrink-0">
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
                        <h4 className="font-semibold text-base sm:text-lg text-gray-800">{book.title}</h4>
                        {book.author && <p className="text-xs sm:text-sm text-gray-600 mt-1">By {book.author}</p>}
                      </div>
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-[#16a34a] text-white py-2 rounded-lg font-medium text-sm mt-3 hover:bg-[#e6a823] transition duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollByAmount('right')}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex justify-center items-center ring-1 ring-[#150e70]/20 hover:ring-[#150e70]/40 transition"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#16a34a]" />
            </button>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default BeforeYouGoSection;
