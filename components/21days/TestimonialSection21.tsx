'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="relative text-center py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-[#150e70]">
        Testimonials
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-12 text-[#150e70] max-w-xl mx-auto">
        View the self-transformation stories of our students
      </p>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setPlaying(playing === idx ? null : idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setPlaying(playing === idx ? null : idx)}
            aria-label={`Play testimonial video ${idx + 1}`}
          >
            <AnimatePresence mode="wait">
              {playing === idx ? (
                <motion.iframe
                  key="iframe"
                  className="w-full h-full"
                  src={video.url}
                  title={`Testimonial Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={video.thumbnail}
                    alt={`Testimonial ${idx + 1}`}
                    fill
                    className="object-cover transition group-hover:brightness-90"
                    priority={idx === 0}
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-5 hover:bg-black/70 transition">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 84 84"
                      >
                        <polygon points="33,26 60,42 33,58" fill="white" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
