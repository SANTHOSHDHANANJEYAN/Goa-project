'use client';

import Image from 'next/image';
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="pt-12 pb-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#150e70] mb-12 text-center">
          Yoga Alliance
        </h2>

        {/* Top Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch relative z-10">
          {/* Review 1 */}
          <article className="flex flex-col bg-[bisque] p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#150e70]">
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
                <p className="text-sm text-gray-600">Yoga Enthusiast</p>
              </div>
            </div>
            <p className="text-base text-gray-800 leading-relaxed">
              “It was for sure an incredible journey to have had the course with
              Rishikul Yogshala, I’ve learnt for life! I’ve been practicing at home
              ever since I concluded the course and honestly, I’ve never felt so
              natural and inspired during my own practice. I could only classify it
              as ‘WONDERFUL’! Especially being in Pohkara, Goa – a magical destination!”
            </p>
          </article>

          {/* Review 2 */}
          <article className="flex flex-col bg-[bisque] p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#150e70]">
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
                <p className="text-sm text-gray-600">Health & Wellness Coach</p>
              </div>
            </div>
            <p className="text-base text-gray-800 leading-relaxed">
              “We visited Rishikul Yogshala for the second time this February, the
              first was in July 2013. That visit changed my life completely, so I felt
              drawn back to this school and their teachers. Being around such inspiring,
              energetic and wise people, I feel truly blessed.”
            </p>
          </article>
        </div>

        {/* Bottom Reviews */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch relative z-10">
          {/* Review 3 */}
          <article className="flex flex-col bg-[bisque] p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#150e70]">
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
                <p className="text-sm text-gray-600">Yoga Practitioner</p>
              </div>
            </div>
            <p className="text-base text-gray-800 leading-relaxed">
              “It’s hard to review a program that spans a month, but overall I would
              describe the Rishikul 200hr program in Goa as challenging, life-changing,
              and inspiring. I really connected with each of the six instructors and I
              cannot thank them enough for the impact they had and will continue to have
              in my life.”
            </p>
          </article>

          {/* Review 4 */}
          <article className="flex flex-col bg-[bisque] p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#150e70]">
                <Image
                  src="/review4.jpg"
                  alt="Customer 4 Natasha Thompson"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Natasha Thompson
                </h3>
                <p className="text-sm text-gray-600">Mindfulness Practitioner</p>
              </div>
            </div>
            <p className="text-base text-gray-800 leading-relaxed">
              “There’s one thing for certain, I’m not the same person I was 28 days ago
              before starting this yoga teacher training program. My life has been
              changed in the most beautiful and positive sense. I’m extremely grateful
              to Rishikul Yogashala and its teachers.”
            </p>
          </article>
        </div>

        {/* More Reviews Button */}
        <div className="text-center mt-12">
          <a
            href="https://r.yogaalliance.org/SchoolProfileReviews?sid=3584"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#150e70] text-white rounded-full font-medium shadow-md hover:bg-yellow-500 hover:text-[#150e70] transition-all duration-300"
          >
            More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
