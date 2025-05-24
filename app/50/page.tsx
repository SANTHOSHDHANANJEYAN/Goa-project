"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/50hr/ApplicationForm";
import CurriculumSection from "@/components/50hr/CurriculumSection";
import ActivitiesSection from "@/components/50hr/ActivitiesSection";
import BatchScheduleTable from "@/components/50hr/BatchScheduleTable";
import AnimateButton from "@/components/50hr/AnimateButton";
import TestimonialSection from "@/components/50hr/TestimonialSection";
import AboutTraining from "@/components/50hr/AboutTraining";
import YogaHighlights from "@/components/50hr/YogaHighlights";
import AccommodationSlider from "@/components/AccommodationSlider";
import TeachersSection from "@/components/50hr/TeachersSection";
import Schedule from "@/components/50hr/Schedule";

const FiftyHourTTPage = () => {
  return (
    <div className="mt-24 max-w-6xl mx-auto text-gray-800 px-4 sm:px-6 lg:px-8">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#150e70]">
          50-Hrs Multi-Style Yoga Teacher Training
        </h2>
        <p className="text-xl sm:text-2xl text-[#150e70]">In Goa</p>
      </div>

      <h1 className="text-base sm:text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center mb-2">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>

      <p className="text-base sm:text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 50-hours journey in Goa
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-end text-center gap-6 sm:gap-8 mb-4">
        <div>
          <span className="text-3xl sm:text-4xl font-bold text-green-600 block">
            USD 350
          </span>
          <span className="text-sm text-[#150e70]">Private Room</span>
        </div>
        <div>
          <span className="text-3xl sm:text-4xl font-bold text-green-600 block">
            USD 500
          </span>
          <span className="text-sm text-[#150e70]">Shared Room</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 text-[#150e70] text-sm sm:text-base">
        <p>Duration - 50 Hrs</p>
        <p>Language - English</p>
      </div>

      <div className="text-center mb-6">
        <a href="#application">
          <button className="bg-[#150e70] hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Book Your Spot
          </button>
        </a>
      </div>

      <div className="text-center text-sm sm:text-base text-[#150e70] mb-12">
        <p className="font-semibold">May 26th – June 16th, 2025</p>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center bg-transparent mb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg max-w-full w-[90vw] sm:w-[800px]">
          <Image
            src="/course2.jpg"
            alt="Yoga retreat in Bali"
            width={1200}
            height={900}
            className="object-cover max-h-[500px]"
            priority
          />
        </div>
      </div>

      {/* Certificate Info */}
      <AboutTraining />

      {/* About Section */}
      <AnimateButton />
      <Schedule />

      <section className="mt-20">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-6 text-[#150e70] max-w-3xl mx-auto px-2">
          Transformational teachings of Hatha Yoga, Vinyasa Yoga and Ashtanga yoga to give our students an extensive and comprehensive teaching experience
        </h2>
        <h3 className="text-xs sm:text-sm font-bold text-center mb-8 text-[#150e70] max-w-3xl mx-auto px-2">
          Education experience covering all key aspects of the ancient practice and philosophy of yoga
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-2">
          {/* Card 1 */}
          <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-3xl shadow">
            <img
              src="/11 .jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Card 2 */}
          <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-3xl shadow">
            <img
              src="/12.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Card 3 */}
          <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-3xl shadow">
            <img
              src="/13.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <CurriculumSection />

      {/* Training Schedule */}
      <section className="mb-20 px-4 sm:px-0">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#150e70]">Training Schedule</h2>
        <div className="bg-[#fcdede] p-6 rounded-lg shadow text-center text-gray-700 max-w-3xl mx-auto">
          <p className="mb-4 font-medium text-lg">Intensive Format (50-hours)</p>
          <p className="mb-1">🗓 May 26 – June 16, 2025</p>
          <p className="mb-1">📍 Location: Goa</p>
          <p className="mb-1">🕗 Monday – Saturday: 8 AM to 6 PM</p>
          <p className="text-sm text-[#150e70] mt-2">Includes breaks, workshops, and off-days</p>
        </div>
      </section>

      <TeachersSection />

      {/* Accommodation Section */}
      <section
        className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[600px] sm:h-[750px]"
        style={{ backgroundImage: "url('/56.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
            Rishikul Yogshala Goa
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Accommodation</h1>
          <p className="text-base sm:text-lg mb-10">
            Palm Paradise Resort amidst jungle paradise in Goa
          </p>

          <div className="flex flex-col sm:flex-row text-left max-w-3xl mx-auto gap-8 items-center pt-8">
            <div className="flex items-start space-x-4 max-w-xs">
              <img
                src="/Acc1.png"
                alt="Waterfalls"
                className="w-12 h-10 sm:w-16 sm:h-12 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <p>
                <strong>Discover Goa's cascade gems:</strong>
                <br />
                more than 10 waterfalls within 10 km
              </p>
            </div>
            <div className="flex items-start space-x-4 max-w-xs">
              <img
                src="/Acc2.png"
                alt="Nature parks"
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <p>
                <strong>Exploring Goa’s natural beauty:</strong>
                <br />
                3 biggest parks in a 20-minute drive
              </p>
            </div>
            <div className="flex items-start space-x-4 max-w-xs pl-6 sm:pl-0">
              <img
                src="/Acc3.png"
                alt="Beaches"
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1 flex-shrink-0"
                loading="lazy"
              />
              <p>
                <strong>Enjoy swimming, surfing and relaxation:</strong>
                <br />
                at Goa’s 3 beaches within 10 km
              </p>
            </div>
          </div>
        </div>
      </section>

      <AccommodationSlider />

      <ActivitiesSection />

      {/* Course Details Section */}
      <BatchScheduleTable />
      <TestimonialSection />

      {/* Testimonials */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "This training completely transformed my approach to yoga and teaching. I gained confidence, knowledge, and a supportive community.",
            author: "Sarah M., Graduate",
          },
          {
            quote:
              "The depth of knowledge shared by the instructors is incredible. This program offers much more than just teacher certification—it's a life-changing experience.",
            author: "Michael T., Graduate",
          },
          {
            quote:
              "I came for the certification but left with a whole new perspective on yoga and myself.",
            author: "Priya K., Graduate",
          },
        ]}
      />

      <YogaHighlights />

      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "1. Where is your yoga teacher training course located?",
            answer:
              "Our course is located in Goa, the Pearl of the Orient, offering a serene environment amidst its beautiful coastal landscapes.",
          },
          {
            question: "2. What style of yoga do you teach in the training course?",
            answer:
              "We specialize in Hatha Vinyasa yoga, blending traditional Hatha principles with dynamic Vinyasa flow.",
          },
          {
            question: "3. What is the duration of the training program?",
            answer: "The program typically spans 12 days for the 100-hr course.",
          },
          {
            question: "4. What are the prerequisites for enrolling in the program?",
            answer:
              "Participants are encouraged to have a basic understanding and regular practice of yoga before joining.",
          },
          {
            question: "5. What does a typical day look like during the training?",
            answer:
              "Each day includes yoga practice, meditation, theory classes, workshops, and dedicated time for self-study.",
          },
          {
            question: "6. Is the program conducted in English?",
            answer:
              "Yes, the entire course is conducted in English to cater to international participants.",
          },
          {
            question: "7. Who are the instructors leading the training?",
            answer:
              "Our instructors are professionals certified in Hatha Vinyasa yoga, ensuring top-notch teaching and guidance.",
          },
          {
            question: "8. What certification will I receive upon completing the course?",
            answer:
              "Upon successful completion, you will receive a Yoga Alliance accredited certification, recognized globally for teaching yoga.",
          },
        ]}
      />

      {/* Application Form */}
      <ApplicationForm />

      {/* Certificate Section */}
      <section className="text-center mb-8 relative px-4 sm:px-6 lg:px-8">
        <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[#150e70]">
          Certificate Of Completion
        </h3>
        <p className="mt-3 text-base text-[#150e70] max-w-3xl mx-auto">
          We certify that you have completed this course with our highest standards and standards of Yoga Alliance.
        </p>
        <div className="mt-8 max-w-4xl mx-auto flex justify-center items-center gap-4 flex-wrap">
          <Image
            src="/ya-logo-200x90.png"
            alt="Yoga Alliance Logo"
            width={200}
            height={90}
            className="object-contain"
            loading="lazy"
          />
          <Image
            src="/ya-registered-logo.png"
            alt="Yoga Alliance Registered Logo"
            width={200}
            height={90}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default FiftyHourTTPage;
