import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';

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

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
          >
            <source src="/homepageclip.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-snug mb-6 animate-fade-in glow-text floating">
              Flow, Relax, and Renew
              <br className="hidden md:inline" />
              <span className="text-yellow-300"> – Carnival Capital Goa</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-300">
              Awaken your spirit and embrace peace by the ocean breeze.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in animation-delay-600">
              <Link href="/Aboutyogshala" passHref>
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Accreditation Section */}
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold text-[#150e70] mb-4">
                Join a Life-Changing Community of Over 34,000 Students
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
                {["/nw200.png", "/new300.png", "/nwrpys.png", "/nwyacep.png"].map((src, index) => (
                  <div
                    key={src}
                    className="flex flex-col items-center transition-transform transform hover:scale-105 border-transparent p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90"
                  >
                    <Image
                      src={src}
                      alt={src.split('/').pop() || 'Yoga Badge'}
                      width={70}
                      height={70}
                      className="mb-2"
                      loading="lazy"
                    />
                    <span className="font-semibold text-sm text-indigo-900">
                      {src.includes("200") ? "RYS 200" : src.includes("300") ? "RYS 300" : src.includes("rpys") ? "RPYS" : "YACEP"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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

        <section className="relative  text-center bg-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-[#150e70] mb-4 animate-slide-up">
              Rishikul Yogshala Goa – Your transformation starts here.
            </h1>
            <p className="text-xl text-[#150e70] mb-6 animate-slide-up animation-delay-200">
              A place to learn, love, and find your true path.
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-400 mb-10 animate-slide-up animation-delay-400">
              Whether you’re just beginning or have walked this path for years, you belong.
            </p>
            <Link href="/Aboutyogshala">
              <button className="bg-[#150e70] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
                YOUR STORIES
              </button>
            </Link>
            <div className="mt-10 rounded-[3rem] overflow-hidden shadow-xl">
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
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <BlogSection />
          <CodeOfConduct />
          <GalleryPage />
          <TeacherSlider />
          <Appform />
        </Suspense>

<section className="pt-[2rem] pb-[4rem] bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#150e70] mb-8 text-center text-shadow-md">
              Yoga Alliance
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Review 1 */}
              <article className="order-2 lg:order-1 relative p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 bg-[bisque]" aria-label="Review from Fabi Porta">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/review1.jpg"
                      alt="Customer 1 Fabi Porta"
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
                <p className="text-base text-gray-800 leading-relaxed">
                  “It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident to
                  say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired
                  during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining
                  the asanas.the relaxation and even pranayama. I was amazed to feel so comfortable in teaching myself and others after such
                  a quick course but for sure a strong, traditional, grounded, reliable and unforgiven training. I could only classify it as
                  ‘WONDERFUL’ ..!!Specially being in Pohkara, Goa – a magical destination!"
                </p>
              </article>

              {/* Review 2 */}
              <article className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300" aria-label="Review from Maithe Vl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/review2.jpg"
                      alt="Customer 2 Maithe Vl"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Maithe Vl</h3>
                    <p className="text-sm text-gray-500">Health & Wellness Coach</p>
                  </div>
                </div>
                <p className="text-base text-gray-800 leading-relaxed">
                  We visited Rishikul Yogshala for the second time this February, the first was in July 2013. That visit changed my life so
                  completely and in such a fulfilling way – I just felt drawn back to this school and their teachers. I am so happy I did
                  return. Being around such inspiring, energetic and wise people, I feel truly blessed and moreover,It was for sure an
                  incredible journey to have had the course.with Rishikul Yogshala,I’ve learnt for life! I’m confident to say it as I’ve been
                  practicing at home ever since I concluded the course and honestly I’ve never felt so natural and inspired during my own
                  practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on explaining the asanas.
                </p>
              </article>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Review 3 */}
              <article className="order-2 lg:order-1 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300" aria-label="Review from Sarah Schu">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/review3.jpg"
                      alt="Customer 3 Sarah Schu"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Sarah Schu</h3>
                    <p className="text-sm text-gray-500">Yoga Practitioner</p>
                  </div>
                </div>
                <p className="text-base text-gray-800 leading-relaxed">
                  “It’s hard to review a program that spans a month, but overall I would describe the Rishikul 200hr program in Goa as
                  challenging, life changing, and inspiring. The days were really long, but packed with so much new information that I was
                  never bored. I really connected with each of the six instructors. It was for sure an incredible journey to have had the
                  course with Rishikul Yogshala, I’ve learnt for life! I’m confident to say it as I’ve been practicing at home ever since I
                  concluded the course and honestly I’ve never felt so natural and inspired during my own practice.!! I can easily incorporate
                  the teaching guidance, the flow, the pace, the minor details on explaining the asanas, and cannot thank them enough for the
                  impact they had and will continue to have in my life."
                </p>
              </article>

              {/* Review 4 */}
              <article className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300" aria-label="Review from Natasha Thompson">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/review4.jpg"
                      alt="Customer 4 Natasha Thompson"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Natasha Thompson</h3>
                    <p className="text-sm text-gray-500">Mindfulness Practitioner</p>
                  </div>
                </div>
                <p className="text-base text-gray-800 leading-relaxed">
                  "There’s one thing for certain, I’m not the same person I was 28 days ago before starting this yoga teacher training program.
                  My life has been changed in the most beautiful and positive sense of the word. There really are not enough thank you’s in
                  the It was for sure an incredible journey to have had the course with Rishikul Yogshala, I’ve learnt for life! I’m confident
                  to say it as I’ve been practicing at home ever since I concluded the course and honestly I’ve never felt so natural and
                  inspired during my own practice.!! I can easily incorporate the teaching guidance, the flow, the pace, the minor details on
                  explaining the asanas, world to fully express the extreme gratitude I feel towards Rishikul Yogashala and its teachers for
                  providing me with this opportunity."
                </p>
              </article>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://r.yogaalliance.org/SchoolProfileReviews?sid=3584"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#150e70] text-white rounded-full hover:bg-yellow-500 transition"
              aria-label="More reviews on Yoga Alliance"
            >
              More Reviews
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

