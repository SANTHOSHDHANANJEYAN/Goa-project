"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
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
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "The 7-day retreat at Rishikul Yogshala was truly transformative. The instructors were knowledgeable and supportive, the location was beautiful, and the program was well-balanced. I left feeling refreshed, centered, and inspired to continue my yoga journey.",
    },
    {
      id: 2,
      name: "David Chen",
      location: "Canada",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I came to the retreat with high expectations, and they were exceeded in every way. The daily yoga sessions were challenging yet adaptable to all levels, the meditation practices were profound, and the location in Goa was simply magical. Highly recommend!",
    },
    {
      id: 3,
      name: "Emma Watson",
      location: "United Kingdom",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "As someone new to yoga, I was worried about keeping up, but the instructors made me feel comfortable and supported throughout. The retreat was the perfect balance of challenging and nurturing. The food was amazing, and I made friends that will last a lifetime.",
    },
  ]
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }
  
  return (
    <section id="testimonials" ref={sectionRef} className="section-padding relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/53184/peacock-bird-plumage-color-53184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title fade-in text-3xl md:text-4xl">Hear It From Them</h2>
          <p className="text-muted-foreground text-lg fade-in">
            Experiences shared by our retreat participants
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto fade-in">
          <div className="bg-background rounded-xl shadow-md p-6 md:p-12 relative">
            <div className="absolute -top-6 left-10 text-primary">
              <Quote className="h-12 w-12 rotate-180" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <p className="text-lg mb-6 italic">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <h4 className="text-xl font-playfair">{testimonials[activeIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-muted p-2 rounded-full hover:bg-primary/10 transition duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-muted p-2 rounded-full hover:bg-primary/10 transition duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials