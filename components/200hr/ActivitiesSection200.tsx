// components/ActivitiesSection.tsx

import React from 'react';

interface Activity {
  title: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Yoga Nidra sessions",
    description:
      "Unwind and deeply relax with the Yoga Nidra session, designed to help you absorb the day's lessons and restore your mind",
    image: "/images/yoga-nidra.jpg",
  },
  {
    title: "Introduction to the Ayurvedic diet",
    description:
      "Get introduced to Ayurveda, a traditional system of medicine from India that emphasizes holistic health and wellness through a balance of mind, body, and spirit",
    image: "/images/ayurvedic-diet.jpg",
  },
  {
    title: "Sound session",
    description:
      "Delve into sound healing sessions that use therapeutic vibrations to promote inner peace and bodily harmony",
    image: "/images/sound-session.jpg",
  },
  {
    title: "Ice Bath experience",
    description:
      "Energize and invigorate your body with an ice bath session, a powerful practice to enhance circulation and mental resilience",
    image: "/images/ice-bath.jpg",
  },
  {
    title: "Business of Yoga Workshop",
    description:
      "Learn to navigate the business aspects of yoga, from marketing strategies to studio management, crucial for aspiring yoga professionals",
    image: "/images/business-yoga.jpg",
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className="bg-transparent py-16 text-center relative overflow-hidden">
      {/* Optional radial background decoration */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12">
          Activities included in the course
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-amber-50 p-6 rounded-xl shadow hover:shadow-lg transition relative"
            >
              <div className="flex justify-center -mt-16 mb-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-20 h-20 rounded-full border-4 border-white shadow object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;