"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Load top-section content immediately (above the fold)
import SpaHero21 from "@/components/R21days/SpaHero21";
import About211 from "@/components/R21days/About211";
import KeySkills21 from "@/components/R21days/KeySkills21";
import TwoListing21 from "@/components/R21days/TwoListing21";



// Dynamically load rest
const WhatsIncludes21 = dynamic(() => import("@/components/R21days/WhatsIncludes21"));
const OurExcursions21 = dynamic(() => import("@/components/R21days/OurExcursions21"));
const OurRooms21 = dynamic(() => import("@/components/R21days/OurRooms21"));
const RoomSlides7 = dynamic(() => import("@/components/R21days/RoomSlides21"), { ssr: false });
const OurDinning21 = dynamic(() => import("@/components/R21days/OurDinning21"));
const DinningSlides7 = dynamic(() => import("@/components/R21days/DinningSlides21"), { ssr: false });
const DailySchedule21 = dynamic(() => import("@/components/R21days/DailySchedule21"));
const Importance21 = dynamic(() => import("@/components/R21days/Importance21"));
const Benefit21 = dynamic(() => import("@/components/R21days/Benefit21"));
const NearestAirport21 = dynamic(() => import("@/components/R21days/NearestAirport21"));
const Beauty21 = dynamic(() => import("@/components/R21days/Beauty21"));
const Faqs21 = dynamic(() => import("@/components/R21days/Faqs21"), { ssr: false });

export default function Page() {
  return (
    <>
      {/* Immediate render section */}
      <SpaHero21 />
      <About211 />
      <KeySkills21 />
      <TwoListing21 />

      {/* Lazy-loaded section */}

        <WhatsIncludes21 />
        <OurExcursions21 />
        <OurRooms21 />
        <RoomSlides7/>
        <OurDinning21 />
        <DinningSlides7 />
        <DailySchedule21 />
        <Importance21 />
        <Benefit21 />
        <NearestAirport21 />
        <Beauty21 />
        <Faqs21 />

    </>
  );
}
