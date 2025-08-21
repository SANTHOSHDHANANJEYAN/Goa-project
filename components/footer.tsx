import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="relative text-[#15005c] px-6 py-12 text-sm overflow-hidden">
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
      {/* Optional semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold border-b-4 border-[#15005c] inline-block pb-1">Programs</h3>
            <ul className="space-y-2 pt-4 font-semibold">
              
              <li><Link href="/50hrsyogattc">50 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/100hrsyogattc">100 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/200hrsyogattc">200 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/300hrsyogattc">300 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/21dayscourses">21 Days Yoga Immersion Course</Link></li>

            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold border-b-4 border-[#15005c] inline-block pb-1">Retreats</h3>
            <ul className="pt-4 space-y-2 font-semibold">
              <li><Link href="/7daysretreat">7 Days Yoga Holiday Retreat</Link></li>
              <li><Link href="/14daysretreat">14 Days Yoga Detox Retreat</Link></li>
              <li><Link href="/21daysretreat">21 Days Yoga Wellness Retreat</Link></li>
            </ul>
          </div>
        </div>

        {/* Center Column: Logo */}
        <div className="flex justify-center md:justify-center items-center">
        <Image
          src="/logo30-removebg-preview.png"
          alt="Rishikul Yogshala Logo"
          width={280}      // use max width or actual image width
          height={100}     // approximate height or actual image height
          className="mx-auto"
        />

        </div>

        {/* Right Column: Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold border-b-4 border-[#15005c] inline-block pb-1">About Us</h3>
            <p className="mt-4 font-semibold">Contacts</p>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed font-semibold">
            <li><Mail className="inline-block w-4 h-4 mr-2" /> rishikulyogshalagoa@gmail.com</li>
            <li><Phone className="inline-block w-4 h-4 mr-2" /> +91 80899 92515</li>
            <li><MapPin className="inline-block w-4 h-4 mr-2" /> 128, Thorlebag, Querim, Arambol, Goa 403524</li>
          </ul>
          <div>
            <Link href="/privacypolicy" className="underline hover:text-purple-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      {/* Footer Social Icons */}
      <div className="relative z-10 mt-10 flex justify-center space-x-6">
        <Link
  href="#"
  className="text-[#15005c] hover:text-purple-700 pb-[0.5rem]"
  aria-label="YouTube"
>
  <Youtube className="w-8 h-6" />
</Link>

        <Link href="#" className="text-[#15005c] hover:text-purple-700" >
          <Instagram className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-[#15005c] hover:text-purple-700" >
          <Facebook className="w-6 h-6" />
        </Link>
      </div>
      {/* Copyright */}
      <div className="relative z-10 mt-6 text-center text-xs text-[#15005c]">
        &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
      </div>
    </footer>
  );
}

