"use client";

import { useEffect, useState } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BRAND_GOLD = "#E0B973";
const TEXT = "#1F2937";

const leftNavigation = [
  {
    name: "Courses",
    dropdown: [
      { name: "50 Hr Multi-Style-Yoga TTC", href: "/50hrsyogattc" },
      { name: "100 Hr Multi-Style-Yoga TTC", href: "/100hrsyogattc" },
      { name: "200 Hr Multi-Style-Yoga TTC", href: "/200hrsyogattc" },
      { name: "300 Hr Multi-Style-Yoga TTC", href: "/300hrsyogattc" },
      { name: "500 Hr Multi-Style-Yoga TTC", href: "/500hrsyogattc" },
    ],
  },
  {
    name: "Retreats",
    dropdown: [
      { name: "7 Days Yoga Holiday Retreat", href: "/7daysretreat" },
      { name: "14 Days Yoga Detox Retreat", href: "/14daysretreat" },
      { name: "21 Days Yoga Wellness Retreat", href: "/21daysretreat" },
    ],
  },
  { name: "Our Teachers", href: "/AboutTeachers" },
  { name: "Our Reviews", href: "/Reviews" },
  { name: "Blogs", href: "/Blog" },
  { name: "Gallery", href: "/gallery" },
];

const aboutDropdown = [
  { name: "About Us", href: "/Aboutyogshala" },
  { name: "Our Teachers", href: "/AboutTeachers" },
  { name: "Our Reviews", href: "/Reviews" },
];

const coursesDropdown = leftNavigation[0].dropdown;
const retreatsDropdown = leftNavigation[1].dropdown;

const mainNav = [
  { name: "Home", href: "/" },
  { name: "About", dropdown: aboutDropdown },
  { name: "Yoga Courses", dropdown: coursesDropdown },
  { name: "Yoga Retreat", dropdown: retreatsDropdown },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/Blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "Payment", href: "/payment" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/1Cjee3xdbp/", Icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/rishikulyogshalagoa/", Icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@rishikulyogshalagoa", Icon: Youtube },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [hideTopbar, setHideTopbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (y <= 10) setHideTopbar(false);
      else if (delta > 5 && y > 80) setHideTopbar(true);
      else if (delta < -5) setHideTopbar(false);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (name: string) =>
    setExpandedDropdown((prev) => (prev === name ? null : name));

  const toggleDesktopDropdown = (name: string) =>
    setDesktopDropdown((prev) => (prev === name ? null : name));

  const isActive = (href?: string) => href && pathname === href;

  const renderDrawerNav = () =>
    mainNav.map((item, index) => {
      const hasDropdown = "dropdown" in item && Array.isArray(item.dropdown);
      return (
        <div key={item.name}>
          {!hasDropdown ? (
            <Link
              href={item.href!}
              className={cn(
                "block text-base font-medium py-2 text-[#1F2937]",
                isActive(item.href) && "text-black font-semibold"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ) : (
            <>
              <button
                className="w-full flex justify-between items-center text-base font-medium py-2 text-[#1F2937] hover:text-black"
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
                  {item.dropdown?.map((sub, idx) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block text-sm py-1 text-[#1F2937] hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
          {index !== mainNav.length - 1 && <div className="border-t border-gray-200 my-2" />}
        </div>
      );
    });

  const shouldHideTopbar = hideTopbar && !mobileMenuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top Bar */}
      <div
        className={cn(
          "w-full overflow-hidden transition-all duration-300 ease-out",
          shouldHideTopbar ? "h-0 opacity-0" : "h-10 opacity-100"
        )}
        style={{ backgroundColor: BRAND_GOLD }}
      >
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm pl-[7rem]" style={{ color: TEXT }}>
            <div className="flex items-center gap-4">
              <a href="tel:+919520024333" className="inline-flex items-center gap-2 hover:opacity-90">
                <Phone size={16} />
                <span className="hidden sm:inline">+91-9520024333</span>
              </a>
              <div className="hidden sm:block h-4 w-px bg-black/30" />
              <a
                href="mailto:rishikulyogshalagoa@gmail.com"
                className="inline-flex items-center gap-2 hover:opacity-90"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">rishikulyogshalagoa@gmail.com</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-3 pr-[12rem]">
              {socialLinks.map(({ name, href, Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white shadow-sm">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Menu */}
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
                <Image src="/goalogo.webp" alt="Rishikul" width={130} height={60} className="object-contain" priority />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: TEXT }}>
              {mainNav.map((item) => {
                const hasDropdown = "dropdown" in item && Array.isArray(item.dropdown);
                return !hasDropdown ? (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className={cn("px-1 py-2 hover:text-black", isActive(item.href) && "font-semibold text-black")}
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
                        className={cn("transition-transform", desktopDropdown === item.name && "rotate-180")}
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
                className="inline-flex items-center rounded-full px-4 py-2 text-black shadow-sm hover:opacity-90"
                style={{ backgroundColor: BRAND_GOLD }}
              >
                Send Enquiry
              </Link>
            </div>

            {/* Mobile Badge */}
            <div className="md:hidden">
              <Image src="/yg_logo-removebg-preview.png" alt="Yoga Alliance" width={40} height={40} className="object-contain" />
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
                <Image src="/logo30-removebg-preview.png" alt="Rishikul" width={120} height={30} className="ml-8" />
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

            <div className="mt-2 mb-4 flex items-center gap-4 text-sm" style={{ color: TEXT }}>
              <a href="tel:+919520024333" className="inline-flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9520024333</span>
              </a>
              <a href="mailto:rishikulyogshalagoa@gmail.com" className="inline-flex items-center gap-2">
                <Mail size={16} />
                <span>Mail</span>
              </a>
            </div>

            <nav className="text-[#1F2937] pl-1 mt-0">{renderDrawerNav()}</nav>

            <div className="mt-6 flex gap-3">
              <Link
                href={{ pathname: "/contact", query: { enquiry: "1" } }}
                className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-black shadow-sm hover:opacity-90"
                style={{ backgroundColor: BRAND_GOLD }}
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
