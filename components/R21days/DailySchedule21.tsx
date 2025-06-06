import Image from 'next/image';

export default function DailySchedule21() {
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
        'Nature Walk – Holistic Drink – Yoga Asana – Pranayama – Healthy Breakfast – Wellness Holistic Massage – Digestive Lunch – Yoga Nidra and Meditation – Holistic Dinner',
    },
    {
      day: 'Day 4:',
      description:
        'Nature Walk – Holistic Drink – Ganga Bath – Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner',
    },
    {
      day: 'Day 5:',
      description:
        'Nature Walk – Holistic Drink – Yoga Asana – Meditation – Breakfast – Ayurvedic Cooking Workshop – Digestive Lunch – Mantra Chanting – Holistic Dinner',
    },
    {
      day: 'Day 6:',
      description:
        'Sunrise Yoga – Holistic Drink – Breathwork Session – Breakfast – Free Time for Reflection – Digestive Lunch – Creative Journaling – Yoga Nidra – Dinner',
    },
    {
      day: 'Day 7:',
      description:
        'Nature Walk – Yoga Asana – Guided Meditation – Breakfast – Chakra Workshop – Digestive Lunch – Sound Healing – Dinner – Stargazing',
    },
    {
      day: 'Day 8:',
      description:
        'Yoga – Meditation – Philosophy Talk – Healthy Breakfast – Forest Walk – Digestive Lunch – Reiki Healing – Holistic Dinner',
    },
    {
      day: 'Day 9:',
      description:
        'Pranayama – Sunrise Yoga – Herbal Drink – Breakfast – Volunteer Activity – Digestive Lunch – Guided Visualization – Dinner',
    },
    {
      day: 'Day 10:',
      description:
        'Nature Walk – Holistic Drink – Partner Yoga – Breakfast – Wellness Workshop – Digestive Lunch – Sunset Meditation – Dinner',
    },
    {
      day: 'Day 11:',
      description:
        'Yoga Asana – Chanting – Philosophy Lecture – Breakfast – Massage Therapy – Digestive Lunch – Group Circle – Dinner',
    },
    {
      day: 'Day 12:',
      description:
        'Meditation – Breathwork – Breakfast – Day Trip to Temple – Packed Lunch – Return & Rest – Restorative Yoga – Dinner',
    },
    {
      day: 'Day 13:',
      description:
        'Yoga – Tea Ceremony – Breakfast – Sound Bath – Digestive Lunch – Nature Sketching – Evening Meditation – Dinner',
    },
    {
      day: 'Day 14:',
      description:
        'Pranayama – Yoga Flow – Meditation – Breakfast – Yoga Nidra Workshop – Digestive Lunch – Campfire Sharing – Dinner',
    },
    {
      day: 'Day 15:',
      description:
        'Silent Morning – Meditation – Holistic Drink – Breakfast – Free Exploration Time – Digestive Lunch – Restorative Yoga – Dinner',
    },
    {
      day: 'Day 16:',
      description:
        'Kriya Yoga Practice – Herbal Tea – Light Breakfast – Ayurvedic Lecture – Digestive Lunch – Deep Stretching – Evening Kirtan',
    },
    {
      day: 'Day 17:',
      description:
        'Nature Walk – Yoga – Breakfast – Workshop on Yogic Diet – Digestive Lunch – Gratitude Journaling – Sunset Asana – Dinner',
    },
    {
      day: 'Day 18:',
      description:
        'Meditation – Yoga – Philosophy Talk – Breakfast – Sharing Circle – Digestive Lunch – Candlelight Yoga – Dinner',
    },
    {
      day: 'Day 19:',
      description:
        'Sun Salutations – Pranayama – Breakfast – Free Time – Digestive Lunch – Gentle Yoga – Yoga Nidra – Dinner',
    },
    {
      day: 'Day 20:',
      description:
        'Morning Routine – Sound Therapy – Breakfast – Rejuvenation Massage – Digestive Lunch – Kirtan – Dinner',
    },
    {
      day: 'Day 21: Departure Day',
      description:
        'Morning Meditation – Light Breakfast – Closing Ceremony – Feedback Sharing – Check-Out before 12 PM – Airport Drop-off',
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-20 py-10 gap-10 items-stretch">
      {/* Left - Timeline */}
      <div className="w-full lg:w-2/3">
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
<div className="w-full lg:w-1/3 flex flex-col gap-[2.5rem]">
  <div className="relative w-full h-[400px]">
    <Image
      src="/Curriculumimg/8.jpg"
      alt="Retreat Top"
      fill
      className="rounded-lg shadow-lg object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
  <div className="relative w-full h-[400px]">
    <Image
      src="/Curriculumimg/5.jpg"
      alt="Retreat Bottom"
      fill
      className="rounded-lg shadow-lg object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
   <div className="relative w-full h-[400px]">
    <Image
      src="/Curriculumimg/4.jpg"
      alt="Retreat Bottom"
      fill
      className="rounded-lg shadow-lg object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
   <div className="relative w-full h-[400px]">
    <Image
      src="/Curriculumimg/2.jpg"
      alt="Retreat Bottom"
      fill
      className="rounded-lg shadow-lg object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
   <div className="relative w-full h-[400px]">
    <Image
      src="/Curriculumimg/1.jpg"
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
