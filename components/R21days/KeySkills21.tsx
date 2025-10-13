'use client';
import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reasons: string[] = [
  'Experienced Instructors: Highly skilled and certified yoga professionals, each with over 10 years of international teaching experience, offering personalized guidance to help students master yoga techniques and understand its true essence.',
  'Holistic Approach: Combines physical postures, breathing techniques, meditation, and yoga philosophy to nurture mental, physical, and spiritual well-being.',
  'Authentic Yogic Traditions: Rooted in ancient Indian yoga practices, Rishikul Yogshala offers an immersive journey into yoga’s rich heritage and authenticity.',
  'Peaceful Environment: Serene settings in Goa, Kerala (Varkala and Paravur), and Mysore create an ideal atmosphere for yoga practice and self-reflection.',
  'Supportive Community: A warm, inclusive environment fosters meaningful connections among like-minded individuals, encouraging personal growth and lifelong friendships.',
  'Comprehensive Curriculum: Covers various yoga styles, pranayama, meditation, and yoga philosophy — providing a complete and balanced understanding of yoga.',
  'Yoga Alliance Certification: Registered with Yoga Alliance USA, ensuring globally recognized certification for aspiring yoga teachers.',
  'Affordable Luxury: Offers world-class yoga programs at an affordable price, including accommodation, nutritious meals, and expert instruction.',
  'Cultural Immersion: Opportunities to explore local culture, visit temples, and experience India’s vibrant heritage.',
  'Excellent Reviews: With over 34,500 students trained from more than 80 countries over the last 15 years, Rishikul Yogshala is consistently praised by its alumni and the global yoga community.',
];

const KeySkills21: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="bg-white py-14 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-12 leading-snug">
        Why Choose Rishikul Yogshala to Pursue Your <br /> 21-Day Intensive Immersion Program?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/Activity/keyskill.gif"
            alt="Yoga Retreat Experience"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        {/* Reasons List */}
        <ul ref={ref} role="list" className="space-y-5">
          {reasons.map((reason, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              role="listitem"
              className="flex items-start gap-3 text-[#150e70] text-base sm:text-lg leading-relaxed"
              aria-label={`Reason ${idx + 1}`}
            >
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              <span>{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeySkills21;
