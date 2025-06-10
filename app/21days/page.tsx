"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import AboutTraining21 from "@/components/21days/AboutTraining21";
import CurriculumSection21 from "@/components/21days/CurriculumSection21";
import ActivitiesSection21 from "@/components/21days/ActivitiesSection21";
import BstchScheduleTable21 from "@/components/21days/BstchScheduleTable21";
import TestimonialSection21 from "@/components/21days/TestimonialSection21";
import YogaHighlights21 from "@/components/21days/YogaHighlights21";
import ApplicationForm21 from "@/components/21days/ApplicationForm21";
import TeachersSection21 from "@/components/21days/TeachersSection21";
import Schedule21 from "@/components/21days/Schedule21";
import OurDinning7 from "@/components/R7days/OurDinning7";
import DinningSlides7 from "@/components/R7days/DinningSlides7";
import RoomSlides7 from "@/components/R7days/RoomSlides7";
import OurRooms7 from "@/components/R7days/OurRooms7";

const TwentyOneTTPage = () => {
  return (
    <div className="mt-24  max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#150e70]">
         21-Days Yoga Teacher Training
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
   <div className="flex justify-center gap-6 mb-6">
      <p className="text-sm text-[#150e70]">Duration-21-Days</p>
      <p className="text-sm text-[#150e70]">Language-English</p>
      <p className="text-sm text-[#150e70]">Module: Residential with Meals</p>
      <p className="text-sm text-[#150e70]">Level: all level </p> 
      <p className="text-sm text-[#150e70]">Certification: YACEP</p>
</div>


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
      src="/course2.jpg"
      alt="Yoga retreat in Bali"
      width={1200}
      height={900}
      className="object-cover max-h-[500px]"
      priority
    />
  </div>
</div>


<AboutTraining21/>
      {/* About Section */}
  
  <Schedule21/>

 <section className="mt-20 px-4 sm:px-6 lg:px-8">
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
    Transformational teachings of Hatha, Vinyasa, and Ashtanga Yoga for a comprehensive and immersive learning experience.
  </h2>

  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
    Education experience covering all key aspects of the ancient practice and philosophy of yoga
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-700 max-w-6xl mx-auto">
    {/* Card 1 */}
   <div className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
  <Image 
    src="/HVA/hatha.png"  
    alt="Image 1" 
    fill
    className="object-cover"
    loading="lazy"
  />   
</div>

{/* Card 2 */}
<div className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
  <Image 
    src="/HVA/vinyasa.png" 
    alt="Image 2" 
    fill 
    className="object-cover"
    loading="lazy" 
  />
</div>

{/* Card 3 */}
<div className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
  <Image 
    src="/HVA/ashtanga.png" 
    alt="Image 3" 
    fill 
    className="object-cover"
    loading="lazy" 
  />
</div>

  </div>
</section>


      {/* Curriculum */}
      <CurriculumSection21/>

      {/* Instructor Info */}
      {/* <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#150e70]">Meet Your Instructors</h2>
        <p className="text-center text-[#150e70] max-w-3xl mx-auto mb-6 ">
          Our experienced team brings decades of collective practice from multiple yoga disciplines.
          They’re dedicated to helping you grow — physically, mentally, and spiritually — in a supportive, inclusive environment.
        </p>
        <div className="w-full h-[42rem] relative rounded-xl overflow-hidden shadow">
          <Image
            src="/goa4111.jpg"
            alt="House of Om instructors"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section> */}

      <TeachersSection21/>

      {/* Training Schedule */}

       <OurDinning7/>
       <DinningSlides7/>
       <OurRooms7/>
       <RoomSlides7/> 
      <ActivitiesSection21/>
       {/* Course Details Section */}
      <BstchScheduleTable21/>
<TestimonialSection21/>
      {/* Testimonials */}
      <TestimonialCarousel
        testimonials={[
          {
            quote: "This training completely transformed my approach to yoga and teaching. I gained confidence, knowledge, and a supportive community.",
            author: "Sarah M., Graduate",
          },
          {
            quote: "The depth of knowledge shared by the instructors is incredible. This program offers much more than just teacher certification—it's a life-changing experience.",
            author: "Michael T., Graduate",
          },
          {
            quote: "I came for the certification but left with a whole new perspective on yoga and myself.",
            author: "Priya K., Graduate",
          },
        ]}
      />
<YogaHighlights21/>
      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "1. What is a 21-day immersion yoga course?",
            answer:
              "It’s an intensive, full-time yoga teacher training program designed to complete the 200-hour certification in just 21 days of immersive learning.",
          },
          {
            question: "2. Who can join this course?",
            answer:
              "Anyone with a passion for yoga! It’s ideal for beginners, intermediate practitioners, or those looking to deepen their practice and become certified teachers.",
          },
          {
            question: "3. What does the daily schedule look like?",
            answer:
              "Expect a full-day schedule with asana practice, pranayama, meditation, anatomy, philosophy, teaching methodology, and self-study.",
          },
          {
            question: "4. Is it certified by Yoga Alliance?",
            answer:
              "Yes, most 21-day immersion courses are Yoga Alliance certified, allowing you to register as a RYT-200 and teach globally.",
          },
          {
            question: "5. Is it too intense for beginners?",
            answer:
              "It’s intensive but beginner-friendly. Our experienced instructors offer support and modifications to match your level.",
          },
          {
            question: "6. What is included in the course fee?",
            answer:
              "Typically, the fee includes tuition, course materials, accommodation, and meals (if in-person). Online versions may offer digital resources and live sessions.",
          },
          {
            question: "7. Will I be qualified to teach after 21 days?",
            answer:
              "Yes. Once you complete all course requirements, you will receive a 200-hour certification that qualifies you to teach yoga professionally",
          },
          {
            question: "8. What should I bring to the course?",
            answer:
              "Bring comfortable yoga clothes, a notebook, your personal yoga mat, and an open heart ready for transformation!",
          },
          
        ]}
      />

     

      {/* Application Form */}
      <ApplicationForm21/>
<section className="text-center mb-8 relative px-4 sm:px-6 lg:px-8">
  <h3 className="text-2xl sm:text-3xl font-semibold text-[#150e70] mb-6">
    After Completing the Course...
  </h3>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pb-4">
    {/* Yellow area image (uploaded image) */}
    <div className="relative w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem] mx-auto sm:mx-0">
      <Image
        src="/YAlogo-removebg-preview.png"
        alt="Yoga Visual Icon"
        layout="fill"
        objectFit="contain"
      />
    </div>

    {/* Certification badges */}
    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-lg mx-auto sm:mx-0">
      {[
        { level: "200", src: "/nw200.png" },
        { level: "300", src: "/nw300.png" },
        { level: "RPYS", src: "/nwrpys.png" },
        { level: "YACEP", src: "/nwyacep.png" },
      ].map(({ level, src }, i) => (
        <div key={i} className="flex flex-col items-center w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[8rem]">
          <div className="relative w-full h-full mb-2">
            <Image
              src={src}
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


    </div>
  );
};

export default TwentyOneTTPage;
