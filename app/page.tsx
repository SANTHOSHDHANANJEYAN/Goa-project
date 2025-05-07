import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ServicesPreview from '@/components/services-preview';
import Youtube from '@/components/youtube';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/public/bodybg.jpg')] font-['Open Sans', sans-serif]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <h1 className="font-['Playfair Display',serif] text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in glow-text floating">
      Flow, Relax, and Renew
      <br className="hidden md:inline" />
      <span className="text-yellow-300">– Yoga in Goa Awaits You</span>
    </h1>

    <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-300">
      Awaken your spirit and embrace peace by the ocean breeze.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
      <Button
        size="lg"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
        asChild
      >
        <Link href="/about">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
          Learn More
        </Link>
      </Button>
    </div>
  </div>
</section>

<section className="py-14 md:py-16 bg-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
      {/* Left Column */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Join a Life-Changing Community of Over 34,000 Students
        </h2>
        <p className="text-xl md:text-2xl text-indigo-900 font-medium">
          Become part of our family at one of the leading accredited schools in Goa!
        </p>
      </div>

      {/* Right Column */}
      <div>
        <h3 className="text-xl md:text-2xl text-indigo-900 font-medium mb-6">
          Since 2016, students from around the world have been joining our programs and earning their Yoga Alliance accredited certifications.
        </h3>

        <div className="flex justify-center md:justify-start items-center gap-6">
          <div className="flex flex-col items-center transition-all transform hover:scale-105 border-4 border-indigo-900 p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90 hover:bg-opacity-100">
            <Image
              src="/rpysall.png"
              alt="RYS 200"
              width={80}
              height={80}
              className="mb-3"
            />
            <span className="font-semibold text-lg text-indigo-900">RYS 200</span>
          </div>
          <div className="flex flex-col items-center transition-all transform hover:scale-105 border-4 border-indigo-900 p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90 hover:bg-opacity-100">
            <Image
              src="/rys 200.png"
              alt="RYS 300"
              width={80}
              height={80}
              className="mb-3"
            />
            <span className="font-semibold text-lg text-indigo-900">RYS 300</span>
          </div>
          <div className="flex flex-col items-center transition-all transform hover:scale-105 border-4 border-indigo-900 p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90 hover:bg-opacity-100">
            <Image
              src="/300 rys.png"
              alt="RYS 500"
              width={80}
              height={80}
              className="mb-3"
            />
            <span className="font-semibold text-lg text-indigo-900">RYS 500</span>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Button */}
    {/* <div className="mt-10 text-center">
      <a
        href="/enroll"
        className="inline-block px-6 py-3 bg-indigo-900 text-white font-semibold text-xl rounded-lg hover:bg-indigo-800 transition-colors"
      >
        Enroll Today and Start Your Journey!
      </a>
    </div> */}
  </div>
</section>


      {/* Services Preview */}
      <ServicesPreview />

      {/* Quote Section */}
      {/* Quote Section with Decorative Elements */}
<section className="py-20 bg-transparent relative overflow-hidden">
  {/* Subtle Light Particles or Gradient Overlay (simulated with gradient bg) */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/10 via-pink-200/10 to-yellow-100/10 z-0" />

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <blockquote className="font-['Playfair Display',serif] text-2xl md:text-3xl lg:text-4xl italic mb-8 text-blue-500 animate-fade-in transition duration-1000 ease-in-out transform-gpu hover:scale-105">
      “Freedom, love, care, and support are the main philosophies of the community.”
    </blockquote>

    {/* Floating Heart/Leaf Icon or Simple Pulse Element */}
    <div className="animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 text-yellow-300 text-3xl">
      <span className="animate-ping h-3 w-3 rounded-full bg-yellow-400 opacity-75 inline-block" />
    </div>
  </div>
</section>

{/* Decorative Image Section with Animation */}
<section className="py-20 bg-transparent text-primary-foreground">
  <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 relative">
    <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-1000 ease-in-out ring-4 ring-yellow-300/40">
      <img
        src="/goa 42.jpg"
        alt="Scenic Goa"
        className="object-cover w-full max-w-4xl h-auto animate-fade-in"
      />
    </div>

    {/* Optional: Glow / Blur background if you want to add ambient light */}
    <div className="absolute -z-10 w-[120%] h-[120%] bg-yellow-100/10 rounded-full blur-3xl" />
  </div>
</section>


      {/* CTA Section */}
      <section className="py-24 bg-transparent text-primary-foreground relative overflow-hidden">
  {/* Soft Gradient Light Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-yellow-100/10 z-0 pointer-events-none" />

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
    <h1 className="font-['Playfair Display',serif] text-3xl sm:text-4xl font-bold tracking-tight text-blue-500 mb-4 animate-slide-up">
      Rishikul Yogshala Goa – Your transformation starts here.
    </h1>
    
    <p className="text-lg sm:text-xl text-blue-500 mb-6 animate-slide-up animation-delay-200">
      A place to learn, love, and find your true path
    </p>
    
    <p className="text-md sm:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-400">
      We don’t impose opinions or concepts — we expand opportunities for growth.
      People from all over the world are undergoing transformation with us.
      Some are just starting their journey, while others are seasoned mentors.
    </p>
    
    <div className="mt-10 animate-fade-in animation-delay-600">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-['Open Sans',sans-serif]">
        YOUR STORIES
      </button>
    </div>
  </div>
</section>

      <section className="py-20 bg-transparent text-primary-foreground" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/5.jpg"
          alt="image"
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </section>

      <Youtube/>
    </div>
  );
 
}