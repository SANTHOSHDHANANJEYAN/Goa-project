'use client';

import { useState, useMemo } from 'react';

type Duration = '50Hrs YTTC' | '100Hrs YTTC' | '200Hrs YTTC' | '300Hrs YTTC' | '21Days Yoga Immersion Course';
type Currency = 'INR' | 'USD' | 'EUR';

const exchangeRates = { INR: 1, USD: 1 / 83.5, EUR: 1 / 90 };
const symbols = { INR: '₹', USD: '$', EUR: '€' };

// Pricing with advance payment included
const pricing: Record<Duration, { total: number; advance: number }> = {
  '50Hrs YTTC': { total: 66560, advance: 10000 },
  '100Hrs YTTC': { total: 124800, advance: 15000 },
  '200Hrs YTTC': { total: 183040, advance: 20000 },
  '300Hrs YTTC': { total: 239900, advance: 25000 },
  '21Days Yoga Immersion Course': { total: 298500, advance: 30000 },
};

export default function TwoListing7() {
  const durations: Duration[] = [
    '50Hrs YTTC',
    '100Hrs YTTC',
    '200Hrs YTTC',
    '300Hrs YTTC',
    '21Days Yoga Immersion Course',
  ];
  const [selected, setSelected] = useState<Duration>('50Hrs YTTC');
  const [currency, setCurrency] = useState<Currency>('INR');

  // Format prices based on selected currency
  const getFormattedPrice = (amount: number): string => {
    const converted = amount * exchangeRates[currency];
    return currency === 'INR'
      ? `${symbols[currency]}${Math.round(converted).toLocaleString()}`
      : `${symbols[currency]}${converted.toFixed(0)}`;
  };

  const formattedAdvance = useMemo(
    () => getFormattedPrice(pricing[selected].advance),
    [selected, currency]
  );

  const formattedTotal = useMemo(
    () => getFormattedPrice(pricing[selected].total),
    [selected, currency]
  );

  const formattedRemaining = useMemo(
    () => getFormattedPrice(pricing[selected].total - pricing[selected].advance),
    [selected, currency]
  );

  const steps = [
    { title: 'Submit Your Interest', description: 'Choose your retreat duration and fill out the booking form.' },
    { title: 'Confirm Your Booking', description: 'Pay a small advance to reserve your spot instantly.' },
    { title: 'Pay the Remaining Balance', description: 'The remaining amount can be paid on arrival.' },
    { title: 'Prepare for Your Journey', description: 'We’ll send you a complete checklist to get ready.' },
  ];

  return (
    <section className="bg-white px-4 md:px-16 text-[#262626] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <h4 className="text-[#150e70] font-semibold tracking-widest uppercase text-xs">
            Application Process
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#150e70] mt-2 leading-snug">
            Book Your Yoga Retreat in 4 Easy Steps
          </h2>
          <p className="text-gray-700 max-w-2xl text-base md:text-lg mt-3">
            Secure your spot with a small advance payment, and pay the balance when you arrive.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Steps */}
          <div className="relative pl-10">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-10 mb-6 group">
                <div className="absolute left-[-22px] top-4 w-8 h-8 rounded-full bg-[#150e70] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  {index + 1}
                </div>
                <div className="bg-white border border-[#d1d5db] rounded-xl p-4 shadow-sm group-hover:shadow-md transition duration-300">
                  <h4 className="text-base md:text-lg font-semibold text-[#1C1C1C] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Pricing */}
          <div className="bg-white border border-[#150e70] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1C] mb-3">
              {selected} Yoga Retreat
            </h3>

            {/* Duration Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {durations.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelected(day)}
                  aria-label={`Select ${day}`}
                  aria-pressed={selected === day}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                    selected === day
                      ? 'bg-[#150e70] text-white'
                      : 'text-[#150e70] border-[#150e70] bg-white hover:bg-[#e0e7ff]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Currency Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(['INR', 'USD', 'EUR'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  aria-label={`Select ${cur}`}
                  aria-pressed={currency === cur}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition duration-200 ${
                    currency === cur
                      ? 'bg-[#150e70] text-white'
                      : 'text-[#150e70] border-[#150e70] bg-white hover:bg-[#e0e7ff]'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Payment Breakdown */}
            <div className="bg-[#f3f4f6] p-5 rounded-xl text-center mb-4">
              <h4 className="text-[#150e70] font-semibold mb-1">Total Price</h4>
              <p className="text-2xl font-bold text-[#1C1C1C]">{formattedTotal}</p>
              <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Advance:</span> {formattedAdvance}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Remaining:</span> {formattedRemaining}
                </p>
              </div>
            </div>

            {/* Inclusions */}
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
              <li role="listitem">✔️ {selected} Stay in Goa</li>
              <li role="listitem">✔️ Yoga Equipment</li>
              <li role="listitem">✔️ Healthy Meals</li>
              <li role="listitem">✔️ Meditation & Silence Walks</li>
              <li role="listitem">✔️ Personal Mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
