'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Schedule100() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = '/Videos/24daysvideo.mov';

  const schedule = [
    ['05:00 AM – 05:30 AM', 'Herbal Tea'],
    ['05:30 AM – 07:00 AM', 'Ashtanga Yoga'],
    ['07:15 AM – 08:15 AM', 'Pranayama'],
    ['08:15 AM – 09:15 AM', 'Breakfast'],
    ['09:45 AM – 10:45 AM', 'Yoga Philosophy'],
    ['11:00 AM – 12:00 PM', 'Mantra'],
    ['12:15 PM – 01:15 PM', 'Adjustment & Alignment'],
    ['01:15 PM – 02:15 PM', 'Lunch'],
    ['04:00 PM – 04:15 PM', 'Drink Break'],
    ['04:15 PM – 05:45 PM', 'Hatha Yoga'],
    ['06:00 PM – 07:00 PM', 'Meditation / Yoga Nidra'],
    ['07:00 PM – 08:00 PM', 'Dinner'],
    ['08:00 PM – 09:00 PM', 'Self Study'],
    ['10:00 PM', 'Lights Off'],
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#fffdfa] to-[#f9f6ff] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">

        {/* LEFT: Daily Schedule */}
        <div className="md:w-1/2 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#150e70] mb-8 text-center md:text-left">
            Daily Schedule
          </h2>

          <ul className="divide-y divide-gray-200">
            {schedule.map(([time, activity], idx) => (
              <li
                key={idx}
                className="grid grid-cols-[180px_1fr] sm:grid-cols-[200px_1fr] items-center py-3 px-2 hover:bg-[#f5f3ff] transition-colors rounded-lg"
              >
                <span className="font-semibold text-[#150e70] text-sm sm:text-base text-left">
                  {time}
                </span>
                <span className="text-gray-700 text-base sm:text-lg font-medium pl-4 border-l border-gray-300">
                  {activity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Video Section */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-xl aspect-video overflow-hidden rounded-2xl shadow-lg">
            {isPlaying ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <>
                <Image
                  src="/Thumbnail/thumbnail-1.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="object-cover w-full h-full rounded-2xl"
                  loading="lazy"
                />
                <button
                  aria-label="Play Video"
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setIsPlaying(true)}
                >
                  <svg
                    className="h-16 w-16 sm:h-20 sm:w-20 text-white opacity-90 hover:scale-110 transition-transform"
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
