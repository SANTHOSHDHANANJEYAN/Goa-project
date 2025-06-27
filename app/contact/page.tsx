'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
  FormControl,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/santhoshd318@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _template: 'table',
          _autoresponse: '🙏 Thank you for contacting us. We will respond shortly.',
          _subject: 'New Contact Form Submission',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Submission failed. Please check your FormSubmit setup.');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-white text-gray-800 mt-[3rem]">
      <section className="pt-[4rem] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">GET IN TOUCH</h1>
          <p className="text-lg text-gray-600">
            We're here to answer your questions and welcome you to Rishikul Yogshala Goa.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl mb-6">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach out to us — we'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-blue-600" />
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p>123 Serenity Lane,<br />Mindful Valley, CA 94123</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 text-blue-600" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 text-blue-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>info@houseofom.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-4 text-blue-600" />
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p>Mon–Fri: 6:00 AM – 9:00 PM<br />Sat–Sun: 8:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-10 relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/Contact_us2.png"
                alt="Contact image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg p-8 bg-gray-50 shadow">
            <h2 className="font-serif text-2xl mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
                ✅ Thank you! Your message has been sent.
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Booking or inquiry" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
