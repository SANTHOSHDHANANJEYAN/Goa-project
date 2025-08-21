"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load heavy components
const TestimonialCarousel = dynamic(() => import("@/components/testimonials-section"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const AboutTraining21 = dynamic(() => import("@/components/21days/AboutTraining21"));
const CurriculumSection21 = dynamic(() => import("@/components/21days/CurriculumSection21"));
const ActivitiesSection21 = dynamic(() => import("@/components/21days/ActivitiesSection21"));
const BstchScheduleTable21 = dynamic(() => import("@/components/21days/BstchScheduleTable21"));
const TestimonialSection21 = dynamic(() => import("@/components/21days/TestimonialSection21"));
const YogaHighlights21 = dynamic(() => import("@/components/21days/YogaHighlights21"));
const ApplicationForm21 = dynamic(() => import("@/components/21days/ApplicationForm21"));
const TeachersSection21 = dynamic(() => import("@/components/21days/TeachersSection21"));
const Schedule21 = dynamic(() => import("@/components/21days/Schedule21"));
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"));
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"));
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"));
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"));

const TwentyOneTTPage = () => {
  return (
    <div className="mt-24 max-w-6xl mx-auto text-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#150e70]">
          21 days Yoga Immersion Course
        </h2>
        <p className="text-[1.5rem] text-[#150e70]">In Goa</p>
      </div>

      <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>
      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 21-Days journey in Goa
      </p>

      <div className="flex justify-center items-end text-center gap-8 mb-4">
        <div>
          <span className="text-4xl font-bold text-green-600 block">USD 800</span>
          <span className="text-sm text-[#150e70]">Rooms</span>
        </div>
      </div>

<div className="max-w-3xl mx-auto p-6">
  <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#150e70] mb-6">
    Course Highlights
  </h2>

  <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base">
    <tbody>
      <tr className="border-b border-gray-200">
        <td className="px-5 py-3 font-medium text-[#150e70]">Duration</td>
        <td className="px-5 py-3 text-gray-700">21 Days</td>
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
        <td className="px-5 py-3 text-gray-700">Practice</td>
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

      <div className="flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-lg mb-16 w-full max-w-[800px]">
          <Image
            src="/gallery/5.jpg"
            alt="Yoga retreat in Bali"
            width={1200}
            height={900}
            className="object-cover max-h-[500px] w-full"
            priority
          />
        </div>
      </div>

      <AboutTraining21 />
      <Schedule21 />

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
          Transformative Hatha, Vinyasa & Ashtanga Yoga for deep, immersive learning.
        </h2>
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
          Education experience covering all key aspects of the ancient practice and philosophy of yoga
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-700 max-w-6xl mx-auto">
          {["/HVA/ashtanga.jpg", "/HVA/hatha.png", "/HVA/vinyasa yoga.jpg"].map((src, index) => (
            <div key={index} className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
              <Image src={src} alt={`Image ${index + 1}`} fill className="object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <CurriculumSection21 />
      <TeachersSection21 />
      <OurDinning7 />
      <DinningSlides7 />
      <OurRooms7 />
      <RoomSlides7 />
      <ActivitiesSection21 />
      <BstchScheduleTable21 />
      <TestimonialSection21 />

      <TestimonialCarousel
        testimonials={[
          {
            quote: "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional...",
            author: "Charmaine Wardenberg",
          },
          {
            quote: "Rishikul Yogshala was absolutely amazing...",
            author: "Dimple Malkan",
          },
          {
            quote: "Very good school! They have provided detailed training...",
            author: "Varsha Ambardekar",
          },
        ]}
      />

      <YogaHighlights21 />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          { question: "1. What is a 21-day immersion yoga course?", answer: "It’s an intensive..." },
          { question: "2. Who can join this course?", answer: "Anyone with a passion for yoga..." },
          { question: "3. What does the daily schedule look like?", answer: "Expect a full-day schedule..." },
          { question: "4. Is it certified by Yoga Alliance?", answer: "Yes, most 21-day immersion courses..." },
          { question: "5. Is it too intense for beginners?", answer: "It’s intensive but beginner-friendly..." },
          { question: "6. What is included in the course fee?", answer: "Typically, the fee includes..." },
          { question: "7. Will I be qualified to teach after 21 days?", answer: "Yes. Once you complete..." },
          { question: "8. What should I bring to the course?", answer: "Bring comfortable yoga clothes..." },
        ]}
      />

      <ApplicationForm21 />

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
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-lg mx-auto sm:mx-0">
            {["/nw200.png", "/nw300.png", "/nwrpys.png", "/nwyacep.png"].map((src, i) => (
              <div key={i} className="flex flex-col items-center w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem]">
                <Image
                  src={src}
                  alt={`Badge ${i}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
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
};

export default TwentyOneTTPage;
