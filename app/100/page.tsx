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
const HundredHourTTPage = () => {
  return (
    <div className="mt-24  max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#150e70]">
         100-hrs Accredited Yoga Teacher Training
        </h2>
        <p className="text-lg text-[#150e70]">In Goa</p>
      </div>

     <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
  Become a Certified Yoga Teacher by Yoga Alliance
</h1>

      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 14-Days journey in Goa
      </p>

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
   <div className="flex justify-center gap-6 mb-6">
  <p className="text-sm text-[#150e70]">Duration-100 Hrs</p>
  <p className="text-sm text-[#150e70]">Language-English</p>
  <p className="text-sm text-[#150e70]">Module: Residential with Meals</p>
  <p className="text-sm text-[#150e70]">Level: all level </p> 
  <p className="text-sm text-[#150e70]">Certification: Yoga Alliance</p>
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

      {/* Certificate Info */}
   


<AboutTraining100/>
      {/* About Section */}
  <Schedule100/>

<section className="mt-20 px-4 sm:px-6 lg:px-8">
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-center mb-4 text-[#150e70]">
    Transformational teachings of Hatha, Vinyasa, and Ashtanga Yoga for a comprehensive and immersive learning experience.
  </h2>

  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-8 text-[#150e70] max-w-3xl mx-auto">
    Education experience covering all key aspects of the ancient practice and philosophy of yoga
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[26px] shadow-lg">
      <img src="/HVA/Hatha Yoga 2 .jpg" alt="Image 1" className="w-full h-full object-cover" />
    </div>

    {/* Card 2 */}
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[26px] shadow-lg">
      <img src="/HVA/Vinyasa yoga 2 .jpg" alt="Image 2" className="w-full h-full object-cover" />
    </div>

    {/* Card 3 */}
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[26px] shadow-lg">
      <img src="/HVA/Ashtanga yoga 2 .jpg" alt="Image 3" className="w-full h-full object-cover" />
    </div>
  </div>
</section>
    



      {/* Curriculum */}
      <CurriculumSection100/>

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
      <TeachersSection200/>
      {/* Training Schedule */}
      {/* Accommodation Section - Scenic */}
<section
  className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 px-4"
  style={{
    backgroundImage: "url('/Accomdation/Accom4.jpg')",
  }}
>
  {/* Dark overlay */}
  <div className="bg-black bg-opacity-50 absolute inset-0"></div>

  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
      Rishikul Yogshala Goa
    </h2>
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodation</h1>
    <p className="text-lg mb-10">
      Palm Paradise Resort amidst jungle paradise in Goa
    </p>

    <div className="flex flex-col items-center gap-8">
      {/* Item 1 */}
      <div className="flex items-center text-left max-w-md space-x-4">
        <img src="/Acc1.png" alt="Waterfalls" className="w-10 h-10" />
        <p>
          <strong>Discover Goa's cascade gems:</strong><br />
          10+ Waterfalls nearby for weekend getaways
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex items-center text-left max-w-md space-x-4">
        <img src="/Acc2.png" alt="Nature parks" className="w-10 h-10" />
        <p>
          <strong>Exploring Goa’s natural beauty:</strong><br />
          3 Nature Parks just 20 minutes awa
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex items-center text-left max-w-md space-x-4">
        <img src="/Acc3.png" alt="Beaches" className="w-10 h-10" />
        <p className="pl-1rem">
          <strong>Enjoy swimming, surfing and relaxation:</strong><br />
          3 Beaches within 10 km – perfect for swimming & surfing
        </p>
      </div>
    </div>
  </div>
</section>


      
      <ActivitiesSection100/>
       {/* Course Details Section */}
      <BatchScheduleTable100/>
<TestimonialSection100/>
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
<YogaHighlights100/>
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
      {/* Application Form */}
      <ApplicationForm100/>
    </div>
  );
};

export default HundredHourTTPage;
