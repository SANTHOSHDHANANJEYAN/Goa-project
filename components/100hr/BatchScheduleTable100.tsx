'use client';

import { FaCalendarAlt } from 'react-icons/fa';

const courseDates = [
  { date: '07 Sep - 18 Sep 2025', seats: 4 },
  { date: '07 Oct - 18 Oct 2025', seats: 7 },
  { date: '07 Nov - 18 Nov 2025', seats: 8 },
  { date: '07 Dec - 18 Dec 2025', seats: 7 },
  { date: '07 Jan - 18 Jan 2026', seats: 9 },
  { date: '07 Feb - 18 Feb 2026', seats: 10 },
  { date: '07 Mar - 18 Mar 2026', seats: 11 },
  { date: '07 Apr - 18 Apr 2026', seats: 12 },
];

const CourseSchedule = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Course Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courseDates.map((item, index) => (
            <div key={index} className="flex items-start gap-3 border-b pb-2 border-gray-200">
              <FaCalendarAlt className="text-[#d9442e] text-xl mt-1 shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{item.date}</p>
                <p className="text-sm sm:text-base text-[#d9442e] font-medium">Seats: {item.seats} left</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Info and Button */}
        <div className="flex flex-col justify-between md:pl-6">
          <div>
            <p className="text-sm text-gray-600 font-medium">COURSE DURATION:</p>
            <h2 className="text-2xl font-bold text-[#8c794f] mb-6">12 DAYS</h2>

            <p className="text-sm text-gray-600 font-medium mb-2">COURSE FEE WITHOUT STAY:</p>
            <h3 className="text-xl font-bold text-[#8c794f] mb-4">USD 749</h3>
            <p className="text-sm text-gray-600 mb-8">FOOD IS INCLUDED</p>

            <div className="text-center md:text-left">
              <button className="bg-[#d9442e] hover:bg-[#150e70] transition text-white px-8 py-3 rounded shadow text-sm sm:text-base">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSchedule;
