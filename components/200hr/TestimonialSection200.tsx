'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const TestimonialSection: React.FC = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="relative text-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#150e70]">
        Testimonials
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl mb-10 text-[#150e70] max-w-xl mx-auto">
        View the self-transformation stories of our students
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="aspect-video rounded-xl border-4 overflow-hidden shadow-lg relative cursor-pointer group transition"
            role="button"
            tabIndex={0}
            aria-label={`Play testimonial video ${idx + 1}`}
            onClick={() => setPlaying(idx)}
            onKeyDown={(e) => e.key === 'Enter' && setPlaying(idx)}
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
              <>
                <Image
                  src={video.thumbnail}
                  alt={`Student Testimonial ${idx + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition group-hover:bg-black/50">
                  <svg
                    className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle cx="42" cy="42" r="42" fill="#000" opacity="0.6" />
                    <polygon points="33,26 60,42 33,58" fill="white" />
                  </svg>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
