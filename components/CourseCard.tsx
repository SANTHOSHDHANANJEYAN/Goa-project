'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 'yoga',
    title: '200 Hrs Multi-Style Yoga TTC',
    image: '/r1.jpg',
    link: '/200',
  },
  {
    id: 'meditation',
    title: '300 Hrs Multi-Style Yoga TTC',
    image: '/300.png',
    link: '/300',
  },
  {
    id: 'sound-healing',
    title: '⁠21 Days Yoga Immersion Course',
    image: '/r3.jpg',
    link: '/21days',
  },
];

export default function CourseCard() {
  return (
    <section className="py-20 bg-transparent pb-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="rounded-[2rem] overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#150e70]">
                  {service.title}
                </h3>
                <Link href={service.link} >
                  <span className="inline-block mt-4 bg-[#150e70] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#0f0a5c] transition">
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
