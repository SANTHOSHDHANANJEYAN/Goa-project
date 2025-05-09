"use client"

import React, { useEffect, useRef } from 'react'
import { Clock } from 'lucide-react'

const Schedule = () => {
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
  
  const scheduleItems = [
    { time: "6:00 AM - 8:00 AM", activity: "Hatha Yoga" },
    { time: "8:00 AM - 9:00 AM", activity: "Pranayam" },
    { time: "9:00 AM - 10:00 AM", activity: "Breakfast" },
    { time: "1:00 PM - 2:00 PM", activity: "Lunch" },
    { time: "4:30 PM - 6:00 PM", activity: "Flow Yoga" },
    { time: "6:00 PM - 7:00 PM", activity: "Meditation" },
    { time: "7:00 PM - 8:30 PM", activity: "Dinner" },
    { time: "10:00 PM", activity: "Lights Off" },
  ]
  
  return (
    <section id="schedule" ref={sectionRef} className="section-padding bg-gradient-to-b from-muted/30 to-transparent m-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title fade-in text-3xl md:text-4xl">7-Days Yoga Retreat in Goa - Daily Schedule</h2>
          <p className="text-muted-foreground text-lg fade-in">
            A balanced daily routine to enhance your yoga practice and wellbeing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in">
          {scheduleItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300 border border-border/50"
            >
              <div className="flex items-center mb-4 text-primary">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium">{item.time}</span>
              </div>
              <h4 className="text-xl font-playfair">{item.activity}</h4>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
          <div className="bg-background rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-playfair mb-6">What's Included in the Fees</h3>
            <ul className="space-y-3">
              {[
                "Yoga and Meditation Sessions",
                "Accommodation",
                "Meals (Vegetarian & Vegan Options)",
                "Workshops and Lectures",
                "Cultural Excursions",
                "Wellness Treatments",
                "Pick up from Airport",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-playfair mb-6">What's Not Included in the Fees</h3>
            <ul className="space-y-3">
              {[
                "Airfare",
                "Travel Insurance",
                "Personal Expenses",
                "Optional Activities (e.g., Water Sports)",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule