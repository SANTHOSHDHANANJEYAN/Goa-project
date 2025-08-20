"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy imports
const TestimonialCarousel = dynamic(() => import("@/components/testimonials-section"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const AboutTraining200 = dynamic(() => import("@/components/200hr/AboutTraining200"));
const CurriculumSection200 = dynamic(() => import("@/components/200hr/CurriculumSection200"));
const ActivitiesSection200 = dynamic(() => import("@/components/200hr/ActivitiesSection200"));
const BatchScheduleTable200 = dynamic(() => import("@/components/200hr/BatchScheduleTable200"));
const TestimonialSection200 = dynamic(() => import("@/components/200hr/TestimonialSection200"));
const YogaHighlights200 = dynamic(() => import("@/components/200hr/YogaHighlights200"));
const ApplicationForm200 = dynamic(() => import("@/components/200hr/ApplicationForm200"));
const TeachersSection200 = dynamic(() => import("@/components/200hr/TeachersSection200"));
const Schedule200 = dynamic(() => import("@/components/200hr/Schedule200"));
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"));
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"));
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"));
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"));

const TwoHundredHourTTPage = () => (
  <div className="mt-24 max-w-6xl text-gray-800">
    {/* Header */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#150e70] mb-4">
        200-Hrs Accredited Yoga Teacher Training
      </h2>
      <p className="text-xl font-semibold text-[#150e70]">In Goa</p>
    </div>
    <h1 className="text-base md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
      Become a Certified Yoga Teacher by Yoga Alliance
    </h1>
    <p className="text-lg text-center text-[#150e70] mb-6">
      Join an exciting and life-changing 24-Days journey in Goa
    </p>

    {/* Price Info */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-4 text-center">
      {[
        { price: "USD 1600", label: "Private Room" },
        { price: "USD 1300", label: "Shared Room" },
      ].map(({ price, label }) => (
        <div key={label}>
          <span className="text-3xl md:text-4xl font-bold text-green-600 block">{price}</span>
          <span className="text-sm text-[#150e70]">{label}</span>
        </div>
      ))}
    </div>

<div className="max-w-3xl mx-auto p-6">
  <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#150e70] mb-6">
    Course Highlights
  </h2>

  <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base">
    <tbody>
      <tr className="border-b border-gray-200">
        <td className="px-5 py-3 font-medium text-[#150e70]">Duration</td>
        <td className="px-5 py-3 text-gray-700">200 Hrs / 24 Days</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="px-5 py-3 font-medium text-[#150e70]">Language</td>
        <td className="px-5 py-3 text-gray-700">English</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="px-5 py-3 font-medium text-[#150e70]">Module</td>
        <td className="px-5 py-3 text-gray-700">Residential with Meals</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="px-5 py-3 font-medium text-[#150e70]">Level</td>
        <td className="px-5 py-3 text-gray-700">Intermediate</td>
      </tr>
      <tr>
        <td className="px-5 py-3 font-medium text-[#150e70]">Certification</td>
        <td className="px-5 py-3 text-gray-700">RYS 200</td>
      </tr>
    </tbody>
  </table>
</div>


    <div className="text-center mb-6">
      <a href="/contact#InGoa">
        <button className="bg-[#150e70] hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
          Book Your Spot
        </button>
      </a>
    </div>

    {/* Hero Image */}
    <div className="flex justify-center">
      <div className="rounded-2xl overflow-hidden shadow-lg mb-16 w-full max-w-5xl">
        <Image
          src="/gallery/3.jpg"
          alt="Yoga retreat"
          width={1200}
          height={900}
          className="object-cover w-full h-auto max-h-[500px]"
          priority
        />
      </div>
    </div>

    <AboutTraining200 />
    <Schedule200 />

    {/* Yoga Styles */}
    <section className="mt-20">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-[#150e70]">
        Transformative Hatha, Vinyasa & Ashtanga Yoga for deep, immersive learning.
      </h2>
      <h3 className="text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
        Education experience covering all key aspects of the ancient practice and philosophy of yoga
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { src: "/HVA/vinyasa yoga.jpg", alt: "Vinyasa Yoga" },
          { src: "/HVA/ashtanga.jpg", alt: "Ashtanga Yoga" },
          { src: "/HVA/hatha.png", alt: "Hatha Yoga" },
        ].map(({ src, alt }, index) => (
          <div key={index} className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
            <Image src={src} alt={alt} fill className="object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    {/* Core Sections */}
    <CurriculumSection200 />
    <TeachersSection200 />
    <OurDinning7 />
    <DinningSlides7 />
    <OurRooms7 />
    <RoomSlides7 />
    <ActivitiesSection200 />
    <TestimonialSection200 />
    <BatchScheduleTable200 />

    {/* Testimonials */}
    <TestimonialCarousel
      testimonials={[
        {
          quote: "Absolutely loved my experience at this yoga training school...",
          author: "Charmaine Wardenberg",
        },
        {
          quote: "Rishikul Yogshala was absolutely amazing...",
          author: "Dimple Malkan",
        },
        {
          quote: "Very good school! They provided detailed training...",
          author: "Varsha Ambardekar",
        },
      ]}
    />

    <YogaHighlights200 />

    {/* FAQs */}
    <FAQSection
      title="Frequently Asked Questions"
      faqs={[
        {
          question: "1. Who can join the 200-hour YTTC?",
          answer: "The course is open to yoga practitioners of all levels.",
        },
        {
          question: "2. Is the certification internationally recognized?",
          answer: "Yes, this training is Yoga Alliance certified.",
        },
        {
          question: "3. What are the benefits of completing the 200-hour YTTC?",
          answer: "You'll deepen your practice and gain teaching credentials.",
        },
        {
          question: "4. What styles are covered?",
          answer: "The course includes Hatha, Ashtanga, Vinyasa, meditation, and more.",
        },
        {
          question: "5. Can I take the course online?",
          answer: "Yes, online formats are available.",
        },
        {
          question: "6. How long does it take?",
          answer: "Typically 4–8 weeks depending on the format.",
        },
        {
          question: "7. Will I be able to teach after?",
          answer: "Yes, you’ll be certified to teach professionally.",
        },
        {
          question: "8. What if I miss a class?",
          answer: "Make-up classes or recordings are provided.",
        },
      ]}
    />

    <ApplicationForm200 />

    {/* Certificate Section */}
      <section className="text-center mb-8 relative px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#150e70] mb-6">
          After Completing the Course...
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pb-4">
          <div className="relative w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem] mx-auto sm:mx-0">
            <Image
              src="/YAlogo-removebg-preview.png"
              alt="Yoga Visual Icon"
              width={80}
              height={120}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-lg mx-auto sm:mx-0">
            {["200", "300", "RPYS", "YACEP"].map((level, i) => (
              <div key={i} className="flex flex-col items-center w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem]">
                <div className="relative w-full h-full mb-2">
                  <Image
                    src={`/nw${level.toLowerCase()}.png`}
                    alt={`RYS ${level} Badge`}
                    width={80}
                    height={120}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
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

export default TwoHundredHourTTPage;
