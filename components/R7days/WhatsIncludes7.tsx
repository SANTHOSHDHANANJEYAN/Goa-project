'use client';

import React from 'react';
import Image from 'next/image';

interface Activity {
  title: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: 'Sunrise Beach Yoga',
    description:
      'Begin your day with energizing yoga sessions by the rising sun over the sea.',
    image: '/RetreatBG/Sunrise.jpeg.jpg',
  },
  {
    title: 'Sound Healing & Meditation',
    description:
      'Experience deep relaxation through guided sound healing and meditation.',
    image: '/RetreatBG/Sound.jpeg.jpg',
  },
  {
    title: 'Nature Walks & Beach View',
    description:
      'Reconnect with nature through mindful walks along Goa’s lush trails.',
    image: '/RetreatBG/naturalwalk.jpeg.jpg',
  },
  {
    title: 'Kirtan & Bhajan Evenings',
    description:
      'Soak in the bliss of devotional music and community singing under the stars.',
    image: '/RetreatBG/Kirtans.jpeg.jpg',
  },
  {
    title: 'Art & Expression Therapy',
    description:
      'Channel creativity and inner clarity through guided art-based expression.',
    image: '/RetreatBG/art.jpeg.jpg',
  },
  {
    title: 'Yoga Wellness Workshop',
    description:
      'Learn foundational principles of self-care, mediation and relaxation',
    image: '/RetreatBG/yogawellness.jpeg.jpg',
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className="bg-transparent py-12 sm:py-16 text-center relative overflow-hidden pb-0">
      {/* Optional radial background decoration */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#150e70] mb-12 sm:mb-16">
          Retreat Program Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300 flex flex-col items-center"
            >
              <div className="-mt-16 mb-6">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-white shadow object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#150e70] text-center">
                {activity.title}
              </h3>
              <p className="text-sm sm:text-base text-[#150e70] mt-3 text-center">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
