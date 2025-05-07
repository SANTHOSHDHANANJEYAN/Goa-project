"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Practitioner",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote: "House of Om has completely transformed my practice. The instructors are knowledgeable and supportive, creating a space where I feel safe to explore and grow.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Meditation Student",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "After just a month of regular meditation classes at House of Om, I've noticed significant improvements in my stress levels and overall mental clarity.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Retreat Participant",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "The weekend retreat was life-changing. The combination of yoga, meditation, and sound healing created a deeply restorative experience I won't forget.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const next = useCallback(() => {
    if (isAnimating) return;
    
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);
  
  const prev = useCallback(() => {
    if (isAnimating) return;
    
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">What Our Community Says</h2>
        
        <div className="relative">
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-500 ease-in-out",
                    activeIndex === index ? "opacity-100 translate-x-0 z-10" : "opacity-0 z-0",
                    isAnimating && activeIndex === index && direction === 'left' ? "-translate-x-full" : "",
                    isAnimating && activeIndex === index && direction === 'right' ? "translate-x-full" : "",
                    isAnimating && (activeIndex + 1) % testimonials.length === index && direction === 'left' ? "translate-x-full opacity-100 z-5" : "",
                    isAnimating && (activeIndex - 1 + testimonials.length) % testimonials.length === index && direction === 'right' ? "-translate-x-full opacity-100 z-5" : "",
                    activeIndex !== index ? "hidden" : "",
                  )}
                >
                  <div className="bg-card shadow-sm rounded-xl p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-center mb-8 italic text-card-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 relative rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index ? "bg-accent scale-110" : "bg-muted-foreground/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prev}
          >
            <ChevronLeft size={20} />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={next}
          >
            <ChevronRight size={20} />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  );
}