"use client"

import React, { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'

const ProgramHighlights = () => {
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))
    
    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])
  
  const dailyProgram = [
    { day: "Day 1", activity: "Check-in" },
    { day: "Day 2", activity: "Visit Arambol Beach" },
    { day: "Day 3", activity: "Paragliding at Arambol Beach" },
    { day: "Day 4", activity: "Mama Banja- Boating" },
    { day: "Day 5", activity: "Ajoba Temple- Spiritual Visit" },
  ]
  
  const highlights = [
    "Affordable Yoga Retreats in Goa",
    "Flexible Stay Duration",
    "Ideal Location for Relaxation",
    "Daily Yoga & Meditation Practice",
    "Optional Excursions",
    "Personalized Yoga Schedule",
    "Holistic Mind-Body-Spirit Experience",
    "Cultivate Inner Peace",
    "Rejuvenate Through Yoga",
  ]
  
  return (
    <section id="program" ref={sectionRef} className="section-padding m-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title fade-in text-3xl md:text-4xl">7-Days Yoga Retreat's Program & Highlights</h2>
          <p className="text-muted-foreground text-lg fade-in">
            Discover what makes our retreat special and transformative
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Daily Program */}
          <div className="fade-in">
            <h3 className="text-2xl font-playfair mb-6">Daily Program</h3>
            <div className="space-y-4">
              {dailyProgram.map((item, index) => (
                <div 
                  key={index}
                  className="flex bg-muted/30 p-4 rounded-lg hover:shadow-md transition duration-300"
                >
                  <div className="w-24 font-medium">{item.day}</div>
                  <div>{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Program Highlights */}
          <div className="fade-in">
            <h3 className="text-2xl font-playfair mb-6">Program Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start"
                >
                  <div className="mr-2 text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Transformation section */}
        <div className="bg-muted/30 rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
          <div>
            <h3 className="text-2xl md:text-3xl font-playfair mb-6">
              Transformation and Growth
            </h3>
            <p className="text-muted-foreground mb-6">
              Embark on a journey of self-discovery and transformation at our retreat. 
              Our carefully designed program empowers your soul through yoga, meditation, 
              and personal growth exercises.
            </p>
            <p className="text-muted-foreground">
              Awaken your potential and evolve in a holistic yoga retreat that nurtures 
              your mind, body, and spirit.
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/8436785/pexels-photo-8436785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Yoga transformation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramHighlights