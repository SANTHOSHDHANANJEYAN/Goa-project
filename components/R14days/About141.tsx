'use client';

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About141() {
  const controls = useAnimation();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const transformList = [
    "Affordable Yoga Retreats in Goa",
    "Flexible Stay Duration",
    "Ideal Location for Relaxation",
    "Daily Yoga & Meditation Practice",
    "Optional Excursions",
    "Personalized Yoga Schedule",
    "Holistic Mind-Body-Spirit Experience",
    "Cultivate Inner Peace",
    "Rejuvenate Through Yoga",
    "Yoga Alliance accredited certificate - YACEP Certification (worldwide)",
    "14 days / 13 nights in a boutique resort in Goa",
    "Daily delicious vegan/vegetarian meals (buffet style)",
  ];

  return (
    <>
      {/* Section 1 */}
      <section className="relative bg-[#f4f5f3] text-black px-4 py-12 sm:py-16">
        <div
          ref={sectionRef}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-[7rem] items-center"
        >
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/9] relative rounded-xl overflow-hidden">
              <Image
                src="/aboutpics/777.jpg"
                alt="Yoga Group"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-[3/2] relative rounded-xl overflow-hidden">
              <Image
                src="/aboutpics/116.jpg"
                alt="Vegan Food"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-[3/2] relative rounded-xl overflow-hidden">
              <Image
                src="/aboutpics/333.jpg"
                alt="Resort Room"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="pb-6 md:pb-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-4 leading-snug">
              Refresh, Rejuvenate and Experience Happiness within:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg leading-relaxed mb-4">
              <li>Do you think that you need a refreshing change in your life from your hectic schedule?</li>
              <li>Do you think it is time for you to detox yourself and begin your yoga practice?</li>
              <li>Do you want to unwind on the beautiful beaches of Goa and experience physical fitness and mental peace?</li>
              <li>Do you want to learn and experience the ancient science of Yoga?</li>
              <li>Most important of all, do you want to experience Happiness within?</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed mb-8">
              Then, the 14-Day Yoga Detox Retreat is the right way forward! Specifically designed for beginners, this retreat includes asana, pranayama, meditation, and chanting, along with yoga philosophy/theory. Experience the ancient science of Yoga beside the beaches of Goa — the cool breeze and ocean waves will soothe your soul and help you detox and energize.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white pt-12 pb-12">
        <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-12 md:gap-[7rem] items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-6 leading-snug">
              Transform your practice in an authentic, serene yoga learning environment:
            </h2>

            <motion.ul
              className="space-y-3 list-disc pl-5"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {transformList.map((text, i) => (
                <motion.li
                  key={i}
                  className="text-base sm:text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/9] relative rounded-xl overflow-hidden">
              <Image
                src="/aboutpics/777.jpg"
                alt="Yoga Practice Goa"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-[3/2] relative rounded-xl overflow-hidden">
              <Image
                src="/aboutpics/116.jpg"
                alt="Peaceful Meditation"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-[3/2] relative rounded-xl overflow-hidden">
              <Image
                src="/aboutpics/333.jpg"
                alt="Yoga Teacher Training Environment"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
