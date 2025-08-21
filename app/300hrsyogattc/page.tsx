"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const AboutTraining300 = dynamic(() => import("@/components/300hr/AboutTraining300"));
const CurriculumSection300 = dynamic(() => import("@/components/300hr/CurriculumSection300"));
const ActivitiesSection300 = dynamic(() => import("@/components/300hr/ActivitiesSection300"));
const BatchScheduleTable300 = dynamic(() => import("@/components/300hr/BatchScheduleTable300"));
const TestimonialSection300 = dynamic(() => import("@/components/300hr/TestimonialSection300"));
const YogaHighlights300 = dynamic(() => import("@/components/300hr/YogaHighlights300"));
const ApplicationForm300 = dynamic(() => import("@/components/300hr/ApplicationForm300"));
const TeachersSection300 = dynamic(() => import("@/components/300hr/TeachersSection300"));
const Schedule300 = dynamic(() => import("@/components/300hr/Schedule300"));
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"));
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"));
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"));
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"));
const TestimonialCarousel = dynamic(() => import("@/components/testimonials-section"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));

const ThreeHundredHourTTPage = () => {
  return (
    <div className="mt-24 max-w-6xl text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#150e70]">
          300-Hrs Accredited Yoga Teacher Training
        </h2>
        <p className="text-[1.5rem] text-[#150e70] font-semibold">In Goa</p>
      </div>

      <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>

      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 27-Days journey in Goa
      </p>

      <div className="flex justify-center items-end text-center gap-8 mb-4">
        <div>
          <span className="text-4xl font-bold text-green-600 block">USD 1700</span>
          <span className="text-sm text-[#150e70]">Private Room</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-green-600 block">USD 1400</span>
          <span className="text-sm text-[#150e70]">Shared Room</span>
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
        <td className="px-5 py-3 text-gray-700">300 Hrs - 27 Days</td>
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
        <td className="px-5 py-3 text-gray-700">Advance</td>
      </tr>
      <tr>
        <td className="px-5 py-3 font-medium text-[#150e70]">Certification</td>
        <td className="px-5 py-3 text-gray-700">RYS 300</td>
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
      <div className="flex justify-center items-center bg-transparent">
        <div className="rounded-2xl overflow-hidden shadow-lg mb-16 w-full max-w-4xl">
          <Image
            src="/gallery/4.jpg"
            alt="Yoga retreat in Goa"
            width={1200}
            height={900}
            className="object-cover max-h-[500px] w-full"
            priority
          />
        </div>
      </div>

      <AboutTraining300 />
      <Schedule300 />

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
          Transformative Hatha, Vinyasa & Ashtanga Yoga for deep, immersive learning.
        </h2>

        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
          Education experience covering all key aspects of the ancient practice and philosophy of yoga
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-700 max-w-6xl mx-auto">
          {["/HVA/hatha.png", "/HVA/vinyasa yoga.jpg", "/HVA/ashtanga.jpg"].map((src, i) => (
            <div key={i} className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
              <Image src={src} alt={`Yoga Style ${i + 1}`} fill className="object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <CurriculumSection300 />
      <TeachersSection300 />
      <OurDinning7 />
      <DinningSlides7 />
      <OurRooms7 />
      <RoomSlides7 />
      <ActivitiesSection300 />
      <BatchScheduleTable300 />
      <TestimonialSection300 />

      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "Absolutely loved my experience at this yoga training school...",
            author: "Charmaine Wardenberg",
          },
          {
            quote:
              "Rishikul Yogshala was absolutely amazing. I am very fortunate...",
            author: "Dimple Malkan",
          },
          {
            quote:
              "Very good school! They have provided detailed training...",
            author: "Varsha Ambardekar",
          },
        ]}
      />

      <YogaHighlights300 />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "1. Where is your yoga teacher training course located?",
            answer:
              "Our course is located in Goa, offering a serene environment...",
          },
          {
            question: "2. What style of yoga do you teach in the training course?",
            answer: "We specialize in Hatha Vinyasa yoga...",
          },
          {
            question: "3. What is the duration of the training program?",
            answer: "The program typically spans 27 days...",
          },
          {
            question: "4. What does a typical day look like during the training?",
            answer:
              "Each day includes yoga practice, meditation, theory, and self-study.",
          },
          {
            question: "5. Is the program conducted in English?",
            answer:
              "Yes, the entire course is conducted in English...",
          },
          {
            question: "6. Who are the instructors leading the training?",
            answer:
              "Our instructors are certified in Hatha Vinyasa yoga...",
          },
          {
            question: "7. What certification will I receive upon completing the course?",
            answer:
              "You will receive a Yoga Alliance accredited certificate...",
          },
        ]}
      />

      <ApplicationForm300 />

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
};

export default ThreeHundredHourTTPage;
