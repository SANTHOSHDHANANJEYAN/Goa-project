"use client"

import React, { useEffect, useRef } from 'react'
import { CalendarDays, Clock, MapPin, CreditCard } from 'lucide-react'

const RetreatDetails = () => {
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
  
  return (
    <section id="retreat-details" ref={sectionRef} className="section-padding bg-muted/30 m-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="section-title fade-in text-3xl md:text-5xl">Retreat Details</h1>
          <p className="text-muted-foreground text-lg fade-in">
            Experience Transformation at Rishikul Yogshala's 7-Day Yoga Retreat in Goa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-background rounded-xl shadow-sm p-8 fade-in">
            <h3 className="text-2xl font-playfair mb-6">Experience Tranquility</h3>
            <p className="mb-6 text-muted-foreground">
              If you're seeking a transformative escape that nurtures both your body and mind, 
              Rishikul Yogshala's 7-day yoga retreat in Goa offers the perfect opportunity to reset, 
              rejuvenate, and rediscover your inner peace.
            </p>
            <p className="mb-6 text-muted-foreground">
              Goa, known for its stunning beaches and serene atmosphere, is home to some of the best 
              retreats, offering an ideal destination for anyone looking to deepen their yoga practice.
            </p>
            <p className="text-muted-foreground">
              This Goa yoga retreat is designed to offer a comprehensive yoga experience, blending 
              traditional practices with modern wellness techniques.
            </p>
          </div>
          
          <div className="bg-background rounded-xl shadow-sm p-8 fade-in">
            <h3 className="text-2xl font-playfair mb-6">For All Experience Levels</h3>
            <p className="mb-6 text-muted-foreground">
              Whether you're new to yoga or an experienced practitioner, the 7-day yoga retreat offers 
              an enriching journey, focusing on physical strength, mental clarity, and emotional balance.
            </p>
            <p className="mb-6 text-muted-foreground">
              Led by highly skilled and experienced instructors, the retreat features daily sessions in 
              Hatha, Vinyasa, and Ashtanga yoga, ensuring that every participant, regardless of their level, 
              receives the guidance they need to grow in their practice.
            </p>
            <p className="text-muted-foreground">
              In addition to yoga, participants will engage in daily meditation, mindfulness workshops, 
              and breathing exercises, helping to reduce stress and enhance focus.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <CalendarDays className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Duration</h4>
            <p>7 Days</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Check-in/out</h4>
            <p>7th - 14th of Every Month</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Fees</h4>
            <p>$800</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Location</h4>
            <p>Arambol, Goa</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatDetails