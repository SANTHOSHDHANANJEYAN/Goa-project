'use client';

import { FaCalendarAlt } from 'react-icons/fa';

const courseDates = [
  { date: '7 Sep - 18 Sep 2025'},
  { date: '7 Oct - 18 Oct 2025'},
  { date: '7 Nov - 18 Nov 2025'},
  { date: '7 Dec - 18 Dec 2025'},
  { date: '7 Jan - 18 Jan 2026'},
  { date: '7 Feb - 18 Feb 2026'},
  { date: '7 Mar - 18 Mar 2026'},
  { date: '7 Apr - 18 Apr 2026'},

];

const CourseSchedule = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-[transparent]">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left: Course Dates */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          {courseDates.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 border-b pb-3 border-gray-200">
              <FaCalendarAlt className="text-[#150e70] text-xl mt-1 shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Fee Info */}
        <div className="flex flex-col justify-start text-[#8c794f]">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 font-medium uppercase">Course Duration:</p>
              <h2 className="text-2xl font-bold">12 Days</h2>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium uppercase">100 Hours Yoga TTC Fees:</p>
              <div className="flex flex-col sm:flex-row sm:gap-10 mt-2 text-xl font-bold">
                <div>
                  USD 900
                  <p className="text-sm font-normal text-gray-600">Private Room</p>
                </div>
                <div>
                  USD 750
                  <p className="text-sm font-normal text-gray-600">Shared Room</p>
                </div>
              </div>
            </div>


            <div className="pt-2">
              <button className="bg-[#150e70] hover:bg-[#d9442e] transition text-white px-8 py-3 rounded shadow text-sm sm:text-base w-full sm:w-auto">
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
