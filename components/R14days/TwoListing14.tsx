'use client';

import { useState } from 'react';

type Duration = '7 Days' | '14 Days' | '21 Days';
type Currency = 'INR' | 'USD' | 'EUR';

const pricing: Record<Duration, {
  sharing: number;
  sharingOld: number;
  private: number;
  privateOld: number;
}> = {
  '7 Days': {
    sharing: 40000,
    sharingOld: 55000,
    private: 50000,
    privateOld: 65000
  },
  '14 Days': {
    sharing: 70000,
    sharingOld: 90000,
    private: 85000,
    privateOld: 105000
  },
  '21 Days': {
    sharing: 95000,
    sharingOld: 120000,
    private: 115000,
    privateOld: 140000
  }
};

export default function TwoListing7() {
  const durations: Duration[] = ['7 Days', '14 Days', '21 Days'];
  const [selected, setSelected] = useState<Duration>('7 Days');
  const [currency, setCurrency] = useState<Currency>('INR');

  const exchangeRates = {
    INR: 1,
    USD: 1 / 83.5,
    EUR: 1 / 90
  };

  const symbols = {
    INR: '₹',
    USD: '$',
    EUR: '€'
  };

  const getPrice = (baseINR: number): string => {
    const converted = baseINR * exchangeRates[currency];
    return currency === 'INR'
      ? `${symbols[currency]}${Math.round(converted).toLocaleString()}`
      : `${symbols[currency]}${converted.toFixed(0)}`;
  };

  const data = pricing[selected];

  const steps = [
    {
      title: 'Submit Your Interest',
      description: 'Tell us your preferred dates — we’ll match you with an upcoming group.'
    },
    {
      title: 'Join a Small Group Retreat',
      description: 'We organise retreats in small groups of 3–10 people to ensure meaningful connection and personal attention.'
    },
    {
      title: 'Confirm Your Spot with ₹5,000',
      description: 'Pay a small deposit to block your seat. Remaining amount can be paid on arrival.'
    },
    {
      title: 'Prepare for Your Journey',
      description: 'We’ll send you a checklist to get ready for your yoga retreat experience.'
    }
  ];

  return (
    <section className="bg-[#FFF7F3] px-4 md:px-16 py-20 text-[#262626] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="mb-10">
          <h4 className="text-[#F97316] font-semibold tracking-widest uppercase text-sm">Application Process</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4B2E83] mt-2 mb-4 leading-snug">
            Book Your Yoga Retreat in 4 Easy Steps
          </h2>
          <p className="text-gray-700 max-w-2xl text-lg">
            Embarking on your yoga retreat journey is simple and stress-free. Just follow these steps to reserve your spot and prepare for a peaceful escape into nature, self-care, and inner stillness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Steps */}
          <div className="relative pl-10">
            <div className="absolute left-8 top-4 bottom-[6.5rem] w-1 bg-[#7C4D99]"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative pl-10 mb-8 group">
                <div className="absolute left-[-22px] top-4 w-8 h-8 rounded-full bg-[#7C4D99] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform duration-200 ease-in-out">
                  {index + 1}
                </div>

                <div className="bg-white border border-orange-200 rounded-xl p-5 shadow-sm group-hover:shadow-md transition duration-300">
                  <h4 className="text-lg font-semibold text-[#1C1C1C] mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Pricing */}
          <div className="bg-white border border-[#F97316] rounded-2xl px-6 py-8">
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">{selected} Yoga Retreat</h3>

            {/* Duration Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {durations.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelected(day)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                    selected === day
                      ? 'bg-[#5C2D91] text-white'
                      : 'text-[#5C2D91] border-[#5C2D91] bg-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Currency Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(['INR', 'USD', 'EUR'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-4 py-1 rounded-full text-xs font-medium border ${
                    currency === cur
                      ? 'bg-emerald-600 text-white'
                      : 'text-emerald-700 border-emerald-600 bg-white'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Offer Note */}
            <div className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm inline-flex items-center font-medium mb-4">
              <span className="mr-2">🔸</span> 20% Off for Groups of 3+
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-50 p-5 rounded-xl text-center">
                <h4 className="text-[#F97316] font-semibold mb-1">Sharing</h4>
                <p className="text-2xl font-bold text-[#1C1C1C]">
                  {getPrice(data.sharing)}{' '}
                  <span className="text-gray-400 line-through text-base">
                    {getPrice(data.sharingOld)}
                  </span>
                </p>
              </div>
              <div className="bg-orange-50 p-5 rounded-xl text-center">
                <h4 className="text-[#F97316] font-semibold mb-1">Private</h4>
                <p className="text-2xl font-bold text-[#1C1C1C]">
                  {getPrice(data.private)}{' '}
                  <span className="text-gray-400 line-through text-base">
                    {getPrice(data.privateOld)}
                  </span>
                </p>
              </div>
            </div>

            {/* Inclusions List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
              <li>✔️ {selected} Stay in Rishikesh</li>
              <li>✔️ Yoga Equipment</li>
              <li>✔️ Nutritional Guidance</li>
              <li>✔️ Meditation & Silence Walks</li>
              <li>✔️ Personal Mentoring</li>
              <li>✔️ Study Material & Certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
