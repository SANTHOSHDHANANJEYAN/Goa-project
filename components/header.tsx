"use client";

import { useState } from "react";
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
  Twitter,
  Linkedin,
  Youtube,
  Pinterest,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Brand colors
const BRAND_GOLD = "#E0B973";
const BRAND_GREEN = "#16A34A";
const TEXT = "#1F2937";

// Existing content (kept)
const leftNavigation = [
  {
    name: "Courses",
    dropdown: [
      { name: "50 Hr Multi-Style-Yoga TTC", href: "/50hrsyogattc" },
      { name: "100 Hr Multi-Style-Yoga TTC", href: "/100hrsyogattc" },
      { name: "200 Hr Multi-Style-Yoga TTC", href: "/200hrsyogattc" },
      { name: "300 Hr Multi-Style-Yoga TTC", href: "/300hrsyogattc" },
      { name: "21 Days Yoga Immersion Course", href: "/21dayscourses" }
    ]
  },
  {
    name: "Retreats",
    dropdown: [
      { name: "7 Days Yoga Holiday Retreat", href: "/7daysretreat" },
      { name: "14 Days Yoga Detox Retreat", href: "/14daysretreat" },
      { name: "21 Days Yoga Wellness Retreat", href: "/21daysretreat" }
    ]
  },
  { name: "Our Teachers", href: "/AboutTeachers" },
  { name: "Our Reviews", href: "/Reviews" },
  { name: "Blogs", href: "/Blog" },
  { name: "Gallery", href: "/gallery" }
];

const rightNavigation = [
  { name: "About Us", href: "/Aboutyogshala" },
  { name: "Contact Us", href: "/contact" },
  { name: "Payment", href: "/payment" }
];

// Build nav to match screenshot layout
const aboutDropdown = [
  { name: "About Us", href: "/Aboutyogshala" },
  { name: "Our Teachers", href: "/AboutTeachers" },
  { name: "Our Reviews", href: "/Reviews" },
];

const coursesDropdown = leftNavigation[0]?.dropdown ?? [];
const retreatsDropdown = leftNavigation[1]?.dropdown ?? [];

const mainNav = [
  { name: "Home", href: "/" },
  { name: "About", dropdown: aboutDropdown },
  { name: "Yoga Courses", dropdown: coursesDropdown },
  { name: "Yoga Retreat", dropdown: retreatsDropdown },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/Blog" },
  { name: "Contact Us", href: "/contact" },
];

