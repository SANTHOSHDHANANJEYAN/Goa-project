// pages/index.tsx or Home.tsx

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from '@/components/ui/button';

import GalleryPage from '@/components/gallery';
import TeacherSlider from '@/components/TeacherSlider';
import CodeOfConduct from '@/components/CodeOfConduct';

import Appform from '@/components/Appform';
import BlogSection from '@/components/BlogSection';
import CourseCard from '@/components/CourseCard';
import RetreatsCard from '@/components/RetreatsCard';

export default function Home() {
  return (
    <>
      {/* Head for preload */}
      <Head>
        <title>Rishikul Yogshala Goa | Yoga TTC & Retreats</title>
        <meta name="description" content="Transform your life through authentic yoga training in Goa with Rishikul Yogshala." />
        <link rel="preload" as="image" href="/H2.jpg" />
        <link rel="preload" as="image" href="/nw200.png" />
        <link rel="preload" as="video" href="/homepageclip.mp4" type="video/mp4" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[url('/bodybg.jpg')] font-['Helvetica Neue',sans-serif] bg-cover bg-no-repeat bg-center">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            preload="auto"
          >
            <source src="/homepageclip.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0" />

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-snug mb-6 animate-fade-in glow-text floating">
              Flow, Relax, and Renew
              <br className="hidden md:inline" />
              <span className="text-yellow-300">– Carnival Capital Goa</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-300">
              Awaken your spirit and embrace peace by the ocean breeze.
            </p>

            <div className="flex justify-center items-center gap-4 animate-fade-in animation-delay-600">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                asChild
              >
                <Link href="/about">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Accreditation Section */}
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
              <div>
                <h2 className="text-4xl font-bold text-[#150e70] mb-4">
                  Join a Life-Changing Community of Over 15,000+ Students
                </h2>
                <p className="text-xl text-[#150e70] font-medium">
                  Become part of our family at one of the leading accredited schools in Goa!
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-[#150e70] font-medium mb-6">
                  Since 2009, students from around the world have been joining our programs and earning their Yoga Alliance accredited certifications.
                </h3>

                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  {[
                    { src: '/nw200.png', alt: 'RYS 200', label: 'RYS 200' },
                    { src: '/new300.png', alt: 'RYS 300', label: 'RYS 300' },
                    { src: '/nwrpys.png', alt: 'RPYS', label: 'RPYS' },
                    { src: '/nwyacep.png', alt: 'YACEP', label: 'YACEP' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center transition-all transform hover:scale-105 border-transparent p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={70}
                        height={70}
                        className="mb-2"
                        priority={index === 0} // Prioritize the first logo
                      />
                      <span className="font-semibold text-sm text-indigo-900">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of Page */}
        <CourseCard />
        <section className="py-10 bg-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl italic text-[#150e70] mb-2 animate-fade-in">“Empower – Evolve – Thrive.”</p>
            <p className="text-2xl italic text-[#150e70] animate-fade-in">- By Our Yoga Retreats</p>
          </div>
        </section>
        <RetreatsCard />
        <section className="bg-transparent text-primary-foreground">
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute -z-10 w-[120%] h-[120%] rounded-full blur-3xl" />
          </div>
        </section>

        {/* Quote + Image */}
        <section className="relative py-20 text-center bg-transparent">
          <div className="max-w-5xl mx-auto px-6 z-10 relative">
            <h1 className="text-4xl font-bold text-[#150e70] mb-4 animate-slide-up">
              Rishikul Yogshala Goa – Your transformation starts here.
            </h1>
            <p className="text-xl text-[#150e70] mb-6 animate-slide-up animation-delay-200">
              A place to learn, love, and find your true path
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-400 mb-10 animate-slide-up animation-delay-400">
              We don’t teach what to think — we open paths to explore who you truly are.
              With students and teachers from around the globe, each journey here is deeply personal.
              Whether you’re just beginning or have walked this path for years, you belong.
            </p>
            <button className="bg-[#150e70] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
              YOUR STORIES
            </button>
            <div className="mt-10 rounded-[3rem] overflow-hidden shadow-xl transform hover:scale-105 transition">
              <Image
                src="/H2.jpg"
                alt="Scenic Goa"
                width={1920}
                height={700}
                className="w-full h-auto rounded-[3rem]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section
          className="relative h-[800px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center mt-20"
          style={{ backgroundImage: "url('/H1.png')" }}
        >
          <div className="relative z-10 max-w-4xl px-6 text-white text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#d2cb02] mb-6">
              Breathe. Move. Awaken.
            </h2>
            <blockquote className="mb-6 text-lg italic">
              “The answers you seek aren’t far away — they’ve been within you all along. All you have to do is look inward.”
            </blockquote>
            <p className="text-md md:text-lg leading-relaxed text-gray-100">
              Experience the sacred essence of yoga in the heart of Goa! Learn Ashtanga, Hatha, meditation, and pranayama from experienced gurus.
            </p>
          </div>
        </section>

        <BlogSection />
        <CodeOfConduct />
        <GalleryPage />
        <TeacherSlider />
        <Appform />

        {/* Reviews */}
        <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#150e70] mb-8 text-center text-shadow-md">
      Yoga Alliance
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Review 1 */}
     <div
  className="order-2 lg:order-1 relative p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 bg-[bisque]"
>

        <div className="flex items-center mb-4 ">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review1.jpg"
              alt="Customer 1"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Fabi Porta</h3>
            <p className="text-sm text-gray-500">Yoga Enthusiast</p>
          </div>
        </div>
        <p className="text-13 text-gray-800 leading-relaxed">
        “It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas.the relaxation and even pranayama. I was amazed to feel so comfortable in teaching myself and others after such a quick course but for sure a strong, traditional, grounded, reliable and unforgiven training. I could only classify it as ‘WONDERFUL’ ..!!Specially being in Pohkara, Goa – a magical destination!"
        </p>
      </div>

      {/* Review 2 */}
      <div className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review2.jpg"
              alt="Customer 2"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Maithe Vl
            </h3>
            <p className="text-sm text-gray-500">Health & Wellness Coach</p>
          </div>
        </div>
        <p className="text-15 text-gray-800 leading-relaxed">
        We visited Rishikul Yogshala for the second time this February, the first was in July 2013. That visit changed my life so completely and in such a fulfilling way – I just felt drawn back to this school and their teachers. I am so happy I did return. Being around such inspiring, energetic and wise people, I feel truly blessed and moreover,It was for sure an incredible journey to have had the course.with Rishikul Yogshala,I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas."
        </p>
      </div>
    </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Review 3 */}
      <div className="order-2 lg:order-1 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review3.jpg"
              alt="Customer 3"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Sarah Schu
            </h3>
            <p className="text-sm text-gray-500">Yoga Practitioner</p>
          </div>
        </div>
        <p className="text-15 text-gray-800 leading-relaxed">
        “It’s hard to review a program that spans a month, but overall I would describe the Rishikul 200hr program in Goa as challenging, life changing, and inspiring. The days were really long, but packed with so much new information that I was never bored. I really connected with each of the six instructors. It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas, and cannot thank them enough for the impact they had and will continue to have in my life."
        </p>
      </div>

      {/* Review 4 */}
      <div className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/review4.jpg"
              alt="Customer 4"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Natasha Thompson
            </h3>
            <p className="text-sm text-gray-500">Mindfulness Practitioner</p>
          </div>
        </div>
        <p className="text-15 text-gray-800 leading-relaxed">
        "There’s one thing for certain, I’m not the same person I was 28 days ago before starting this yoga teacher training program. My life has been changed in the most beautiful and positive sense of the word. There really are not enough thank you’s in the It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas, world to fully express the extreme gratitude I feel towards Rishikul Yogashala and its teachers for providing me with this opportunity."
        </p>
      </div>
    </div>

    {/* Decorative Flourishes */}
    <div className="absolute top-0 left-10 w-36 h-36 bg-yellow-100 opacity-40 blur-3xl rounded-full z-0 animate-pulse"></div>
    <div className="absolute bottom-0 right-10 w-48 h-48 bg-yellow-200 opacity-30 blur-3xl rounded-full z-0 animate-pulse"></div>

    {/* Decorative Borders */}
    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-200 opacity-30 z-0"></div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-200 opacity-30 z-0"></div>
  </div>
     <div className="text-center mt-12">
              <a
                href="https://r.yogaalliance.org/SchoolProfileReviews?sid=3584"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#150e70] text-white rounded-full hover:bg-yellow-500 transition"
              >
                More Reviews
              </a>
            </div>
</section>
      </div>
    </>
  );
}
