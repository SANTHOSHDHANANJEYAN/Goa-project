import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Leaf, Heart, Sunrise } from 'lucide-react';

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
    { time: '6:00 AM - 7:30 AM', activity: 'Morning Meditation & Pranayama', description: 'Start your day with mindful breathing and meditation.' },
    { time: '8:00 AM - 10:00 AM', activity: 'Vinyasa Flow Yoga', description: 'Dynamic and rejuvenating flow to energize the body.' },
    { time: '11:00 AM - 12:30 PM', activity: 'Yoga Philosophy & Teachings', description: 'Deep dive into ancient yoga texts and philosophy.' },
    { time: '1:00 PM - 2:00 PM', activity: 'Healthy Lunch & Rest', description: 'Enjoy delicious vegetarian meals and relax.' },
    { time: '2:30 PM - 4:00 PM', activity: 'Sound Healing & Restorative Yoga', description: 'Experience deep healing through sound therapy.' },
    { time: '4:30 PM - 6:00 PM', activity: 'Sunset Meditation & Closing Circle', description: 'Reflect on your day and set intentions for tomorrow.' },
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
      button: 'Reserve Your Spot',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[80vh] w-full bg-black text-white">
        <Image
          src="/goa-retreat.jpg"
          alt="Yoga in Goa"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">7-Day Yoga Retreat in Goa</h1>
            <p className="text-lg md:text-xl mb-6 text-white/80">
              A soulful experience of peace, movement, and nature.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-6 py-3 rounded-full">
              <Link href="#pricing">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Retreat Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Escape into the lush landscapes of Goa where you'll practice yoga, meditate, eat well, and reconnect with your essence.
            </p>
            <ul className="space-y-3 mt-6 text-muted-foreground">
              <li className="flex items-center"><Leaf className="text-accent mr-2" /> Set in natural, serene surroundings</li>
              <li className="flex items-center"><Heart className="text-accent mr-2" /> Suitable for all levels</li>
              <li className="flex items-center"><Sunrise className="text-accent mr-2" /> Guided by certified yoga teachers</li>
            </ul>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
            <Image src="/goa-retreat.jpg" alt="Yoga Overview" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Daily Schedule</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailySchedule.map((session, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{session.time}</CardTitle>
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

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Retreat Pricing</h2>
          <p className="text-muted-foreground text-lg mb-8">One price. Everything included.</p>
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="max-w-xl mx-auto p-6 border-accent border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-4">{plan.price}</div>
                <ul className="space-y-3 text-left text-muted-foreground">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                  <Link href="/booking">{plan.button}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-accent to-accent/80 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-3xl font-serif mb-4">Are You Ready for Inner Transformation?</h3>
          <p className="mb-6 text-white/90">Secure your spot now and begin a journey back to yourself.</p>
          <Button className="bg-white text-accent font-semibold hover:bg-white/90 px-6 py-3 text-lg">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SevenDaysYogaRetreatPage;
