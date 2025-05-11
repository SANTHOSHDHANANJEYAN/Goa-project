import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#f9f3ec] text-[#15005c] pt-16 pb-10 px-6 shadow-inner border-t-4 border-gradient-to-r from-[#15005c] via-[#9f87ff] to-[#15005c]">
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')] bg-repeat pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-sm z-10">
        {/* Programs Column */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 relative text-[#150e70]">
            Programs
            <span className="block w-10 h-[2px] bg-[#15005c] mt-1 rounded"></span>
          </h3>
          <ul className="space-y-2 text-[#150e70]">
            <li><Link href="/services">21 Days Yoga Immersion Course</Link></li>
            <li><Link href="/50">50 Hr Multi-Style-Yoga TTC</Link></li>
            <li><Link href="/100">100 Hr Multi-Style-Yoga TTC</Link></li>
            <li><Link href="/200">200 Hr Multi-Style-Yoga TTC</Link></li>
            <li><Link href="/300">300 Hr Multi-Style-Yoga TTC</Link></li>
          </ul>
        </div>

        {/* Retreats Column */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 relative text-[#150e70]">
            Retreats
            <span className="block w-10 h-[2px] bg-[#15005c] mt-1 rounded"></span>
          </h3>
          <ul className="space-y-2 text-[#150e70]">
            <li><Link href="/retreats">7 Days Holiday Retreat</Link></li>
            <li><Link href="/schedule/bali">14 Days Wellness Retreat</Link></li>
            <li><Link href="/schedule/thailand">21 Days Detox Retreat</Link></li>
          </ul>
        </div>

        {/* Logo & Socials */}
        <div className="flex flex-col items-center space-y-6 pr-[6rem]">
          <img
            src="/logo2.png"
            alt="Logo"
            className="w-[9rem] h-[5rem] mx-auto drop-shadow-md"
          />
          <div className="flex space-x-4">
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 bg-[#150e70] hover:bg-[#322177] transition rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">YT</span>
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-[#150e70] hover:text-purple-700" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-[#150e70] hover:text-purple-700" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 relative text-[#150e70]">
            About Us
            <span className="block w-10 h-[2px] bg-[#15005c] mt-1 rounded"></span>
          </h3>
          <p className="mb-2 font-medium text-[#150e70]">Contacts</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              <Mail size={16} className="inline mr-2 text-[#150e70]" />
              <a href="mailto:rishikulyogshalagoa@gmail.com">rishikulyogshalagoa@gmail.com</a>
            </li>
            <li>
              <Phone size={16} className="inline mr-2 text-[#150e70]" />
              <a href="tel:+15551234567">(555) 123-4567</a>
            </li>
            <li>
              <MapPin size={16} className="inline mr-2 text-[#150e70]" />
              128, Thorlebag, Querim, Arambol, Goa 403524.
            </li>
          </ul>
          <div className="mt-4">
            <Link href="/privacy" className="underline text-sm hover:text-accent transition-colors text-[#150e70]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-[#150e70] z-10 relative">
        &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
      </div>
    </footer>
  );
}
