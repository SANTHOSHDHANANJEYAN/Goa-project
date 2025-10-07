"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

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
  <div className="mt-24 max-w-6xl mx-auto text-gray-800">
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
        { label: "Private Room", price: "USD 900" },
        { label: "Shared Room", price: "USD 750" },
      ].map(({ label, price }) => (
        <div key={label}>
          <span className="text-4xl font-bold text-green-600 block">{price}</span>
          <span className="text-sm text-[#150e70]">{label}</span>
        </div>
      ))}
    </div>
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#150e70] mb-6">
        Course Highlights
      </h2>

      <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-5 py-3 font-medium text-[#150e70]">Duration</td>
            <td className="px-5 py-3 text-gray-700">100 Hrs - 12 Days</td>
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
            <td className="px-5 py-3 text-gray-700">Beginner</td>
          </tr>
          <tr>
            <td className="px-5 py-3 font-medium text-[#150e70]">Certification</td>
            <td className="px-5 py-3 text-gray-700">YACEP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="text-center mb-6">
      <a href="/contact#InGoa">
        <button className="bg-[#150e70] hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
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
      <h2 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
        Transformative Hatha, Vinyasa & Ashtanga Yoga for deep, immersive learning.
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
        You'll receive a Yoga Alliance certificate —<br />
        internationally recognized and accepted.
      </p>
    </section>

    {/* Fixed WhatsApp Button */}
    <Link
      href="https://wa.me/919520024333"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </Link>
  </div>
);

export default HundredHourTTPage;
