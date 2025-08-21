'use client';

import React from 'react';
import Image from 'next/image';

const CommunitySection: React.FC = () => {
  const badges = [
    { src: '/nw200.png', label: 'RYS 200' },
    { src: '/new300.png', label: 'RYS 300' },
    { src: '/nwrpys.png', label: 'RPYS' },
    { src: '/nwyacep.png', label: 'YACEP' },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center md:text-left">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#150e70] mb-4">
            Join a Life-Changing Community of Over 34,000 Students
          </h2>
          <p className="text-xl text-[#150e70] font-medium">
            Become part of our family at one of the leading accredited schools in Goa!
          </p>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl text-[#150e70] font-medium mb-6">
            Since 2009, students from around the world have been joining our programs
            and earning their Yoga Alliance accredited certifications.
          </h3>

          {/* Badge Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center transition-transform transform hover:scale-105 border-transparent p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white bg-opacity-90"
              >
                <Image
                  src={badge.src}
                  alt={badge.label}
                  width={70}
                  height={70}
                  className="mb-2"
                  loading="lazy"
                />
                <span className="font-semibold text-sm text-indigo-900">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
