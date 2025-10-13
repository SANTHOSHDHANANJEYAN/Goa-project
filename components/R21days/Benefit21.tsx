import Image from "next/image";
import { FaSun, FaCloudSun, FaMoon, FaLeaf } from "react-icons/fa";

export default function Benefit21() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 text-[#150e70]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Daily Schedule
        </h2>

        <div className="space-y-16">
          {/* Morning Routine */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <Image
                src="/Imp&bene/morning.jpg"
                alt="Morning Yoga Routine"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <FaSun className="text-orange-400 text-2xl" />
                <h3 className="text-2xl font-semibold">Morning Routine (6:00 AM - 10:00 AM)</h3>
              </div>
              <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li>6:00 AM - 7:30 AM: Yoga asana practice (dynamic flow or vinyasa yoga)</li>
                <li>7:45 AM - 8:45 AM: Pranayama</li>
                <li>9:00 AM - 10:00 AM: Healthy breakfast and journaling</li>
              </ul>
            </div>
          </div>

          {/* Daytime Sessions */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <FaCloudSun className="text-yellow-500 text-2xl" />
                <h3 className="text-2xl font-semibold">Daytime Sessions (10:30 AM - 4:00 PM)</h3>
              </div>
              <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li>10:30 AM - 12:00 Noon: Yoga philosophy and theory</li>
                <li>12:00 Noon - 1:00 PM: Asana practice (gentle flow or hatha yoga)</li>
                <li>1:00 PM - 2:00 PM: Lunch break</li>
                <li>2:00 PM - 4:00 PM: Free time for relaxation, reading, or exploration</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/Imp&bene/daytime.jpg"
                alt="Daytime Yoga Sessions"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Evening Routine */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <Image
                src="/Imp&bene/evening.jpg"
                alt="Evening Yoga Routine"
                width={800}
                height={500}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <FaMoon className="text-indigo-500 text-2xl" />
                <h3 className="text-2xl font-semibold">Evening Routine (4:15 PM - 9:00 PM)</h3>
              </div>
              <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li>4:15 PM - 5:45 PM: Evening yoga practice (restorative yoga or yin yoga)</li>
                <li>6:00 PM - 7:00 PM: Workshops or special sessions (e.g., Meditation, yoga nidra, sound healing)</li>
                <li>7:00 PM - 8:00 PM: Dinner</li>
                <li>8:00 PM - 9:00 PM: Relaxation, reading, or exploration</li>
              </ul>
            </div>
          </div>

          {/* Additional Activities */}
          <div className="text-center space-y-5">
            <div className="flex justify-center items-center gap-3">
              <FaLeaf className="text-green-600 text-2xl" />
              <h3 className="text-2xl font-semibold">Additional Activities</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed inline-block text-left space-y-2">
              <li>Daily journaling and reflection</li>
              <li>Group discussions and sharing</li>
              <li>Nature walks or outdoor activities (optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
