'use client';

import Image from 'next/image';

export default function Schedule() {
  return (
    <section className="w-full bg-green-50 py-12 px-4">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl mx-auto">
        {/* Left Side: Daily Schedule */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Daily Schedule</h2>
          <ul className="space-y-4">
            {[
              ['6:00 AM', 'Morning bell & tea'],
              ['6:30 AM', 'Meditation & pranayama'],
              ['7:30 AM', 'Yoga asana practice'],
              ['9:30 AM', 'Breakfast'],
              ['11:00 AM', 'Workshop / Activity'],
              ['1:00 PM', 'Lunch'],
              ['2:00 PM', 'Free time / Beach'],
              ['4:30 PM', 'Evening yoga session'],
              ['6:30 PM', 'Dinner'],
              ['8:00 PM', 'Evening program / Meditation'],
            ].map(([time, activity], idx) => (
              <li key={idx} className="flex items-start">
                <span className="font-semibold text-green-900 w-24">{time}</span>
                <span className="text-gray-800">{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Video Card */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="relative">
              <Image
                src="/27e28055-7a42-4503-9987-5f7a626972b1.jpg"
                alt="Video Thumbnail"
                width={640}
                height={360}
                className="w-full h-auto object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle cx="42" cy="42" r="42" fill="#000" opacity="0.6" />
                  <polygon points="33,26 60,42 33,58" fill="white" />
                </svg>
              </button>
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
