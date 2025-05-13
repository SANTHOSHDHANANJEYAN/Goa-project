'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 'yoga',
    title: '200 HRS Multi-Style Yoga TTC',
    image: '/r1.jpg',
    link: '/services#yoga-classes',
  },
  {
    id: 'meditation',
    title: '300 HRS Multi-Style Yoga TTC',
    image: '/r2.jpg',
    link: '/services#meditation',
  },
  {
    id: 'sound-healing',
    title: '21 Days Yoga Immersion Course',
    image: '/r3.jpg',
    link: '/services#sound-healing',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 rounded-[2rem]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-2xl transition duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link href={service.link}>
                <div className="relative h-[24rem] w-full cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay content on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-6">
                    <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                   
                    <span className="mt-5 bg-white text-[#150e70] px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200">
                      Know more
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
