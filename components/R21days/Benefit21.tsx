'use client';

import Image from "next/image";
import { FaSun, FaCloudSun, FaMoon, FaLeaf } from "react-icons/fa";

export default function Benefit21() {
  return (
    <section className="bg-white py-12 px-5 sm:px-8 lg:px-16 text-[#262626]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
          Daily Schedule
        </h2>

        {/* Morning Routine */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex">
            <Image
              src="/gallery/7.WEBP"
              alt="Morning Yoga Routine"
              width={800}
              height={500}
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3">
              <FaSun className="text-yellow-500 text-2xl" />
              <h3 className="text-xl sm:text-2xl font-semibold text-black">
                Morning Routine (6:00 AM – 10:00 AM)
              </h3>
            </div>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 text-sm sm:text-base">
              <li>6:00 AM – 7:30 AM: Dynamic Flow or Vinyasa Yoga</li>
              <li>7:45 AM – 8:45 AM: Pranayama</li>
              <li>9:00 AM – 10:00 AM: Healthy Breakfast & Journaling</li>
            </ul>
          </div>
        </div>


        {/* Daytime Sessions */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-3">
              <FaCloudSun className="text-orange-400 text-2xl" />
              <h3 className="text-xl sm:text-2xl font-semibold text-black">
                Daytime Sessions (10:30 AM – 4:00 PM)
              </h3>
            </div>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 text-sm sm:text-base">
              <li>10:30 AM – 12:00 PM: Yoga Philosophy & Theory</li>
              <li>12:00 PM – 1:00 PM: Hatha or Gentle Flow Practice</li>
              <li>1:00 PM – 2:00 PM: Lunch Break</li>
              <li>2:00 PM – 4:00 PM: Relaxation, Reading, or Exploration</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/Activity/Multi-Style Yoga Classes.png"
              alt="Daytime Yoga Sessions"
              width={800}
              height={500}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>

        {/* Evening Routine */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="w-full lg:w-1/2">
            <Image
              src="/Activity/cultural.png"
              alt="Evening Yoga Routine"
              width={800}
              height={500}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-3">
              <FaMoon className="text-indigo-500 text-2xl" />
              <h3 className="text-xl sm:text-2xl font-semibold text-black">
                Evening Routine (4:15 PM – 9:00 PM)
              </h3>
            </div>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 text-sm sm:text-base">
              <li>4:15 PM – 5:45 PM: Restorative or Yin Yoga</li>
              <li>
                6:00 PM – 7:00 PM: Workshops or Meditation / Yoga Nidra / Sound Healing
              </li>
              <li>7:00 PM – 8:00 PM: Dinner</li>
              <li>8:00 PM – 9:00 PM: Reading or Quiet Reflection</li>
            </ul>
          </div>
        </div>

        {/* Additional Activities */}
<div className="relative bg-[#bebebe] text-center py-10 px-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
  {/* Icon and Title */}
  <div className="flex justify-center items-center gap-3 mb-6">
    <FaLeaf className="text-black text-3xl" />
    <h3 className="text-2xl sm:text-3xl font-semibold text-black tracking-wide">
      Additional Activities
    </h3>
  </div>

  {/* Description */}
  <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
    Beyond your daily yoga practice, immerse yourself in experiences that connect mind, body, and nature.
  </p>

  {/* Activity List */}
  <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
    <div className="flex items-start gap-3 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <span className="text-black text-lg mt-1">🌿</span>
      <p className="text-gray-700 text-sm sm:text-base">
        <strong>Daily Journaling:</strong> Reflect on your experiences and deepen your awareness.
      </p>
    </div>

    <div className="flex items-start gap-3 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <span className="text-black text-lg mt-1">🕊️</span>
      <p className="text-gray-700 text-sm sm:text-base">
        <strong>Group Sharing:</strong> Connect through mindful discussions and collective energy.
      </p>
    </div>

    <div className="flex items-start gap-3 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition sm:col-span-2">
      <span className="text-black text-lg mt-1">🌞</span>
      <p className="text-gray-700 text-sm sm:text-base">
        <strong>Nature Walks:</strong> Reconnect with the earth through peaceful outdoor activities.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
