'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StoriesSection: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* First Section */}
      <section className="relative text-center bg-white py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          {/* Image on Top */}
          <div className="mb-10 rounded-[3rem] overflow-hidden shadow-xl">
            <Image
              src="/stories.png"
              alt="Rishikul Yogshala Goa"
              width={1920}
              height={700}
              className="w-full h-auto rounded-[3rem]"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-slide-up">
            Best Yoga Teacher Training School in Goa
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-lg text-gray-600 mb-8 animate-slide-up animation-delay-200 max-w-5xl mx-auto leading-relaxed">
            Over the last 15 years, Rishikul Yogshala has been recognized as one of the Best Yoga Schools in Goa 
            dedicated to providing authentic, traditional and classical Yogic Education. 'Rishikul' is a Sanskrit 
            word which means a place where people arrive to Gain Knowledge, and 'Yogshala' is defined as a place 
            where people Arrive to Learn, Practice, Share and Grow Together.
          </p>

          {/* Organization Info */}
          <p className="text-lg text-gray-600 mb-10 animate-slide-up animation-delay-400 max-w-5xl mx-auto leading-relaxed">
            Our organization is headquartered in India, with one of its branches in Goa and has been guiding 
            Students on the path of their Yogic Journey. We are a team of individuals from a Yogic and 
            Spiritual background and believe in disseminating the Classical Yogic Techniques with a Modern Viewpoint.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative text-center bg-white py-12 shadow-md mt-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Secondary Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#150e70] mb-6 animate-slide-up animation-delay-600">
            Why Choose Rishikul Yogshala Goa?
          </h2>

          {/* Tagline */}
          <p className="text-xl text-[#150e70] font-semibold mb-6 animate-slide-up animation-delay-800">
            If you are looking to Experience Authentic Yoga Teacher Training in India, 
            this would be Rishikul Yogshala Goa.
          </p>

          {/* Detailed Description */}
          <div className="text-lg text-[#150e70] mb-8 animate-slide-up animation-delay-1000 max-w-5xl mx-auto space-y-6 leading-relaxed">
            <p>
              Rishikul Yogshala Goa is a Yoga Alliance–Certified School in Goa dedicated to preserving 
              the true essence of yoga. Situated close to nature and guided by teachers of International 
              repute, we offer 100 Hour Yoga Teacher Training Program, 200 Hour Yoga Teacher Training Program, 
              300 Hour Yoga Teacher Training Program and 500 Hour Yoga Teacher Training courses that merge 
              classical and traditional yogic practices with modern scientific learning.
            </p>
            
            <p>
              With over 15 years of International Repute in Yoga Teacher Training and having trained over 
              34,000 Students from around 80+ countries, Rishikul Yogshala Goa stands as a testimony of 
              Yogic excellence.
            </p>
            
            <p>
              The yogic environment allows students to experience yoga as a Lifestyle, integrating asana, 
              pranayama, meditation, and yoga philosophy for an individual's well-being.
            </p>
            
            <p>
              Whether you are beginning your yogic journey or want to enhance your yogic practice, 
              Rishikul Yogshala Goa is a well-recognized Yoga Teacher Training School in India which 
              provides the perfect space for you to transform as a fantastic practitioner and become 
              a confident Certified yoga teacher.
            </p>
          </div>

          {/* Button */}
          <Link href="/Aboutyogshala">
            <button className="bg-[#150e70] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300">
              LEARN MORE ABOUT US
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoriesSection;
