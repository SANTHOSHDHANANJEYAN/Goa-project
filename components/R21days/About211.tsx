'use client';

import { FaCertificate, FaUtensils } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdOnlinePrediction } from "react-icons/md";
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
    { Icon: FaCertificate, text: "Yoga Alliance accredited certificate (worldwide)", size: 20 },
    { Icon: GiMeditation, text: "20 days / 19 nights in a boutique resort in Goa.", size: 22 },
    { Icon: FaUtensils, text: "Daily delicious vegan/vegetarian buffet meals", size: 20 },
    { Icon: MdOnlinePrediction, text: "BONUS: lifelong access to our Online 200hr Yoga Alliance course", size: 22 },
  ];

  return (
    <section className="relative bg-white px-4">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-28 items-center pt-12"
      >
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative h-[325px]">
            <Image
              src="/aboutpics/2422.jpg"
              alt="Yoga Group"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div className="relative h-[160px]">
            <Image
              src="/aboutpics/524.jpg"
              alt="Vegan Food"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div className="relative h-[160px]">
            <Image
              src="/aboutpics/777.jpg"
              alt="Resort Room"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-6 leading-snug">
            Transform your practice <br />
            in an authentic, serene <br />
            yoga learning environment
          </h2>

          <ul className="space-y-4 text-[#150e70]">
            {iconList.map(({ Icon, text, size }, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
              >
                <Icon className="mt-1" size={size} aria-hidden="true" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
