import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 mt-[5.5rem] bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in text-[#180b67]">
              About Us
            </h1>
            <p className="text-lg text-black animate-fade-in animation-delay-300">
              Yoga Teacher Training does not necessarily mean performing difficult asanas. It’s a journey of the heart, mind, and soul—transforming you into a new, radiant version of yourself. Our school is a haven for spiritual growth, welcoming both beginners and experienced yogis. Join us in Goa and rediscover the magic of yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Info + Image Section */}
      <section className="bg-transparent px-6 py-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#180b67]">
              Registered Yoga School In Goa
              <br />
              <span className="text-2xl font-medium text-black">
                | Internationally Recognized
              </span>
            </h2>
            <div className="border-l-4 border-[#180b67] pl-4 text-black mb-4">
              In 2010, Master Gangesha and Master Bipin Baloni established Rishikul Yogshala in Goa to share the spiritual beauty of Yoga and encourage a peaceful yogic lifestyle.
            </div>
            <p className="text-black leading-relaxed text-lg">
              We are a Registered Yoga School (RYS) recognized by Yoga Alliance International, dedicated to delivering high-quality education aligned with international standards. Over 10,000 students have trained with us and become respected yoga professionals around the world.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/aboutpics/about1.png"
              alt="Goa Houseboat"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Rishikul Yogshala Section */}
      <section className="bg-transparent px-6 pb-[4rem] lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#180b67] mb-6">
              Rishikul Yogshala
            </h2>
            <p className="text-black text-lg leading-relaxed mb-4">
              Our mission is to preserve the ancient science of yoga. Through rigorous and sincere practice passed down by Indian sages, we aim to share timeless wisdom on health, peace, and purpose with the world.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Our curriculum includes traditional styles like Hatha, Ashtanga, and Vinyasa, as well as modern forms like Power, Yin, and Aerial Yoga. We also teach Pranayama, Meditation, Ayurveda, and Philosophy for a truly holistic education.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/aboutpics/about2.png"
              alt="Rishikul Yogshala Group"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Yoga Alliance Certification Section */}
      <section className="bg-[#f7f9f8] py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[#180b67] text-2xl font-bold mb-2">
              Yoga Alliance Certified
            </h2>
            <h3 className="text-4xl font-semibold text-[#180b67] mb-6">
              Registered Yoga School (RYS)
            </h3>
            <p className="text-black text-lg leading-relaxed mb-6">
              Yoga Alliance offers internationally recognized programs: 100, 200, 300, and 500-hour Teacher Training Courses. These programs ensure global standards for yoga certification and are crafted to uphold the integrity and quality of authentic yoga education.
            </p>
            <div className="border-l-4 border-[#180b67] pl-4 text-black italic text-md">
              “We are proud to be a part of this global standard, shaping skilled yoga teachers since 2010.”
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/certificate1.jpg"
                alt="Yoga Alliance RYS 200 Certificate"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/certificate2.jpg"
                alt="Yoga Alliance RYS 300 Certificate"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
       <Link
      href="https://wa.me/919520024333"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </Link>
    </>
  );
}
