import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 'yoga',
    image: '/IMAGE - GOA -.svg',
    link: '/services#yoga-classes'
  },
  {
    id: 'meditation',
    image: '/2nd images.svg',
    link: '/services#meditation'
  },
  {
    id: 'sound-healing',
    image: '/public/3rd goa image - homwe page.svg',
    link: '/services#sound-healing'
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 rounded-[2rem]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
            key={service.id}
            className="overflow-hidden group hover:shadow-lg transition-shadow animate-fade-in rounded-[2rem]"
            style={{ animationDelay: `${index * 150}ms` }}
          >          
              <div className="relative h-[24rem] overflow-hidden rounded-[26px]"> {/* Increased height */}
                <Link href={service.link}>
                  <Image
                    src={service.image}
                    alt="Service Image"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
