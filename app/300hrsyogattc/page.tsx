"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy imports for 300hr TTC
const TestimonialCarousel = dynamic(() => import("@/components/testimonials-section"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
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

const ThreeHundredHourTTPage = () => (
  <div className="mt-24 max-w-6xl text-gray-800">
    {/* Hero Image */}
    <div className="flex justify-center">
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-16 w-full max-w-5xl">
        <Image
          src="/gallery/3.jpg"
          alt="Yoga retreat"
          width={1200}
          height={900}
          className="object-cover w-full h-auto max-h-[500px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              300-Hrs Accredited Yoga Teacher Training
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium drop-shadow-md">
              Join an exciting and life-changing 27-Days journey in Goa
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* About + Schedule */}
    <AboutTraining300 />
    <Schedule300 />

    {/* Course Info */}
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

    {/* Course Highlights */}
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

    {/* Other Sections */}
    <BatchScheduleTable300 />
    <OurRooms7 />
    <RoomSlides7 />
    <OurDinning7 />
    <DinningSlides7 />
    <ActivitiesSection300 />
    <TeachersSection300 />
    <TestimonialSection300 />
    <YogaHighlights300 />

    {/* FAQ + Application Form (uncomment when ready) */}
    {/* <FAQSection /> */}
    {/* <ApplicationForm300 /> */}
  </div>
);

export default ThreeHundredHourTTPage;ognized and accepted.
        </p>
      </section>*/}
  </div>
); 

export default TwoHundredHourTTPage;
