"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy-load heavy sections
const TestimonialCarousel = dynamic(() => import("@/components/testimonials-section"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const AboutTraining100 = dynamic(() => import("@/components/100hr/AboutTraining100"));
const CurriculumSection100 = dynamic(() => import("@/components/100hr/CurriculumSection100"));
const ActivitiesSection100 = dynamic(() => import("@/components/100hr/ActivitiesSection100"));
const BatchScheduleTable100 = dynamic(() => import("@/components/100hr/BatchScheduleTable100"));
const TestimonialSection100 = dynamic(() => import("@/components/100hr/TestimonialSection100"));
const YogaHighlights100 = dynamic(() => import("@/components/100hr/YogaHighlights100"));
const ApplicationForm100 = dynamic(() => import("@/components/100hr/ApplicationForm100"));
const TeachersSection200 = dynamic(() => import("@/components/200hr/TeachersSection200"));
const Schedule100 = dynamic(() => import("@/components/100hr/Schedule100"));
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"));
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"));
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"));
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"));

const HundredHourTTPage = () => (
  <div className="mt-24 max-w-6xl mx-auto text-gray-800 px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#150e70] mb-4">
        100‑Hrs Accredited Yoga Teacher Training
      </h2>
      <p className="text-[1.5rem] font-semibold text-[#150e70]">In Goa</p>
    </div>
    <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
      Become a Certified Yoga Teacher by Yoga Alliance
    </h1>
    <p className="text-lg text-center text-[#150e70] mb-6">
      Join an exciting and life-changing 12‑Days journey in Goa
    </p>

    {/* Pricing */}
    <div className="flex justify-center items-end text-center gap-8 mb-4">
      {[
        { label: "Private Room", price: "USD 900" },
        { label: "Shared Room", price: "USD 750" },
      ].map(({ label, price }) => (
        <div key={label}>
          <span className="text-4xl font-bold text-green-600 block">{price}</span>
          <span className="text-sm text-[#150e70]">{label}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center gap-6 mb-6 text-sm text-[#150e70] flex-wrap">
      {[
        "Duration‑100Hrs‑12Days",
        "Language‑English",
        "Module: Residential with Meals",
        "Level: Beginner",
        "Certification: YACEP",
      ].map((info, i) => (
        <p key={i}>{info}</p>
      ))}
    </div>
    <div className="text-center mb-6">
      <a href="/contact#InGoa">
        <button className="bg-[#150e70] hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
          Book Your Spot
        </button>
      </a>
    </div>

    {/* Hero Image */}
    <div className="flex justify-center mb-16">
      <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[800px]">
        <Image
          src="/gallery/2.jpg"
          alt="Yoga retreat"
          width={1200}
          height={900}
          className="object-cover w-full max-h-[500px]"
          priority
        />
      </div>
    </div>

    {/* Core Sections */}
    <AboutTraining100 />
    <Schedule100 />

    {/* Styles section */}
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
        Transformational teachings of Hatha, Vinyasa, and Ashtanga Yoga...
      </h2>
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
        Education experience covering all key aspects of yoga philosophy and practice
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-700 max-w-6xl mx-auto">
        {[
          { src: "/HVA/ashtanga.jpg", alt: "Ashtanga Yoga" },
          { src: "/HVA/hatha.png", alt: "Hatha Yoga" },
          { src: "/HVA/vinyasa yoga.jpg", alt: "Vinyasa Yoga" },
        ].map(({ src, alt }, i) => (
          <div key={i} className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
            <Image src={src} alt={alt} fill className="object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    {/* Additional Content */}
    <CurriculumSection100 />
    <TeachersSection200 />
    <OurDinning7 />
    <DinningSlides7 />
    <OurRooms7 />
    <RoomSlides7 />
    <ActivitiesSection100 />
    <BatchScheduleTable100 />
    <TestimonialSection100 />

    {/* Testimonials */}
    <TestimonialCarousel
      testimonials={[
        { quote: "Absolutely loved my experience...", author: "Charmaine Wardenberg" },
        { quote: "Rishikul Yogshala was absolutely amazing...", author: "Dimple Malkan" },
        { quote: "Very good school! They provided detailed training...", author: "Varsha Ambardekar" },
      ]}
    />

    <YogaHighlights100 />

    {/* FAQ & Form */}
    <FAQSection
      title="Frequently Asked Questions"
      faqs={[
        { question: "Where is your yoga training located?", answer: "Our course is located in Goa..." },
        { question: "What style do you teach?", answer: "We specialize in Hatha Vinyasa yoga..." },
        // etc.
      ]}
    />
    <ApplicationForm100 />

    {/* After Course */}
    <section className="text-center mb-8 relative px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#150e70] mb-6">
        After Completing the Course...
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pb-4">
        <Image
          src="/YAlogo-removebg-preview.png"
          alt="Yoga Alliance Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-lg mx-auto">
          {["200", "300", "RPYS", "YACEP"].map((level) => (
            <Image
              key={level}
              src={`/nw${level.toLowerCase()}.png`}
              alt={`RYS ${level} Badge`}
              width={80}
              height={80}
              className="object-contain"
            />
          ))}
        </div>
      </div>
      <p className="text-medium text-[#150e70] max-w-md mx-auto leading-relaxed">
        You’ll receive a Yoga Alliance certificate —<br />
        internationally recognized and accepted.
      </p>
    </section>
  </div>
);

export default HundredHourTTPage;
