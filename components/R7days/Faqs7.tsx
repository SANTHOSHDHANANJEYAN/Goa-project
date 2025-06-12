'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: 'What is the duration of the yoga teacher training program?',
    answer: 'Our training program typically lasts 21 to 28 days, depending on the specific course.',
  },
  {
    question: 'Do I need prior yoga experience to join?',
    answer: 'Beginners are welcome! While prior experience is a plus, our courses are designed to support all levels.',
  },
  {
    question: 'Is certification provided after the course?',
    answer: 'Yes, you will receive a Yoga Alliance certified 200-hour teacher training certificate upon completion.',
  },
  {
    question: 'Are meals and accommodation included?',
    answer: 'Yes, all packages include 3 nourishing vegetarian meals per day and shared or private accommodations.',
  },
  {
    question: 'What kind of yoga styles are covered?',
    answer: 'Our curriculum includes Hatha, Ashtanga, Pranayama, Meditation, and Anatomy.',
  },
  {
    question: 'Is the retreat location easily accessible?',
    answer: 'Yes, our center is near the nearest airport and provides pickup service for ease of travel.',
  },
];

export default function Faqs7() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-green-50 border border-green-200 rounded-xl shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left"
              >
                <span className="text-base sm:text-lg font-medium text-green-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-green-600 transform transition-transform duration-300 ${
                    activeIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-5 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base transition-all duration-300 ease-in-out ${
                  activeIndex === idx ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
