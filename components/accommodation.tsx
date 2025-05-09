"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Accommodation = () => {
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
    <section id="accommodation" ref={sectionRef} className="section-padding bg-muted/30 m-16 bg-[url('/backgdf.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title fade-in text-3xl md:text-4xl pt-8">
  Accommodation Type
</h2>

          <p className="text-muted-foreground text-lg fade-in">
            Comfortable accommodation for your retreat experience
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto fade-in ">
          <div className="bg-background rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Single Room Accommodation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-playfair mb-4">Single Room</h3>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-muted-foreground">Price:</span>
                  <span className="text-xl font-medium ml-2">$800/person</span>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-full text-primary text-sm">
                  Private Bathroom
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Enjoy a comfortable single room with all amenities including a private 
                bathroom, clean linens, and a peaceful environment conducive to your 
                yoga practice and relaxation.
              </p>
              <div className="flex justify-between items-center flex-wrap gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Air conditioning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Daily housekeeping</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Free Wi-Fi</span>
                  </li>
                </ul>
                <Link
                  href="#apply"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition duration-300"
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 fade-in">
          <div className="bg-background rounded-xl shadow-sm p-8">
            <h1 className="text-4xl font-playfair mb-6 text-center">Payment Methods</h1>
            <p className="text-muted-foreground mb-6">
              Rishikul Yogshala provides several options for making a deposit of 200 USD to secure your 
              chosen retreat. After you complete the deposit, a confirmation email will be sent to you.
            </p>
            <p className="text-muted-foreground">
              For the remaining balance, you can choose to pay either in cash or via online transfer 
              through PayPal or bank transfer upon arrival, after the opening ceremony. We provide 
              several options for making a deposit of 200 USD to secure your chosen retreat. After 
              you complete the deposit, a confirmation email will be sent to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accommodation