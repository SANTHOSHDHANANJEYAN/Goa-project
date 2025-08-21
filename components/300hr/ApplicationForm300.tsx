"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FreeManualSignup: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f8faff] to-white pb-[4rem] text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-4xl font-bold text-[#150e70] mb-4 leading-snug"
        >
          Get your FREE <br className="sm:hidden" /> 300-Hrs Study Manual
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#150e70] max-w-xl mb-8 text-sm sm:text-base"
        >
          And 5 video lessons to discover the fundamental principles of creating your own
          yoga class and essential tools for teaching.
        </motion.p>

        {/* Signup Form */}
        <motion.form
          variants={containerVariants}
          className="w-full max-w-md space-y-4 text-[#150e70]"
        >
          <motion.input
            variants={itemVariants}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-sm sm:text-base border border-indigo-200 rounded-full bg-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 transition"
          />
          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 text-sm sm:text-base border border-indigo-200 rounded-full bg-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 transition"
          />
          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white font-semibold rounded-full shadow-lg hover:scale-[1.02] transition transform duration-300 text-sm sm:text-base"
          >
            GET IT
          </motion.button>
          <motion.p
            variants={itemVariants}
            className="text-xs text-[#150e70] mt-2"
          >
            By clicking "Get It", you agree to our{" "}
            <a
              href="/privacy-policy"
              className="underline text-[#150e70] hover:text-indigo-700 transition"
            >
              privacy policy
            </a>
          </motion.p>
        </motion.form>

        {/* Manual Logo */}
        <motion.div variants={itemVariants} className="mt-12 relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src="/yg_logo-removebg-preview.png"
              alt="300 hrs Yoga Teacher Training Manual"
              width={224}
              height={224}
              className="w-32 sm:w-44 md:w-56 mx-auto drop-shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FreeManualSignup;
