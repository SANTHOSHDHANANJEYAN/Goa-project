'use client';

import Image from 'next/image';

export default function DailySchedule14() {
  const itinerary = [
    { day: 'Day 1: Arrival Day', description: 'Pickup from Airport – Check-In After 10 AM – Welcome Ceremony followed by Digestive Lunch – Introduction to Retreat schedule – Gentle Yoga and Meditation – Holistic Dinner – Relaxing & stargazing' },
    { day: 'Day 2:', description: 'Morning Nature Walk – Holistic Drink – Yoga Asana – Meditation – Healthy Breakfast – Yoga Therapy – Digestive Lunch – Visit To World Famous Ganga Arati – Holistic Dinner' },
    { day: 'Day 3:', description: 'Morning Nature Walk – Holistic Drink – Yoga Asana – Pranayama – Healthy Breakfast – Wellness Holistic Massage – Digestive Lunch – Yoga Nidra and Meditation – Holistic Dinner' },
    { day: 'Day 4:', description: 'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner' },
    { day: 'Day 5:', description: 'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner' },
    { day: 'Day 6:', description: 'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner' },
    { day: 'Day 7:', description: 'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner' },
    { day: 'Day 8:', description: 'Silent Morning – Mindfulness Meditation – Yoga Asana – Healthy Breakfast – Ayurveda Talk – Digestive Lunch – Art Therapy Session – Sharing Circle – Holistic Dinner' },
    { day: 'Day 9:', description: 'Morning Nature Hike – Pranayama – Yoga Asana – Healthy Breakfast – Detox Workshop – Digestive Lunch – Sound Healing Therapy – Holistic Dinner – Journaling' },
    { day: 'Day 10:', description: 'Sunrise Meditation – Yoga Asana – Healthy Breakfast – Cooking Class (Ayurvedic Recipes) – Digestive Lunch – Free Time – Evening Satsang – Holistic Dinner' },
    { day: 'Day 11:', description: 'Morning Yoga Flow – Pranayama – Breakfast – Chakra Healing Workshop – Digestive Lunch – Partner Yoga – Evening Meditation – Holistic Dinner' },
    { day: 'Day 12:', description: 'Morning Nature Walk – Yoga Asana – Mindful Eating Breakfast – Philosophy Class – Digestive Lunch – Free Time – Kirtan Night – Holistic Dinner' },
    { day: 'Day 13:', description: 'Gratitude Meditation – Yoga Asana – Healthy Breakfast – One-on-One Wellness Review – Digestive Lunch – Creative Writing & Journaling – Campfire Gathering – Holistic Dinner' },
    { day: 'Day 14: Departure Day', description: 'Sunrise Meditation – Closing Circle – Sharing Experiences – Light Breakfast – Pack-up – Departure Before 12 PM with Airport Drop-Off' },
  ];

  const images = ['1.jpg', '2.jpg', '4.jpg', '5.jpg'];

  return (
    <section className="bg-white text-[#150e70] flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-20 py-10 gap-10 items-start">
      {/* Left - Timeline */}
      <div className="w-full lg:w-2/3 pt-4">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl text-center lg:text-left font-semibold mb-6">
          Our Sample Schedule: Table of Time and Program
        </h2>

        <div className="relative border-l-2 border-dotted border-[#150e70] ml-4 pl-6 space-y-8">
          {itinerary.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-4 border-[#150e70] flex items-center justify-center">
                <span className="w-2 h-2 bg-[#150e70] rounded-full" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold">{item.day}</h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Stacked Images */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[384px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/Curriculumimg/${img}`}
              alt={`Retreat Image ${idx + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
