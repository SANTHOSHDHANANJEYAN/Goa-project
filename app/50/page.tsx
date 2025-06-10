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
    <div className="mt-24  max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#150e70]">
         50-Hrs Mulit-Style Yoga Teacher Training
        </h2>
        <p className="text-[1.5rem] font-semibold text-[#150e70]">In Goa</p>
      </div>

     <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
     Become a Certified Yoga Teacher by Yoga Alliance
     </h1>

      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 7-Days journey in Goa
      </p>

     <div className="flex justify-center items-end text-center gap-8 mb-4">
      <div>
        <span className="text-4xl font-bold text-green-600 block">USD 500</span>
        <span className="text-sm text-[#150e70]">Private Room</span>
      </div>
      <div>
        <span className="text-4xl font-bold text-green-600 block">USD 350</span>
        <span className="text-sm text-[#150e70]">Shared Room</span>
      </div>
    </div>
      <div className="flex justify-center gap-6 mb-6">
      <p className="text-sm text-[#150e70]">Duration-50Hrs - 7Days</p>
      <p className="text-sm text-[#150e70]">Language-English</p>
      <p className="text-sm text-[#150e70]">Module: Residential with Meals</p>
      <p className="text-sm text-[#150e70]">Level: Very Beginner </p> 
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
    <div className="flex justify-center items-center bg-transparent px-4 sm:px-6 lg:px-0">
  <div className="rounded-2xl overflow-hidden shadow-lg mb-16 max-w-full w-full sm:w-[600px] md:w-[700px] lg:w-[800px]">
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

  <AboutTraining/>

  <Schedule/>

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
    src="/HVA/vinyasa yoga.jpg" 
    alt="Image 2" 
    fill 
    className="object-cover"
    loading="lazy" 
  />
</div>

{/* Card 3 */}
<div className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden rounded-3xl shadow">
  <Image 
    src="/HVA/ashtanga.jpg" 
    alt="Image 3" 
    fill 
    className="object-cover"
    loading="lazy" 
  />
</div>

  </div>
</section>

      <CurriculumSection/>
<TeachersSection/>
  <OurDinning7/>
  <DinningSlides7/>
  <OurRooms7/>
  <RoomSlides7/>
  <ActivitiesSection/>
  <BatchScheduleTable/>
  <TestimonialSection/>
  
<TestimonialCarousel
        testimonials={[
          {
            quote: "Absolutely loved my experience at this yoga training school. The quality of the teachers is exceptional each one brings deep knowledge, passion, and a truly supportive presence to the training. I also really appreciated the flexibility in their approach, allowing space for different styles of yoga teaching and encouraging us to find our own unique voice as instructors. A warm, inspiring environment to grow in.",
            author: " Charmaine Wardenberg ",
          },
          {
            quote: "Rishikul Yogshala was absolutely amazing. I am very fortunate that I did my 200 hours there. I gained much more than just asana training. The yogic philosophy taught by Krishna is part of my daily life now. Every class and every teacher is extremely knowledgeable and always available to help and answer questions. Highly recommend!",
            author: "Dimple Malkan ",
          },
          {
            quote: "Very good school! They have provided detailed training. Teachers and instructor are well trained and knowledgeable.",
            author: "Varsha Ambardekar",
          },
        ]}
      />
      <YogaHighlights/>
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
            answer:
              "The program typically spans 12 days for the 100-hr course.",
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
      <ApplicationForm/>

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

export default FiftyHourTTPage;
