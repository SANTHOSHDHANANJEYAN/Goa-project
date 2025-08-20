"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-[#f9fafb] to-[#eef2f5] py-16 px-6 md:px-20 overflow-hidden mb-[2rem]">
      {/* How to Reach + Google Map Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white rounded-xl shadow-md p-6">
        {/* Left Side - How to Reach */}
        <div>
          <h3 className="text-3xl font-extrabold text-[#150e70] mb-4">
            How to Reach Us
          </h3>
          <p className="text-gray-700 mb-6">
            Our yoga school is located in a serene environment. You can reach us
            easily using the following modes of transport:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-green-700">🚖 By Taxi:</span>{" "}
              Book a taxi from Goa International Airport (Dabolim) — approx.{" "}
              <span className="font-medium">60 mins</span> ride.
            </li>
            <li>
              <span className="font-semibold text-green-700">🚌 By Bus:</span>{" "}
              Direct buses run from Panjim & Margao to Palolem Beach — approx.{" "}
              <span className="font-medium">1.5 hours</span>.
            </li>
            <li>
              <span className="font-semibold text-green-700">🚉 By Train:</span>{" "}
              Nearest station is Canacona Railway Station, just{" "}
              <span className="font-medium">15 mins</span> from our location.
            </li>
            <li>
              <span className="font-semibold text-green-700">🛫 By Air:</span>{" "}
              Closest airport is Goa International Airport — approx.{" "}
              <span className="font-medium">60 mins</span>.
            </li>
          </ul>
        </div>

        {/* Right Side - Google Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.7496538103755!2d73.7032!3d15.711433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef00335f248f%3A0xa96dc6480dde342e!2sRishikul%20Yogshala!5e0!3m2!1sen!2sin!4v1746891791703!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[350px] md:h-[400px]"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mt-14">
        {/* Left Section */}
        <div className="md:w-1/2 gap-[2rem]">
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#150e70] leading-tight">
            Ready to Become a Certified <br />
            <span className="underline decoration-yellow-400">Yoga</span> Trainer !!
          </h2>
          <p className="text-[#150e70] text-base">
            Our team is here to assist you. Simply fill out the form below, and
            we’ll get back to you as soon as possible!
          </p>

          <div className="rounded-lg overflow-hidden h-64 relative mt-[3rem]">
            <Image
              src="/Contact_us2.png"
              alt="House of Om studio exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 w-full rounded-xl p-8 bg-white shadow-lg">
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

            {/* Phone with all country codes */}
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="!w-full !p-3 !border !border-gray-300 !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-yellow-300 !bg-white"
            />

            {/* Booking Date */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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

            {/* Message */}
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
              className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 self-start transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
