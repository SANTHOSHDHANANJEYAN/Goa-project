import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-300">
              Yoga Teacher Training does not necessarily mean performing difficult asanas. It’s a journey of the heart, mind, and soul—transforming you into a new, radiant version of yourself. Our school is a haven for spiritual growth, welcoming both beginners and experienced yogis. Join us in Goa and rediscover the magic of yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Info + Image Section */}
      <section className="bg-transparent px-6 py-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Registered Yoga School In Goa
              <br />
              <span className="text-2xl font-medium text-gray-700">
                | Internationally Recognized
              </span>
            </h2>
            <div className="border-l-4 border-[#CFA66C] pl-4 text-gray-900 mb-4">
              In 2010, Master Gangesha and Master Bipin Baloni established Rishikul Yogshala in Goa to share the spiritual beauty of Yoga and encourage a peaceful yogic lifestyle.
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are a Registered Yoga School (RYS) recognized by Yoga Alliance International, dedicated to delivering high-quality education aligned with international standards. Over 10,000 students have trained with us and become respected yoga professionals around the world.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/boat.png"
              
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Rishikul Yogshala Section */}
      <section className="bg-transparent px-6 py-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3E7079] mb-6">
              Rishikul Yogshala
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our mission is to preserve the ancient science of yoga. Through rigorous and sincere practice passed down by Indian sages, we aim to share timeless wisdom on health, peace, and purpose with the world.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our curriculum includes traditional styles like Hatha, Ashtanga, and Vinyasa, as well as modern forms like Power, Yin, and Aerial Yoga. We also teach Pranayama, Meditation, Ayurveda, and Philosophy for a truly holistic education.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/e0ae025d-8191-46ca-8905-a0a419f4090d.png"
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
            <h2 className="text-green-700 text-2xl font-bold mb-2">Yoga Alliance Certified</h2>
            <h3 className="text-4xl font-semibold text-gray-900 mb-6">
              Registered Yoga School (RYS)
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Yoga Alliance offers internationally recognized programs: 100, 200, 300, and 500-hour Teacher Training Courses. These programs ensure global standards for yoga certification and are crafted to uphold the integrity and quality of authentic yoga education.
            </p>
            <div className="border-l-4 border-yellow-500 pl-4 text-gray-600 italic text-md">
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
    </>
  );
}
