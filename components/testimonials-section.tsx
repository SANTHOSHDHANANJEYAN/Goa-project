"use client";

import React, { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  author: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="pb-10 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#150e70]">
          What Our Graduates Say
        </h2>

        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                <svg
                  className="w-10 h-10 text-purple-300 mx-auto mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base md:text-lg mb-4 text-[#150e70]">{testimonial.quote}</p>
                <p className="font-medium text-[#150e70]">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 mx-1 rounded-full ${
                current === index ? "bg-purple-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
