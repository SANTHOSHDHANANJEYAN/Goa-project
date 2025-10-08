import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white px-4 py-8 sm:py-10 md:py-12 text-sm overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ftvbg2.jpg"
          alt="Footer background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 -z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Centered Logo */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logo30-removebg-preview.png"
              alt="Rishikul Yogshala Logo"
              width={140}
              height={70}
              className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem] text-center md:text-left pl-[3rem]">
          {/* Left: Important Links (Programs + Retreats) */}
          <div>
            <h3 className="text-lg font-bold text-[#E0B973]">Important Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/50hrsyogattc" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  50 Hr Multi-Style-Yoga TTC
                </Link>
              </li>
              <li>
                <Link href="/100hrsyogattc" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  100 Hr Multi-Style-Yoga TTC
                </Link>
              </li>
              <li>
                <Link href="/200hrsyogattc" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  200 Hr Multi-Style-Yoga TTC
                </Link>
              </li>
              <li>
                <Link href="/300hrsyogattc" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  300 Hr Multi-Style-Yoga TTC
                </Link>
              </li>
              <li>
                <Link href="/21dayscourses" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  21 Days Yoga Immersion Course
                </Link>
              </li>

            </ul>
          </div>
                    <div>
            <h3 className="text-lg font-bold text-[#E0B973]">Important Links</h3>
            <ul className="mt-3 space-y-2">

              <li>
                <Link href="/7daysretreat" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  7 Days Yoga Holiday Retreat
                </Link>
              </li>
              <li>
                <Link href="/14daysretreat" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  14 Days Yoga Detox Retreat
                </Link>
              </li>
              <li>
                <Link href="/21daysretreat" className="hover:text-[#E0B973] inline-flex items-start">
                  <span className="mr-2 text-[#E0B973]">›</span>
                  21 Days Yoga Wellness Retreat
                </Link>
              </li>
            </ul>
          </div>

          {/* Center: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-[#E0B973]">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed font-semibold">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-[#E0B973]" />
                <span>128, Thorlebag, Querim, Arambol, Goa 403524</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-[#E0B973]" />
                +91 9520024333‬
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-[#E0B973]" />
                <span className="break-all">rishikulyogshalagoa@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Right: Follow Us + Iran Branch */}
          <div>
            <h3 className="text-lg font-bold text-[#E0B973]">Follow Us On</h3>
            <div className="mt-3 flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <Link
                href="https://youtube.com/@rishikulyogshalagoa?si=gXYn1x60tu2cRbKc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="hover:opacity-90 transition-opacity"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/rishikulyogshalagoa/?igsh=MXJtNW0wYmFkZ3MwbA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1Cjee3xdbp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="hover:opacity-90 transition-opacity"
              >
                <Facebook className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center space-x-3 pt-4 justify-center md:justify-start">
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
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8" />

        {/* Bottom: Centered Privacy + Copyright */}
        <div className="mt-4 flex flex-col items-center justify-center text-center gap-2">
          <Link href="/privacypolicy" className="underline hover:text-[#E0B973]">
            Privacy Policy
          </Link>
          <div className="text-xs">
            &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
