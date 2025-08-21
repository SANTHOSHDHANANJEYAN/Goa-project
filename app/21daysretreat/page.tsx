"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

// Above-the-fold content
import SpaHero21 from "@/components/R21days/SpaHero21";
import About211 from "@/components/R21days/About211";
import KeySkills21 from "@/components/R21days/KeySkills21";
import TwoListing21 from "@/components/R21days/TwoListing21";

// Heavy/below-the-fold components
const WhatsIncludes21 = dynamic(() => import("@/components/R21days/WhatsIncludes21"), { ssr: false });
const OurExcursions21 = dynamic(() => import("@/components/R21days/OurExcursions21"), { ssr: false });
const OurRooms21 = dynamic(() => import("@/components/R21days/OurRooms21"), { ssr: false });
const RoomSlides21 = dynamic(() => import("@/components/R21days/RoomSlides21"), { ssr: false });
const OurDinning21 = dynamic(() => import("@/components/R21days/OurDinning21"), { ssr: false });
const DinningSlides21 = dynamic(() => import("@/components/R21days/DinningSlides21"), { ssr: false });
const DailySchedule21 = dynamic(() => import("@/components/R21days/DailySchedule21"), { ssr: false });
const Importance21 = dynamic(() => import("@/components/R21days/Importance21"), { ssr: false });
const Benefit21 = dynamic(() => import("@/components/R21days/Benefit21"), { ssr: false });
const NearestAirport21 = dynamic(() => import("@/components/R21days/NearestAirport21"), { ssr: false });
const Beauty21 = dynamic(() => import("@/components/R21days/Beauty21"), { ssr: false });
const Faqs21 = dynamic(() => import("@/components/R21days/Faqs21"), { ssr: false });

// Lazy wrapper
const LazySection = ({ Component }: { Component: React.ElementType }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  return <div ref={ref}>{inView && <Component />}</div>;
};

export default function Page() {
  return (
    <>
      {/* Above-the-fold */}
      <SpaHero21 />
      <About211 />
      <KeySkills21 />
      <TwoListing21 />

      {/* Below-the-fold */}
      <Suspense fallback={<div className="py-10 text-center text-gray-400">Loading...</div>}>
        <LazySection Component={WhatsIncludes21} />
        <LazySection Component={OurExcursions21} />
        <LazySection Component={OurRooms21} />
        <LazySection Component={RoomSlides21} />
        <LazySection Component={OurDinning21} />
        <LazySection Component={DinningSlides21} />
        <LazySection Component={DailySchedule21} />
        <LazySection Component={Importance21} />
        <LazySection Component={Benefit21} />
        <LazySection Component={NearestAirport21} />
        <LazySection Component={Beauty21} />
        <LazySection Component={Faqs21} />
      </Suspense>
    </>
  );
}
