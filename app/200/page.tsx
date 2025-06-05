"use client";

import React from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonials-section";
import FAQSection from "@/components/FAQSection";
import AboutTraining200 from "@/components/200hr/AboutTraining200";
import AnimateButton200 from "@/components/200hr/AnimateButton200";
import CurriculumSection200 from "@/components/200hr/CurriculumSection200";
import ActivitiesSection200 from "@/components/200hr/ActivitiesSection200";
import BatchScheduleTable200 from "@/components/200hr/BatchScheduleTable200";
import TestimonialSection200 from "@/components/200hr/TestimonialSection200";
import YogaHighlights200 from "@/components/200hr/YogaHighlights200";
import ApplicationForm200 from "@/components/200hr/ApplicationForm200";
import TeachersSection200 from "@/components/200hr/TeachersSection200";
import Schedule200 from "@/components/200hr/Schedule200";
import AccommodationSlider from "@/components/AccommodationSlider";
import OurDinning7 from "@/components/R7days/OurDinning7";
import DinningSlides7 from "@/components/R7days/DinningSlides7";
import OurRooms7 from "@/components/R7days/OurRooms7";
import RoomSlides7 from "@/components/R7days/RoomSlides7";

const TwoHundredHourTTPage = () => {
  return (
    <div className="mt-24  max-w-6xl mx-auto text-gray-800">
      {/* Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#150e70]">
         200-Hours Accredited Yoga Teacher Training
        </h2>
        <p className="text-[1.5rem] font-semibold text-[#150e70]">In Goa</p>
      </div>

     <h1 className="text-lg md:text-xl font-semibold text-[#150e70] uppercase tracking-wide text-center">
  Become a Certified Yoga Teacher by Yoga Alliance
</h1>

      <p className="text-lg text-center text-[#150e70] mb-6">
        Join an exciting and life-changing 24-Days journey in Goa
      </p>

     <div className="flex justify-center items-end text-center gap-8 mb-4">
  <div>
    <span className="text-4xl font-bold text-green-600 block">USD 1600</span>
    <span className="text-sm text-[#150e70]">Private Room</span>
  </div>
  <div>
    <span className="text-4xl font-bold text-green-600 block">USD 1300</span>
    <span className="text-sm text-[#150e70]">Shared Room</span>
  </div>
</div>
   <div className="flex justify-center gap-6 mb-6">
      <p className="text-sm text-[#150e70]">Duration-200 Hrs</p>
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
    


<AboutTraining200/>
      {/* About Section */}
  {/* <AnimateButton200/> */}
  <Schedule200/>

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
      <Image src="/HVA/Hatha yoga 3.jpg" alt="Image 1" className="w-full h-full object-cover" />
    </div>

    {/* Card 2 */}
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[26px] shadow-lg">
      <Image src="/HVA/Vinyasa3.jpg" alt="Image 2" className="w-full h-full object-cover" />
    </div>

    {/* Card 3 */}
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[26px] shadow-lg">
      <Image src="/HVA/Ashtanga3.jpg" alt="Image 3" className="w-full h-full object-cover" />
    </div>
  </div>
</section>



      {/* Curriculum */}
      <CurriculumSection200/>

      {/* Instructor Info */}


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

  <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
    <h2 className="text-lg uppercase tracking-wide text-gray-200 mb-2">
      Rishikul Yogshala Goa
    </h2>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Accommodation</h1>
    <p className="text-lg mb-10 max-w-xl">
      Palm Paradise Resort amidst jungle paradise in Goa
    </p>

    {/* Features list */}
    <div className="flex flex-col gap-6 w-full max-w-lg text-left pl-[4rem] pt-[2rem]">
      {/* Item 1 */}
      <div className="flex items-start gap-4">
        <Image src="/Acc1.png" alt="Waterfalls" className="w-8 h-8 mt-1" />
        <div>
          <p className="font-semibold">Discover Goa's cascade gems:</p>
          <p className="text-sm">
            10+ Waterfalls nearby for weekend getaways
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-start gap-4">
        <Image src="/Acc2.png" alt="Nature parks" className="w-8 h-8 mt-1" />
        <div>
          <p className="font-semibold">Exploring Goa’s natural beauty:</p>
          <p className="text-sm">
            3 Nature Parks just 20 minutes away
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-start gap-4">
        <Image src="/Acc3.png" alt="Beaches" className="w-8 h-8 mt-1" />
        <div>
          <p className="font-semibold">
            Enjoy swimming, surfing and relaxation:
          </p>
          <p className="text-sm">
            3 Beaches within 10 km – perfect for swimming & surfing
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <AccommodationSlider/>
      <OurDinning7/>
      <DinningSlides7/>
      <OurRooms7/>
      <RoomSlides7/> 
      <ActivitiesSection200/>
       {/* Course Details Section */}
      <BatchScheduleTable200/>
<TestimonialSection200/>
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
<YogaHighlights200/>
      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
                   {
            question: "1. Who can join the 200-hour YTTC?",
            answer:
              "The course is open to yoga practitioners of all levels, from beginners with a dedicated practice to advanced students looking to enhance their skills and understanding.",
          },
          {
            question: "2. Is the certification internationally recognized?",
            answer:
              "Yes, 200-hour YTTCs are certified by Yoga Alliance, allowing you to register as a RYT (Registered Yoga Teacher) and teach internationally.",
          },
          {
            question: "3. What are the benefits of completing the 200-hour YTTC?",
            answer:
              "Deepened personal yoga practice Comprehensive knowledge of yoga philosophy and techniques Certification to teach yoga professionally  Personal growth and transformation",
          },
          {
            question: "4. What styles of yoga are covered in the course?",
            answer:
              "Typically, Hatha, Ashtanga, and sometimes Vinyasa Flow are included, along with pranayama, meditation, and philosophy.",
          },
          {
            question: "5. Can I take the course online?",
            answer:
              "Yes! Many schools now offer online 200-hour TTC with live classes, recorded sessions, and flexible schedules.",
          },
          {
            question: "6. How long does it take to complete the course?",
            answer:
              "The course can be completed in 4 to 8 weeks, depending on the schedule and format (intensive, part-time, or online).",
          },
          {
            question: "7. Will I be able to teach yoga after completing the course?",
            answer:
              "Yes, upon successful completion and certification, you'll be qualified to teach yoga professionally.",
          },
          {
            question: "8. What if I miss a class?",
            answer:
              "Most programs offer recorded sessions or make-up classes to keep you on track.",
          },
          
        ]}
      />



      {/* Application Form */}
      <ApplicationForm200/>
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

export default TwoHundredHourTTPage;
