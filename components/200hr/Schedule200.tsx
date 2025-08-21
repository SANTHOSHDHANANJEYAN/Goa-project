'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Schedule100() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = '/Videos/24daysvideo.mov';

  const schedule = [
    ['05:00 AM', 'Morning Tea'],
    ['05:30 AM', 'Hatha- Vinayasa- Flow Yoga'],
    ['07:30 AM', 'Pranayama & Meditation'],
    ['09:00 AM', 'Breakfast'],
    ['10:00 AM', 'Yoga Philosophy'],
    ['11:15 AM', 'Yoga Practicum'],
    ['12:30 PM', 'Yoga Practicum'],
    ['13:15 PM', 'Lunch'],
    ['15:30 PM', 'Yoga Anatomy'],
    ['16:45 PM', 'Ashtanga Yoga'],
    ['18:15 PM', 'Supper'],
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-stretch">

        {/* Left Side: Daily Schedule */}
        <div className="md:w-1/2 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#150e70] mb-6 text-center sm:text-left">
            Daily Schedule
          </h2>
          <ul className="space-y-3 text-sm sm:text-base flex-1">
            {schedule.map(([time, activity], idx) => (
              <li key={idx} className="flex items-start">
                <span className="font-semibold text-[#150e70] w-24 flex-shrink-0">{time}</span>
                <span className="text-gray-800">{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Video Card */}
        <div className="md:w-1/2 flex flex-col">
          <div className="rounded-xl overflow-hidden shadow bg-white/60 flex-1">
            <div className="relative aspect-video w-full">
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
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    <svg
                      className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle cx="42" cy="42" r="42" fill="#000" opacity="0.6" />
                      <polygon points="33,26 60,42 33,58" fill="white" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Yoga Course Introduction</h3>
              <p className="text-gray-600 text-sm mt-1">
                Watch this short video to get a feel of your upcoming experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
