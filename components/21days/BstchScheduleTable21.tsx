'use client';

import { FaCalendarAlt } from 'react-icons/fa';

const courseDates = [
  { date: 'October 2025' },
  { date: 'November 2025' },
  { date: 'December 2025' },
  { date: 'January 2026' },
  { date: 'February 2026' },
];

const CourseSchedule = () => {
  return (
    <section className="py-8 px-3 sm:px-5 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
        
        {/* Left: Course Dates */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {courseDates.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-2 border-b pb-2 border-gray-200"
            >
              <FaCalendarAlt className="text-[#150e70] text-lg mt-1 shrink-0" />
              <p className="text-sm sm:text-base font-semibold">{item.date}</p>
            </div>
          ))}
        </div>

        {/* Right: Fee Info */}
        <div className="flex flex-col justify-start">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-600 font-medium uppercase">Course Duration:</p>
              <h2 className="text-xl text-[#150e70] font-bold">21 Days</h2>
            </div>

            <div>
              <p className="text-xs text-gray-600 font-medium uppercase">21-Days Practice Fees:</p>
              <div className="flex flex-col sm:flex-row sm:gap-6 mt-1 text-lg font-bold">
                <div className='text-[#150e70]'>
                  USD 800
                  <p className="text-xs font-normal text-gray-600">Rooms</p>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-[#150e70] hover:bg-black transition text-white px-6 py-2.5 rounded shadow text-sm sm:text-base w-full sm:w-auto">
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
