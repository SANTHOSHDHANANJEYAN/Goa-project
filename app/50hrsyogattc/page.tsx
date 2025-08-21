"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import non-critical components
const TestimonialCarousel = dynamic(() => import("@/components/testimonials-section"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: false });
const ApplicationForm = dynamic(() => import("@/components/50hr/ApplicationForm"), { ssr: false });
const CurriculumSection = dynamic(() => import("@/components/50hr/CurriculumSection"), { ssr: false });
const ActivitiesSection = dynamic(() => import("@/components/50hr/ActivitiesSection"), { ssr: false });
const BatchScheduleTable = dynamic(() => import("@/components/50hr/BatchScheduleTable"), { ssr: false });
const TestimonialSection = dynamic(() => import("@/components/50hr/TestimonialSection"), { ssr: false });
const AboutTraining = dynamic(() => import("@/components/50hr/AboutTraining"), { ssr: false });
const YogaHighlights = dynamic(() => import("@/components/50hr/YogaHighlights"), { ssr: false });
const TeachersSection = dynamic(() => import("@/components/50hr/TeachersSection"), { ssr: false });
const Schedule = dynamic(() => import("@/components/50hr/Schedule"), { ssr: false });
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"), { ssr: false });
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"), { ssr: false });
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"), { ssr: false });
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"), { ssr: false });

const FiftyHourTTPage = () => {
  return (
    <div className="mt-24 max-w-6xl mx-auto text-gray-800">
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

        <div className="max-w-3xl mx-auto p-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#150e70] mb-6">
            Course Highlights
          </h2>

          <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-5 py-3 font-medium text-[#150e70]">Duration</td>
                <td className="px-5 py-3 text-gray-700">50 Hrs - 7 Days</td>
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
                <td className="px-5 py-3 text-gray-700">Very Beginner</td>
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
          <button className="bg-[#150e70] hover:bg-green-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-md">
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
          Transformative Hatha, Vinyasa & Ashtanga Yoga for deep, immersive learning.
        </h2>
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
          Education experience covering all key aspects of the ancient practice and philosophy of yoga
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["hatha.png", "vinyasa yoga.jpg", "ashtanga.jpg"].map((src, idx) => (
            <div key={idx} className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
              <Image src={`/HVA/${src}`} alt={`Yoga ${idx + 1}`} fill className="object-cover w-full h-full" loading="lazy" />
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
            quote: "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional...",
            author: "Charmaine Wardenberg",
          },
          {
            quote: "Rishikul Yogshala was absolutely amazing. I gained much more than just asana training...",
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
          { question: "1. Where is your yoga teacher training course located?", answer: "Our course is located in Goa..." },
          { question: "2. What style of yoga do you teach?", answer: "We specialize in Hatha Vinyasa yoga..." },
          { question: "3. What is the duration?", answer: "Typically spans 12 days for the 100-hr course." },
          { question: "4. Prerequisites?", answer: "Basic understanding and regular practice of yoga." },
          { question: "5. What does a typical day look like?", answer: "Includes yoga, meditation, theory classes, and more." },
          { question: "6. Is it conducted in English?", answer: "Yes, to cater to international students." },
          { question: "7. Who are the instructors?", answer: "Professionals certified in Hatha Vinyasa yoga." },
          { question: "8. Certification?", answer: "Yoga Alliance accredited certification." },
        ]}
      />

      <ApplicationForm />

      <section className="text-center mb-8 relative ">
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

export default FiftyHourTTPage;
