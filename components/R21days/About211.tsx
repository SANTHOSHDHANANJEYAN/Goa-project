'use client';

import { FaCertificate, FaUtensils } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About211() {
  const controls = useAnimation();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const iconList = [
    {
      Icon: GiMeditation,
      text: "Focus purely on yoga practice without the pressure of exams or certification.",
      size: 22,
    },
    {
      Icon: FaCertificate,
      text: "Blend of Yoga Teacher Training (first 2 weeks) and practitioner-focused last week.",
      size: 20,
    },
    {
      Icon: FaUtensils,
      text: "A holistic experience combining physical postures, breathwork, and spiritual exploration.",
      size: 20,
    },
    {
      Icon: MdOutlineSelfImprovement,
      text: "Ideal for graduates of 200-hour YTT or anyone seeking deep personal transformation.",
      size: 22,
    },
  ];

  return (
    <section className="relative bg-[#f4f5f3] px-4 pb-12">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-28 items-center pt-12"
      >
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative h-[325px]">
            <Image
              src="/aboutpics/2422.jpg"
              alt="Yoga Practice"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div className="relative h-[160px]">
            <Image
              src="/aboutpics/524.jpg"
              alt="Meditation Session"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div className="relative h-[160px]">
            <Image
              src="/aboutpics/777.jpg"
              alt="Resort Environment"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
                    <div className="col-span-2 relative h-[325px]">
            <Image
              src="/aboutpics/2422.jpg"
              alt="Yoga Practice"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div className="relative h-[160px]">
            <Image
              src="/aboutpics/524.jpg"
              alt="Meditation Session"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div className="relative h-[160px]">
            <Image
              src="/aboutpics/777.jpg"
              alt="Resort Environment"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>
        

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 leading-snug">
            21 Days Intensive Yoga Immersive Program - <br />
            A Transformational Journey
          </h2>

          <p className="text-black mb-4 leading-relaxed">
            Are you someone who is looking to pursue a Yoga program that purely focuses 
            from a practitioner’s point of view — a program without exams, certification, 
            or pressure? Welcome to the world of <strong>Practitioner’s Yoga</strong> for a truly transformational journey.
          </p>

          <p className="text-black mb-4 leading-relaxed">
            <strong>Rishikesh Yogshala</strong> is one of the oldest schools in India, providing classical yogic 
            teachings for over 15 years, having trained more than <strong>34,500 students</strong> from 
            around <strong>80 countries</strong>.
          </p>

          <p className="text-black mb-4 leading-relaxed">
            As a school, our mission is to bring forth genuine yogic practitioners — 
            individuals who adopt yoga as a lifestyle, enhancing their postures, 
            breathwork, and mental clarity.
          </p>

          <p className="text-black mb-4 leading-relaxed">
            The <strong>21 Days Intensive Yoga Immersive Program</strong> is curated to merge 
            the structure of a Yoga Teacher Training for the first two weeks, 
            while dedicating the final week to an intense practitioner mode. 
            This ensures a balanced blend of learning, practice, and transformation.
          </p>

          <p className="text-black mb-4 leading-relaxed">
            Whether you’ve already completed your <strong>200-Hour Yoga Teacher Training</strong> 
            or simply wish to deepen your personal practice — this immersive experience 
            is designed for you. Embark on this journey to evolve physically, mentally, 
            and spiritually.
          </p>

          <ul className="space-y-4 text-black mt-6">
            {iconList.map(({ Icon, text, size }, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
              >
                <Icon className="mt-1 shrink-0" size={size} aria-hidden="true" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
