"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Critical fold-first content — loaded immediately
import SpaHero7 from "@/components/R7days/SpaHero7";
import About71 from "@/components/R7days/About71";
import KeySkills7 from "@/components/R7days/KeySkills7";
import TwoListing7 from "@/components/R7days/TwoListing7";

// Lazy-load below-the-fold components (with no SSR where safe)
const WhatsIncludes7 = dynamic(() => import("@/components/R7days/WhatsIncludes7"), { ssr: false });
const OurExcursions7 = dynamic(() => import("@/components/R7days/OurExcursions7"), { ssr: false });
const OurRooms7 = dynamic(() => import("@/components/R7days/OurRooms7"));
const RoomSlides7 = dynamic(() => import("@/components/R7days/RoomSlides7"), { ssr: false });
const OurDinning7 = dynamic(() => import("@/components/R7days/OurDinning7"));
const DinningSlides7 = dynamic(() => import("@/components/R7days/DinningSlides7"), { ssr: false });
const DailySchedule7 = dynamic(() => import("@/components/R7days/DailySchedule7"));
const Importance7 = dynamic(() => import("@/components/R7days/Importance7"));
const Benefit7 = dynamic(() => import("@/components/R7days/Benefit7"));
const NearestAirport7 = dynamic(() => import("@/components/R7days/NearestAirport7"));
const Beauty7 = dynamic(() => import("@/components/R7days/Beauty7"));
const Faqs7 = dynamic(() => import("@/components/R7days/Faqs7"), { ssr: false });

export default function Page() {
  return (
    <>
      {/* Top of the page - load immediately */}
      <SpaHero7 />
      <About71 />
      <KeySkills7 />
      <TwoListing7 />

      {/* Lazy-loaded content */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
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
      </Suspense>
    </>
  );
}
