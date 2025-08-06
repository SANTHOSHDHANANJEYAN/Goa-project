"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import heavy components to lazy-load them
const SpaHero14 = dynamic(() => import('@/components/R14days/SpaHero14'));
const About141 = dynamic(() => import('@/components/R14days/About141'));
const KeySkills14 = dynamic(() => import('@/components/R14days/KeySkills14'));
const TwoListing14 = dynamic(() => import('@/components/R14days/TwoListing14'));
const WhatsIncludes14 = dynamic(() => import('@/components/R14days/WhatsIncludes14'));
const OurExcursions14 = dynamic(() => import('@/components/R14days/OurExcursions14'));
const OurRooms14 = dynamic(() => import('@/components/R14days/OurRooms14'));
const RoomSlides7 = dynamic(() => import('@/components/R14days/RoomSlides14'));
const OurDinning14 = dynamic(() => import('@/components/R14days/OurDinning14'));
const DinningSlides7 = dynamic(() => import('@/components/R14days/DinningSlides14'));
const DailySchedule14 = dynamic(() => import('@/components/R14days/DailySchedule14'));
const Importance14 = dynamic(() => import('@/components/R14days/Importance14'));
const Benefit14 = dynamic(() => import('@/components/R14days/Benefit14'));
const NearestAirport14 = dynamic(() => import('@/components/R14days/NearestAirport14'));
const Beauty14 = dynamic(() => import('@/components/R14days/Beauty14'));
const Faqs14 = dynamic(() => import('@/components/R14days/Faqs14'));

export default function Page() {
  return (
    <>
      <Head>
        <title>14-Day Yoga Retreat in Goa | Rishikul Yogshala</title>
        <meta
          name="description"
          content="Experience a transformative 14-day yoga retreat in Goa with Rishikul Yogshala. Daily yoga, organic meals, beachside relaxation, and guided excursions."
        />
        <link rel="preload" as="image" href="/your-lcp-image.webp" />
      </Head>

      <SpaHero14 />
      <About141 />
      <KeySkills14 />
      <TwoListing14 />
      <WhatsIncludes14 />
      <OurExcursions14 />
      <OurRooms14 />
      <RoomSlides7/>
      <OurDinning14 />
      <DinningSlides7/>
      <DailySchedule14 />
      <Importance14 />
      <Benefit14 />
      <NearestAirport14 />
      <Beauty14 />
      <Faqs14 />
    </>
  );
}
