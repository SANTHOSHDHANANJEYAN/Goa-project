import Image from 'next/image';

export default function DailySchedule14() {
  const itinerary = [
    {
      day: 'Day 1: Arrival Day',
      description:
        'Pickup from Airport – Check-In After 10 AM – Welcome Ceremony followed by Digestive Lunch – Introduction to Retreat schedule – Gentle Yoga and Meditation – Holistic Dinner – Relaxing & stargazing',
    },
    {
      day: 'Day 2:',
      description:
        'Morning Nature Walk – Holistic Drink – Yoga Asana – Meditation – Healthy Breakfast – Yoga Therapy – Digestive Lunch – Visit To World Famous Ganga Arati – Holistic Dinner',
    },
    {
      day: 'Day 3:',
      description:
        'Morning Nature Walk – Holistic Drink – Yoga Asana – Pranayama – Healthy Breakfast – Wellness Holistic Massage – Digestive Lunch – Yoga Nidra and Meditation – Holistic Dinner',
    },
    {
      day: 'Day 4:',
      description:
        'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 5:',
      description:
        'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 6:',
      description:
        'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 7:',
      description:
        'Morning Nature Walk – Holistic Drink – Ganga Bath and Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 8:',
      description:
        'Silent Morning – Mindfulness Meditation – Yoga Asana – Healthy Breakfast – Ayurveda Talk – Digestive Lunch – Art Therapy Session – Sharing Circle – Holistic Dinner',
    },
    {
      day: 'Day 9:',
      description:
        'Morning Nature Hike – Pranayama – Yoga Asana – Healthy Breakfast – Detox Workshop – Digestive Lunch – Sound Healing Therapy – Holistic Dinner – Journaling',
    },
    {
      day: 'Day 10:',
      description:
        'Sunrise Meditation – Yoga Asana – Healthy Breakfast – Cooking Class (Ayurvedic Recipes) – Digestive Lunch – Free Time – Evening Satsang – Holistic Dinner',
    },
    {
      day: 'Day 11:',
      description:
        'Morning Yoga Flow – Pranayama – Breakfast – Chakra Healing Workshop – Digestive Lunch – Partner Yoga – Evening Meditation – Holistic Dinner',
    },
    {
      day: 'Day 12:',
      description:
        'Morning Nature Walk – Yoga Asana – Mindful Eating Breakfast – Philosophy Class – Digestive Lunch – Free Time – Kirtan Night – Holistic Dinner',
    },
    {
      day: 'Day 13:',
      description:
        'Gratitude Meditation – Yoga Asana – Healthy Breakfast – One-on-One Wellness Review – Digestive Lunch – Creative Writing & Journaling – Campfire Gathering – Holistic Dinner',
    },
    {
      day: 'Day 14: Departure Day',
      description:
        'Sunrise Meditation – Closing Circle – Sharing Experiences – Light Breakfast – Pack-up – Departure Before 12 PM with Airport Drop-Off',
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-20 py-10 gap-10 items-stretch">
      {/* Left - Timeline */}
      <div className="w-full lg:w-2/3 pt-[2rem]">
        <h2 className="text-2xl sm:text-3xl text-center lg:text-left font-semibold text-[#0C1B4D] mb-6">
          Our Sample Schedule: Table of Time and Program
        </h2>
        <div className="border-l-2 border-dotted border-orange-500 ml-4 pl-6 space-y-8 relative">
          {itinerary.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center">
                {index === 0 ? (
                  <span className="text-orange-500">📍</span>
                ) : (
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{item.day}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

     
          {/* Right - Two stacked images */}
     <div className="w-full lg:w-1/3 flex flex-col gap-[1rem]">
       <div className="relative w-full h-[400px]">
         <Image
           src="/gallery/12.WEBP"
           alt="Retreat Top"
           fill
           className="rounded-lg shadow-lg object-cover"
           sizes="(max-width: 768px) 100vw, 33vw"
         />
       </div>
       <div className="relative w-full h-[384px]">
         <Image
           src="/gallery/13.WEBP"
           alt="Retreat Bottom"
           fill
           className="rounded-lg shadow-lg object-cover"
           sizes="(max-width: 768px) 100vw, 33vw"
         />
       </div>
        <div className="relative w-full h-[384px]">
         <Image
           src="/gallery/13.WEBP"
           alt="Retreat Bottom"
           fill
           className="rounded-lg shadow-lg object-cover"
           sizes="(max-width: 768px) 100vw, 33vw"
         />
       </div>
        <div className="relative w-full h-[384px]">
         <Image
           src="/gallery/13.WEBP"
           alt="Retreat Bottom"
           fill
           className="rounded-lg shadow-lg object-cover"
           sizes="(max-width: 768px) 100vw, 33vw"
         />
       </div>
      
     </div>
    </section>
  );
}
