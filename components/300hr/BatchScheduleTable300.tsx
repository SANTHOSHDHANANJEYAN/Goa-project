'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const courseDates = [
  { date: '7 Nov - 3 Dec 2025' },
  { date: '7 Jan - 3 Feb 2026' },
  { date: '7 Feb - 3 Mar 2026' },
];

const CourseSchedule = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left: Course Dates */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courseDates.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 border-b pb-2 border-gray-200"
            >
              <FaCalendarAlt className="text-[#150e70] text-lg mt-1 shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Fee Info */}
        <div className="flex flex-col justify-start text-[#8c794f]">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-600 font-medium uppercase">
                Course Duration:
              </p>
              <h2 className="text-xl text-[#150e70] font-bold">27 Days</h2>
            </div>

            <div>
              <p className="text-xs text-gray-600 font-medium uppercase">
                300 Hrs Yoga TTC Fee:
              </p>
              <div className="flex flex-col sm:flex-row sm:gap-6 mt-1 text-lg font-bold">
                <div className="text-[#150e70]">
                  USD 1700
                  <p className="text-xs font-normal text-gray-600">Private Room</p>
                </div>
                <div className="text-[#150e70]">
                  USD 1400
                  <p className="text-xs font-normal text-gray-600">Shared Room</p>
                </div>
              </div>
            </div>

            {/* BOOK NOW Button */}
            <div>
              <Link
                href="/contact"
                className="bg-[#150e70] hover:bg-[#d9442e] transition text-white px-6 py-2 rounded shadow text-sm sm:text-base w-full sm:w-auto inline-block text-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseSchedule;
