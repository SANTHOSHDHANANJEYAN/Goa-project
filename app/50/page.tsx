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




const FiftyHourTTPage = () => {
  return (
    <div className="mt-24  max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#150e70]">
         50-Hrs Mulit-Style Yoga Teacher Training
        </h2>
        <p className="text-[2rem] text-[#150e70]">In Goa</p>
      </div>

     <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
     Become a Certified Yoga Teacher by Yoga Alliance
     </h1>

      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 50-hours journey in Goa
      </p>

     <div className="flex justify-center items-end text-center gap-8 mb-4">
      <div>
        <span className="text-4xl font-bold text-green-600 block">USD 350</span>
        <span className="text-sm text-[#150e70]">Private Room</span>
      </div>
      <div>
        <span className="text-4xl font-bold text-green-600 block">USD 500</span>
        <span className="text-sm text-[#150e70]">Shared Room</span>
      </div>
    </div>
      <div className="flex justify-center gap-6 mb-6">
      <p className="text-sm text-[#150e70]">Duration-50 Hrs</p>
      <p className="text-sm text-[#150e70]">Language-English</p>
      </div>


      <div className="text-center mb-6">
        <a href="#application">
          <button className="bg-[#150e70] hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Book Your Spot
          </button>
        </a>
      </div>

      <div className="text-center text-sm text-[#150e70] mb-12">
        <p className="font-semibold">May 26th – June 16th, 2025</p>
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

      {/* Certificate Info */}

  <AboutTraining/>
      {/* About Section */}
  <AnimateButton/>

  <section className="mt-20 ">
  <h2 className="text-[22px] font-bold text-center mb-8 text-[#150e70]"> Transformational teachings of Hatha Yoga, Vinyasa Yoga and Ashtanga yoga to give our students an extensive and comprehensive teaching experience</h2>
  <h2 className="text-[10px] font-bold text-center mb-8 text-[#150e70]"> Education experience covering all key aspects of the ancient practice and philosophy of yoga</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 max-w-5xl mx-auto">
  {/* Card 1 */}
  <div className="relative h-[24rem] overflow-hidden rounded-[26px] shadow">
    <img src="/11 .jpg" alt="Image 1" className="w-full h-full object-cover" />
  </div>
  {/* Card 2 */}
  <div className="relative h-[24rem] overflow-hidden rounded-[26px] shadow">
    <img src="/12.jpg" alt="Image 2" className="w-full h-full object-cover" />
  </div>
  {/* Card 3 */}
  <div className="relative h-[24rem] overflow-hidden rounded-[26px] shadow">
    <img src="/13.jpg" alt="Image 3" className="w-full h-full object-cover" />
  </div>
</div>

</section>



      {/* Curriculum */}
      <CurriculumSection/>

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
      

      {/* Training Schedule */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#150e70]">Training Schedule</h2>
        <div className="bg-[#fcdede] p-6 rounded-lg shadow text-center text-gray-700 max-w-3xl mx-auto">
          <p className="mb-4 font-medium text-lg">Intensive Format (50-hours)</p>
          <p className="mb-1">🗓 May 26 – June 16, 2025</p>
          <p className="mb-1">📍 Location: Goa</p>
          <p className="mb-1">🕗 Monday – Saturday: 8 AM to 6 PM</p>
          <p className="text-sm text-[#150e70] mt-2">Includes breaks, workshops, and off-days</p>
        </div>
      </section>

<TeachersSection/>

      {/* Accommodation Section - Scenic */}
      <section
  className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[750px]"
  style={{
    backgroundImage: "url('/56.jpg')",
  }}
>
  

        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">Rishikul Yogshala Goa</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodation</h1>
          <p className="text-lg mb-10">Palm Paradise Resort amidst jungle paradise in Goa</p>

          <div className="flex flex-col text-left max-w-3xl mx-auto gap-12 items-center pt-[2rem]"> 
            <div className="flex items-start space-x-4">
              <img src="/icons/waterfall-icon.svg" alt="Waterfalls" className="w-8 h-8 mt-1" />
              <p>
                <strong>Discover Goa's cascade gems:</strong>
                <br />
                more than 10 waterfalls within 10 km
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <img src="/icons/nature-icon.svg" alt="Nature parks" className="w-8 h-8 mt-1" />
              <p>
                <strong>Exploring Goa’s natural beauty:</strong><br />
                3 biggest parks in a 20-minute drive
              </p>
            </div>
            <div className="flex items-start space-x-4 pl-[3rem]">
              <img src="/icons/beach-icon.svg" alt="Beaches" className="w-8 h-8 mt-1" />
              <p>
                <strong>Enjoy swimming, surfing and relaxation:</strong><br />
                at Goa’s 3 beaches within 10 km
              </p>
            </div>
          </div>
        </div>
      </section>

      <AccommodationSlider/>
    
      <ActivitiesSection/>
       {/* Course Details Section */}
      <BatchScheduleTable/>
      <TestimonialSection/>
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

      <section className="text-center mb-8 relative">
      <h3 className="text-2xl font-semibold text-[#150e70] mb-6">
        After Completing the Course...
      </h3>

      <div className="flex justify-center items-center gap-10 pb-[1rem]">
        {/* Yellow area image (uploaded image) */}
        <div className="relative w-[5rem] h-[8rem]    ">
          <Image
            src="/YAlogo-removebg-preview.png"
            alt="Yoga Visual Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Certification badges */}
        <div className="flex gap-10">
          {[
             { level: "200", src: "/nw200.png" },
             { level: "300", src: "/nw300.png" },
            { level: "RPYS", src: "/nwrpys.png" },
             { level: "YACEP", src: "/nwyacep.png" },
            
          ].map(({ level, src }, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-[5rem] h-[8rem] mb-2">
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

      <p className="text-medium text-[#150e70]">
        You’ll receive a Yoga Alliance certificate —<br />
        internationally recognized and accepted.
      </p>
    </section>
    </div>
  );
};

export default FiftyHourTTPage;