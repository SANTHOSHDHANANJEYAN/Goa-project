"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Accommodation200 from "@/components/200hr/Accomodations200";
import Food200 from "@/components/200hr/Food200";
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
    src="/200bannerimg.jpg"
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
    <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide uppercase">
      200-Hrs Accredited Yoga Teacher Training
    </h2>
    <p className="text-3xl md:text-4xl font-bold text-black">In Goa</p>
  </div>

  <h1 className="text-base md:text-xl font-semibold text-black uppercase tracking-wide text-center">
    Become a Certified Yoga Teacher by Yoga Alliance
  </h1>

  <p className="text-lg text-center text-black mb-6">
    Join an exciting and life-changing 24-Days journey in Goa
  </p>

  <div className="flex justify-center mb-10">
    <span className="text-2xl text-gray-400">✦⸻⸻⸻⸻✦</span>
  </div>

  <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
    {/* Info Card */}
    <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-8">
      <div className="flex items-center gap-5">
        <span className="bg-[#e0b973] rounded-full p-4 text-white text-2xl">
          <i className="fas fa-calendar-alt"></i>
        </span>
        <div>
          <div className="font-bold text-lg">Available batches:</div>
          <div className="text-gray-500">September 2025 – April 2026</div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="bg-[#e0b973] rounded-full p-4 text-white text-2xl">
          <i className="fas fa-play-circle"></i>
        </span>
        <div>
          <div className="font-bold text-lg">Course starts:</div>
          <div className="text-gray-500">7th of every month</div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="bg-[#e0b973] rounded-full p-4 text-white text-2xl">
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
      <table className="w-full text-base text-center border-separate border-spacing-y-1">
        <thead>
          <tr>
            <th className="bg-[#e0b973] text-white py-2 rounded-l-md">Room Type</th>
            <th className="bg-[#e0b973] text-white py-2">USD</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="py-3">Private Room</td>
            <td className="py-3">$ 1600</td>
          </tr>
          <tr className="bg-white">
            <td className="py-3">Shared Room</td>
            <td className="py-3">$ 1300</td>
          </tr>
        </tbody>
      </table>

      <button className="bg-[#16a34a] text-white rounded-full px-10 py-3 text-lg font-semibold shadow hover:bg-[#e6a822] hover:to-yellow-500 transition">
        Book Now
      </button>
    </div>
  </div>
</section>



    
    <BatchScheduleTable200 />
    <OurRooms7 />
    <Accommodation200/>   
    <OurDinning7 />
    <DinningSlides7 />
    <Food200/>
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

export default TwoHundredHourTTPage;
