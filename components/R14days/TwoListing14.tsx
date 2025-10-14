'use client';

import { useState, useMemo } from 'react';

type Duration = '7 Days' | '14 Days' | '21 Days';
type Currency = 'INR' | 'USD' | 'EUR';

const exchangeRates = { INR: 1, USD: 1 / 83.5, EUR: 1 / 90 };
const symbols = { INR: '₹', USD: '$', EUR: '€' };

const pricing: Record<Duration, { private: number }> = {
  '7 Days': { private: 66560 },
  '14 Days': { private: 124800 },
  '21 Days': { private: 183040 },
};

const durations: Duration[] = ['7 Days', '14 Days', '21 Days'];

const steps = [
  { title: 'Submit Your Interest', description: 'Tell us your preferred dates — we’ll match you with an upcoming group.' },
  { title: 'Join a Small Group Retreat', description: 'We organise retreats in small groups of 3–10 people to ensure meaningful connection and personal attention.' },
  { title: 'Confirm Your Spot', description: 'Pay a small deposit to block your seat. Remaining amount can be paid on arrival.' },
  { title: 'Prepare for Your Journey', description: 'We’ll send you a checklist to get ready for your yoga retreat experience.' },
];

export default function TwoListing7() {
  const [selected, setSelected] = useState<Duration>('7 Days');
  const [currency, setCurrency] = useState<Currency>('INR');

  const formattedPrice = useMemo(() => {
    const base = pricing[selected].private;
    const converted = base * exchangeRates[currency];
    return currency === 'INR'
      ? `${symbols[currency]}${Math.round(converted).toLocaleString()}`
      : `${symbols[currency]}${converted.toFixed(0)}`;
  }, [selected, currency]);

  return (
    <section className="bg-white px-4 md:px-16 text-[#262626] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="mb-8">
          <h4 className="text-black font-semibold tracking-widest uppercase text-xs">
            Application Process
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mt-2 leading-snug">
            Book Your Yoga Retreat in 4 Easy Steps
          </h2>
          <p className="text-gray-700 max-w-2xl text-base md:text-lg mt-3">
            Embarking on your yoga retreat journey is simple and stress-free. Just follow these steps to reserve your spot and prepare for a peaceful escape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Steps */}
          <div className="relative pl-10">
            <div className="absolute left-8 top-4 bottom-[5rem] w-1 bg-black" />
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-10 mb-6 group">
                <div className="absolute left-[-22px] top-4 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  {idx + 1}
                </div>
                <div className="bg-white border border-[#d1d5db] rounded-xl p-4 shadow-sm group-hover:shadow-md transition duration-300">
                  <h4 className="text-base md:text-lg font-semibold text-[#1C1C1C] mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-white border border-black rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1C] mb-3">{selected} Yoga Retreat</h3>

            {/* Duration Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {durations.map(day => (
                <button
                  key={day}
                  onClick={() => setSelected(day)}
                  aria-pressed={selected === day}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                    selected === day
                      ? 'bg-black text-white'
                      : 'text-black border-black bg-white hover:bg-gray-100'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Currency Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(['INR', 'USD', 'EUR'] as Currency[]).map(cur => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  aria-pressed={currency === cur}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition duration-200 ${
                    currency === cur
                      ? 'bg-black text-white'
                      : 'text-black border-black bg-white hover:bg-gray-100'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Offer */}
            <div className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs md:text-sm inline-flex items-center font-medium mb-4">
              <span className="mr-2">🔸</span> 20% Off for Groups of 3+
            </div>

            {/* Price */}
            <div className="bg-[#f3f4f6] p-5 rounded-xl text-center mb-4">
              <h4 className="text-black font-semibold mb-1">Private</h4>
              <p className="text-2xl font-bold text-[#1C1C1C]">{formattedPrice}</p>
            </div>

            {/* Inclusions */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
              <li>✔️ {selected} Stay in Goa</li>
              <li>✔️ Yoga Equipment</li>
              <li>✔️ Nutritional Guidance</li>
              <li>✔️ Meditation & Silence Walks</li>
              <li>✔️ Personal Mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
