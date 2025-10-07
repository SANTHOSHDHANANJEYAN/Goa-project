import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-[#15005c] px-4 py-4 text-sm overflow-hidden">
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
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        {/* Left Column */}
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold border-b-2 border-[#15005c] inline-block pb-0.5">
              Programs
            </h3>
            <ul className="space-y-0.5 pt-2 font-semibold text-xs">
              <li><Link href="/50hrsyogattc" className="hover:text-purple-700">50 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/100hrsyogattc" className="hover:text-purple-700">100 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/200hrsyogattc" className="hover:text-purple-700">200 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/300hrsyogattc" className="hover:text-purple-700">300 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="/21dayscourses" className="hover:text-purple-700">21 Days Yoga Immersion Course</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold border-b-2 border-[#15005c] inline-block pb-0.5">
              Retreats
            </h3>
            <ul className="pt-2 space-y-0.5 font-semibold text-xs">
              <li><Link href="/7daysretreat" className="hover:text-purple-700">7 Days Yoga Holiday Retreat</Link></li>
              <li><Link href="/14daysretreat" className="hover:text-purple-700">14 Days Yoga Detox Retreat</Link></li>
              <li><Link href="/21daysretreat" className="hover:text-purple-700">21 Days Yoga Wellness Retreat</Link></li>
            </ul>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex justify-center items-center py-2 md:py-0">
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logo30-removebg-preview.png"
              alt="Rishikul Yogshala Logo"
              width={120}
              height={60}
              className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-bold border-b-2 border-[#15005c] inline-block pb-0.5">
              Contact Us
            </h3>
          </div>
          <ul className="space-y-0.5 text-xs leading-relaxed font-semibold">
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="w-3 h-3 mr-1.5 flex-shrink-0" /> 
              <span className="break-all">rishikulyogshalagoa@gmail.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="w-3 h-3 mr-1.5 flex-shrink-0" /> +91 80899 92515
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <MapPin className="w-3 h-3 mr-1.5 flex-shrink-0 mt-0.5" /> 
              <span>128, Thorlebag, Querim, Arambol, Goa 403524</span>
            </li>
          </ul>

          <div className="flex items-center space-x-3 pt-1">
            <Image
              src="/iranlogo.png"
              alt="Iran Branch"
              width={40}
              height={40}
              className="rounded-lg shadow"
            />
            <div className="text-left">
              <p className="font-bold text-xs">Iran Branch</p>
              <p className="text-[10px] leading-tight">Ava Platt Complex, Tehran</p>
              <p className="text-[10px] leading-tight">Tel: +98 938 070 4308</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <Link href="/privacypolicy" className="underline hover:text-purple-700 text-xs">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="relative z-10 mt-3 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex space-x-4">
          <Link 
            href="https://youtube.com/@rishikulyogshalagoa?si=gXYn1x60tu2cRbKc" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15005c] hover:text-purple-700 transition-colors duration-300"
            aria-label="Visit our YouTube channel"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.instagram.com/rishikulyogshalagoa?igsh=MXJtNW0wYmFkZ3MwbA==" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15005c] hover:text-purple-700 transition-colors duration-300"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <Link 
            href="https://www.facebook.com/share/1Cjee3xdbp/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#15005c] hover:text-purple-700 transition-colors duration-300"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="text-xs text-[#15005c] mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
