"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import AboutTraining100 from "@/components/100hr/AboutTraining100";
import CurriculumSection100 from "@/components/100hr/CurriculumSection100";
import ActivitiesSection100 from "@/components/100hr/ActivitiesSection100";
import BatchScheduleTable100 from "@/components/100hr/BatchScheduleTable100";
import TestimonialSection100 from "@/components/100hr/TestimonialSection100";
import YogaHighlights100 from "@/components/100hr/YogaHighlights100";
import ApplicationForm100 from "@/components/100hr/ApplicationForm100";
import TeachersSection200 from "@/components/200hr/TeachersSection200";
import Schedule100 from "@/components/100hr/Schedule100";
import OurDinning7 from "@/components/R7days/OurDinning7";
import DinningSlides7 from "@/components/R7days/DinningSlides7";
import OurRooms7 from "@/components/R7days/OurRooms7";
import RoomSlides7 from "@/components/R7days/RoomSlides7";

const HundredHourTTPage = () => {
  return (
    <div className="mt-24 max-w-6xl mx-auto text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#150e70] mb-4">
          100-Hrs Accredited Yoga Teacher Training
        </h2>
        <p className="text-[1.5rem] font-semibold text-[#150e70]">In Goa</p>
      </div>

      <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>

      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 12-Days journey in Goa
      </p>

      {/* Pricing */}
      <div className="flex justify-center items-end text-center gap-8 mb-4">
        <div>
          <span className="text-4xl font-bold text-green-600 block">USD 900</span>
          <span className="text-sm text-[#150e70]">Private Room</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-green-600 block">USD 750</span>
          <span className="text-sm text-[#150e70]">Shared Room</span>
        </div>
      </div>

      {/* Course Info */}
      <div className="flex justify-center gap-6 mb-6">
        <p className="text-sm text-[#150e70]">Duration-100Hrs-12Days</p>
        <p className="text-sm text-[#150e70]">Language-English</p>
        <p className="text-sm text-[#150e70]">Module: Residential with Meals</p>
        <p className="text-sm text-[#150e70]">Level: Beginner </p>
        <p className="text-sm text-[#150e70]">Certification: YACEP</p>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-6">
        <a href="#application">
          <button className="bg-[#150e70] hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Book Your Spot
          </button>
        </a>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center bg-transparent">
        <div className="rounded-2xl overflow-hidden shadow-lg mb-16 w-[800px]">
          <Image
            src="/gallery/2.jpg"
            alt="Yoga retreat in Bali"
            width={1200}
            height={900}
            className="object-cover max-h-[500px]"
            priority
          />
        </div>
      </div>

      <AboutTraining100 />
      <Schedule100 />

      {/* Yoga Styles Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
          Transformational teachings of Hatha, Vinyasa, and Ashtanga Yoga for a comprehensive and immersive learning experience.
        </h2>
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
          Education experience covering all key aspects of the ancient practice and philosophy of yoga
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
          {
            quote:
              "Absolutely loved my experience at this yoga training school...",
            author: "Charmaine Wardenberg",
          },
          {
            quote:
              "Rishikul Yogshala was absolutely amazing...",
            author: "Dimple Malkan",
          },
          {
            quote:
              "Very good school! They have provided detailed training...",
            author: "Varsha Ambardekar",
          },
        ]}
      />

      <YogaHighlights100 />

      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "1. Where is your yoga teacher training course located?",
            answer:
              "Our course is located in Goa, the Pearl of the Orient...",
          },
          {
            question: "2. What style of yoga do you teach in the training course?",
            answer:
              "We specialize in Hatha Vinyasa yoga...",
          },
          {
            question: "3. What is the duration of the training program?",
            answer: "The program typically spans 12 days...",
          },
          {
            question: "4. What are the prerequisites for enrolling?",
            answer: "Participants are encouraged to have a basic understanding...",
          },
          {
            question: "5. What does a typical day look like?",
            answer: "Each day includes yoga practice, meditation...",
          },
          {
            question: "6. Is the program conducted in English?",
            answer: "Yes, the entire course is in English...",
          },
          {
            question: "7. Who are the instructors leading the training?",
            answer: "Our instructors are certified professionals...",
          },
          {
            question: "8. What certification will I receive?",
            answer: "You will receive a Yoga Alliance accredited certification...",
          },
        ]}
      />

      {/* Certification Section */}
      <section className="text-center mb-8 relative px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#150e70] mb-6">
          After Completing the Course...
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pb-4">
          <div className="relative w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem] mx-auto sm:mx-0">
            <Image
              src="/YAlogo-removebg-preview.png"
              alt="Yoga Visual Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-lg mx-auto sm:mx-0">
            {["200", "300", "RPYS", "YACEP"].map((level, i) => (
              <div key={i} className="flex flex-col items-center w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem]">
                <div className="relative w-full h-full mb-2">
                  <Image
                    src={`/nw${level.toLowerCase()}.png`}
                    alt={`RYS ${level} Badge`}
                    layout="fill"
                    objectFit="contain"
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

      {/* Application Form */}
      <ApplicationForm100 />
    </div>
  );
};

export default HundredHourTTPage;
