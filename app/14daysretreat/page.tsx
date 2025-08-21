"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

// Helper component for lazy-loading sections
const LazySection = ({ Component }: { Component: React.ElementType }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' });
  return <div ref={ref}>{inView && <Component />}</div>;
};

// Above-the-fold content (static or light)
const SpaHero14 = dynamic(() => import('@/components/R14days/SpaHero14'), { ssr: false });
const About141 = dynamic(() => import('@/components/R14days/About141'), { ssr: false });
const KeySkills14 = dynamic(() => import('@/components/R14days/KeySkills14'), { ssr: false });
const TwoListing14 = dynamic(() => import('@/components/R14days/TwoListing14'), { ssr: false });

// Heavy / below-the-fold components
const WhatsIncludes14 = dynamic(() => import('@/components/R14days/WhatsIncludes14'), { ssr: false });
const OurExcursions14 = dynamic(() => import('@/components/R14days/OurExcursions14'), { ssr: false });
const OurRooms14 = dynamic(() => import('@/components/R14days/OurRooms14'), { ssr: false });
const RoomSlides14 = dynamic(() => import('@/components/R14days/RoomSlides14'), { ssr: false });
const OurDinning14 = dynamic(() => import('@/components/R14days/OurDinning14'), { ssr: false });
const DinningSlides14 = dynamic(() => import('@/components/R14days/DinningSlides14'), { ssr: false });
const DailySchedule14 = dynamic(() => import('@/components/R14days/DailySchedule14'), { ssr: false });
const Importance14 = dynamic(() => import('@/components/R14days/Importance14'), { ssr: false });
const Benefit14 = dynamic(() => import('@/components/R14days/Benefit14'), { ssr: false });
const NearestAirport14 = dynamic(() => import('@/components/R14days/NearestAirport14'), { ssr: false });
const Beauty14 = dynamic(() => import('@/components/R14days/Beauty14'), { ssr: false });
const Faqs14 = dynamic(() => import('@/components/R14days/Faqs14'), { ssr: false });

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

      <LazySection Component={WhatsIncludes14} />
      <LazySection Component={OurExcursions14} />
      <LazySection Component={OurRooms14} />
      <LazySection Component={RoomSlides14} />
      <LazySection Component={OurDinning14} />
      <LazySection Component={DinningSlides14} />
      <LazySection Component={DailySchedule14} />
      <LazySection Component={Importance14} />
      <LazySection Component={Benefit14} />
      <LazySection Component={NearestAirport14} />
      <LazySection Component={Beauty14} />
      <LazySection Component={Faqs14} />
    </>
  );
}
