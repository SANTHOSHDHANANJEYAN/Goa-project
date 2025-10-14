'use client';

import React from 'react';

export default function DailySchedule21() {
  return (
    <section className="bg-white py-12 px-5 sm:px-8 lg:px-16 text-[#262626] font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#150e70] text-center leading-snug">
          21-Day Intensive Yoga Immersion – Sample Curriculum & Syllabus
        </h2>

        {/* Weeks Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#150e70] mb-3">Week 1: Foundations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Introduction to Yoga Philosophy</li>
              <li>Basic Asanas (postures)</li>
              <li>Pranayama (breathing techniques)</li>
              <li>Meditation and Relaxation</li>
            </ul>
          </div>

          <div className="border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#150e70] mb-3">Week 2: Balance & Alignment</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Dynamic Flow Sequences</li>
              <li>Balancing & Alignment Techniques</li>
              <li>Yin Yoga for Deep Relaxation</li>
              <li>Mindfulness & Self-Awareness</li>
            </ul>
          </div>

          <div className="border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#150e70] mb-3">Week 3: Inner Transformation</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Advanced Asanas & Variations</li>
              <li>Kundalini Awakening & Energy Work</li>
              <li>Yoga Nidra for Deep Relaxation</li>
              <li>Meditation & Inner Reflection</li>
            </ul>
          </div>
        </div>

        {/* Special Sessions */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-[#150e70] mb-3">Special Sessions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li>Yoga and Ayurveda</li>
            <li>Yoga and Emotional Intelligence</li>
            <li>Yoga and Mindful Living</li>
          </ul>
        </div>

        {/* Syllabus */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-[#150e70] mb-5">Detailed Syllabus</h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm sm:text-base">
            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-semibold text-[#150e70] mb-2">Day 1–3: Introduction & Foundations</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Yoga philosophy & history</li>
                <li>Basic asanas & pranayama</li>
                <li>Meditation & relaxation practices</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-semibold text-[#150e70] mb-2">Day 4–7: Balance & Alignment</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Dynamic flow & balancing postures</li>
                <li>Yin yoga & restorative sequences</li>
                <li>Mindfulness & self-awareness</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-semibold text-[#150e70] mb-2">Day 8–14: Inner Transformation</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Advanced asanas & breathing control</li>
                <li>Yoga Nidra for deep relaxation</li>
                <li>Meditation & inner reflection</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-semibold text-[#150e70] mb-2">Day 15–21: Integration & Application</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Applying yoga to daily life</li>
                <li>Kundalini & energy activation</li>
                <li>Ayurveda & emotional balance</li>
                <li>Final reflection & sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
