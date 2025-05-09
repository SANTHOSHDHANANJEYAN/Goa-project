"use client"

import React, { useEffect, useRef } from 'react'
import { Shirt, Umbrella, Book, Sun, SprayCan as Spray, Footprints } from 'lucide-react'

const WhatToBring = () => {
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
  
  const items = [
    { 
      icon: <Shirt className="h-10 w-10" />, 
      title: "Comfortable Clothing", 
      description: "Loose-fitting clothes and light sweaters or cardigans." 
    },
    { 
      icon: <Book className="h-10 w-10" />, 
      title: "Notebooks & Journals", 
      description: "For taking notes during sessions and personal reflections." 
    },
    { 
      icon: <Sun className="h-10 w-10" />, 
      title: "Protection", 
      description: "Bug spray and sunscreen for outdoor activities." 
    },
    { 
      icon: <Umbrella className="h-10 w-10" />, 
      title: "Umbrella", 
      description: "Be prepared for occasional rain during your stay." 
    },
    { 
      icon: <Footprints className="h-10 w-10" />, 
      title: "Footwear", 
      description: "Sandals or walking shoes for excursions and daily use." 
    },
    { 
      icon: <Spray className="h-10 w-10" />, 
      title: "Yoga Essentials", 
      description: "Yoga clothes, mat, water bottle, and yoga books." 
    },
  ]
  
  return (
    <section id="what-to-bring" ref={sectionRef} className="section-padding m-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title fade-in text-3xl md:text-4xl">What to Bring</h2>
          <p className="text-muted-foreground text-lg fade-in">
            Essential items to pack for your yoga retreat in Goa
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-muted/30 rounded-xl p-6 text-center hover:shadow-md transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-playfair mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatToBring