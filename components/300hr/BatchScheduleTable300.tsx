import React from 'react';

interface Batch {
  startDate: string;
  endDate: string;
  price: string;
  discount: string;
}

const batches: Batch[] = [
  {
    startDate: "05 May 2025",
    endDate: "24 May 2025",
    price: "sold out",
    discount: "",
  },
  {
    startDate: "26 May 2025",
    endDate: "14 June 2025",
    price: "from $2270",
    discount: "15% early bird discount (*until 26th April, 2025)",
  },
  {
    startDate: "16 Jun 2025",
    endDate: "5 July 2025",
    price: "from $2270",
    discount: "15% early bird discount (*until 17th May, 2025)",
  },
  {
    startDate: "07 Jul 2025",
    endDate: "26 July 2025",
    price: "from $2270",
    discount: "15% early bird discount (*until 7th June, 2025)",
  },
  {
    startDate: "04 Aug 2025",
    endDate: "23 Aug 2025",
    price: "from $2270",
    discount: "15% early bird discount (*until 5th July, 2025)",
  },
  {
    startDate: "25 Aug 2025",
    endDate: "13 Sept 2025",
    price: "from $2295",
    discount: "15% early bird discount (*until 26th July, 2025)",
  },
  {
    startDate: "15 Sep 2025",
    endDate: "4 Oct 2025",
    price: "from $2295",
    discount: "15% early bird discount (*until 16th August, 2025)",
  },
  {
    startDate: "06 Oct 2025",
    endDate: "25 Oct 2025",
    price: "from $2295",
    discount: "15% early bird discount (*until 6th September, 2025)",
  },
  {
    startDate: "03 Nov 2025",
    endDate: "22 Nov 2025",
    price: "from $2000",
    discount: "15% early bird discount (*until 4th October, 2025)",
  },
  {
    startDate: "24 Nov 2025",
    endDate: "13 Dec 2025",
    price: "from $2000",
    discount: "15% early bird discount (*until 25th October, 2025)",
  },
  {
    startDate: "15 Dec 2025",
    endDate: "3 Jan 2026",
    price: "from $2000",
    discount: "15% early bird discount (*until 15th November, 2025)",
  },
];

const BatchScheduleTable: React.FC = () => {
  return (
    <section className="bg-tranparent py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/images/radial-bg.png')] bg-cover bg-center" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead>
              <tr className="bg-white text-indigo-900 border-b-2 border-indigo-200">
                <th className="py-3 px-4 font-semibold">Start date</th>
                <th className="py-3 px-4 font-semibold">End date</th>
                <th className="py-3 px-4 font-semibold">Price</th>
                <th className="py-3 px-4 font-semibold">Discount</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? 'bg-indigo-50' : 'bg-white'
                  } border-b border-indigo-100`}
                >
                  <td className="py-3 px-4">{batch.startDate}</td>
                  <td className="py-3 px-4">{batch.endDate}</td>
                  <td className="py-3 px-4">{batch.price}</td>
                  <td className="py-3 px-4">{batch.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BatchScheduleTable;