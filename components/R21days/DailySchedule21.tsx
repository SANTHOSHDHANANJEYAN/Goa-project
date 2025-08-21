import Image from 'next/image';

export default function DailySchedule21() {
  const itinerary = [
    { day: 'Day 1: Arrival Day', description: 'Pickup from Airport – Check-In After 10 AM – Welcome Ceremony followed by Digestive Lunch – Introduction to Retreat schedule – Gentle Yoga and Meditation – Holistic Dinner – Relaxing & stargazing' },
    { day: 'Day 2:', description: 'Morning Nature Walk – Holistic Drink – Yoga Asana – Meditation – Healthy Breakfast – Yoga Therapy – Digestive Lunch – Visit To World Famous Ganga Arati – Holistic Dinner' },
    { day: 'Day 3:', description: 'Nature Walk – Holistic Drink – Yoga Asana – Pranayama – Healthy Breakfast – Wellness Holistic Massage – Digestive Lunch – Yoga Nidra and Meditation – Holistic Dinner' },
    { day: 'Day 4:', description: 'Nature Walk – Holistic Drink – Ganga Bath – Meditation – Healthy Breakfast – Rejuvenation Therapy – Digestive Lunch – Yoga Asana – Yoga Nidra – Holistic Dinner' },
    { day: 'Day 5:', description: 'Nature Walk – Holistic Drink – Yoga Asana – Meditation – Breakfast – Ayurvedic Cooking Workshop – Digestive Lunch – Mantra Chanting – Holistic Dinner' },
    { day: 'Day 6:', description: 'Sunrise Yoga – Holistic Drink – Breathwork Session – Breakfast – Free Time for Reflection – Digestive Lunch – Creative Journaling – Yoga Nidra – Dinner' },
    { day: 'Day 7:', description: 'Nature Walk – Yoga Asana – Guided Meditation – Breakfast – Chakra Workshop – Digestive Lunch – Sound Healing – Dinner – Stargazing' },
    { day: 'Day 8:', description: 'Yoga – Meditation – Philosophy Talk – Healthy Breakfast – Forest Walk – Digestive Lunch – Reiki Healing – Holistic Dinner' },
    { day: 'Day 9:', description: 'Pranayama – Sunrise Yoga – Herbal Drink – Breakfast – Volunteer Activity – Digestive Lunch – Guided Visualization – Dinner' },
    { day: 'Day 10:', description: 'Nature Walk – Holistic Drink – Partner Yoga – Breakfast – Wellness Workshop – Digestive Lunch – Sunset Meditation – Dinner' },
    { day: 'Day 11:', description: 'Yoga Asana – Chanting – Philosophy Lecture – Breakfast – Massage Therapy – Digestive Lunch – Group Circle – Dinner' },
    { day: 'Day 12:', description: 'Meditation – Breathwork – Breakfast – Day Trip to Temple – Packed Lunch – Return & Rest – Restorative Yoga – Dinner' },
    { day: 'Day 13:', description: 'Yoga – Tea Ceremony – Breakfast – Sound Bath – Digestive Lunch – Nature Sketching – Evening Meditation – Dinner' },
    { day: 'Day 14:', description: 'Pranayama – Yoga Flow – Meditation – Breakfast – Yoga Nidra Workshop – Digestive Lunch – Campfire Sharing – Dinner' },
    { day: 'Day 15:', description: 'Silent Morning – Meditation – Holistic Drink – Breakfast – Free Exploration Time – Digestive Lunch – Restorative Yoga – Dinner' },
    { day: 'Day 16:', description: 'Kriya Yoga Practice – Herbal Tea – Light Breakfast – Ayurvedic Lecture – Digestive Lunch – Deep Stretching – Evening Kirtan' },
    { day: 'Day 17:', description: 'Nature Walk – Yoga – Breakfast – Workshop on Yogic Diet – Digestive Lunch – Gratitude Journaling – Sunset Asana – Dinner' },
    { day: 'Day 18:', description: 'Meditation – Yoga – Philosophy Talk – Breakfast – Sharing Circle – Digestive Lunch – Candlelight Yoga – Dinner' },
    { day: 'Day 19:', description: 'Sun Salutations – Pranayama – Breakfast – Free Time – Digestive Lunch – Gentle Yoga – Yoga Nidra – Dinner' },
    { day: 'Day 20:', description: 'Morning Routine – Sound Therapy – Breakfast – Rejuvenation Massage – Digestive Lunch – Kirtan – Dinner' },
    { day: 'Day 21: Departure Day', description: 'Morning Meditation – Light Breakfast – Closing Ceremony – Feedback Sharing – Check-Out before 12 PM – Airport Drop-off' },
  ];

  const images = [
    '/Curriculumimg/8.jpg',
    '/Curriculumimg/5.jpg',
    '/Curriculumimg/4.jpg',
    '/Curriculumimg/2.jpg',
    '/Curriculumimg/1.jpg',
  ];

  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-20 py-10 gap-10 items-stretch bg-white">
      
      {/* Left - Timeline */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-left text-center font-semibold text-[#150E70] mb-8">
          Our Sample Schedule: Table of Time and Program
        </h2>
        <div className="border-l-2 border-dotted border-[#150E70] ml-4 pl-6 space-y-8 relative flex-1">
          {itinerary.map((item, idx) => (
            <article key={idx} className="relative">
              <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-white border-4 border-[#150E70] flex items-center justify-center">
                <span className="w-3 h-3 bg-[#150E70] rounded-full" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#150E70] mb-1">{item.day}</h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Right - Image Stack */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full flex-1 rounded-lg overflow-hidden shadow-lg min-h-[200px]">
            <Image
              src={src}
              alt={`Retreat ${idx + 1}`}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
