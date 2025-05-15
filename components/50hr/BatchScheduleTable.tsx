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
    <section className="bg-transparent py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-md p-8 grid md:grid-cols-2 gap-10">
        {/* Left - Course Dates */}
        <div className="grid sm:grid-cols-2 gap-6">
          {courseDates.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-3 flex items-start gap-3"
            >
              <FaCalendarAlt className="text-[#150e70] text-lg mt-1" />
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  {item.date}
                </div>
                <div className="text-sm text-[#150e70]">
                  Seats: {item.seats} left
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Fees Info */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm font-medium text-gray-600">COURSE DURATION:</p>
          <h2 className="text-2xl font-bold text-[#8c794f]">24 DAYS</h2>

          <p className="text-sm font-medium text-gray-600 mt-6">200 HOUR YOGA TTC FEES:</p>
          <div className="flex gap-8 justify-center md:justify-start text-[#8c794f] font-bold text-xl">
            <div>USD 1249 <p className="text-sm font-normal text-gray-600">PRIVATE ROOM</p></div>
            <div>USD 1049 <p className="text-sm font-normal text-gray-600">SHARED ROOM</p></div>
          </div>

          <p className="text-sm font-medium text-gray-600 mt-6">COURSE FEE WITHOUT STAY:</p>
          <h3 className="text-xl font-bold text-[#8c794f]">USD 749</h3>
          <p className="text-sm text-gray-600">FOOD IS INCLUDED</p>

          <button className="mt-6 bg-[#150e70] text-white px-6 py-3 rounded shadow hover:bg-[#d9442e] transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSchedule;
