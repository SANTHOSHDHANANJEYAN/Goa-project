'use client';

import Image from 'next/image';

export default function Schedule100() {
  const youtubeVideoId = 'DHbMWNWy7x4';
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

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
    <section className="w-full bg-[#f4f5f3] py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT: Daily Schedule */}
        <div className="md:w-[48%] p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6 text-center md:text-left">
            Daily Schedule
          </h2>

          <ul className="divide-y divide-gray-200">
            {schedule.map(([time, activity], idx) => (
              <li
                key={idx}
                className="grid grid-cols-[150px_1fr] sm:grid-cols-[180px_1fr] items-center py-2 px-2 hover:bg-[#f5f3ff] transition-colors rounded-md"
              >
                <span className="font-semibold text-[#150e70] text-sm sm:text-base text-left">
                  {time}
                </span>
                <span className="text-gray-700 text-sm sm:text-base font-medium pl-3 border-l border-gray-300">
                  {activity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Portrait Video Section (Wider) */}
        <div className="md:w-[52%] flex items-center justify-center">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the daily schedule video on YouTube"
            className="relative group w-[640px] sm:w-[500px] md:w-[380px] aspect-[9/16] overflow-hidden shadow-xl block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#150e70]"
          >
            <Image
              src="/aboutpics/Rishikul Yogshala Goa 2.jpg"
              alt="Daily Schedule Video Thumbnail"
              width={440}
              height={680}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Play button overlay */}
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-16 w-16 sm:h-20 sm:w-20 text-white opacity-90 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 84 84"
              >
                <circle cx="42" cy="42" r="42" fill="#000" opacity="0.4" />
                <polygon points="33,26 60,42 33,58" fill="white" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
