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
    title: "Asana",
    image: "/Curriculumimg/1.jpg",
    description:
      "Focus on advanced pose study, building flexibility and strength, maintaining hydration, and mastering systematic sequences including the Ashtanga Vinyasa Intermediate Series.",
  },
  {
    title: "Ashtanga Vinyasa",
    image: "/Curriculumimg/2.jpg",
    description:
      "Advanced Ashtanga Vinyasa postures focusing on strength, flexibility, balance, and breath control through a diverse range of seated, backbends, arm balances, and twists.",
  },
  {
    title: "Relaxation Techniques",
    image: "/Curriculumimg/3.jpg",
    description:
      "Explore Yoga Nidra’s role in intuition development, mind-heart connection, lucid and intuitive dreams, and traditional Himalayan practices.",
  },
  {
    title: "Pranayama",
    image: "/Curriculumimg/4.jpg",
    description:
      "Study breath retention (Kumbhaka), awakening Sushumna energy, balancing Nadis through Nadi Shodhanam, and understanding the five vital forces and the functions of Ida, Pingala, and Sushumna.",
  },
  {
    title: "Yoga Anatomy ",
    image: "/Curriculumimg/5.jpg",
    description:
      "Explore the impact of asanas on muscles, glandular anatomy linked to chakras, major body systems, and the effects of pranayama on cardiovascular and nervous systems.",
  },
  {
    title: "Yoga Philosophy ",
    image: "/Curriculumimg/6.jpg",
    description:
      "Explore meditation, spiritual heart, karma, yogic obstacles, kundalini, chakras, various yoga paths, consciousness levels, samadhi, and reincarnation in yogic science.",
  },
  {
    title: "Meditation and Concentration",
    image: "/Curriculumimg/7.jpg",
    description:
      "Learn diverse meditation techniques including mantra, chakra, third eye, yantra, and non-duality practices, while understanding and overcoming common obstacles.",
  },
  {
    title: "Mantra Yoga and Its Importance",
    image: "/Curriculumimg/8.jpg",
    description:
      "Study key mantras like So-HUM and invocation chants for wisdom, fearlessness, completeness, and the sacred bond between teacher and student.",
  },
];

const CurriculumSection300: React.FC = () => {
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
            className="bg-[#f6ca4b] shadow-2xl rounded-3xl p-6 backdrop-blur-md border border-gray-100 hover:scale-[1.03] transition transform duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-[#fef3f7] rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
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

export default CurriculumSection300;
