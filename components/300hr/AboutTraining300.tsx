'use client';

import { MdHotelClass } from 'react-icons/md';
import Image from 'next/image';

export default function AboutTraining() {
  return (
    <section className="relative py-16 px-6 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Text Content */}
        <div className="pb-8 md:pb-0">
          <p className="uppercase text-indigo-900 font-medium tracking-wide flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-indigo-900 rounded-full inline-block" />
            About the Training
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#150e70] mb-6">
            Join us for <br />
            300 Hrs Multi Style Yoga Teacher Training
          </h2>

          <ul className="space-y-4 text-[#150e70]">
            {[
              'Yoga Alliance Accredited Certificate (valid worldwide)',
              '27-Days / 26-Nights in a luxurious boutique resort in Goa',
              'Three healthy vegan/vegetarian buffet meals daily',
              'Daily Asana Practice, Meditation & Pranayama Sessions',
              'Teaching Methodology & Hands-on Teaching Practice',
              'Comfortable accommodation in a peaceful, nature-filled setting',
              'Small Group Size for personalized attention and guidance',
              'Personal Growth & Transformation in a supportive community',
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <MdHotelClass className="text-[#150e70] mt-1 flex-shrink-0" size={22} />
                <span className="text-[#150e70]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Content */}
        <div className="grid grid-cols-2 gap-4 pb-8 md:pb-0">
          <div className="col-span-2 overflow-hidden rounded-xl hover:scale-105 transition-transform">
            <Image
              src="/aboutpics/524.jpg"
              alt="Yoga Group practicing together"
              className="rounded-xl object-cover w-full h-[325px]"
              width={600}
              height={325}
            />
          </div>
          <div className="overflow-hidden rounded-xl hover:scale-105 transition-transform">
            <Image
              src="/aboutpics/555.jpg"
              alt="Healthy vegan/vegetarian meals served"
              className="rounded-xl object-cover w-full h-[160px]"
              width={300}
              height={160}
            />
          </div>
          <div className="overflow-hidden rounded-xl hover:scale-105 transition-transform">
            <Image
              src="/aboutpics/777.jpg"
              alt="Luxury resort room for students"
              className="rounded-xl object-cover w-full h-[160px]"
              width={300}
              height={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
