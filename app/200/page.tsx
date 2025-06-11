"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import AboutTraining200 from "@/components/200hr/AboutTraining200";
import CurriculumSection200 from "@/components/200hr/CurriculumSection200";
import ActivitiesSection200 from "@/components/200hr/ActivitiesSection200";
import BatchScheduleTable200 from "@/components/200hr/BatchScheduleTable200";
import TestimonialSection200 from "@/components/200hr/TestimonialSection200";
import YogaHighlights200 from "@/components/200hr/YogaHighlights200";
import ApplicationForm200 from "@/components/200hr/ApplicationForm200";
import TeachersSection200 from "@/components/200hr/TeachersSection200";
import Schedule200 from "@/components/200hr/Schedule200";
import OurDinning7 from "@/components/R7days/OurDinning7";
import DinningSlides7 from "@/components/R7days/DinningSlides7";
import OurRooms7 from "@/components/R7days/OurRooms7";
import RoomSlides7 from "@/components/R7days/RoomSlides7";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto px-4 text-gray-800">
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
        <div>
          <span className="text-3xl md:text-4xl font-bold text-green-600 block">
            USD 1600
          </span>
          <span className="text-sm text-[#150e70]">Private Room</span>
        </div>
        <div>
          <span className="text-3xl md:text-4xl font-bold text-green-600 block">
            USD 1300
          </span>
          <span className="text-sm text-[#150e70]">Shared Room</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#150e70] text-center">
        <p>Duration: 200Hrs / 24 Days</p>
        <p>Language: English</p>
        <p>Module: Residential with Meals</p>
        <p>Level: Intermediate</p>
        <p>Certification: RYS 200</p>
      </div>

      <div className="text-center mb-6">
        <a href="#application">
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
            alt="Yoga retreat in Bali"
            width={1200}
            height={900}
            className="object-cover w-full h-auto max-h-[500px]"
            priority
          />
        </div>
      </div>

      <AboutTraining200 />
      <Schedule200 />

      {/* Teaching Styles Section */}
      <section className="mt-20">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-[#150e70]">
          Transformational teachings of Hatha, Vinyasa, and Ashtanga Yoga for a
          comprehensive and immersive learning experience.
        </h2>
        <h3 className="text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
          Education experience covering all key aspects of the ancient practice
          and philosophy of yoga
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/HVA/vinyasa yoga.jpg", alt: "Vinyasa Yoga" },
            { src: "/HVA/ashtanga.jpg", alt: "Ashtanga Yoga" },
            { src: "/HVA/hatha.png", alt: "Hatha Yoga" },
          ].map(({ src, alt }, index) => (
            <div
              key={index}
              className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow"
            >
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* More Sections */}
      <CurriculumSection200 />
      <TeachersSection200 />
      <OurDinning7 />
      <DinningSlides7 />
      <OurRooms7 />
      <RoomSlides7 />
      <ActivitiesSection200 />
      <TestimonialSection200 />
      <BatchScheduleTable200 />

      {/* Testimonials Carousel */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional...",
            author: "Charmaine Wardenberg",
          },
          {
            quote:
              "Rishikul Yogshala was absolutely amazing. I am very fortunate that I did my 200 hours there...",
            author: "Dimple Malkan",
          },
          {
            quote:
              "Very good school! They have provided detailed training. Teachers and instructor are well trained...",
            author: "Varsha Ambardekar",
          },
        ]}
      />

      <YogaHighlights200 />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "1. Who can join the 200-hour YTTC?",
            answer:
              "The course is open to yoga practitioners of all levels, from beginners to advanced students.",
          },
          {
            question: "2. Is the certification internationally recognized?",
            answer:
              "Yes, this training is Yoga Alliance certified and internationally recognized.",
          },
          {
            question: "3. What are the benefits of completing the 200-hour YTTC?",
            answer:
              "You'll deepen your yoga practice, understand yoga philosophy, and gain certification to teach.",
          },
          {
            question: "4. What styles of yoga are covered in the course?",
            answer:
              "The course includes Hatha, Ashtanga, and Vinyasa Flow, plus pranayama, meditation, and more.",
          },
          {
            question: "5. Can I take the course online?",
            answer:
              "Yes, online formats with live and recorded sessions are available.",
          },
          {
            question: "6. How long does it take to complete the course?",
            answer: "It typically takes 4–8 weeks, depending on format.",
          },
          {
            question: "7. Will I be able to teach yoga after completing the course?",
            answer:
              "Yes, after successful completion you’ll be certified to teach professionally.",
          },
          {
            question: "8. What if I miss a class?",
            answer: "Make-up classes or recordings are typically provided.",
          },
        ]}
      />

      <ApplicationForm200 />

      {/* Certification Badge Section */}
      <section className="text-center mb-8 relative">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#150e70] mb-6">
          After Completing the Course...
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pb-4">
          <div className="relative w-16 h-24 sm:w-20 sm:h-32 mx-auto">
            <Image
              src="/YAlogo-removebg-preview.png"
              alt="Yoga Alliance Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-lg">
            {[
              { level: "200", src: "/nw200.png" },
              { level: "300", src: "/nw300.png" },
              { level: "RPYS", src: "/nwrpys.png" },
              { level: "YACEP", src: "/nwyacep.png" },
            ].map(({ level, src }, i) => (
              <div
                key={i}
                className="relative w-16 h-24 sm:w-20 sm:h-32 mx-auto"
              >
                <Image
                  src={src}
                  alt={`RYS ${level} Badge`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#150e70] max-w-md mx-auto leading-relaxed">
          You’ll receive a Yoga Alliance certificate —
          <br />
          internationally recognized and accepted.
        </p>
      </section>
    </div>
  );
};

export default TwoHundredHourTTPage;
