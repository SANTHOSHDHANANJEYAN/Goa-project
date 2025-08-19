'use client';

import Image from 'next/image';
import React from 'react';

export default function YogaAllianceSection() {
  return (
    <section className="pt-[2rem] pb-[4rem] bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#150e70] mb-8 text-center text-shadow-md">
          Yoga Alliance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Review 1 */}
          <article
            className="order-2 lg:order-1 relative p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300 bg-[bisque]"
            aria-label="Review from Fabi Porta"
          >
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
          <article
            className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300"
            aria-label="Review from Maithe Vl"
          >
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
          <article
            className="order-2 lg:order-1 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300"
            aria-label="Review from Sarah Schu"
          >
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
          <article
            className="order-1 lg:order-2 relative bg-[bisque] p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300"
            aria-label="Review from Natasha Thompson"
          >
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
  );
}
