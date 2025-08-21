'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/1oxK0cYax9s?rel=0',
      thumbnail: '/Thumbnail/Student Testimonials1.png',
    },
    {
      url: 'https://www.youtube.com/embed/0L8pv3fixrg?rel=0',
      thumbnail: '/Thumbnail/Student Testimonials2.png',
    },
    {
      url: 'https://www.youtube.com/embed/s6VazbcpPko?rel=0',
      thumbnail: '/Thumbnail/Student Testimonials3.png',
    },
  ];

  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="relative text-center pb-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#150e70]">
        Testimonials
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl mb-10 text-[#150e70] max-w-xl mx-auto">
        View the self-transformation stories of our students
      </h3>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div
            key={idx}
            role="button"
            aria-label={`Play testimonial video ${idx + 1}`}
            aria-pressed={playing === idx}
            tabIndex={0}
            onClick={() => setPlaying(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setPlaying(idx);
            }}
            className="aspect-video rounded-xl border-4 overflow-hidden shadow-lg relative cursor-pointer transition hover:scale-[1.02] hover:shadow-xl"
          >
            {playing === idx ? (
              <div className="relative w-full h-full">
                {/* YouTube Video */}
                <iframe
                  className="w-full h-full"
                  src={`${video.url}&autoplay=1`}
                  title={`Testimonial Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlaying(null);
                  }}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white rounded-full p-2 shadow-lg transition"
                  aria-label="Close video"
                >
                  ✕
                </button>
              </div>
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
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-20 w-20 text-white opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300 drop-shadow-xl"
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
