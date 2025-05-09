"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/rtbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-white m-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 bg-primary/90 rounded-full text-lg font-medium mb-6">
            7-Day Yoga Retreat in Goa
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 leading-tight">
            Experience Transformation at Rishikul Yogshala
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Reset, rejuvenate, and rediscover your inner peace among Goa's natural beauty. Join our comprehensive 
            yoga experience with expert guidance and holistic wellness techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#apply"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition duration-300 text-center"
            >
              Apply Now
            </Link>
            <Link 
              href="#retreat-details"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-md transition duration-300 flex items-center justify-center"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              y: [0, 20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection