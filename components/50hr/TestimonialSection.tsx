'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/1oxK0cYax9s?autoplay=1&rel=0',
      thumbnail: '/Thumbnail/Student Testimonials1.png',
    },
    {
      url: 'https://www.youtube.com/embed/0L8pv3fixrg?autoplay=1&rel=0',
      thumbnail: '/Thumbnail/Student Testimonials2.png',
    },
    {
      url: 'https://www.youtube.com/embed/s6VazbcpPko?autoplay=1&rel=0',
      thumbnail: '/Thumbnail/Student Testimonials3.png',
    },
  ];

  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="relative text-center pb-[4rem] px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#150e70]">
        Testimonials
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl mb-10 text-[#150e70] max-w-xl mx-auto">
        View the self-transformation stories of our students
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div
            key={idx}
            role="button"
            aria-label={`Play testimonial video ${idx + 1}`}
            tabIndex={0}
            onClick={() => setPlaying(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setPlaying(idx);
            }}
            className="aspect-video rounded-xl border-4 overflow-hidden shadow-lg relative cursor-pointer"
          >
            {playing === idx ? (
              <iframe
                className="w-full h-full"
                src={video.url}
                title={`Testimonial Video ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={video.thumbnail}
                  alt={`Student Testimonial Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <svg
                    className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle cx="42" cy="42" r="42" fill="#000" opacity="0.6" />
                    <polygon points="33,26 60,42 33,58" fill="white" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
