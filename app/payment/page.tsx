"use client";

import { useState } from "react";
import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

type AccommodationType = "Private Room" | "Shared Room";
type Option = { total: number; advance: number };
type Course = {
  name: string;
  options: Partial<Record<AccommodationType, Option>>;
};

const courses: Course[] = [
  {
    name: "50Hrs Multi-style Yoga TTC",
    options: {
      "Private Room": { total: 500, advance: 200 },
      "Shared Room": { total: 350, advance: 150 },
    },
  },
  {
    name: "100Hrs Multi-style Yoga TTC",
    options: {
      "Private Room": { total: 900, advance: 300 },
      "Shared Room": { total: 750, advance: 250 },
    },
  },
  {
    name: "200Hrs Multi-style Yoga TTC",
    options: {
      "Private Room": { total: 1600, advance: 400 },
      "Shared Room": { total: 1300, advance: 350 },
    },
  },
  {
    name: "300Hrs Multi-style Yoga TTC",
    options: {
      "Private Room": { total: 1700, advance: 500 },
      "Shared Room": { total: 1400, advance: 400 },
    },
  },
  {
    name: "21Days Yoga Immersion Course",
    options: {
      "Shared Room": { total: 0, advance: 300 }, // total unknown, only advance
    },
  },
];

  const benefits: string[] = [
    "Yoga Alliance USA Certification",
    "Experienced Teachers",
    "Comfortable Accommodation",
    "Healthy Meals",
    "Study Materials Provided",
    "Airport Pickup (on request)",
  ];
  
  export default function PaymentPage() {
    const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
    const [selectedAccommodation, setSelectedAccommodation] = useState<AccommodationType>(
      Object.keys(courses[0].options)[0] as AccommodationType
    );
  
    const handleCourseSelect = (course: Course) => {
      setSelectedCourse(course);
      setSelectedAccommodation(Object.keys(course.options)[0] as AccommodationType); // reset
    };
  
    const selectedOption = selectedCourse.options[selectedAccommodation]!;
  
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
          {Object.keys(selectedCourse.options).map((accType) => (
            <button
              key={accType}
              onClick={() => setSelectedAccommodation(accType as AccommodationType)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border shadow transition ${
                selectedAccommodation === accType
                  ? "bg-[#150e70] text-white border-[#150e70]"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {accType}
            </button>
          ))}
        </div>
  
        {/* Advance + Remaining Box */}
        <div className="relative group p-6 rounded-xl border border-[#150e70] bg-gradient-to-br from-[#e9e9f6] via-white to-[#e9e9f6] shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 mb-12 max-w-md mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#150e70] via-black to-[#150e70] rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-[#150e70] mb-2">
              Payment Breakdown
            </h3>
            <p className="text-sm text-black mb-3">Reserve your spot today.</p>
            <p className="text-3xl md:text-4xl font-bold text-[#150e70] mb-2">
              Advance: ${selectedOption.advance}.00
            </p>
            {selectedOption.total > 0 && (
              <p className="text-xl font-semibold text-gray-700 mb-4">
                Remaining: ${selectedOption.total - selectedOption.advance}.00
              </p>
            )}
            <p className="text-sm text-gray-600 mb-3">
              Course Advance payment : <span className="font-semibold">{selectedCourse.name}</span>{" "}
              | Accommodation:{" "}
              <span className="font-semibold">{selectedAccommodation}</span>
            </p>
            <ul className="space-y-1 text-black text-sm">
              {benefits.map((b: string) => (
                <li key={b} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#150e70] text-sm" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Payment Providers */}
        <div className="text-center mb-12">
          <h4 className="text-base md:text-lg font-semibold mb-4 text-black">
            Pay With
          </h4>
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
  
          {[
            {
              title: "Advance Payment Via Bank Transfer",
              items: [
                "No additional charges apply.",
                "Advance Payment via PayPal: A 5% transaction fee will be added to the advance amount (Advance amount + 5% Extra).",
              ],
            },
            {
              title: "Advance Payment Policy",
              items: [
                "The advance is non-refundable.",
                "It can be rescheduled or extended for up to one year from the original booking date.",
              ],
            },
          ].map((block, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
            >
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
