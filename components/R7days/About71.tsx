'use client';

import {
  FaSpa,
  FaGlobeAsia,
  FaSeedling,
  FaHeart,
} from "react-icons/fa";
import {
  GiMeditation,
  GiIndiaGate,
  GiLotus,
} from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About71() {
  const iconList = [
    { Icon: FaSpa, text: "Affordable Yoga Retreats in Goa" },
    { Icon: MdOutlineCalendarMonth, text: "Flexible Stay Duration" },
    { Icon: GiIndiaGate, text: "Ideal Location for Relaxation" },
    { Icon: TbYoga, text: "Daily Yoga & Meditation Practice" },
    { Icon: FaGlobeAsia, text: "Optional Excursions" },
    { Icon: GiMeditation, text: "Personalized Yoga Schedule" },
    { Icon: FaSeedling, text: "Holistic Mind-Body-Spirit Experience" },
    { Icon: FaHeart, text: "Cultivate Inner Peace" },
    { Icon: GiLotus, text: "Rejuvenate Through Yoga" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className="relative bg-white px-6 sm:px-10 lg:px-20 py-12 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[7rem] items-center">
        
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/aboutpics/000.jpg"
              alt="Yoga Group"
              className="rounded-xl object-cover w-full h-[355px] sm:h-[300px] md:h-[355px]"
              width={600}
              height={355}
              priority
            />
          </div>
          <Image
            src="/aboutpics/113.jpg"
            alt="Vegan Food"
            className="rounded-xl object-cover w-full h-[170px]"
            width={300}
            height={170}
            loading="lazy"
          />
          <Image
            src="/aboutpics/116.jpg"
            alt="Resort Room"
            className="rounded-xl object-cover w-full h-[170px]"
            width={300}
            height={170}
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="pb-14 md:pb-0">
          {/* Experience Inner Peace */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 leading-snug">
            Experience Inner Peace
          </h2>
          <div className="space-y-4 text-black text-base sm:text-lg leading-relaxed mb-8">
            <p>
              Get away from the craziness of everyday living and immerse yourself into a healing process in the very heart of Goa. Our 7 days Yoga Holiday Retreat is purely a getaway and a refuge for healing yourself. Enjoy the pristine beaches and involve yourself in practicing yoga through the ancient yogic and meditation techniques.
            </p>
            <p>
              Guided by expert teachers, our program is structured to suit all levels of yogic enthusiasts, who want to get away from the hustle and bustle of their day schedule. Everyday, you will be treated to refreshing yoga and meditation classes, healthy vegetarian cuisine in the soothing beauty of the landscapes of Goa.
            </p>
            <p>
              With the hustle and bustle of day-to-day life and getting consumed by the stress of career and personal life, the 7 days Yoga Holiday Retreat is expected to be a welcome change. Leaving your worries aside and practice yoga by the beaches of Goa, you would experience the calmness and peace within.
            </p>
            <p>
              At Rishikul Yogshala, we offer flexible retreat options. You can schedule our retreat at any time that is suitable to you, giving you the liberty to take on this wellness adventure whenever you will be most convenient.
            </p>
            <p>
              Stay with us on a never-forgotten experience that will refresh, inspire, and empower you. Reconnect with your inner balance in the calm environments of Goa. Your journey towards wellness and harmony begins here, at Rishikul Yogashala&apos;s 7 Day Yoga holiday Retreat.
            </p>
          </div>

          {/* Transform your practice */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6 leading-snug">
            Transform your practice <br />
            in an authentic, serene <br />
            yoga learning environment
          </h2>

          <ul className="space-y-4 text-black text-base sm:text-lg">
            {iconList.map(({ Icon, text }, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <Icon className="text-black mt-1 shrink-0" size={20} />
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}