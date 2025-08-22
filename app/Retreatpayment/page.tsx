'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

type Duration = '7 Days' | '14 Days' | '21 Days';
type Currency = 'INR' | 'USD' | 'EUR';

const exchangeRates = { INR: 1, USD: 1 / 83.5, EUR: 1 / 90 };
const symbols = { INR: '₹', USD: '$', EUR: '€' };

const pricing: Record<Duration, { private: number; advancePercent: number }> = {
  '7 Days': { private: 66560, advancePercent: 20 },
  '14 Days': { private: 124800, advancePercent: 30 },
  '21 Days': { private: 183040, advancePercent: 40 },
};

export default function TwoListing7() {
  const durations: Duration[] = ['7 Days', '14 Days', '21 Days'];
  const [selected, setSelected] = useState<Duration>('7 Days');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [customAdvancePercent, setCustomAdvancePercent] = useState<number | null>(null);

  const getPrice = (baseINR: number): string => {
    const converted = baseINR * exchangeRates[currency];
    return `${symbols[currency]}${currency === 'INR' ? Math.round(converted).toLocaleString() : converted.toFixed(0)}`;
  };

  const totalPrice = pricing[selected].private;
  const advancePercent = customAdvancePercent ?? pricing[selected].advancePercent;
  const advanceAmount = (totalPrice * advancePercent) / 100;

  const formattedTotal = useMemo(() => getPrice(totalPrice), [selected, currency]);
  const formattedAdvance = useMemo(() => getPrice(advanceAmount), [selected, currency, advancePercent]);
  const formattedRemaining = useMemo(() => getPrice(totalPrice - advanceAmount), [selected, currency, advancePercent]);

  const steps = [
    { title: 'Submit Your Interest', description: 'Tell us your preferred dates — we’ll match you with an upcoming group.' },
    { title: 'Join a Small Group Retreat', description: 'Retreats are in groups of 3–10 people for meaningful connection.' },
    { title: 'Confirm Your Spot', description: 'Pay a small deposit; remaining amount can be paid on arrival.' },
    { title: 'Prepare for Your Journey', description: 'Receive a checklist to get ready for your yoga retreat experience.' },
  ];

  const handleRazorpayPayment = () => {
    alert(`Redirecting to Razorpay for ${formattedAdvance} advance payment`);
  };

  const handlePaypalPayment = () => {
    alert(`Redirecting to PayPal for ${formattedAdvance} advance payment`);
  };

  return (
    <section className="bg-white pt-[7rem] pb-[4rem] text-[#262626] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h4 className="text-[#150e70] font-semibold tracking-widest uppercase text-xs">Application Process</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#150e70] mt-2 leading-snug">
            Book Your Yoga Retreat in 4 Easy Steps
          </h2>
          <p className="text-gray-700 max-w-2xl text-base md:text-lg mt-3">
            Just follow these steps to reserve your spot and prepare for a peaceful escape into nature, self-care, and inner stillness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-10 mb-6 group">
                <div className="absolute left-[-22px] top-4 w-8 h-8 rounded-full bg-[#150e70] text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  {index + 1}
                </div>
                <div className="bg-white border border-[#d1d5db] rounded-xl p-4 shadow-sm group-hover:shadow-md transition duration-300">
                  <h4 className="text-base md:text-lg font-semibold text-[#1C1C1C] mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Pricing */}
          <div className="bg-white border border-[#150e70] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1C] mb-3">{selected} Yoga Retreat</h3>

            {/* Duration Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {durations.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelected(day);
                    setCustomAdvancePercent(null);
                  }}
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

            {/* Advance Payment Slider */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Advance Payment (%): <span className="font-semibold">{advancePercent}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={advancePercent}
                onChange={(e) => setCustomAdvancePercent(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <p className="text-xs text-gray-500">Default for {selected}: {pricing[selected].advancePercent}%</p>
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-[#f3f4f6] p-5 rounded-xl text-center mb-4">
              <h4 className="text-[#150e70] font-semibold mb-1">Total Fee</h4>
              <p className="text-2xl font-bold text-[#1C1C1C]">{formattedTotal}</p>
              <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-700"><span className="font-semibold">Advance Payment:</span> {formattedAdvance}</p>
                <p className="text-sm text-gray-700"><span className="font-semibold">Remaining on Arrival:</span> {formattedRemaining}</p>
              </div>
            </div>

    <div className="flex flex-col sm:flex-row gap-3">
      <Link href="https://razorpay.me/@Rishikul" className="flex-1">
        <button className="w-full px-5 py-3 bg-[#150e70] text-white rounded-xl text-sm font-medium shadow hover:bg-[#0f0b50] transition">
          Pay with Razorpay
        </button>
      </Link>
      <Link href="https://www.paypal.me/rishikulyogshala" className="flex-1">
        <button className="w-full px-5 py-3 bg-[#2563eb] text-white rounded-xl text-sm font-medium shadow hover:bg-[#0f4c8c] transition">
          Pay with PayPal
        </button>
      </Link>
    </div>
          </div>
        </div>

        {/* Payment Guidelines Section */}
        <div className="mt-12 bg-[#f3f4f6] border-l-4 border-[#150e70] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-[#150e70] mb-3">Payment Guidelines</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            <li>Advance payment is required to confirm your booking. Remaining balance is payable upon arrival.</li>
            <li>We accept online payments via Razorpay (INR) and PayPal (International).</li>
            <li>Please carry a valid ID proof at check-in.</li>
            <li>Advance payments are non-refundable but transferable to a future retreat within 12 months.</li>
            <li>Contact our support team for any payment-related queries.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
