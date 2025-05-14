import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";

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
        <source src="/ftvbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional semi-transparent overlay */}
      <div className="absolute inset-0  backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
        {/* Left Column */}
        <div className="space-y-8 pl-[8rem]">
          <div>
            <h3 className="text-xl font-bold border-b-4 border-[#15005c] inline-block pb-1">Programs</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="#">21 Days Yoga Immersion Course</Link></li>
              <li><Link href="#">50 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="#">100 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="#">200 Hr Multi-Style-Yoga TTC</Link></li>
              <li><Link href="#">300 Hr Multi-Style-Yoga TTC</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b-4 border-[#15005c] inline-block pb-1">Retreats</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="#">7 Days Holiday Retreat</Link></li>
              <li><Link href="#">14 Days Wellness Retreat</Link></li>
              <li><Link href="#">21 Days Detox Retreat</Link></li>
            </ul>
          </div>
        </div>

        {/* Center Column: Logo */}
        <div className="flex flex-col items-center gap-[6rem] pt-[5rem]">
          <img
            src="/logo30-removebg-preview.png"
            alt="Rishikul Yogshala Logo"
            className="w-[180px] h-auto"
          />
        </div>

        {/* Right Column: Contact Info */}
        <div className="space-y-4 ml-[3rem] mt-[1rem]">
          <div>
            <h3 className="text-xl font-bold border-b-4 border-[#15005c] inline-block pb-1">About Us</h3>
            <p className="mt-2 font-semibold">Contacts</p>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><Mail className="inline-block w-4 h-4 mr-2" /> rishikulyogshalagoa@gmail.com</li>
            <li><Phone className="inline-block w-4 h-4 mr-2" /> (555) 123-4567</li>
            <li><MapPin className="inline-block w-4 h-4 mr-2" /> 128, Thorlebag, Querim, Arambol, Goa 403524.</li>
          </ul>
          <div>
            <Link href="/privacy" className="underline hover:text-purple-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Social Icons */}
      <div className="relative z-10 flex justify-center md:justify-start md:pl-[42rem] mt-6 space-x-5">
        <Link href="#" className="w-9 h-9 bg-[#15005c] text-white rounded-full flex items-center justify-center shadow hover:bg-purple-800">
          <Youtube className="w-5 h-5" />
        </Link>
        <Link href="#"><Instagram className="w-9 h-9 text-[#15005c] hover:text-purple-700" /></Link>
        <Link href="#"><Facebook className="w-9 h-9 text-[#15005c] hover:text-purple-700" /></Link>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-4 text-center text-xs text-[#15005c]">
        &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
      </div>
    </footer>
  );
}
