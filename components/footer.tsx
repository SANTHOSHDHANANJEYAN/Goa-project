import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-[#15005c] px-4 py-8 text-sm overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/ftvbg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold border-b-2 border-[#15005c] inline-block pb-1">
              Programs
            </h3>
            <ul className="space-y-1 pt-3 font-semibold">
              <li><Link href="/50hrsyogattc">50 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/100hrsyogattc">100 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/200hrsyogattc">200 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/300hrsyogattc">300 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/21dayscourses">21 Days Yoga Immersion Course</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b-2 border-[#15005c] inline-block pb-1">
              Retreats
            </h3>
            <ul className="pt-3 space-y-1 font-semibold">
              <li><Link href="/7daysretreat">7 Days Yoga Holiday Retreat</Link></li>
              <li><Link href="/14daysretreat">14 Days Yoga Detox Retreat</Link></li>
              <li><Link href="/21daysretreat">21 Days Yoga Wellness Retreat</Link></li>
            </ul>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex justify-center items-center">
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logo30-removebg-preview.png"
              alt="Rishikul Yogshala Logo"
              width={150}
              height={70}
              className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold border-b-2 border-[#15005c] inline-block pb-1">
              About Us
            </h3>
            <p className="mt-3 font-semibold">Contacts</p>
          </div>
          <ul className="space-y-1 text-sm leading-relaxed font-semibold">
            <li><Mail className="inline-block w-4 h-4 mr-2" /> rishikulyogshalagoa@gmail.com</li>
            <li><Phone className="inline-block w-4 h-4 mr-2" /> +91 80899 92515</li>
            <li><MapPin className="inline-block w-4 h-4 mr-2" /> 128, Thorlebag, Querim, Arambol, Goa 403524</li>
          </ul>

          <div className="flex flex-col items-center text-center pt-3">
            <Image
              src="/iranlogo.png"
              alt="Iran Branch"
              width={60}
              height={60}
              className="rounded-lg shadow mb-1"
            />
            <p className="font-bold text-sm">Iran Branch</p>
            <p className="text-xs">Unit H2, Level +5, Ava Platt Commercial Complex</p>
            <p className="text-xs">Moheddanesh St., Aghdasiyeh St.</p>
            <p className="text-xs">Tehran, Iran</p>
            <p className="text-xs">Tel: +98 938 070 4308</p>
          </div>

          <div className="pt-1">
            <Link href="/privacypolicy" className="underline hover:text-purple-700 text-xs">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 mt-6 flex justify-center space-x-5">
        <Link href="#" className="text-[#15005c] hover:text-purple-700">
          <Youtube className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-[#15005c] hover:text-purple-700">
          <Instagram className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-[#15005c] hover:text-purple-700">
          <Facebook className="w-5 h-5" />
        </Link>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-4 text-center text-xs text-[#15005c]">
        &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
      </div>
    </footer>
  );
}
