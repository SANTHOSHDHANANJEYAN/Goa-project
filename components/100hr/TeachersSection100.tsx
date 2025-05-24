'use client';

import Image from 'next/image';

const teachers = [
  {
    name: 'Gangesha Chaitanya',
    title: 'Lead teacher',
    image: '/gangesh sir.jpg',
    bio: `He is a seasoned Yoga Teacher in Rishikesh with 6+ years' experience. Specializing in Hatha, Ashtanga, Vinyasa, Pranayama, and Meditation, he prioritizes safe and effective poses through precise alignment.`,
  },
  {
    name: 'Pooja Ji',
    title: 'PhD Yoga and Life Sciences',
    image: '/pooja ji.jpg',
    bio: `She has spent years researching yoga and health sciences, including teaching MSc and PhD students on the effectiveness of yoga in the medical field.`,
  },
  {
    name: 'Purnima Ji',
    title: 'Lead teacher',
    image: '/Purnima hi.jpg',
    bio: `She has a deep passion for yoga that has led to years of studying Sanskrit and Yoga studies. She loves to empower her students to find the same sense of passion.`,
  },
];

export default function TeachersSection100() {
  return (
    <section className="relative py-20 bg-transparent">
      {/* Optional Decorative Background */}
      <div className="absolute inset-0 bg-[url('/lotus-bg.png')] bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#150e70] mb-4">
          Meet Your Instructors
        </h2>
        <p className="text-sm sm:text-base text-[#150e70] max-w-3xl mx-auto mb-12">
          Our experienced team brings decades of collective practice from multiple yoga disciplines.
          They’re dedicated to helping you grow — physically, mentally, and spiritually — in a supportive, inclusive environment.
        </p>

        {/* Grid of Teachers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-900">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{teacher.title}</p>
              <p className="text-sm text-gray-700 px-2 sm:px-0">{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
