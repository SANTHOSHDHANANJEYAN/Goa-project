"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/50hr/ApplicationForm";
import ActivitiesSection from "@/components/50hr/ActivitiesSection";
import RetreatSchedule from "@/components/50hr/RetreatSchedule";

const SevenDayRetreatPage = () => {
  return (
    <div className="mt-24 px-6 md:px-12 max-w-6xl mx-auto text-gray-800">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-sm md:text-base font-semibold text-indigo-600 uppercase tracking-wide">
          7-Day Yoga Retreat in Goa
        </h2>
        <p className="text-lg text-gray-600">Rejuvenate Your Mind, Body & Spirit</p>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        Escape to Paradise with Yoga & Nature
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Enjoy a revitalizing week of yoga, meditation, nature excursions, and healing therapies in the serene beauty of Goa.
      </p>

      {/* Price & CTA */}
      <div className="text-center mb-6">
        <span className="text-2xl line-through text-gray-400 mr-4">USD 499</span>
        <span className="text-3xl font-bold text-green-600">USD 349</span>
        <p className="text-sm text-gray-600">*Limited Offer</p>
        <a href="#application">
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Book Now
          </button>
        </a>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center min-h-[400px] bg-transparent mb-12">
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-4xl">
          <Image
            src="/retreat-goa.jpg"
            alt="Yoga retreat in Goa"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Retreat Highlights */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6">Retreat Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto text-gray-700">
          <li>🌅 Daily yoga & meditation sessions</li>
          <li>🌴 Scenic beach location with nature immersion</li>
          <li>🍃 Ayurvedic massage & healing therapies</li>
          <li>🧘‍♀️ Workshops on pranayama, mudra, yoga nidra</li>
          <li>🍽️ Healthy vegetarian meals</li>
          <li>🚶‍♀️ Beach walks, temple visits & sunset meditation</li>
        </ul>
      </section>

      {/* Schedule Section */}
      <RetreatSchedule />

      {/* Activities */}
      <ActivitiesSection />

      {/* Accommodation */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 mb-20 h-[650px]" style={{ backgroundImage: "url('/goa-retreat-accommodation.jpg')" }}>
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">Stay with Comfort</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Beautiful Beachside Retreat</h1>
          <p className="text-lg mb-4">Cozy rooms with garden views, just steps from the ocean, provide the ideal environment to relax and recharge.</p>
          <p className="text-sm text-gray-200">Shared & Private Options Available</p>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel
        testimonials={[
          {
            quote: "This retreat was a reset button for my life. The peace I found here is indescribable.",
            author: "Emily R., USA",
          },
          {
            quote: "Excellent yoga sessions, delicious food, and a supportive group of people. I’ll be back!",
            author: "Rajiv M., India",
          },
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do I need yoga experience?",
            answer: "Not at all. This retreat is beginner-friendly and welcomes all levels.",
          },
          {
            question: "What’s included in the retreat fee?",
            answer: "Accommodation, meals, yoga classes, excursions, and selected therapies are included.",
          },
          {
            question: "Can I join alone?",
            answer: "Yes, many of our participants come solo. You’ll feel at home in our supportive community.",
          },
          {
            question: "Is transportation included?",
            answer: "We can arrange airport pickup for an additional cost. Local transport is included for planned activities.",
          },
        ]}
      />

      {/* Application Form */}
      <ApplicationForm />
    </div>
  );
};

export default SevenDayRetreatPage;
