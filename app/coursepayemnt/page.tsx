'use client';

import { useState } from 'react';
import Link from "next/link";

type Course = '50hrs' | '100hrs' | '200hrs' | '300hrs' | '21days';
type Currency = 'INR' | 'USD' | 'EUR';

// Exchange rates relative to USD
const exchangeRates: Record<Currency, number> = {
  INR: 87.51, // Example: 1 USD = 84 INR
  USD: 1,  // Base currency
  EUR: 101.50, // Example: 1 USD = 0.92 EUR
};

const symbols: Record<Currency, string> = { INR: '₹', USD: '$', EUR: '€' };

const pricing: Record<Course, { private?: number; privateAdv?: number; shared?: number; sharedAdv?: number }> = {
  '50hrs': { private: 500, privateAdv: 200, shared: 350, sharedAdv: 150 },
  '100hrs': { private: 900, privateAdv: 300, shared: 750, sharedAdv: 250 },
  '200hrs': { private: 1600, privateAdv: 400, shared: 1300, sharedAdv: 350 },
  '300hrs': { private: 1700, privateAdv: 500, shared: 1400, sharedAdv: 400 },
  '21days': { privateAdv: 300 }, // Only advance payment
};

export default function CoursePricing() {
  const courses: Course[] = ['50hrs', '100hrs', '200hrs', '300hrs', '21days'];
  const [selected, setSelected] = useState<Course>('50hrs');
  const [currency, setCurrency] = useState<Currency>('USD');

  const getPrice = (usd?: number): string =>
    usd ? `${symbols[currency]}${Math.round(usd * exchangeRates[currency])}` : 'N/A';

  return (
    <section className="bg-white pt-[7rem] pb-[4rem] text-[#262626] font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h4 className="text-[#150e70] font-semibold tracking-widest uppercase text-xs">Yoga Teacher Training</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#150e70] mt-2">Choose Your Course</h2>
          <p className="text-gray-700 max-w-2xl text-base md:text-lg mt-3 mx-auto">
            Select your desired training duration and room type to view pricing details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Course Selection */}
          <div className="bg-white border border-[#150e70] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1C] mb-3">
              {selected === '21days' ? '21 Days Yoga Immersion Course' : `${selected} Yoga TTC`}
            </h3>

            {/* Course Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {courses.map((course) => (
                <button
                  key={course}
                  onClick={() => setSelected(course)}
                  aria-label={`Select ${course}`}
                  aria-pressed={selected === course}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                    selected === course
                      ? 'bg-[#150e70] text-white'
                      : 'text-[#150e70] border-[#150e70] bg-white hover:bg-[#e0e7ff]'
                  }`}
                >
                  {course === '21days' ? '21 Days' : course}
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

            {/* Pricing */}
            {selected !== '21days' ? (
              <div className="space-y-4">
                <div className="bg-[#f3f4f6] p-5 rounded-xl text-center">
                  <h4 className="text-[#150e70] font-semibold mb-1">Private Room</h4>
                  <p className="text-2xl font-bold text-[#1C1C1C]">{getPrice(pricing[selected].private)}</p>
                  <p className="text-sm text-gray-600">
                    Advance: <span className="font-medium text-[#150e70]">{getPrice(pricing[selected].privateAdv)}</span> | Remaining on Arrival: <span className="font-medium text-[#150e70]">{getPrice(pricing[selected].private! - pricing[selected].privateAdv!)}</span>
                  </p>
                </div>

                <div className="bg-[#f3f4f6] p-5 rounded-xl text-center">
                  <h4 className="text-[#150e70] font-semibold mb-1">Shared Room</h4>
                  <p className="text-2xl font-bold text-[#1C1C1C]">{getPrice(pricing[selected].shared)}</p>
                  <p className="text-sm text-gray-600">
                    Advance: <span className="font-medium text-[#150e70]">{getPrice(pricing[selected].sharedAdv)}</span> | Remaining on Arrival: <span className="font-medium text-[#150e70]">{getPrice(pricing[selected].shared! - pricing[selected].sharedAdv!)}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[#f3f4f6] p-5 rounded-xl text-center">
                <h4 className="text-[#150e70] font-semibold mb-1">21 Days Yoga Immersion</h4>
                <p className="text-2xl font-bold text-[#1C1C1C]">Advance: {getPrice(pricing['21days'].privateAdv)}</p>
                <p className="text-sm text-gray-600">Full payment details provided upon confirmation.</p>
              </div>
            )}

            {/* Payment Options */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Link href="https://www.paypal.me/rishikulyogshala">
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium shadow transition">
                  Pay with PayPal
                </button>
              </Link>
              <Link href="https://razorpay.me/@Rishikul">
                <button className="px-6 py-2 bg-[#150e70] hover:bg-[#0d0845] text-white rounded-xl text-sm font-medium shadow transition">
                  Pay with Razorpay
                </button>
              </Link>
            </div>
          </div>

          {/* Payment Guidelines */}
          <div className="bg-[#f3f4f6] border-l-4 border-[#150e70] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-[#150e70] mb-3">Payment Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
              <li>Advance payment is required to confirm your booking. Remaining balance is payable upon arrival.</li>
              <li>We accept online payments via Razorpay (INR) and PayPal (International).</li>
              <li>Please carry a valid ID proof at check-in.</li>
              <li>Advance payments are non-refundable but transferable to a future training within 12 months.</li>
              <li>Contact our support team for any payment-related queries.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
