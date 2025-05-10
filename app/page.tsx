import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ServicesPreview from '@/components/services-preview';
import Youtube from '@/components/youtube';
import ApplicationForm from '@/components/50hr/ApplicationForm';
import Appform from '@/components/Appform';
import GalleryPage from '@/components/gallery';
import TeacherSlider from '@/components/TeacherSlider';
import CodeOfConduct from '@/components/CodeOfConduct';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/public/bodybg.jpg')] font-['Helvetica Neue',sans-serif]">
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-['Helvetica Neue',sans-serif] text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in glow-text floating">
            Flow, Relax, and Renew
            <br className="hidden md:inline" />
            <span className="text-yellow-300">– Carnival Capital  Goa</span>
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                Join a Life-Changing Community of Over 34,000 Students
              </h2>
              <p className="text-xl md:text-2xl text-indigo-900 font-medium">
                Become part of our family at one of the leading accredited schools in Goa!
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-indigo-900 font-medium mb-6">
                Since 2009, students from around the world have been joining our programs and earning their Yoga Alliance accredited certifications.
              </h3>

              <div className="flex justify-center md:justify-start items-center gap-6">
                {[
                  { src: '/rpysall.png', alt: 'RYS 200', label: 'RYS 200' },
                  { src: '/rys 200.png', alt: 'RYS 300', label: 'RYS 300' },
                  { src: '/300 rys.png', alt: 'RYS 500', label: 'RYS 500' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center transition-all transform hover:scale-105 border-4 border-indigo-900 p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90 hover:bg-opacity-100"
                  >
                    <Image src={item.src} alt={item.alt} width={80} height={80} className="mb-3" />
                    <span className="font-semibold text-lg text-indigo-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="py-10 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/10 via-pink-200/10 to-yellow-100/10 z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-['Helvetica Neue',sans-serif] text-2xl md:text-3xl lg:text-4xl italic mb-8 text-blue-500 animate-fade-in transition duration-1000 ease-in-out transform-gpu hover:scale-105">
            “Freedom, love, care, and support are the main philosophies of the community.”
          </p>

          <div className="animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 text-yellow-300 text-3xl">
            <span className="animate-ping h-3 w-3 rounded-full bg-yellow-400 opacity-75 inline-block" />
          </div>
        </div>
      </section>
 <ServicesPreview />
      <section className="py-8 bg-transparent text-primary-foreground">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-1000 ease-in-out ring-4 ring-yellow-300/40">
            <img
              src="/goa 42.jpg"
              alt="Scenic Goa"
              className="object-cover w-full max-w-4xl h-auto animate-fade-in"
            />
          </div>
          <div className="absolute -z-10 w-[120%] h-[120%] bg-yellow-100/10 rounded-full blur-3xl" />
        </div>
      </section>

      <section className=" bg-transparent text-primary-foreground relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-yellow-100/10 z-0 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h1 className="font-['Helvetica Neue',sans-serif] text-3xl sm:text-4xl font-bold tracking-tight text-blue-500 mb-4 animate-slide-up">
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-['Helvetica Neue',sans-serif]">
              YOUR STORIES
            </button>
          </div>
        </div>
      </section>
      

<section
  className="relative h-[765px] overflow-hidden bg-fixed bg-cover bg-center text-white mt-16 "
  style={{ backgroundImage: "url('/bag1.jpg')" }}
>
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  {/* Text content */}
  <div className="absolute inset-0 flex items-center px-8 md:px-20 z-10">
    <div className="max-w-xl">
      <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-2">
        Take the Journey Inward
      </h2>
      <p className="text-lg md:text-xl leading-relaxed">
        The traditional yoga journey begins with a simple, powerful step: turning your awareness inward. In a world filled with noise and distraction, this inner shift is a profound act of self-discovery. Yoga teaches that everything you seek — peace, clarity, strength, and joy — already exists within you. Through disciplined practice, self-inquiry, and silence, you learn to listen to your inner wisdom and live with greater intention.
      </p>
    </div>
  </div>
</section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">From Our Blog</h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        Insights, stories, and guidance from our community to inspire your yoga journey.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Ultimate Guide to 200-Hour Yoga TTC in Goa",
          excerpt:
            "Goa, known for its stunning beaches, vibrant culture, and laid-back vibe, is also a haven for those looking to deepen their yoga journey.",
          image: "/blog/blog1.jpg",
          date: "December 10, 2024",
          link: "/blogs/200-hour-guide",
        },
        {
          title: "11 Reasons Why You Should Start Fasting",
          excerpt:
            "When we wake up, we step into a new chance to live healthy. Learn how fasting transforms your mind and body.",
          image: "/blog/blog2.jpg",
          date: "December 10, 2024",
          link: "/blogs/fasting-benefits",
        },
        {
          title: "Healing Through Sound: A Beginner’s Guide",
          excerpt:
            "Sound therapy uses vibrations to heal the mind and body. Discover how it can create harmony within.",
          image: "/blog/blog3.jpg",
          date: "December 10, 2024",
          link: "/blogs/sound-healing-guide",
        },
      ].map((post, index) => (
        <div
          key={post.title}
          className="rounded-2xl overflow-hidden shadow-lg bg-white group transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          <div className="p-6">
            <span className="text-sm text-gray-400">{post.date}</span>
            <h3 className="mt-2 text-2xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link
              href={post.link}
              className="inline-block mt-4 text-blue-600 hover:underline font-medium"
            >
              Read More »
            </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-16">
      <Link
        href="/blogs"
        className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
      >
        View All Blog Posts
      </Link>
    </div>
  </div>
</section>


    <section className="md:bg-transparent relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
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
            className="inline-block px-6 py-3 bg-yellow-400 text-white font-semibold rounded-full shadow-md hover:bg-yellow-500 transition"
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