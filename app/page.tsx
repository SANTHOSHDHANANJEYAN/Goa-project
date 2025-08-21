import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/ui/HeroSection';
import Reviews from '@/components/Reviews';
import StoriesSection from '@/components/StoriesSection';
import CommunitySection from '@/components/CommunitySection';

const GalleryPage = dynamic(() => import('@/components/gallery'));
const TeacherSlider = dynamic(() => import('@/components/TeacherSlider'));
const CodeOfConduct = dynamic(() => import('@/components/CodeOfConduct'));
const Appform = dynamic(() => import('@/components/Appform'));
const BlogSection = dynamic(() => import('@/components/BlogSection'));
const CourseCard = dynamic(() => import('@/components/CourseCard'));
const RetreatsCard = dynamic(() => import('@/components/RetreatsCard'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishikul Yogshala Goa | Yoga TTC & Retreats</title>
        <meta
          name="description"
          content="Transform your life through authentic yoga training in Goa with Rishikul Yogshala."
        />
        <link rel="preload" as="video" href="/homepageclip.mp4" type="video/mp4" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[url('/bodybg.jpg')] font-['Helvetica Neue',sans-serif] bg-cover bg-no-repeat bg-center">

<HeroSection/>

        {/* Accreditation Section */}
        <CommunitySection />

        <Suspense fallback={<div className="text-center py-10">Loading Courses...</div>}>
          <CourseCard />
        </Suspense>

        <section className="pb-[2.5rem] bg-transparent text-center">
          <p className="text-3xl italic text-[#150e70] mb-2 animate-fade-in">“Empower – Evolve – Thrive.”</p>
          <p className="text-2xl italic text-[#150e70] animate-fade-in">- By Our Yoga Retreats</p>
        </section>

        <Suspense fallback={<div className="text-center py-10">Loading Retreats...</div>}>
          <RetreatsCard />
        </Suspense>

        <StoriesSection />
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <BlogSection />
          <CodeOfConduct />
          <GalleryPage />
          <TeacherSlider />
          <Appform />
        </Suspense>
        <Reviews />
      </div>
    </>
  );
}

