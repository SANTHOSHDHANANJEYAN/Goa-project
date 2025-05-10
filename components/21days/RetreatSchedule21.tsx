import React from "react";

interface ScheduleItem {
  time: string;
  activity: string;
}

const RetreatSchedule: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { time: "6:00 AM - 8:00 AM", activity: "Hatha Yoga" },
    { time: "8:00 AM - 9:00 AM", activity: "Pranayam" },
    { time: "9:00 AM - 10:00 AM", activity: "Breakfast" },
    { time: "1:00 PM - 2:00 PM", activity: "Lunch" },
    { time: "4:30 PM - 6:00 PM", activity: "Flow Yoga" },
    { time: "6:00 PM - 7:00 PM", activity: "Meditation" },
    { time: "7:00 PM - 8:30 PM", activity: "Dinner" },
    { time: "10:00 PM", activity: "Lights Off" },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left column - description */}
        <div>
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">
            7-Days Yoga Retreat in Goa - Daily Schedule
          </h2>
          <div className="h-1 w-20 bg-indigo-900 mb-6" />
          <p className="text-indigo-900 leading-relaxed">
            Experience rejuvenation at our Yoga Retreat in Goa. Each day is
            thoughtfully curated to bring a harmonious blend of yoga practices
            and relaxation. Enjoy a balance of Hatha and Flow Yoga, Pranayam,
            meditation, and nourishing meals while surrounded by the tranquil
            beauty of Goa.
          </p>
        </div>

        {/* Right column - schedule */}
        <div className="space-y-4">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b border-dotted border-gray-300 pb-2"
            >
              <span className="text-indigo-900 font-medium">{item.time}</span>
              <span className="text-indigo-900">{item.activity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatSchedule;
