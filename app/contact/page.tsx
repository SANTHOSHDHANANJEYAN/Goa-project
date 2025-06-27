'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function ContactPage() {
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

  return (
    <div className="bg-white text-gray-800 mt-[3rem]">
      <section className="pt-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">GET IN TOUCH</h1>
            <p className="text-lg text-gray-600">
              We&apos;re here to answer your questions and welcome you to Rishikul Yogshala Goa portal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our classes, workshops, or how to get started? Reach out to us and we&apos;ll be happy to help.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 text-blue-600" />
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Serenity Lane,<br />Mindful Valley, CA 94123</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 text-blue-600" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 text-blue-600" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600">info@houseofom.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="mr-4 text-blue-600" />
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Mon–Fri: 6:00 AM - 9:00 PM<br />
                      Sat–Sun: 8:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-64 relative mt-[3rem]">
                <Image
                  src="/Contact_us2.png"
                  alt="Studio exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg p-8 bg-gray-50 shadow">
              <h2 className="font-serif text-2xl mb-6">Send Us a Message</h2>

              <Form {...form}>
                <form
                  action="https://formsubmit.io/send/santhoshd318@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden config for FormSubmit */}
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_autoresponse" value="🙏 Thank you for contacting Rishikul Yogshala Goa. We’ll respond shortly." />
                  <input type="hidden" name="_subject" value="New Contact Message from Website" />
                  <input type="hidden" name="_honeypot" value="" />
                  <input type="hidden" name="_redirect" value="https://www.rishikulyogshalagoa.com/thank-you" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} name="name" />
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
                            <Input placeholder="your@email.com" {...field} name="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} name="phone" />
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
                            <Input placeholder="What's this about?" {...field} name="subject" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="min-h-32"
                            {...field}
                            name="message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" /> Send Message
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
