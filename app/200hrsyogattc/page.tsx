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

    {/* Hero Image with Overlay Text */}
<div className="relative w-full h-[90vh] flex items-center justify-center">
  {/* Background Image */}
  <Image
    src="/gallery/3.jpg"
    alt="Yoga Teacher Training"
    fill
    className="object-cover brightness-95"
    priority
  />

  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>

  {/* Centered Text Content */}
  <div className="absolute top-[25%] w-full text-center px-4">
    <h1 className="text-white text-3xl md:text-5xl font-semibold leading-snug drop-shadow-lg uppercase">
      200-Hrs Accredited Yoga Teacher Training
    </h1>
    <p className="text-white text-lg md:text-2xl font-medium mt-4 drop-shadow-md">
      Join an exciting and life-changing 24-Days journey in Goa
    </p>
  </div>

  {/* Enquire Now Tab */}
  <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
    <button className="bg-[#7b2629] text-white text-sm font-semibold py-3 px-4 rounded-l-md rotate-90 origin-bottom-right tracking-widest uppercase shadow-lg hover:bg-[#5e1d1f] transition-all">
      Enquire Now
    </button>
  </div>
</div>


    <AboutTraining200 />
    <Schedule200 />




<section className="bg-white p-8 min-h-screen flex flex-col items-center">
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
  <h2 className="text-3xl md:text-4xl font-bold text-[#150e70] text-center mb-2">
    Fee For 200 Hour Yoga TTC In Rishikesh (2025–26)
  </h2>
  <div className="flex justify-center mb-10">
    <span className="text-2xl text-gray-400">✦⸻⸻⸻⸻✦</span>
  </div>
  <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
    {/* Info Card */}
    <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-8">
      <div className="flex items-center gap-5">
        <span className="bg-green-600 rounded-full p-4 text-white text-2xl">
          <i className="fas fa-calendar-alt"></i>
        </span>
        <div>
          <div className="font-bold text-lg">Available batches:</div>
          <div className="text-gray-500">September 2025 – December 2026</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span className="bg-green-600 rounded-full p-4 text-white text-2xl">
          <i className="fas fa-play-circle"></i>
        </span>
        <div>
          <div className="font-bold text-lg">Course starts:</div>
          <div className="text-gray-500">7th of every month</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span className="bg-green-600 rounded-full p-4 text-white text-2xl">
          <i className="fas fa-clock"></i>
        </span>
        <div>
          <div className="font-bold text-lg">Course ends:</div>
          <div className="text-gray-500">30th of every month</div>
        </div>
      </div>
    </div>
    {/* Price Card */}
    <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-6 items-center">
      <div className="self-end text-gray-600 flex items-center gap-1 mb-2">
        <i className="fas fa-language"></i><span>English</span>
      </div>
      <table className="w-full text-base text-center border-separate border-spacing-y-1">
        <thead>
          <tr>
            <th className="bg-green-700 text-white py-2 rounded-l-md">Room Type</th>
            <th className="bg-green-700 text-white py-2">International</th>
            <th className="bg-green-700 text-white py-2 rounded-r-md">Indian</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="py-3">Single Room</td>
            <td className="py-3">$ 1,250</td>
            <td className="py-3">₹ 55,000</td>
          </tr>
          <tr className="bg-white">
            <td className="py-3">Shared Room</td>
            <td className="py-3">$ 1,150</td>
            <td className="py-3">₹ 50,000</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full px-10 py-3 text-lg font-semibold shadow hover:from-yellow-300 hover:to-yellow-500 transition">
        RESERVE
      </button>
    </div>
  </div>
</section>


    
    <BatchScheduleTable200 />
    <OurRooms7 />
    <RoomSlides7 />
    <OurDinning7 />
    <DinningSlides7 />
    <ActivitiesSection200 />
    <TeachersSection200 />
    <TestimonialSection200 />

    {/* Testimonials */}
    {/* <TestimonialCarousel
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
    /> */}

    <YogaHighlights200 />

    {/* FAQs */}
    {/* <FAQSection
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
          answer: "Yes, you'll be certified to teach professionally.",
        },
        {
          question: "8. What if I miss a class?",
          answer: "Make-up classes or recordings are provided.",
        },
      ]}
    />

    <ApplicationForm200 /> */}

    {/* Certificate Section */}
    {/* <section className="text-center mb-8 relative px-4 sm:px-6 lg:px-8">
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
    </section> */}
  </div>
);

export default TwoHundredHourTTPage;
