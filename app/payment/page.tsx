"use client";

import { useState } from "react";
import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";


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
    <section className="max-w-5xl mx-auto py-12 px-4 mt-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Secure Your Course Payment
      </h2>

      {/* Payment Options */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Advance Payment */}
        <div className="relative group p-5 rounded-xl border border-green-300 bg-gradient-to-br from-green-50 via-white to-green-50 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-xl blur opacity-20 group-hover:opacity-50 transition"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Advance Payment</h3>
            <p className="text-sm text-gray-600 mb-3">Reserve your spot today.</p>
            <p className="text-3xl md:text-4xl font-bold text-green-700 mb-4">${selectedCourse.advance}.00</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-sm" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Remaining Payment */}
        <div className="relative group p-5 rounded-xl border border-gray-300 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-xl blur opacity-10 group-hover:opacity-30 transition"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Remaining Payment</h3>
            <p className="text-sm text-gray-600 mb-3">Pay on arrival / start date.</p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${selectedCourse.remaining}.00</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <FaCheckCircle className="text-gray-600 text-sm" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Providers */}
      <div className="text-center mb-12">
        <h4 className="text-base md:text-lg font-semibold mb-4 text-gray-700">Pay With</h4>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="https://razorpay.me/@Rishikul">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium shadow transition">
              Razorpay
            </button>
          </Link>
          <Link href= "https://www.paypal.me/rishikulyogshala">
            <button className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium shadow transition">
              PayPal
            </button>
          </Link>
        </div>
      </div>

      {/* Payment Guidelines */}
      <div className="bg-[#f5f8f2] border border-green-200 rounded-2xl p-6 space-y-6">
        <h3 className="text-center text-xl md:text-2xl font-bold text-green-800">
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
        },{
          title: "Remaining Balance Payment (Due On Arrival)",
          items: [
            "Can be paid in cash without any extra charges.",
            "If you prefer to pay via PayPal or Razorpay, a 5% transaction fee will apply to the remaining amount (Rest of the amount + 5% Extra)."
          ]
        }].map((block, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2 text-green-700 font-semibold text-base">
              <FaMoneyBillWave className="text-sm" /> {block.title}
            </div>
            <ul className="space-y-1 text-gray-700 text-sm pl-5 list-disc">
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
