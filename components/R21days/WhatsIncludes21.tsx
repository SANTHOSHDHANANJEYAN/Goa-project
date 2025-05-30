import React from 'react';

interface Activity {
  title: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Yoga and Meditation Sessions",
    description:
      "Experience daily guided yoga and meditation sessions designed to enhance flexibility, inner peace, and mindfulness.",
    image: "/Meditation.jpg",
  },
  {
    title: "Accommodation",
    description:
      "Stay in comfortable, peaceful rooms designed with natural materials and minimalist decor, offering rest and rejuvenation.",
    image: "/Accommodation.jpg",
  },
  {
    title: "Meals (Vegetarian & Vegan Options)",
    description:
      "Enjoy nourishing vegetarian and vegan meals made from fresh, locally sourced ingredients, supporting a healthy lifestyle.",
    image: "/Meals.jpg",
  },
  {
    title: "Wellness Treatments",
    description:
      "Indulge in holistic wellness treatments such as massages, herbal therapies, and detox practices for physical and mental balance.",
    image: "/Wellness.jpg",
  },
  {
    title: "Cultural Excursions",
    description:
      "Explore local culture through guided tours, temple visits, traditional music, and dance performances enriching your retreat experience.",
    image: "/Cultural.jpg",
  },
    {
    title: "Cultural Excursions",
    description:
      "Explore local culture through guided tours, temple visits, traditional music, and dance performances enriching your retreat experience.",
    image: "/Cultural.jpg",
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className="bg-transparent py-12 sm:py-16 text-center relative overflow-hidden">
      {/* Optional radial background decoration */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#150e70] mb-16 sm:mb-20">
          Course Inclusions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-amber-50 p-6 rounded-xl shadow hover:shadow-lg transition relative flex flex-col items-center"
            >
              <div className="-mt-16 mb-6">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow object-cover"
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
