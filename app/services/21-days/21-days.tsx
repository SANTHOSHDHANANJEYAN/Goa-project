"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-6 space-y-2">
          <p className="text-sm md:text-base text-indigo-950">
            YOGA SCHOOL IN BALI, INDIA
            <span className="mx-3 inline-block w-1.5 h-1.5 bg-indigo-950 rounded-full"></span>
            ACCREDITED BY YOGA ALLIANCE
          </p>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto space-y-6 opacity-0 transition-all duration-1000 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <h1 className="text-2xl md:text-3xl text-indigo-950 font-medium leading-tight">
            200-HOUR ACCREDITED<br />
            YOGA TEACHER TRAINING<br />
            IN AMERTHAM, BALI
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-indigo-950">
            Become a certified yoga teacher by Yoga Alliance
          </h2>

          <p className="text-lg md:text-xl text-indigo-950/80">
            and take part in an exciting journey of 20 days in Bali
          </p>

          <div className="space-y-8 mt-12">
            <div className="flex items-center justify-center gap-6">
              <span className="text-4xl md:text-5xl font-serif text-indigo-950/50 line-through">USD 2350</span>
              <span className="text-4xl md:text-5xl font-serif text-indigo-950">USD 2000</span>
            </div>

            <div>
              <p className="text-indigo-950 mb-6">*early bird offer -15%</p>
              <Button 
                size="lg"
                className="bg-indigo-950 hover:bg-indigo-900 text-white rounded-full px-12 py-6 text-lg"
              >
                BOOK YOUR SPOT
              </Button>
            </div>

            <p className="text-indigo-950">
              3 spots left on the next training:<br />
              May 26th - Jun 16th, 2025
            </p>
          </div>
        </div>
      </div>

      <div className={cn(
        "w-full max-w-5xl mx-auto mt-16 px-4 opacity-0 transition-all duration-1000 delay-500",
        isVisible && "opacity-100"
      )}>
        <img
          src="https://images.pexels.com/photos/8436967/pexels-photo-8436967.jpeg"
          alt="Yoga practice in nature"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;