// Topbar social links (replace href with your profiles)
const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/", Icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/", Icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  { name: "Pinterest", href: "https://pinterest.com/", Icon: Pinterest },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null); // mobile drawer
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null); // desktop navbar
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    setExpandedDropdown((prev) => (prev === name ? null : name));
  };

  const toggleDesktopDropdown = (name: string) => {
    setDesktopDropdown((prev) => (prev === name ? null : name));
  };

  const isActive = (href?: string) => (href ? pathname === href : false);

  const renderDrawerNav = () => {
    // Build a combined mobile structure similar to the mainNav
    const drawerItems = mainNav.concat([{ name: "Payment", href: "/payment" }]);
    return drawerItems.map((item, index) => {
      const hasDropdown = "dropdown" in item && Array.isArray((item as any).dropdown);

      return (
        <div key={item.name}>
          {!hasDropdown ? (
            <Link
              href={(item as any).href!}
              className={cn(
                "block text-base font-medium py-2 text-[#1F2937]",
                isActive((item as any).href) && "text-black font-semibold"
              )}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {item.name}
            </Link>
          ) : (
            <>
              <button
                className={cn(
                  "w-full flex justify-between items-center text-base font-medium py-2 text-[#1F2937] hover:text-black"
                )}
                onClick={() => toggleDropdown(item.name)}
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                <span>{item.name}</span>
                <ChevronDown
                  size={16}
                  className={cn("transition-transform", expandedDropdown === item.name && "rotate-180")}
                />
              </button>
              {expandedDropdown === item.name && (
                <div className="ml-4 space-y-2">
                  {(item as any).dropdown?.map((subItem: any, idx: number) => (
                    <div key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className="block text-sm py-1 text-[#1F2937] hover:text-black"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                      >
                        {subItem.name}
                      </Link>
                      {idx !== (item as any).dropdown.length - 1 && (
                        <div className="border-t border-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {index !== drawerItems.length - 1 && <div className="border-t border-gray-300 my-2" />}
        </div>
      );
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top Gold Contact/Social Bar */}
      <div className="w-full" style={{ backgroundColor: BRAND_GOLD }}>
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm" style={{ color: TEXT }}>
            {/* Left: phone + email */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+918433225327"
                className="inline-flex items-center gap-2 hover:opacity-90"
                aria-label="Call us"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">+91-8433225327</span>
              </a>

              <div className="hidden sm:block h-4 w-px bg-black/30" />

              <a
                href="mailto:contact@rishikulyogshalarishikesh.com"
                className="inline-flex items-center gap-2 hover:opacity-90"
                aria-label="Email us"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">contact@rishikulyogshalarishikesh.com</span>
              </a>
            </div>

            {/* Right: Our Review + Socials */}
            <div className="flex items-center gap-4">
              <Link
                href="/Reviews"
                className="inline-flex items-center gap-2 hover:opacity-90"
                aria-label="Our Review"
              >
                <Star size={16} />
                <span className="hidden sm:inline">Our Review</span>
              </Link>

              <div className="hidden sm:flex items-center gap-3">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="hover:opacity-90"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white shadow-sm">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Burger (mobile) + Logo */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent focus:bg-transparent active:bg-transparent"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </Button>

              <Link href="/" className="flex-shrink-0" aria-label="Home">
                <Image
                  src="/logo30-removebg-preview.png"
                  alt="Rishikul"
                  width={140}
                  height={70}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Center: Nav (desktop) */}
            <nav
              className="hidden md:flex items-center gap-6 text-sm font-medium"
              style={{ color: TEXT }}
            >
              {mainNav.map((item) => {
                const hasDropdown = "dropdown" in item && Array.isArray((item as any).dropdown);

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.name}
                      href={(item as any).href!}
                      className={cn(
                        "px-1 py-2 hover:text-black",
                        isActive((item as any).href) && "font-semibold text-black"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => toggleDesktopDropdown(item.name)}
                      className="flex items-center gap-1 px-1 py-2 hover:text-black"
                      aria-haspopup="menu"
                      aria-expanded={desktopDropdown === item.name}
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
                          {(item as any).dropdown?.map((sub: any) => (
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

            {/* Right: CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/payment"
                className="inline-flex items-center rounded-full px-4 py-2 text-white shadow-sm hover:opacity-90"
                style={{ backgroundColor: BRAND_GREEN }}
              >
                Pay Online
              </Link>
              <Link
                href={{ pathname: "/contact", query: { enquiry: "1" } }}
                className="inline-flex items-center rounded-full px-4 py-2 text-black shadow-sm hover:opacity-90"
                style={{ backgroundColor: BRAND_GOLD }}
              >
                Send Enquiry
              </Link>
            </div>

            {/* Right (mobile): Yoga Alliance badge or placeholders */}
            <div className="md:hidden">
              <Link href="/" className="flex-shrink-0" aria-label="Yoga Alliance">
                <Image
                  src="/yg_logo-removebg-preview.png"
                  alt="Yoga Alliance"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 w-80 max-w-[85vw] h-screen overflow-y-auto bg-white shadow-lg transform transition-transform duration-300 rounded-tl-[25px] rounded-bl-[25px] border-l-4",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ borderLeftColor: BRAND_GOLD }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 h-full flex flex-col">
            {/* Drawer Header */}
            <div className="flex justify-between items-center mb-2 ml-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Home">
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
                className="hover:bg-transparent focus:bg-transparent active:bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </Button>
            </div>

            {/* Contact quick links */}
            <div className="mt-2 mb-4 flex items-center gap-4 text-sm" style={{ color: TEXT }}>
              <a href="tel:+918433225327" className="inline-flex items-center gap-2">
                <Phone size={16} />
                <span>+91-8433225327</span>
              </a>
              <a href="mailto:contact@rishikulyogshalarishikesh.com" className="inline-flex items-center gap-2">
                <Mail size={16} />
                <span>Mail</span>
              </a>
            </div>

            {/* Drawer Nav */}
            <nav className="text-[#1F2937] pl-1 mt-0">{renderDrawerNav()}</nav>

            {/* CTAs */}
            <div className="mt-6 flex gap-3">
              <Link
                href="/payment"
                className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-white shadow-sm"
                style={{ backgroundColor: BRAND_GREEN }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pay Online
              </Link>
              <Link
                href={{ pathname: "/contact", query: { enquiry: "1" } }}
                className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-black shadow-sm"
                style={{ backgroundColor: BRAND_GOLD }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Send Enquiry
              </Link>
            </div>

            {/* Bottom Badge/Image */}
            <div className="mt-auto mb-8 pt-4">
              <div className="relative w-full h-[90px] rounded-lg overflow-hidden">
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
      </div>
    </header>
  );
}
