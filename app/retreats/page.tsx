// app/retreats/page.tsx
import Accommodation from "@/components/accommodation"
import HeroSection from "@/components/hero-section"
import ProgramHighlights from "@/components/program-highlights"
import RetreatDetails from "@/components/retreat-details"
import Schedule from "@/components/schedule"
import Testimonials from "@/components/testimonials"
import WhatToBring from "@/components/what-to-bring"

export default function Page() {

  return (<><HeroSection/>< RetreatDetails/><ProgramHighlights/><Schedule /><WhatToBring/><Accommodation/><Testimonials/></>
  ) 
}
