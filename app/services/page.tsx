"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/ApplicationForm";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-24 px-6 md:px-12 max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-sm md:text-base font-semibold text-indigo-600 uppercase tracking-wide">
          21-Day Accredited Yoga Teacher Training
        </h2>
        <p className="text-lg text-gray-600">In Amersham, Bali</p>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Join an exciting and life-changing 21-day journey in Bali
      </p>

      {/* Price and CTA */}
      <div className="flex justify-center items-center text-center mb-2">
        <span className="text-xl line-through text-gray-400 mr-4">USD 2350</span>
        <span className="text-4xl font-bold text-green-600">USD 2000</span>
      </div>
      <p className="text-center text-sm text-gray-600 mb-6">
        *Early bird offer – Save 15%
      </p>

      <div className="text-center mb-6">
        <a href="#application">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Book Your Spot
          </button>
        </a>
      </div>

      <div className="text-center text-sm text-gray-700 mb-12">
        <p className="mb-1">Only <strong>3 spots left</strong> for the next training:</p>
        <p className="font-semibold">May 26th – June 16th, 2025</p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-16">
        <Image
          src="/course2.jpg"
          alt="Yoga retreat in Bali"
          width={1200}
          height={600}
          className="w-full object-cover max-h-[600px]"
          priority
        />
      </div>

      {/* Certificate Info */}
      <section className="text-center mb-20">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
          After Completing the Course...
        </h3>
        <div className="flex justify-center items-center gap-6 mb-4">
          {["200", "300", "500"].map((level, i) => (
            <div key={i} className="relative w-12 h-12">
              <Image
                src={`/rys ${level}.png`}
                alt={`RYS ${level} Badge`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          You'll receive a Yoga Alliance certificate —<br />
          internationally recognized and accepted.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">What You’ll Learn</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
          This 200-hour training covers the foundations of yoga philosophy, asana practice,
          anatomy, teaching methodology, meditation, pranayama, and yogic lifestyle.
          You’ll develop the skills to confidently lead classes, deepen your personal practice,
          and integrate yoga into your daily life.
        </p>
      </section>

      {/* Curriculum */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Curriculum Overview</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="space-y-2">
            <li>✓ Asana techniques & alignment</li>
            <li>✓ Yoga philosophy & ethics</li>
            <li>✓ Teaching methodology</li>
            <li>✓ Anatomy & physiology</li>
          </ul>
          <ul className="space-y-2">
            <li>✓ Meditation & pranayama</li>
            <li>✓ Practice teaching sessions</li>
            <li>✓ Class sequencing & theming</li>
            <li>✓ Business of yoga</li>
          </ul>
        </div>
      </section>

      {/* Instructor Info */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Your Instructors</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
          Our experienced team brings decades of collective practice from multiple yoga disciplines.
          They’re dedicated to helping you grow — physically, mentally, and spiritually — in a supportive, inclusive environment.
        </p>
        <div className="w-full h-80 relative rounded-xl overflow-hidden shadow">
          <Image
            src="/yoga-instructors.jpg"
            alt="House of Om instructors"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Schedule */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Training Schedule</h2>
        <div className="bg-indigo-50 p-6 rounded-lg shadow text-center text-gray-700 max-w-3xl mx-auto">
          <p className="mb-4 font-medium text-lg">Intensive Format (21 Days)</p>
          <p className="mb-1">🗓 May 26 – June 16, 2025</p>
          <p className="mb-1">📍 Location: Amersham, Bali</p>
          <p className="mb-1">🕗 Monday – Saturday: 8 AM to 6 PM</p>
          <p className="text-sm text-gray-500 mt-2">Includes breaks, workshops, and off-days</p>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel
        testimonials={[
          {
            quote: "This training completely transformed my approach to yoga and teaching. I gained confidence, knowledge, and a supportive community.",
            author: "Sarah M., Graduate",
          },
          {
            quote: "The depth of knowledge shared by the instructors is incredible. This program offers much more than just teacher certification—it's a life-changing experience.",
            author: "Michael T., Graduate",
          },
          {
            quote: "I came for the certification but left with a whole new perspective on yoga and myself.",
            author: "Priya K., Graduate",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do I need to be an advanced yoga practitioner?",
            answer: "No, our training welcomes dedicated students at all levels. A minimum of 6 months of consistent practice is recommended.",
          },
          {
            question: "Is this training Yoga Alliance certified?",
            answer: "Yes, our program is fully accredited by Yoga Alliance, allowing graduates to register as RYT-200 teachers.",
          },
          {
            question: "What is your refund policy?",
            answer: "Deposits are non-refundable. Full refunds minus the deposit are available up to 30 days before training. After that, credits may be offered.",
          },
          {
            question: "Do you offer scholarships?",
            answer: "Yes, we offer a limited number of diversity and financial need scholarships for each training. Please inquire for details.",
          },
        ]}
      />

      {/* Application Form */}
      <ApplicationForm
        id="application"
        title="Apply Now"
        subtitle="Begin your journey to becoming a certified yoga teacher"
      />
    </div>
  );
};

export default TwoHundredHourTTPage;
