// app/retreats/page.tsx
"use client"

import Experience7 from "@/components/R7days/Experience7";
import Highlights7 from "@/components/R7days/Highlights7";
import HighlightSlider7 from "@/components/R7days/HighlightSlider7";
import PackagesSection7 from "@/components/R7days/PackagesSection7";
import ProgramSection7 from "@/components/R7days/ProgramSection7";
import RetreatOptions7 from "@/components/R7days/About7";
import SpaHero7 from "@/components/R7days/SpaHero7";
import TestimonialVideos7 from "@/components/R7days/TestimonialVideos7";
import Pricing7 from "@/components/R7days/Pricing7";
import Contact7 from "@/components/R7days/Contact7";
import Accommodation7 from "@/components/R7days/Accomodation7";
import Testimonials7 from "@/components/R7days/Testimonials7";




export default function Page() {

  return (<>
  <SpaHero7/>
  <RetreatOptions7/>
  <ProgramSection7/>
  <Pricing7/>
  <Accommodation7/>
  <Experience7/>
  <Highlights7/>
  <HighlightSlider7/>
  <Testimonials7/>
  <TestimonialVideos7/>
  <Contact7/>
  </>
  ) 
} 
