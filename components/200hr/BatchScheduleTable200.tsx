'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function CourseSchedule() {
  return (
    <>
      {/* NEW SECTION — YTTC Certification (Goa) */}
      <section className="bg-[#f4f5f3] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900">
              YTTC Certification
            </h2>
            <p className="text-[#2317bc] italic font-semibold mt-2 text-lg">
              200 hour Yoga TTC certification in Goa
            </p>
            <p className="text-gray-700 mt-4 max-w-3xl">
              After successful completion of 200 hour Yoga TTC in Goa, Rishikul Yogshala provides
              certification to participants. Get your Yoga Certification Course Today.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Certificate Image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/certificates.jpg" // replace with your certificate image
                alt="YTTC Certificate"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-gray-300"
              />
            </div>

            {/* Group Photo */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/aboutpics/242.jpg" // replace with your group photo
                alt="Yoga TTC Graduates"
                width={700}
                height={400}
                className="rounded-lg shadow-lg border border-gray-300 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
