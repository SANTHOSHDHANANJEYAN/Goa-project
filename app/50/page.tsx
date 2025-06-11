"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/50hr/ApplicationForm";
import CurriculumSection from "@/components/50hr/CurriculumSection";
import ActivitiesSection from "@/components/50hr/ActivitiesSection";
import BatchScheduleTable from "@/components/50hr/BatchScheduleTable";
import TestimonialSection from "@/components/50hr/TestimonialSection";
import AboutTraining from "@/components/50hr/AboutTraining";
import YogaHighlights from "@/components/50hr/YogaHighlights";
import TeachersSection from "@/components/50hr/TeachersSection";
import Schedule from "@/components/50hr/Schedule";
import OurDinning7 from "@/components/R7days/OurDinning7";
import OurRooms7 from "@/components/R7days/OurRooms7";
import DinningSlides7 from "@/components/R7days/DinningSlides7";
import RoomSlides7 from "@/components/R7days/RoomSlides7";

const FiftyHourTTPage = () => {
  return (
    <div className="mt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#150e70] mb-4">
          50-Hrs Multi-Style Yoga Teacher Training
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-[#150e70]">In Goa</p>
      </div>

      <h1 className="text-base sm:text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>

      <p className="text-sm sm:text-base text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 7-Days journey in Goa
      </p>

      <div className="flex flex-wrap justify-center items-end gap-6 mb-4">
        <div className="text-center">
          <span className="text-3xl sm:text-4xl font-bold text-green-600 block">USD 500</span>
          <span className="text-sm text-[#150e70]">Private Room</span>
        </div>
        <div className="text-center">
          <span className="text-3xl sm:text-4xl font-bold text-green-600 block">USD 350</span>
          <span className="text-sm text-[#150e70]">Shared Room</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-center text-sm sm:text-base">
        <p className="text-[#150e70]">Duration-50Hrs - 7Days</p>
        <p className="text-[#150e70]">Language-English</p>
        <p className="text-[#150e70]">Module: Residential with Meals</p>
        <p className="text-[#150e70]">Level: Very Beginner</p>
        <p className="text-[#150e70]">Certification: YACEP</p>
      </div>

      <div className="text-center mb-6">
        <a href="#application">
          <button className="bg-[#150e70] hover:bg-indigo-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-md">
            Book Your Spot
          </button>
        </a>
      </div>

      <div className="flex justify-center px-2 sm:px-4 mb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[800px]">
          <Image
            src="/gallery/1.jpg"
            alt="Yoga retreat in Bali"
            width={1200}
            height={900}
            className="object-cover w-full h-auto max-h-[500px]"
            priority
          />
        </div>
      </div>

      <AboutTraining />
      <Schedule />

      <section className="mt-20">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
          Transformational teachings of Hatha, Vinyasa, and Ashtanga Yoga for a comprehensive and immersive learning experience.
        </h2>
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
          Education experience covering all key aspects of the ancient practice and philosophy of yoga
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["hatha.png", "vinyasa yoga.jpg", "ashtanga.jpg"].map((src, idx) => (
            <div key={idx} className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
              <Image src={`/HVA/${src}`} alt={`Yoga ${idx + 1}`} fill className="object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <CurriculumSection />
      <TeachersSection />
      <OurDinning7 />
      <DinningSlides7 />
      <OurRooms7 />
      <RoomSlides7 />
      <ActivitiesSection />
      <BatchScheduleTable />
      <TestimonialSection />

      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional...",
            author: "Charmaine Wardenberg",
          },
          {
            quote:
              "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training...",
            author: "Dimple Malkan",
          },
          {
            quote: "Very good school! They have provided detailed training...",
            author: "Varsha Ambardekar",
          },
        ]}
      />

      <YogaHighlights />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "1. Where is your yoga teacher training course located?",
            answer: "Our course is located in Goa...",
          },
          {
            question: "2. What style of yoga do you teach?",
            answer: "We specialize in Hatha Vinyasa yoga...",
          },
          {
            question: "3. What is the duration?",
            answer: "Typically spans 12 days for the 100-hr course.",
          },
          {
            question: "4. Prerequisites?",
            answer: "Basic understanding and regular practice of yoga.",
          },
          {
            question: "5. What does a typical day look like?",
            answer: "Includes yoga, meditation, theory classes, and more.",
          },
          {
            question: "6. Is it conducted in English?",
            answer: "Yes, to cater to international students.",
          },
          {
            question: "7. Who are the instructors?",
            answer: "Professionals certified in Hatha Vinyasa yoga.",
          },
          {
            question: "8. Certification?",
            answer: "Yoga Alliance accredited certification.",
          },
        ]}
      />

      <ApplicationForm />

      <section className="text-center mb-8 relative">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#150e70] mb-6">
          After Completing the Course...
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-4">
          <div className="relative w-16 h-24 sm:w-20 sm:h-32 mx-auto sm:mx-0">
            <Image
              src="/YAlogo-removebg-preview.png"
              alt="Yoga Visual Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-lg mx-auto">
            {[
              { level: "200", src: "/nw200.png" },
              { level: "300", src: "/nw300.png" },
              { level: "RPYS", src: "/nwrpys.png" },
              { level: "YACEP", src: "/nwyacep.png" },
            ].map(({ level, src }, i) => (
              <div key={i} className="relative w-16 h-24 sm:w-20 sm:h-32">
                <Image src={src} alt={`RYS ${level} Badge`} layout="fill" objectFit="contain" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#150e70] max-w-md mx-auto leading-relaxed mt-4">
          You’ll receive a Yoga Alliance certificate —<br />
          internationally recognized and accepted.
        </p>
      </section>
    </div>
  );
};

export default FiftyHourTTPage;
