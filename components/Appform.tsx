"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-[#f9fafb] to-[#eef2f5] py-16 px-6 md:px-20 overflow-hidden mb-[2rem]">
      {/* Google Maps iframe */}
      <div className="mt-10 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.7496538103755!2d73.7032!3d15.711433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef00335f248f%3A0xa96dc6480dde342e!2sRishikul%20Yogshala!5e0!3m2!1sen!2sin!4v1746891791703!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] md:h-[450px]"
        ></iframe>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mt-10">
        {/* Left Section */}
        <div className="md:w-1/2 gap-[2rem]">
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#150e70] leading-tight">
            Ready to Become a Certified <br />
            <span className="underline decoration-yellow-400">Yoga</span> Trainer !!
          </h2>
          <p className="text-[#150e70] text-base">
            Our team is here to assist you. Simply fill out the form below, and we’ll get back to you as soon as possible!
          </p>

          <div className="rounded-lg overflow-hidden h-64 relative mt-[3rem] ">
                          <Image
                            src="/Contact_9-removebg-preview (1).png"
                            alt="House of Om studio exterior"
                            fill
                            
                          />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 w-full  rounded-xl p-8">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
            />
            <input
              type="tel"
              placeholder="Contact"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
            />
            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white">
              <option>Select Course</option>
              <option>50 Hr Multi-Style-Yoga TTC</option>
              <option>100 Hr Multi-Style-Yoga TTC</option>
              <option>200 Hr Multi-Style-Yoga TTC</option>
              <option>300 Hr Multi-Style-Yoga TTC</option>
              <option>21 Days Yoga Immersion Course</option>
              <option>7 Days Yoga Holiday Retreat</option>
              <option>14 Days Yoga Detox Retreat</option>
              <option>21 Days Yoga Wellness Retreat</option>  
            </select>
            <div className="relative">
              <textarea
                maxLength={180}
                rows={4}
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
              />
              <span className="absolute bottom-2 right-3 text-sm text-gray-400">
                {message.length} / 180
              </span>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
