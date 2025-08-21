'use client';
import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills: string[] = [
  'Deep understanding of yoga philosophy and history',
  'Correct alignment and adjustment techniques',
  'Effective cueing and voice modulation for classes',
  'Hands-on experience with pranayama and meditation',
  'Anatomy knowledge relevant to yoga practice',
  'Confidence in leading group and private sessions',
  'Developing personalized yoga sequences',
  'Time management and class planning',
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
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#150e70] mb-12">
        Why Choose Rishikul Yogshala’s 21-Day Yoga Retreat in Goa?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="/Activity/keyskill.gif"
            alt="Animated yoga skills showcase"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        {/* Skills List */}
        <ul ref={ref} role="list" className="space-y-5">
          {skills.map((skill, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              role="listitem"
              className="flex items-start gap-3 text-[#150e70] text-base sm:text-lg"
              aria-label={`Key skill ${idx + 1}`}
            >
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeySkills21;
