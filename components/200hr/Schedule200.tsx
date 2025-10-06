'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Schedule100() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = '/Videos/24daysvideo.mov';

  const schedule = [
    ['05:00 AM', 'Morning Tea'],
    ['05:30 AM', 'Hatha- Vinyasa- Flow Yoga'],
    ['07:30 AM', 'Pranayama & Meditation'],
    ['09:00 AM', 'Breakfast'],
    ['10:00 AM', 'Yoga Philosophy'],
    ['11:15 AM', 'Yoga Practicum'],
    ['12:30 PM', 'Yoga Practicum'],
    ['01:15 PM', 'Lunch'],
    ['03:30 PM', 'Yoga Anatomy'],
    ['04:45 PM', 'Ashtanga Yoga'],
    ['06:15 PM', 'Supper'],
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">

        {/* LEFT: Daily Schedule */}
        <div className="md:w-1/2  p-8 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#150e70] mb-8 text-center md:text-left">
            Daily Schedule
          </h2>

          <ul className="space-y-4 text-base sm:text-lg">
            {schedule.map(([time, activity], idx) => (
              <li key={idx} className="flex items-start sm:items-center">
                <span className="font-semibold text-[#150e70] w-28 flex-shrink-0 text-sm sm:text-base">
                  {time}
                </span>
                <span className="text-gray-700">{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Video */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-xl aspect-video overflow-hidden">
            {isPlaying ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Image
                  src="/Thumbnail/Yogacourses 3.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <button
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center "
                  onClick={() => setIsPlaying(true)}
                >
                  <svg
                    className="h-16 w-16 sm:h-20 sm:w-20 text-white opacity-90 hover:scale-105 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle cx="42" cy="42" r="42" fill="#000" opacity="0.4" />
                    <polygon points="33,26 60,42 33,58" fill="white" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
