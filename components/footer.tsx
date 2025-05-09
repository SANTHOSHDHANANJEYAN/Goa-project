import Link from "next/link";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#f9f3ec] text-[#15005c] pt-16 pb-10 px-6 shadow-inner border-t-4 border-gradient-to-r from-[#15005c] via-[#9f87ff] to-[#15005c]">
      {/* Optional decorative background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')] bg-repeat pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-sm z-10">
        {/* Programs Column */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 relative">
            Programs
            <span className="block w-10 h-[2px] bg-[#15005c] mt-1 rounded"></span>
          </h3>
          <ul className="space-y-2">
            {[
              "21 Days Course",
              "50 Hr Multi-Style-Yoga TTC",
              "100 Hr Multi-Style-Yoga TTC",
              "200 Hr Multi-Style-Yoga TTC",
              "300 Hr Multi-Style-Yoga TTC",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/services#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Retreats Column */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 relative">
            Retreats
            <span className="block w-10 h-[2px] bg-[#15005c] mt-1 rounded"></span>
          </h3>
          <ul className="space-y-2">
            {[
              { name: "7-Day Yoga Retreat", href: "/retreats/7-day-yoga-retreat" },
              { name: "Weekend Wellness", href: "/retreats/weekend-wellness" },
              { name: "Detox & Cleanse", href: "/retreats/detox-cleanse" },
              { name: "Silent Retreat", href: "/retreats/silent-retreat" },
            ].map((retreat) => (
              <li key={retreat.name}>
                <Link
                  href={retreat.href}
                  className="hover:text-accent transition-colors"
                >
                  {retreat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo & Socials */}
        <div className="flex flex-col items-center space-y-6 pr-[10rem]">
          <img
            src="/logo2.png"
            alt="Logo"
            className="w-[9rem] h-[5rem] mx-auto drop-shadow-md gap-4"
          />
          <div className="flex space-x-4">
            <Link href="https://youtube.com">
              <span className="sr-only">YouTube</span>
              <div className="w-8 h-8 bg-[#15005c] hover:bg-[#322177] transition rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">YT</span>
              </div>
            </Link>
            <Link href="https://instagram.com" className="hover:scale-110 transition-transform">
              <Instagram className="text-[#15005c]" />
            </Link>
            <Link href="https://facebook.com" className="hover:scale-110 transition-transform">
              <Facebook className="text-[#15005c]" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 relative">
            About Us
            <span className="block w-10 h-[2px] bg-[#15005c] mt-1 rounded"></span>
          </h3>
          <p className="mb-2 font-medium">Contacts</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              <Mail size={16} className="inline mr-2 text-[#15005c]" />
              rishikulyogshalagoa@gmail.com
            </li>
            <li>
              <Phone size={16} className="inline mr-2 text-[#15005c]" />
              (555) 123-4567
            </li>
            <li>
              <MapPin size={16} className="inline mr-2 text-[#15005c]" />
              128, Thorlebag, Querim, Arambol, Goa 403524.
            </li>
          </ul>
          <div className="mt-4">
            <Link href="/privacy" className="underline text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-xs text-[#6a5d8c] z-10 relative">
        &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
      </div>
    </footer>
  );
}
