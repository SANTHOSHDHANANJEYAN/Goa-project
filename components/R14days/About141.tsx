'use client';

import { FaCertificate, FaUtensils } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdOnlinePrediction } from "react-icons/md";
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

  const iconList = [
    { Icon: FaCertificate, text: "Yoga Alliance accredited certificate (worldwide)", size: 20 },
    { Icon: GiMeditation, text: "20 days / 19 nights in a boutique resort in Goa.", size: 22 },
    { Icon: FaUtensils, text: "Daily delicious vegan/vegetarian meals (buffet style)", size: 20 },
    { Icon: MdOnlinePrediction, text: "BONUS: lifelong access to our Online 200hr Yoga Alliance course", size: 22 },
  ];

  return (
    <section className="relative bg-white px-4 py-12 sm:py-16">
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
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#150e70] mb-6 leading-snug">
            Transform your practice <br />
            in an authentic, serene <br />
            yoga learning environment
          </h2>

          <motion.ul
            className="space-y-4 text-[#150e70]"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {iconList.map(({ Icon, text, size }, i) => (
              <motion.li
                role="listitem"
                key={i}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <Icon className="text-[#150e70] mt-1" size={size} />
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
