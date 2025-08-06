"use client";

import dynamic from "next/dynamic";

// Hero and key content — keep them static if they're light or above-the-fold
import SpaHero7 from "@/components/R7days/SpaHero7";
import About71 from "@/components/R7days/About71";
import KeySkills7 from "@/components/R7days/KeySkills7";
import TwoListing7 from "@/components/R7days/TwoListing7";

// Dynamically import all heavy/below-the-fold components
const WhatsIncludes7 = dynamic(() => import("@/components/R7days/WhatsIncludes7"));
const OurExcursions7 = dynamic(() => import("@/components/R7days/OurExcursions7"));
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"));
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"));
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"));
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"));
const DailySchedule7 = dynamic(() => import("@/components/R7days/DailySchedule7"));
const Importance7 = dynamic(() => import("@/components/R7days/Importance7"));
const Benefit7 = dynamic(() => import("@/components/R7days/Benefit7"));
const NearestAirport7 = dynamic(() => import("@/components/R7days/NearestAirport7"));
const Beauty7 = dynamic(() => import("@/components/R7days/Beauty7"));
const Faqs7 = dynamic(() => import("@/components/R7days/Faqs7"));

export default function Page() {
  return (
    <>
      <SpaHero7 />
      <About71 />
      <KeySkills7 />
      <TwoListing7 />
      <WhatsIncludes7 />
      <OurExcursions7 />
      <OurRooms7 />
      <RoomSlides7 />
      <OurDinning7 />
      <DinningSlides7 />
      <DailySchedule7 />
      <Importance7 />
      <Benefit7 />
      <NearestAirport7 />
      <Beauty7 />
      <Faqs7 />
    </>
  );
}
