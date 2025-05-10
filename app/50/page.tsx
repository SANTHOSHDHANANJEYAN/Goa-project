"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import ApplicationForm from "@/components/ApplicationForm";
import CurriculumSection from "@/components/CurriculumSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import BatchScheduleTable from "@/components/BatchScheduleTable";
import AnimateButton from "@/components/AnimateButton";
import TestimonialSection from "@/components/TestimonialSection";
import AboutTraining from "@/components/AboutTraining";
import RetreatSchedule from "@/components/RetreatSchedule";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-24 px-6 md:px-12 max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-sm md:text-base font-semibold text-blue-900 uppercase tracking-wide">
         50-hrs Accredited Yoga Teacher Training
        </h2>
        <p className="text-lg text-blue-900">In Goa</p>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-900">
        Become a Certified Yoga Teacher by Yoga Alliance
      </h1>
      <p className="text-lg text-center text-blue-900 mb-6">
        Join an exciting and life-changing 50-hours journey in Goa
      </p>

      {/* Price and CTA */}
      <div className="flex justify-center items-center text-center mb-2">
        <span className="text-xl line-through text-blue-900 mr-4">USD 2350</span>
        <span className="text-4xl font-bold text-green-600">USD 2000</span>
      </div>
      <p className="text-center text-sm text-blue-900 mb-6">
        *Early bird offer – Save 15%
      </p>

      <div className="text-center mb-6">
        <a href="#application">
          <button className="bg-blue-900 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Book Your Spot
          </button>
        </a>
      </div>

      <div className="text-center text-sm text-gray-700 mb-12">
        <p className="mb-1">Only <strong>3 spots left</strong> for the next training:</p>
        <p className="font-semibold">May 26th – June 16th, 2025</p>
      </div>

      {/* Hero Image */}
     <div className="flex justify-center items-center min-h-screen bg-transparent">
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
      <section className="text-center mb-20">
  <h3 className="text-2xl font-semibold text-blue-900 mb-6">
    After Completing the Course...
  </h3>
  <div className="flex justify-center gap-10 mb-4">
    {[
      { level: "200",  src: "/rys 200.png" },
      { level: "300", src: "/rpysall.png" },
      { level: "500",  src: "/300 rys.png" },
    ].map(({ level, src }, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="relative w-16 h-16 mb-2">
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
  <p className="text-sm text-blue-900">
    You’ll receive a Yoga Alliance certificate —<br />
    internationally recognized and accepted.
  </p>
</section>

<AboutTraining/>
      {/* About Section */}
  <AnimateButton/>

  <section className="mt-20 mb-20">
  <h2 className="text-[22px] font-bold text-center mb-8 text-blue-900"> Transformational teachings of Hatha Yoga, Vinyasa Yoga and Ashtanga yoga to give our students an extensive and comprehensive teaching experience</h2>
  <h2 className="text-[10px] font-bold text-center mb-8 text-blue-900"> Education experience covering all key aspects of the ancient practice and philosophy of yoga</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 max-w-5xl mx-auto">
  {/* Card 1 */}
  <div className="relative h-[24rem] overflow-hidden rounded-[26px] shadow">
    <img src="/1.jpg" alt="Image 1" className="w-full h-full object-cover" />
  </div>
  {/* Card 2 */}
  <div className="relative h-[24rem] overflow-hidden rounded-[26px] shadow">
    <img src="/2.jpg" alt="Image 2" className="w-full h-full object-cover" />
  </div>
  {/* Card 3 */}
  <div className="relative h-[24rem] overflow-hidden rounded-[26px] shadow">
    <img src="/3.jpg" alt="Image 3" className="w-full h-full object-cover" />
  </div>
</div>

</section>



      {/* Curriculum */}
      <CurriculumSection/>

      {/* Instructor Info */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Meet Your Instructors</h2>
        <p className="text-center text-blue-900 max-w-3xl mx-auto mb-6 ">
          Our experienced team brings decades of collective practice from multiple yoga disciplines.
          They’re dedicated to helping you grow — physically, mentally, and spiritually — in a supportive, inclusive environment.
        </p>
        <div className="w-full h-80 relative rounded-xl overflow-hidden shadow">
          <Image
            src="/goa4111.jpg"
            alt="House of Om instructors"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Training Schedule */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Training Schedule</h2>
        <div className="bg-indigo-50 p-6 rounded-lg shadow text-center text-gray-700 max-w-3xl mx-auto">
          <p className="mb-4 font-medium text-lg">Intensive Format (50-hours)</p>
          <p className="mb-1">🗓 May 26 – June 16, 2025</p>
          <p className="mb-1">📍 Location: Goa</p>
          <p className="mb-1">🕗 Monday – Saturday: 8 AM to 6 PM</p>
          <p className="text-sm text-gray-500 mt-2">Includes breaks, workshops, and off-days</p>
        </div>
      </section>

      {/* Accommodation Section - Scenic */}
      <section
  className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 mb-20 h-[750px]"
  style={{
    backgroundImage: "url('/56.jpg')",
  }}
>

        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">YOGSHALA</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Accommodation</h1>
          <p className="text-lg mb-10">Palm Paradise Resort amidst jungle paradise in Goa</p>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <img src="/icons/waterfall-icon.svg" alt="Waterfalls" className="w-8 h-8 mt-1" />
              <p>
                <strong>Discover Goa's cascade gems:</strong><br />
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
            <div className="flex items-start space-x-4">
              <img src="/icons/beach-icon.svg" alt="Beaches" className="w-8 h-8 mt-1" />
              <p>
                <strong>Enjoy swimming, surfing and relaxation:</strong><br />
                at Goa’s 3 beaches within 10 km
              </p>
            </div>
          </div>
        </div>
      </section>

      <RetreatSchedule/>
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
      <ApplicationForm
        
      />
    </div>
  );
};

export default TwoHundredHourTTPage;