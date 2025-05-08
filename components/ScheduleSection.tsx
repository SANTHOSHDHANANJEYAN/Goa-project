import React from "react";

const ScheduleSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">Training Schedule</h2>
      <div className="bg-indigo-50 p-6 rounded-lg shadow text-center text-gray-700 max-w-3xl mx-auto">
        <p className="mb-4 font-medium text-lg">Intensive Format (21 Days)</p>
        <p className="mb-1">🗓 May 26 – June 16, 2025
        </p>
        <p className="mb-1">📍 Location: Amersham, Bali
        </p>
        <p className="mb-1">🕗 Monday – Saturday: 8 AM to 6 PM
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Includes breaks, workshops, and off-days
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;
