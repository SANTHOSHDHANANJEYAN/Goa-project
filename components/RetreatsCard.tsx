'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 'yoga',
    title: '7-Days Yoga Holiday Retreat - Path to Serenity',
    image: '/IMAGE - GOA -.svg',
    link: '/app/7daysretreat',
  },
  {
    id: 'meditation',
    title: '14-Days Yoga Detox Retreat-Balance Body & Mind',
    image: '/2nd images.svg',
    link: '/app/14daysretreat',
  },
  {
    id: 'sound-healing',
    title: '21-Days Yoga Wellness Retreat - A Journey to Self Discovery',
    image: '/3rd goa image - homwe page.svg',
    link: '/app/21daysretreat',
  },
];

export default function RetreatsCard() {
  return (
    <section className="pb-[5rem] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="rounded-[2rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[15rem] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[20px] font-semibold text-[#150e70]">
                  {service.title}
                </h3>
                
                <Link href={service.link}>
                  <span className="inline-block mt-4 bg-[#150e70] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#0f0a5c] transition">
                    Know more
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
