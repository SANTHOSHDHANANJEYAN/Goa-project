'use client';
import Image from 'next/image';
import { CalendarDays } from 'lucide-react';

export default function ProgramSection7() {
  return (
    <section className="bg-[#faf7f2] py-12 px-6 md:px-16 flex flex-col md:flex-row gap-10 items-start relative">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-0.5 bg-black" />
          <span className="text-lg font-medium">DISCOVER MORE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Program Card 1 */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/r2.jpg"
                alt="Yin Yoga Program"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">
              200 hour Yin Yoga & Meditation March 2026
            </h3>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
              <CalendarDays className="w-4 h-4" />
              02/03/2026 - 22/03/2026
            </div>
          </div>

          {/* Program Card 2 */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/r1.jpg"
                alt="AromaYin Program"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">
              65 hour AromaYin March 2026
            </h3>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
              <CalendarDays className="w-4 h-4" />
              22/03/2026 - 29/03/2026
            </div>
          </div>
        </div>
      </div>

      {/* Side Yoga Image */}
      <div className="hidden md:block rounded-tl-[150px] rounded-tr-[150px] overflow-hidden w-[350px] shrink-0">
        <Image
          src="/gallery/11.WEBP"
          alt="Yoga Pose"
          width={350}
          height={500}
          className="object-cover h-full"
        />
      </div>
    </section>
  );
}
