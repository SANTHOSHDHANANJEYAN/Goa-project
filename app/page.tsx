import Link from 'next/link';
import Image from 'next/image';
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
    <div className="flex flex-col min-h-screen bg-[url('/public/bodybg.jpg')] font-['Helvetica Neue',sans-serif]">
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/homepageclip.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
    <h1 className="font-['Helvetica Neue',sans-serif] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug mb-4 sm:mb-6 animate-fade-in glow-text floating">
      Flow, Relax, and Renew
      <br className="hidden md:inline" />
      <span className="text-yellow-300">– Carnival Capital Goa</span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 animate-fade-in animation-delay-300">
      Awaken your spirit and embrace peace by the ocean breeze.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in animation-delay-600">
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



<section className="py-12 sm:py-14 md:py-16 bg-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center text-center md:text-left">
      
      {/* Left Column */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#150e70] mb-4">
          Join a Life-Changing Community of Over 34,000 Students
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-[#150e70] font-medium">
          Become part of our family at one of the leading accredited schools in Goa!
        </p>
      </div>

      {/* Right Column */}
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl text-[#150e70] font-medium mb-6">
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
              <Image src={item.src} alt={item.alt} width={70} height={70} className="mb-2 sm:mb-3" />
              <span className="font-semibold text-sm sm:text-base text-indigo-900">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      <CourseCard />

      <section className="py-10 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/10 via-pink-200/10 to-yellow-100/10 z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-['Helvetica Neue',sans-serif] text-2xl md:text-3xl lg:text-4xl italic mb-[1rem] text-[#150e70] animate-fade-in transition duration-1000 ease-in-out transform-gpu hover:scale-105">
            “Empower- Evolve- Thrive.”
          </p>
            <p className="font-['Helvetica Neue',sans-serif] text-[25px] italic mb-8 text-[#150e70] animate-fade-in transition duration-1000 ease-in-out transform-gpu hover:scale-105">
            - By Our Yoga Retreats
          </p>

          
        </div>
      </section>
 <RetreatsCard />
      <section className="py-8 bg-transparent text-primary-foreground">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-1000 ease-in-out  ">
  <img
    src="/image.png"
    alt="Scenic Goa"
    className="object-cover w-full h-[33rem] animate-fade-in" // reduced height
  />
</div>

          <div className="absolute -z-10 w-[120%] h-[120%]  rounded-full blur-3xl" />
        </div>
      </section>

      <section className=" bg-transparent text-primary-foreground relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-yellow-100/10 z-0 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h1 className="font-['Helvetica Neue',sans-serif] text-3xl sm:text-4xl font-bold tracking-tight text-[#150e70] mb-4 animate-slide-up">
            Rishikul Yogshala Goa – Your transformation starts here.
          </h1>

          <p className="text-lg sm:text-xl text-[#150e70] mb-6 animate-slide-up animation-delay-200">
            A place to learn, love, and find your true path
          </p>

          <p className="text-md sm:text-lg text-gray-900 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-400">
            We don’t teach what to think — we open paths to explore who you truly are. 
            With students and teachers from around the globe, each journey here is deeply personal. 
            Whether you’re just beginning or have walked this path for years, you belong.
          </p>

          <div className="mt-10 animate-fade-in animation-delay-600">
            <button className="bg-[#150e70] hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-['Helvetica Neue',sans-serif]">
              YOUR STORIES
            </button>
          </div>
        </div>
      </section>
      

<section
  className="relative h-[800px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center mt-[5rem]"
  style={{ backgroundImage: "url('/bag1.jpg')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-0" />

  {/* Decorative Glow Overlay */}
  <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6 md:px-16 text-white">
    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300 drop-shadow-md">
      Take the Journey Inward
    </h2>

    <div className="mb-6 border-l-4 border-purple-400 pl-5">
      <p className="text-lg md:text-xl font-light italic">
        “The answers you seek aren’t far away — they’ve been within you all along. All you have to do is look inward.”
      </p>
    </div>

    <p className="text-md md:text-lg leading-relaxed text-gray-100">
      In today’s fast-moving world, the ancient wisdom of yoga invites you to pause and reconnect with your true self. 
      This sacred practice of movement, breath, and mindfulness empowers you to discover peace, purpose, and clarity — already residing within.
    </p>

    
  </div>
</section>


     <BlogSection/>


    <section className="md:bg-transparent relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#150e70] mb-12 text-center">
          Yoga Alliance Reviews
        </h2>

        {/* Review Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            {
              name: "RAMKISHAN KUGATHAS",
              role: "RYT 200 Graduate",
              image: "/review1.jpg",
              text: "I recently completed the Prenatal Yoga course at Rishikul Yogshala and it was a truly enriching experience. The teachers were kind, knowledgeable, and supportive throughout. I learned safe and effective yoga practices for pregnancy, along with breathing techniques and relaxation methods. The environment was peaceful and well-organized. I highly recommend Rishikul Yogshala for anyone seeking authentic and caring yoga education.",
            },
            {
              name: "Liam D'Souza",
              role: "RYT 200 Graduate",
              image: "/review2.jpg",
              text: "A truly immersive and transformational experience. I learned so much not just about yoga, but about myself. The setting in India made it even more meaningful. Highly recommend Rishikul Yogshala.",
            },
            {
              name: "Emma Johansson",
              role: "Yoga Teacher",
              image: "/review3.jpg",
              text: "I appreciated the depth of philosophy and the balance with physical practice. The community was welcoming and nurturing. I'm so grateful I chose this school for my yoga journey.",
            },
            {
              name: "Carlos Martinez",
              role: "Wellness Coach",
              image: "/review4.jpg",
              text: "Rishikul Yogshala exceeded my expectations. The teaching methods were clear and effective, and I left with a strong foundation in both teaching and personal practice.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-[bisque] p-6 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed italic">“{review.text}”</p>
            </div>
          ))}
        </div>

        {/* More Reviews Button */}
        <div className="text-center mt-12">
          <a
            href="https://r.yogaalliance.org/SchoolProfileReviews?sid=3584"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#150e70] text-white font-semibold rounded-full shadow-md hover:bg-yellow-500 transition"
          >
            More Reviews
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-10 w-36 h-36 bg-yellow-100 opacity-40 blur-3xl rounded-full z-0 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-48 h-48 bg-yellow-200 opacity-30 blur-3xl rounded-full z-0 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-200 opacity-30 z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-200 opacity-30 z-0"></div>
      </div>
    </section>



      <CodeOfConduct />
      <GalleryPage/>
      <TeacherSlider />
      <Appform/>
    </div>
  );
}