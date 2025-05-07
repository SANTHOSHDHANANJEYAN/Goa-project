import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Session {
  time: string;
  activity: string;
  description: string;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  button: string;
}

const SevenDaysYogaRetreatPage: React.FC = () => {
  const dailySchedule: Session[] = [
    {
      time: '6:00 AM - 7:30 AM',
      activity: 'Morning Meditation & Pranayama',
      description: 'Start your day with mindful breathing and meditation.',
    },
    {
      time: '8:00 AM - 10:00 AM',
      activity: 'Vinyasa Flow Yoga',
      description: 'Dynamic and rejuvenating flow to energize the body.',
    },
    {
      time: '11:00 AM - 12:30 PM',
      activity: 'Yoga Philosophy & Teachings',
      description: 'Deep dive into ancient yoga texts and philosophy.',
    },
    {
      time: '1:00 PM - 2:00 PM',
      activity: 'Healthy Lunch & Rest',
      description: 'Enjoy delicious vegetarian meals and relax.',
    },
    {
      time: '2:30 PM - 4:00 PM',
      activity: 'Sound Healing & Restorative Yoga',
      description: 'Experience deep healing through sound therapy.',
    },
    {
      time: '4:30 PM - 6:00 PM',
      activity: 'Sunset Meditation & Closing Circle',
      description: 'Reflect on your day and set intentions for tomorrow.',
    },
  ];

  const pricingPlans: Plan[] = [
    {
      name: '7-Day Retreat',
      price: '$750',
      description: 'All-inclusive 7-day yoga retreat in Goa.',
      features: [
        'Daily yoga classes',
        'Meditation & sound healing',
        'Vegetarian meals and snacks',
        'Accommodation in nature',
      ],
      button: 'Book Now',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">7 Days Yoga Retreat in Goa</h1>
            <p className="text-lg text-muted-foreground">
              Experience rejuvenation and spiritual awakening in the serene landscapes of Goa.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">About the Retreat</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our 7 Days Yoga Retreat in Goa offers a transformative experience for the mind, body, and soul.
                Dive deep into ancient yoga practices, unwind in nature, and reconnect with your inner peace.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/goa-retreat.jpg"  // Replace with your image URL
                  alt="Yoga Retreat in Goa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center">Daily Schedule</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {dailySchedule.map((session, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{session.time}</CardTitle>
                  <CardDescription>{session.activity}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{session.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center">Pricing</h2>
          <p className="text-lg text-muted-foreground text-center mb-6">
            Affordable and flexible pricing for your wellness journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-5 w-5 text-accent flex-shrink-0">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/booking">{plan.button}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SevenDaysYogaRetreatPage;
