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
            {/* Individual course tab content */}
            {/* ... same content as shared, truncated for brevity ... */}
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
            {[ /* Pricing plans array */ ].map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-accent shadow-md relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                    <span className="bg-accent text-accent-foreground text-xs rounded-full py-1 px-3 font-medium">Most Popular</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold">{plan.price}</CardDescription>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 mt-1 h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.button}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
