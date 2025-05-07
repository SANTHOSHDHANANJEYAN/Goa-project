import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">Yoga Courses</h1>
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-300">
              Explore our comprehensive offerings designed to nurture mind, body, and spirit
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="yoga" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="yoga">21 Days</TabsTrigger>
                <TabsTrigger value="meditation">50 Hours</TabsTrigger>
                <TabsTrigger value="sound">100 Hours</TabsTrigger>
                <TabsTrigger value="workshops">200 Hours</TabsTrigger>
                <TabsTrigger value="retreats">300 Hours</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="yoga" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/course1.jpg"
                      alt="Yoga class at House of Om"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full -z-10" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6" id="yoga-classes">21 Days</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our yoga classes blend ancient tradition with modern alignment principles. From dynamic flows to gentle restorative practices, we offer classes for all levels and aspirations.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Hatha Yoga - Foundation practice focusing on basic postures and breath</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Vinyasa Flow - Dynamic sequences linking breath with movement</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Yin Yoga - Deep tissue release through longer-held passive poses</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Restorative Yoga - Gentle, supported poses for deep relaxation</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Prenatal Yoga - Safe practice for expectant mothers</span>
                    </div>
                  </div>
                  {/* <Button asChild>
                    <Link href="/schedule">View Schedule</Link>
                  </Button> */}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="meditation" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="font-serif text-3xl md:text-4xl mb-6" id="meditation">50 Hr Multi-Style-Yoga TTC</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our meditation sessions help you cultivate mindfulness, reduce stress, and develop inner awareness. With regular practice, discover the profound benefits of a quiet mind.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Mindfulness Meditation - Cultivating present-moment awareness</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Guided Visualization - Using imagery for relaxation and healing</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Mantra Meditation - Using sacred sounds to calm the mind</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Walking Meditation - Mindfulness in motion</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Meditation for Beginners - Introductory sessions for newcomers</span>
                    </div>
                  </div>
                  {/* <Button asChild>
                    <Link href="/schedule">View Schedule</Link>
                  </Button> */}
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/course2.jpg"
                      alt="Meditation session at House of Om"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full -z-10" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sound" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/course3.jpg"
                      alt="Sound healing session at House of Om"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full -z-10" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6" id="sound-healing">100 Hr Multi-Style-Yoga TTC</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Experience the therapeutic power of sound vibrations. Our sound healing sessions use Tibetan singing bowls, gongs, and other instruments to promote deep relaxation and release tension.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Sound Baths - Immersive sonic experiences for deep relaxation</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Crystal Bowl Meditation - Pure tones for chakra balancing</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Gong Therapy - Powerful resonance for releasing energetic blockages</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Voice Toning - Using vocal vibrations for self-healing</span>
                    </div>
                  </div>
                  {/* <Button asChild>
                    <Link href="/schedule">View Schedule</Link>
                  </Button> */}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="workshops" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="font-serif text-3xl md:text-4xl mb-6" id="workshops">200 Hr Multi-Style-Yoga TTC</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our specialized workshops offer in-depth exploration of various wellness practices. From yoga fundamentals to advanced meditation techniques, enrich your practice with these focused sessions.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Yoga Fundamentals - Master the basics of alignment and breath</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Meditation Immersion - Deepen your meditation practice</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Ayurvedic Wellness - Ancient wisdom for modern health</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Self-Massage Techniques - Tools for home practice</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Breathwork Intensive - Harnessing the power of pranayama</span>
                    </div>
                  </div>
                  {/* <Button asChild>
                    <Link href="/schedule">View Schedule</Link>
                  </Button> */}
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/course4.jpg"
                      alt="Workshop at House of Om"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full -z-10" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="retreats" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/course5.jpg"
                      alt="Retreat with House of Om"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full -z-10" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6" id="retreats">300 Hr Multi-Style-Yoga TTC</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Escape the everyday with our transformative retreats. Whether for a weekend or a week, immerse yourself in holistic practices in beautiful natural settings.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Weekend Getaways - Short rejuvenating escapes near the city</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Seasonal Retreats - Aligning with nature rhythms</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>Silent Retreats - Deep inner exploration through noble silence</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 text-accent" />
                      <span>International Journeys - Transformative experiences in sacred locations</span>
                    </div>
                  </div>
                  {/* <Button asChild>
                    <Link href="/schedule">View Schedule</Link>
                  </Button> */}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-muted" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible options to support your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Drop-In",
                price: "$22",
                period: "per class",
                description: "Perfect for occasional visitors or trying new classes.",
                features: [
                  "Access to any single class",
                  "No commitment required",
                  "Book online or drop in",
                  "Bring a friend for 20% off",
                ],
                button: "Book a Class",
                popular: false,
              },
              {
                name: "Monthly Unlimited",
                price: "$145",
                period: "per month",
                description: "Our most popular option for regular practitioners.",
                features: [
                  "Unlimited access to all classes",
                  "10% discount on workshops",
                  "Free mat rental",
                  "1 guest pass per month",
                  "Cancel anytime",
                ],
                button: "Subscribe Now",
                popular: true,
              },
              {
                name: "10-Class Pass",
                price: "$180",
                period: "valid for 3 months",
                description: "Flexible option for regular but varied attendance.",
                features: [
                  "10 classes to use within 3 months",
                  "Schedule in advance or drop in",
                  "5% discount on workshops",
                  "Shareable with family members",
                ],
                button: "Purchase Pass",
                popular: false,
              },
            ].map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-accent shadow-md relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                    <span className="bg-accent text-accent-foreground text-xs rounded-full py-1 px-3 font-medium">Most Popular</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="mr-2 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`} asChild>
                    <Link href="/schedule">{plan.button}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}