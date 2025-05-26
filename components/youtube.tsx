import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 'yoga',
    title: 'Yoga Classes',
    description: 'From gentle Hatha to dynamic Vinyasa...',
    image: '/1.jpg',
    link: 'https://www.youtube.com/watch?v=example1',
  },
  {
    id: 'meditation',
    title: 'Meditation',
    description: 'Guided sessions to quiet the mind...',
    image: '/2.jpg',
    link: 'https://www.youtube.com/watch?v=example2',
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    description: 'Immersive sound baths using singing bowls...',
    image: '/3.jpg',
    link: 'https://www.youtube.com/watch?v=example3',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 font-['Playfair Display',serif] text-indigo-800 animate-fade-in">
          Discover Our Transformative Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group transition-transform duration-300 hover:scale-[1.02]"
              legacyBehavior>
              <Card
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white/10 backdrop-blur-lg border border-white/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-black/40 z-10" />

                  {/* YouTube Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Image
                      src="/ytlogo1.png"
                      alt="Play on YouTube"
                      width={64}
                      height={64}
                      className="drop-shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-125"
                    />
                  </div>
                </div>

                {/* Optional Title (below image) */}
                <div className="text-center py-4">
                  <h3 className="text-lg font-semibold text-blue-500 tracking-wide">{service.title}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
