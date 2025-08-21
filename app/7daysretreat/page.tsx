"use client";

import dynamic from "next/dynamic";

// Above-the-fold — static
import SpaHero7 from "@/components/R7days/SpaHero7";
import About71 from "@/components/R7days/About71";
import KeySkills7 from "@/components/R7days/KeySkills7";
import TwoListing7 from "@/components/R7days/TwoListing7";

// Below-the-fold — dynamic, SSR off, with placeholders
const WhatsIncludes7 = dynamic(() => import("@/components/R7days/WhatsIncludes7"), { ssr: false });
const OurExcursions7 = dynamic(() => import("@/components/R7days/OurExcursions7"), { ssr: false });
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"), { ssr: false });
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"), { ssr: false });
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"), { ssr: false });
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"), { ssr: false });
const DailySchedule7 = dynamic(() => import("@/components/R7days/DailySchedule7"), { ssr: false });
const Importance7 = dynamic(() => import("@/components/R7days/Importance7"), { ssr: false });
const Benefit7 = dynamic(() => import("@/components/R7days/Benefit7"), { ssr: false });
const NearestAirport7 = dynamic(() => import("@/components/R7days/NearestAirport7"), { ssr: false });
const Beauty7 = dynamic(() => import("@/components/R7days/Beauty7"), { ssr: false });
const Faqs7 = dynamic(() => import("@/components/R7days/Faqs7"), { ssr: false });

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
