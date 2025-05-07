import Link from 'next/link';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: 'Full Moon Meditation',
    description: 'Join us for a powerful group meditation during the full moon, harnessing lunar energy for clarity and release.',
    date: 'June 24, 2025',
    time: '8:00 PM - 9:30 PM',
    location: 'Main Studio',
    category: 'Meditation'
  },
  {
    id: 2,
    title: 'Weekend Yoga Retreat',
    description: 'Escape the city for a rejuvenating two-day retreat with yoga, meditation, and nature walks.',
    date: 'July 12-14, 2025',
    time: 'All Day',
    location: 'Serenity Mountains',
    category: 'Retreat'
  },
  {
    id: 3,
    title: 'Sound Bath Healing',
    description: 'Experience the therapeutic vibrations of crystal bowls and gongs in this immersive sound journey.',
    date: 'July 3, 2025',
    time: '7:00 PM - 8:30 PM',
    location: 'Healing Room',
    category: 'Sound Healing'
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Special workshops, retreats, and community gatherings to deepen your practice
            </p>
          </div>
          <Button variant="link" size="sm" asChild className="mt-4 md:mt-0">
            <Link href="/schedule">View Full Calendar</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col animate-fade-in">
              <CardHeader>
                <div className="text-sm font-medium text-accent mb-2">{event.category}</div>
                <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CalendarDays size={16} className="mr-2 mt-0.5 text-muted-foreground" />
                    <span>{event.date}</span>
                  </li>
                  <li className="flex items-start">
                    <Clock size={16} className="mr-2 mt-0.5 text-muted-foreground" />
                    <span>{event.time}</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-0.5 text-muted-foreground" />
                    <span>{event.location}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/schedule">Register</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}