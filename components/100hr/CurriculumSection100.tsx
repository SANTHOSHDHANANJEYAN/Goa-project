import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
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

const curriculum = [
  {
    title: "Master Asanas",
    image: "/gallery/1.WEBP",
    description:
      "Explore postures from beginner to advanced, with detailed alignment and flow practices in Vinyasa, Hatha, and Ashtanga styles.",
  },
  {
    title: "Build Teaching Skills",
    image: "/gallery/2.WEBP",
    description:
      "Learn how to cue, adjust, and guide classes confidently with methodology rooted in modern and classical yoga.",
  },
  {
    title: "Understand Anatomy",
    image: "/gallery/3.WEBP",
    description:
      "Deep dive into body mechanics, injury prevention, and the science behind safe movement in every pose.",
  },
  {
    title: "Master Breathwork",
    image: "/gallery/4.WEBP",
    description:
      "Control your life force through pranayama — discover techniques like Ujjayi, Nadi Shodhana, and more.",
  },
    {
    title: "Master Asanas",
    image: "/gallery/5.WEBP",
    description:
      "Explore postures from beginner to advanced, with detailed alignment and flow practices in Vinyasa, Hatha, and Ashtanga styles.",
  },
  {
    title: "Build Teaching Skills",
    image: "/gallery/6.WEBP",
    description:
      "Learn how to cue, adjust, and guide classes confidently with methodology rooted in modern and classical yoga.",
  },
  {
    title: "Understand Anatomy",
    image: "/gallery/7.WEBP",
    description:
      "Deep dive into body mechanics, injury prevention, and the science behind safe movement in every pose.",
  },
  {
    title: "Master Breathwork",
    image: "/gallery/8.WEBP",
    description:
      "Control your life force through pranayama — discover techniques like Ujjayi, Nadi Shodhana, and more.",
  },
  
];

const CurriculumSection100: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-10 bg-[transparent] overflow-hidden">
      {/* Floating Sparkle */}
      <div className="absolute top-10 left-10 z-0 opacity-10">
        <Sparkles size={180} strokeWidth={0.8} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight text-[#150e70] drop-shadow-sm"
        >
          CURRICULUM
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          A transformational journey packed with practical wisdom and modern tools to elevate your practice.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mt-16">
        {curriculum.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white shadow-2xl rounded-3xl p-6 backdrop-blur-md border border-gray-100 hover:scale-[1.03] transition transform duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-[#fef3f7] rounded-full flex items-center justify-center shadow-inner">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#2b0a72] mb-2 group-hover:text-pink-500 transition">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection100;
