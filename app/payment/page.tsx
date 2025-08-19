"use client";

import { useState } from "react";
import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const courses = [
  { name: "50Hrs Multi-style Yoga TTC", advance: 50 },
  { name: "100Hrs Multi-style Yoga TTC", advance: 100 },
  { name: "200Hrs Multi-style Yoga TTC", advance: 150 },
  { name: "300Hrs Multi-style Yoga TTC", advance: 80 },
  { name: "21Days Yoga Immersion Course", advance: 80 },
  { name: "7 Days Yoga Holiday Retreat", advance: 80 },
  { name: "14 Days Yoga Detox Retreat", advance: 80 },
  { name: "21 Days Yoga Wellness Retreat", advance: 80 },
];

// Accommodation slots
const accommodations = [
  { type: "Shared Room", extra: 200 },
  { type: "Private Room", extra: 400 },
  { type: "Deluxe Room", extra: 600 },
];

const benefits = ["Lifetime Access", "Certified Completion", "24x7 Instructor Support"];

export default function PaymentSection() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(accommodations[0]);

  // Shuffle accommodations when a new course is selected
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    const randomAcc = accommodations[Math.floor(Math.random() * accommodations.length)];
    setSelectedAccommodation(randomAcc);
  };

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 mt-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#150e70] mb-10">
        Secure Your Course Payment
      </h2>

      {/* Course Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {courses.map((course) => (
          <button
            key={course.name}
            onClick={() => handleCourseSelect(course)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border shadow transition ${
              selectedCourse.name === course.name
                ? "bg-[#150e70] text-white border-[#150e70]"
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
            }`}
          >
            {course.name}
          </button>
        ))}
      </div>

      {/* Accommodation Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {accommodations.map((acc) => (
          <button
            key={acc.type}
            onClick={() => setSelectedAccommodation(acc)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border shadow transition ${
              selectedAccommodation.type === acc.type
                ? "bg-[#150e70] text-white border-[#150e70]"
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
            }`}
          >
            {acc.type} (+${acc.extra})
          </button>
        ))}
      </div>

      {/* Advance + Accommodation Box */}
      <div className="relative group p-6 rounded-xl border border-[#150e70] bg-gradient-to-br from-[#e9e9f6] via-white to-[#e9e9f6] shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 mb-12 max-w-md mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#150e70] via-black to-[#150e70] rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-[#150e70] mb-2">Advance Payment</h3>
          <p className="text-sm text-black mb-3">Reserve your spot today.</p>
          <p className="text-3xl md:text-4xl font-bold text-[#150e70] mb-4">
            ${selectedCourse.advance + selectedAccommodation.extra}.00
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Includes course <span className="font-semibold">{selectedCourse.name}</span> + 
            accommodation <span className="font-semibold">{selectedAccommodation.type}</span>
          </p>
          <ul className="space-y-1 text-black text-sm">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#150e70] text-sm" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Payment Providers */}
      <div className="text-center mb-12">
        <h4 className="text-base md:text-lg font-semibold mb-4 text-black">Pay With</h4>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="https://razorpay.me/@Rishikul">
            <button className="px-6 py-2 bg-[#150e70] hover:bg-black text-white rounded-xl text-sm font-medium shadow transition">
              Razorpay
            </button>
          </Link>
          <Link href="https://www.paypal.me/rishikulyogshala">
            <button className="px-6 py-2 bg-black hover:bg-[#150e70] text-white rounded-xl text-sm font-medium shadow transition">
              PayPal
            </button>
          </Link>
        </div>
      </div>

      {/* Payment Guidelines */}
      <div className="bg-[#f6f6f6] border border-[#150e70] rounded-2xl p-6 space-y-6">
        <h3 className="text-center text-xl md:text-2xl font-bold text-[#150e70]">
          — Payment Guidelines —
        </h3>

        {[{
          title: "Advance Payment Via Bank Transfer",
          items: [
            "No additional charges apply.",
            "Advance Payment via PayPal: A 5% transaction fee will be added to the advance amount (Advance amount + 5% Extra)."
          ]
        },{
          title: "Advance Payment Policy",
          items: [
            "The advance is non-refundable.",
            "It can be rescheduled or extended for up to one year from the original booking date."
          ]
        }].map((block, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-[#150e70] font-semibold text-base">
              <FaMoneyBillWave className="text-sm" /> {block.title}
            </div>
            <ul className="space-y-1 text-black text-sm pl-5 list-disc">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
