import Image from 'next/image';

export default function DailySchedule7() {
  const itinerary = [
    {
      day: 'Day 1: Arrival Day',
      description:
        'Pickup from Airport – Check-In After 10 AM – Welcome Ceremony followed by Digestive Lunch – Introduction to Retreat schedule – Gentle Yoga and Meditation – Holistic Dinner – Relaxing & stargazing',
    },
    {
      day: 'Day 2:',
      description:
        'Day starts with morning Nature Walk – Holistic Drink – Yoga Asana – Meditation – Healthy Breakfast – Yoga Therapy – Digestive Lunch – Visit To World Famous Ganga Arati – Holistic Dinner',
    },
    {
      day: 'Day 3:',
      description:
        'Day starts with morning Nature Walk – Holistic Drink – Yoga Asana – Pranayama – Healthy Breakfast – Wellness Holistic Massage – Digestive Lunch – Yoga Nidra and Meditation – Holistic Dinner',
    },
    {
      day: 'Day 4:',
      description:
        'Day starts with morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 5:',
      description:
        'Day starts with morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 6:',
      description:
        'Day starts with morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 7:',
      description:
        'Day starts with morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga asana – Yoga Nidra – Holistic Dinner',
    },
  ];

  return (
    <section className="bg-white text-[#150e70] flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 py-10 gap-10">
      {/* Left - Timeline */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center lg:text-left font-semibold mb-6">
          Our Sample Schedule: Table of Time and Program
        </h2>
        <div className="border-l-2 border-dotted border-[#150e70] ml-4 sm:ml-6 pl-4 sm:pl-6 space-y-8 relative">
          {itinerary.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-4 border-[#150e70] flex items-center justify-center">
                <span className="w-2 h-2 bg-[#150e70] rounded-full" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold">{item.day}</h3>
              <p className="text-gray-800 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-full lg:w-1/3">
        <div className="relative w-full h-72 sm:h-[400px] md:h-[500px] lg:h-full">
          <Image
            src="/aboutpics/524.jpg"
            alt="Retreat"
            fill
            className="rounded-lg shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
