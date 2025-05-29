'use client';

import { FaSpa, FaGlobeAsia, FaSeedling, FaHeart } from "react-icons/fa";
import { GiMeditationCushion, GiIndiaGate, GiLotus } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About71() {
  const controls = useAnimation();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const iconList = [
    {
      Icon: FaSpa,
      text: "Affordable Yoga Retreats in Goa",
    },
    {
      Icon: MdOutlineCalendarMonth,
      text: "Flexible Stay Duration",
    },
    {
      Icon: GiIndiaGate,
      text: "Ideal Location for Relaxation",
    },
    {
      Icon: TbYoga,
      text: "Daily Yoga & Meditation Practice",
    },
    {
      Icon: FaGlobeAsia,
      text: "Optional Excursions",
    },
    {
      Icon: GiMeditationCushion,
      text: "Personalized Yoga Schedule",
    },
    {
      Icon: FaSeedling,
      text: "Holistic Mind-Body-Spirit Experience",
    },
    {
      Icon: FaHeart,
      text: "Cultivate Inner Peace",
    },
    {
      Icon: GiLotus,
      text: "Rejuvenate Through Yoga",
    },
  ];

  return (
    <section className="relative bg-white px-6 sm:px-10 lg:px-20 py-12">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[7rem] items-center"
      >
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/51.jpg"
              alt="Yoga Group"
              className="rounded-xl object-cover w-full"
              width={600}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/52.jpg"
              alt="Vegan Food"
              className="rounded-xl object-cover w-full"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/54.jpg"
              alt="Resort Room"
              className="rounded-xl object-cover w-full h-[83%]"
              width={300}
              height={200}
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="pb-14 md:pb-0">
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-indigo-900 rounded-full inline-block" />
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#150e70] mb-6 leading-snug">
            Transform your practice <br />
            in an authentic, serene <br />
            yoga learning environment
          </h2>

          <ul className="space-y-4 text-[#150e70] text-base sm:text-lg">
            {iconList.map(({ Icon, text }, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
              >
                <Icon className="text-[#150e70] mt-1 shrink-0" size={20} />
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
