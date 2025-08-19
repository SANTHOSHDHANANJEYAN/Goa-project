"use client";

import { useState } from "react";

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
    <section className="max-w-5xl mx-auto py-16 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">Course Payment</h2>

      {/* Course Selector */}
      <div className="mb-10 text-center">
        <label className="block mb-3 text-lg font-medium">Choose Your Course</label>
        <select
          value={selectedCourse.name}
          onChange={(e) =>
            setSelectedCourse(courses.find((c) => c.name === e.target.value) || courses[0])
          }
          className="w-full md:w-1/2 border p-3 rounded-xl shadow focus:ring-2 focus:ring-green-500"
        >
          {courses.map((course) => (
            <option key={course.name}>{course.name}</option>
          ))}
        </select>
      </div>

      {/* Payment Options */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Advance Payment */}
        <div className="shadow-lg border-2 border-green-200 bg-green-50 rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Advance Payment</h3>
          <p className="text-gray-600 mb-4">Reserve your spot today.</p>
          <p className="text-4xl font-bold text-green-700 mb-6">${selectedCourse.advance}.00</p>
          <ul className="space-y-2 text-sm mb-8">
            {benefits.map((b) => (
              <li key={b}>✅ {b}</li>
            ))}
          </ul>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
            Enroll Now
          </button>
        </div>

        {/* Remaining Payment */}
        <div className="shadow-lg border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Remaining Payment</h3>
          <p className="text-gray-600 mb-4">Pay on arrival / start date.</p>
          <p className="text-4xl font-bold text-gray-900 mb-6">${selectedCourse.remaining}.00</p>
          <ul className="space-y-2 text-sm mb-8">
            {benefits.map((b) => (
              <li key={b}>✅ {b}</li>
            ))}
          </ul>
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Payment Providers */}
      <div className="text-center">
        <h4 className="text-lg font-semibold mb-6">Pay With</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
            Razorpay
          </button>
          <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl">
            PayPal
          </button>
          <button className="px-8 py-3 bg-gray-900 hover:bg-black text-white rounded-xl">
            Stripe
          </button>
        </div>
      </div>
    </section>
  );
}
