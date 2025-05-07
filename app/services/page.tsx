'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MotionDiv } from '@/components/ui/motion-div';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 dark:from-black/60 dark:via-black/50 dark:to-black/80" />
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <MotionDiv delay={0.1} distance={30} className="mb-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight mb-4">
            Discover Inner Peace at <br />
            <span className="font-medium">Rishikul Yogshala Goa</span>
          </h1>
        </MotionDiv>
        
        <MotionDiv delay={0.3} distance={30} className="mb-8 max-w-2xl">
          <p className="text-lg md:text-xl text-white/80">
            Experience authentic yoga teacher training and rejuvenating retreats in the serene surroundings of Kerala, India.
          </p>
        </MotionDiv>
        
        <MotionDiv delay={0.5} distance={30} className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full px-8"
          >
            Explore Our Courses
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/20 transition-all duration-300 rounded-full px-8"
          >
            Book a Retreat
          </Button>
        </MotionDiv>
      </div>
      
      {/* Scroll indicator */}
      <div className={cn(
        "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500",
        scrollY > 100 ? "opacity-0" : "opacity-100"
      )}>
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
}