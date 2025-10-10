"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BRAND_GOLD = "#E0B973";
const TEXT = "#1F2937";

// Pinterest Icon (custom)
type IconProps = React.ComponentProps<"svg"> & { size?: number };
const PinterestIcon = ({ size = 18, className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
    {...rest}
  >
    <path d="M12 2C6.48 2 2 6.26 2 11.64c0 3.92 2.52 7.26 6.03 8.45-.08-.72-.16-1.83.03-2.62.18-.76 1.17-4.86 1.17-4.86s-.3-.6-.3-1.49c0-1.4.81-2.45 1.82-2.45.86 0 1.28.65 1.28 1.43 0 .87-.56 2.18-.85 3.39-.24 1.01.51 1.84 1.52 1.84 1.82 0 3.22-1.92 3.22-4.69 0-2.45-1.76-4.17-4.27-4.17-2.91 0-4.63 2.18-4.63 4.44 0 .88.34 1.83.77 2.35.08.1.09.19.07.29-.08.32-.26 1.01-.3 1.16-.05.18-.15.22-.35.13-1.3-.6-2.11-2.49-2.11-4.01 0-3.27 2.38-6.27 6.87-6.27 3.61 0 6.41 2.57 6.41 6.01 0 3.58-2.26 6.46-5.4 6.46-1.05 0-2.03-.55-2.37-1.21l-.65 2.51c-.24.94-.89 2.11-1.33 2.83.99.31 2.03.48 3.12.48 5.52 0 10-4.26 10-9.64C22 6.26 17.52 2 12 2z" />
  </svg>
);

const mainNav = [
  { name: "Home", href: "/" },
  {
    name: "About",
    dropdown: [
      { name: "About Us", href: "/Aboutyogshala" },
      { name: "Our Teachers", href: "/AboutTeachers" },
      { name: "Our Reviews", href: "/Reviews" },
    ],
  },
  {
    name: "Yoga Courses",
    dropdown: [
      { name: "50 Hr Multi-Style-Yoga TTC", href: "/50hrsyogattc" },
      { name: "100 Hr Multi-Style-Yoga TTC", href: "/100hrsyogattc" },
      { name: "200 Hr Multi-Style-Yoga TTC", href: "/200hrsyogattc" },
      { name: "300 Hr Multi-Style-Yoga TTC", href: "/300hrsyogattc" },
      { name: "500 Hr Multi-Style-Yoga TTC", href: "/500hrsyogattc" },
    ],
  },
  {
    name: "Yoga Retreat",
    dropdown: [
      { name: "7 Days Yoga Holiday Retreat", href: "/7daysretreat" },
      { name: "14 Days Yoga Detox Retreat", href: "/14daysretreat" },
      { name: "21 Days Yoga Wellness Retreat", href: "/21daysretreat" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/Blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "Payment", href: "/payment" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/1Cjee3xdbp/", Icon: Facebook, color: "#1877F2" },
  { name: "Instagram", href: "https://www.instagram.com/rishikulyogshalagoa/", Icon: Instagram, color: "#E4405F" },
  { name: "YouTube", href: "https://www.youtube.com/@rishikulyogshalagoa", Icon: Youtube, color: "#FF0000" },
  { name: "Pinterest", href: "https://in.pinterest.com/Rishikulyogashala/", Icon: PinterestIcon, color: "#E60023" },
  { name: "Twitter", href: "https://x.com/yogattcgoa", Icon: Twitter, color: "#1DA1F2" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (name: string) =>
    setExpandedDropdown((prev) => (prev === name ? null : name));

  const toggleDesktopDropdown = (name: string) =>
    setDesktopDropdown((prev) => (prev === name ? null : name));

  const isActive = (href?: string) => href && pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="w-full h-10" style={{ backgroundColor: BRAND_GOLD }}>
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div
            className="flex h-10 items-center justify-between text-sm pl-[7rem]"
            style={{ color: TEXT }}
          >
            <div className="flex items-center gap-4">
              <a
                href="tel:+919520024333"
                className="inline-flex items-center gap-2 hover:opacity-90"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">+91-9520024333</span>
              </a>
              <div className="hidden sm:block h-4 w-px bg-black/30" />
              <a
                href="mailto:rishikulyogshalagoa@gmail.com"
                className="inline-flex items-center gap-2 hover:opacity-90"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">
                  rishikulyogshalagoa@gmail.com
                </span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-3 pr-[12rem]">
              {socialLinks.map(({ name, href, Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                  style={{ color }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[5rem]">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </Button>
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/goalogo.webp"
                  alt="Rishikul"
                  width={130}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-6 text-sm font-medium"
              style={{ color: TEXT }}
            >
              {mainNav.map((item) => {
                const hasDropdown =
                  "dropdown" in item && Array.isArray(item.dropdown);
                return !hasDropdown ? (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className={cn(
                      "px-1 py-2 hover:text-black",
                      isActive(item.href) && "font-semibold text-black"
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => toggleDesktopDropdown(item.name)}
                      className="flex items-center gap-1 px-1 py-2 hover:text-black"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform",
                          desktopDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    {desktopDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 border-b-4 rounded-md shadow-lg z-50"
                        style={{ borderBottomColor: BRAND_GOLD }}
                        onMouseLeave={() => setDesktopDropdown(null)}
                      >
                        <ul className="py-2">
                          {item.dropdown?.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                                onClick={() => setDesktopDropdown(null)}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={{ pathname: "/contact", query: { enquiry: "1" } }}
                className="inline-flex items-center rounded-full px-4 py-2 text-white shadow-sm bg-[#16a34a] hover:bg-[#e5a724] transition-colors duration-300"
              >
                Send Enquiry
              </Link>
            </div>

            {/* Mobile Badge */}
            <div className="md:hidden">
              <Image
                src="/yg_logo-removebg-preview.png"
                alt="Yoga Alliance"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black bg-opacity-50 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-white shadow-lg transform transition-transform duration-300 rounded-tl-[25px] rounded-bl-[25px] border-l-4 overflow-y-auto",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ borderLeftColor: BRAND_GOLD }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-2 ml-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo30-removebg-preview.png"
                  alt="Rishikul"
                  width={120}
                  height={30}
                  className="ml-8"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>

            <div
              className="mt-2 mb-4 flex items-center gap-4 text-sm"
              style={{ color: TEXT }}
            >
              <a href="tel:+919520024333" className="inline-flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9520024333</span>
              </a>
              <a
                href="mailto:rishikulyogshalagoa@gmail.com"
                className="inline-flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Mail</span>
              </a>
            </div>

            <nav className="text-[#1F2937] pl-1 mt-0">
              {mainNav.map((item) => {
                const hasDropdown = "dropdown" in item && Array.isArray(item.dropdown);
                return (
                  <div key={item.name}>
                    {!hasDropdown ? (
                      <Link
                        href={item.href!}
                        className="block text-base font-medium py-2 text-[#1F2937]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="w-full flex justify-between items-center text-base font-medium py-2 text-[#1F2937]"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform",
                              expandedDropdown === item.name && "rotate-180"
                            )}
                          />
                        </button>
                        {expandedDropdown === item.name && (
                          <div className="ml-4 space-y-2">
                            {item.dropdown?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block text-sm py-1 text-[#1F2937]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                    <div className="border-t border-gray-200 my-2" />
                  </div>
                );
              })}
            </nav>

            <div className="mt-6 flex gap-3">
              <Link
                href={{ pathname: "/contact", query: { enquiry: "1" } }}
                className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-white shadow-sm bg-[#16a34a] hover:bg-[#e5a724] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Send Enquiry
              </Link>
            </div>

            <div className="mt-auto mb-8 pt-4">
              <Image
                src="/yg_logo-removebg-preview.png"
                alt="Yoga Alliance"
                width={120}
                height={50}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
