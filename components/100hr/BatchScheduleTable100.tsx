'use client';

import { FaCalendarAlt } from 'react-icons/fa';

const courseDates = [
  { date: '1 Jun - 24 Jun 2025', seats: 4 },
  { date: '1 Jul - 24 Jul 2025', seats: 7 },
  { date: '1 Aug - 24 Aug 2025', seats: 8 },
  { date: '1 Sep - 24 Sep 2025', seats: 7 },
  { date: '1 Oct - 24 Oct 2025', seats: 9 },
  { date: '1 Nov - 24 Nov 2025', seats: 10 },
  { date: '1 Dec - 24 Dec 2025', seats: 11 },
  { date: '1 Jan - 24 Jan 2026', seats: 12 },
  { date: '1 Feb - 24 Feb 2026', seats: 14 },
  { date: '1 Mar - 24 Mar 2026', seats: 15 },
];

const CourseSchedule = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left: Course Dates */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          {courseDates.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 border-b pb-3 border-gray-200">
              <FaCalendarAlt className="text-[#d9442e] text-xl mt-1 shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{item.date}</p>
                <p className="text-sm sm:text-base text-[#d9442e] font-medium">Seats: {item.seats} left</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Fee Info */}
        <div className="flex flex-col justify-start text-[#8c794f]">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 font-medium uppercase">Course Duration:</p>
              <h2 className="text-2xl font-bold">7 Days</h2>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium uppercase">200 Hour Yoga TTC Fees:</p>
              <div className="flex flex-col sm:flex-row sm:gap-10 mt-2 text-xl font-bold">
                <div>
                  USD 500
                  <p className="text-sm font-normal text-gray-600">Private Room</p>
                </div>
                <div>
                  USD 350
                  <p className="text-sm font-normal text-gray-600">Shared Room</p>
                </div>
              </div>
            </div>


            <div className="pt-2">
              <button className="bg-[#d9442e] hover:bg-[#150e70] transition text-white px-8 py-3 rounded shadow text-sm sm:text-base w-full sm:w-auto">
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
