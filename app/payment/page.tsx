"use client";

import { useState } from "react";
import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const courses = [
  { name: "Yoga Anatomy For Safety", advance: 50, remaining: 200 },
  { name: "200Hr Yoga TTC", advance: 100, remaining: 900 },
  { name: "300Hr Yoga TTC", advance: 150, remaining: 1200 },
  { name: "Yoga Retreat", advance: 80, remaining: 400 },
];

const benefits = ["Lifetime Access", "Certified Completion", "24x7 Instructor Support"];

export default function PaymentSection() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
        Secure Your Course Payment
      </h2>

      {/* Course Selector */}
      <div className="mb-12 text-center">
        <label className="block mb-4 text-lg md:text-xl font-medium text-gray-700">
          Choose Your Course
        </label>
        <select
          value={selectedCourse.name}
          onChange={(e) =>
            setSelectedCourse(courses.find((c) => c.name === e.target.value) || courses[0])
          }
          className="w-full md:w-1/2 border-2 border-green-300 p-4 rounded-2xl shadow-md focus:ring-4 focus:ring-green-400 transition"
        >
          {courses.map((course) => (
            <option key={course.name}>{course.name}</option>
          ))}
        </select>
      </div>

      {/* Payment Options */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Advance Payment */}
        <div className="relative group p-6 rounded-2xl border-2 border-green-300 bg-gradient-to-br from-green-50 via-white to-green-50 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">Advance Payment</h3>
            <p className="text-gray-600 mb-5">Reserve your spot today.</p>
            <p className="text-4xl md:text-5xl font-bold text-green-700 mb-6">${selectedCourse.advance}.00</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {b}
                </li>
              ))}
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Remaining Payment */}
        <div className="relative group p-6 rounded-2xl border-2 border-gray-300 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Remaining Payment</h3>
            <p className="text-gray-600 mb-5">Pay on arrival / start date.</p>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">${selectedCourse.remaining}.00</p>
            <ul className="space-y-2 text-gray-700 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <FaCheckCircle className="text-gray-600" /> {b}
                </li>
              ))}
            </ul>
            <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Payment Providers */}
      <div className="text-center mb-16">
        <h4 className="text-lg md:text-xl font-semibold mb-6 text-gray-700">Pay With</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-medium shadow-md transition">
            Razorpay
          </button>
          <button className="px-10 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl font-medium shadow-md transition">
            PayPal
          </button>
        </div>
      </div>

      {/* Payment Guidelines */}
      <div className="bg-[#f5f8f2] border-2 border-green-200 rounded-3xl p-10 space-y-8">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-green-800 mb-6">
          — Payment Guidelines —
        </h3>

        {[{
          title: "Advance Payment Via Bank Transfer, Stripe, Wise",
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
        },{
          title: "Remaining Balance Payment (Due On Arrival)",
          items: [
            "Can be paid in cash without any extra charges.",
            "If you prefer to pay via PayPal or Razorpay, a 5% transaction fee will apply to the remaining amount (Rest of the amount + 5% Extra)."
          ]
        }].map((block, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3 text-green-700 font-semibold text-lg">
              <FaMoneyBillWave /> {block.title}
            </div>
            <ul className="space-y-2 text-gray-700 text-sm pl-4 list-disc">
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
