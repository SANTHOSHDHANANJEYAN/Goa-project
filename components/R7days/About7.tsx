'use client';

import { FaCertificate, FaUtensils } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdOnlinePrediction } from "react-icons/md";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About7() {
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
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const iconList = [
    {
      Icon: FaCertificate,
      text: "Yoga Alliance accredited certificate (worldwide)",
      size: 20,
    },
    {
      Icon: GiMeditation,
      text: "20 days / 19 nights in a boutique resort in Goa.",
      size: 22,
    },
    {
      Icon: FaUtensils,
      text: "Daily delicious vegan/vegetarian meals a day (buffet style)",
      size: 20,
    },
    {
      Icon: MdOnlinePrediction,
      text: "BONUS: lifelong access to our Online 200hr Yoga Alliance course",
      size: 22,
    },
    // The list seems duplicated, remove duplicates if not needed
  ];

  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-7xl mx-auto grid gap-10 items-center relative z-10 md:grid-cols-2"
        ref={sectionRef}
      >
        {/* Left Text Content */}
        <div className="pb-12 md:pb-0">
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-2 text-sm sm:text-base">
            <span className="w-3 h-3 bg-indigo-900 rounded-full inline-block" />
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#150e70] mb-6 leading-snug">
            Transform your practice <br />
            in an authentic, serene <br />
            yoga learning environment
          </h2>

          <ul className="space-y-4 text-[#150e70] text-sm sm:text-base">
            {iconList.map(({ Icon, text, size }, i) => (
              <motion.li
                className="flex items-start gap-3"
                key={i}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
              >
                <Icon className="text-[#150e70] mt-1 flex-shrink-0" size={size} />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Image Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2 h-48 sm:h-72 relative rounded-xl overflow-hidden">
            <Image
              src="/51.jpg"
              alt="Yoga Group"
              className="object-cover"
              fill
              sizes="(max-width: 640px) 100vw, 600px"
            />
          </div>
          <div className="h-40 sm:h-48 relative rounded-xl overflow-hidden">
            <Image
              src="/52.jpg"
              alt="Vegan Food"
              className="object-cover"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
            />
          </div>
          <div className="h-40 sm:h-48 relative rounded-xl overflow-hidden">
            <Image
              src="/54.jpg"
              alt="Resort Room"
              className="object-cover"
              fill
              sizes="(max-width: 640px) 100vw, 300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
