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
    title: "Daily Asana Practice",
    image: "/Curriculumimg/1.jpg",
    description:
      "Learn and practice Hatha, Vinyasa, and Restorative yoga to improve strength, flexibility, and posture. Each session is designed to deepen body awareness and energize your day.",
  },
  {
    title: "Pranayama & Breath Control ",
    image: "/Curriculumimg/2.jpg",
    description:
      "Explore powerful breathing techniques to calm the mind and balance emotions. Build a daily routine that supports clarity, energy, and relaxation.",
  },
  {
    title: "Meditation & Mindfulness",
    image: "/Curriculumimg/3.jpg",
    description:
      "Practice guided meditation, mantra, and silent sitting to develop inner stillness. Cultivate focus, peace, and a deeper connection to yourself.",
  },
  {
    title: "Yoga Philosophy & Lifestyle",
    image: "/Curriculumimg/4.jpg",
    description:
      "Understand the core teachings of yoga beyond the mat, including Yamas & Niyamas. Learn how to live with awareness, balance, and purpose.",
  },
  {
    title: "Anatomy & Body Awareness",
    image: "/Curriculumimg/5.jpg",
    description:
      "Discover how your body works during yoga with simple, practical anatomy lessons. Improve alignment, prevent injury, and support safe practice.",
  },
  {
    title: "Ayurveda & Yogic Nutrition ",
    image: "/Curriculumimg/6.jpg",
    description:
      "Learn basic Ayurveda principles for healthy living and natural detox. Explore diet, routines, and herbs to support your yoga journey.",
  },
  {
    title: "Chakra & Energy Work",
    image: "/Curriculumimg/7.jpg",
    description:
      "Understand the body’s energy centers and how yoga affects your inner flow. Balance your chakras through breath, sound, and movement.",
  },
  {
    title: "Nature Excursions & Healing Activities",
    image: "/Curriculumimg/8.jpg",
    description:
      "Enjoy time in nature with beach yoga, forest walks, and waterfall visits. Let nature recharge your spirit and deepen your retreat experience.",
  },
];

const CurriculumSection50: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-10 bg-transparent overflow-hidden">
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
            key={item.title + i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white shadow-2xl rounded-3xl p-6 backdrop-blur-md border border-gray-100 hover:scale-[1.03] transition transform duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-[#9B7EBD] rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Centered text content */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#2b0a72] mb-2 group-hover:text-[#9B7EBD] transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection50;
