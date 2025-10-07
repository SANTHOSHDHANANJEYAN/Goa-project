"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const yellowItems = [
  "About Us",
  "Program",
  "Retreat",
  "Our Teachers",
  "Our Reviews",
  "Blogs",
  "Gallery",
  "Contact Us",
  "Payment",
];

const leftNavigation = [
  {
    name: "Courses",
    dropdown: [
      { name: "50 Hr Multi-Style-Yoga TTC", href: "/50hrsyogattc" },
      { name: "100 Hr Multi-Style-Yoga TTC", href: "/100hrsyogattc" },
      { name: "200 Hr Multi-Style-Yoga TTC", href: "/200hrsyogattc" },
      { name: "300 Hr Multi-Style-Yoga TTC", href: "/300hrsyogattc" },
      { name: "21 Days Yoga Immersion Course", href: "/21dayscourses" },
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

const rightNavigation = [
  { name: "About Us", href: "/Aboutyogshala" },
  { name: "Contact Us", href: "/contact" },
  { name: "Payment", href: "/payment" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setExpandedDropdown((prev) => (prev === name ? null : name));
  };

  const toggleDesktopDropdown = (name: string) => {
    setDesktopDropdown((prev) => (prev === name ? null : name));
  };

  const renderDrawerNav = () => {
    const allItems = [...leftNavigation, ...rightNavigation];
    return allItems.map((item, index) => {
      const isYellow = yellowItems.includes(item.name);
      const hasDropdown = "dropdown" in item && Array.isArray(item.dropdown);

      return (
        <div key={item.name}>
          {!hasDropdown ? (
            <Link
              href={item.href!}
              className={cn(
                "block text-base font-medium py-2 text-[#1F2937] hover:text-[#3E8E7E] transition-colors",
                isYellow && "text-[#1F2937]"
              )}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              {item.name}
            </Link>
          ) : (
            <>
              <button
                className={cn(
                  "w-full flex justify-between items-center text-base font-medium py-2 text-[#1F2937] hover:text-[#3E8E7E] transition-colors",
                  isYellow && "text-[#1F2937]"
                )}
                onClick={() => toggleDropdown(item.name)}
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
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
                  {item.dropdown?.map((subItem, idx) => (
                    <div key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className="block text-sm py-1 text-[#1F2937] hover:text-[#3E8E7E] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontFamily:
                            '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                      >
                        {subItem.name}
                      </Link>
                      {idx !== item.dropdown.length - 1 && (
                        <div className="border-t border-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {index !== allItems.length - 1 && (
            <div className="border-t border-gray-300 my-2" />
          )}
        </div>
      );
    });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300",
        scrolled ? "translate-y-[-40px] sm:translate-y-[-44px]" : "translate-y-0"
      )}
    >
      {/* Top Header Bar */}
      <div 
        className="w-full bg-[#ffe4c4] text-[#1F2937] py-2 sm:py-2.5 px-2 sm:px-4"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 max-w-[90rem] mx-auto">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 justify-center sm:justify-start">
            <a 
              href="tel:+919520024333" 
              className="flex items-center gap-1 hover:text-[#3E8E7E] transition-colors"
            >
              <Phone size={12} className="sm:w-3 sm:h-3" />
              <span className="text-xs sm:text-sm font-medium">+91-9520024333</span>
            </a>
            <a 
              href="mailto:rishikulyogshalagoa@gmail.com" 
              className="flex items-center gap-1 hover:text-[#3E8E7E] transition-colors"
            >
              <Mail size={12} className="sm:w-3 sm:h-3" />
              <span className="hidden md:inline text-xs sm:text-sm font-medium">rishikulyogshalagoa@gmail.com</span>
              <span className="md:hidden text-xs font-medium">Email Us</span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-3 text-[#1F2937]">
              <a
                href="https://www.facebook.com/share/1Cjee3xdbp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3E8E7E] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.instagram.com/rishikulyogshalagoa/?igsh=MXJtNW0wYmFkZ3MwbA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3E8E7E] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.youtube.com/@rishikulyogshalagoa?si=gXYn1x60tu2cRbKc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3E8E7E] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#F9FAF8]">
        <div className="mx-auto max-w-[90rem] px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16 sm:h-20">
            {/* Left Side Menu */}
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-12">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent focus:bg-transparent active:bg-transparent p-1 sm:p-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={20} className="sm:w-6 sm:h-6" />
              </Button>

              <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-[#1F2937]">
                <div className="relative">
                  <button
                    onClick={() => toggleDesktopDropdown("Program")}
                    className="flex items-center gap-1 hover:text-[#E0B973] transition-colors py-2"
                  >
                    COURSES
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform",
                        desktopDropdown === "Program" && "rotate-180"
                      )}
                    />
                  </button>
                  {desktopDropdown === "Program" && (
                    <div className="absolute top-full left-0 mt-1 w-56 xl:w-64 bg-white border border-gray-200 border-b-4 border-[#E0B973] rounded-md shadow-lg z-50">
                      <ul className="py-2">
                        {leftNavigation[0]?.dropdown?.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setDesktopDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => toggleDesktopDropdown("Retreat")}
                    className="flex items-center gap-1 hover:text-[#E0B973] transition-colors py-2"
                  >
                    RETREATS
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform",
                        desktopDropdown === "Retreat" && "rotate-180"
                      )}
                    />
                  </button>
                  {desktopDropdown === "Retreat" && (
                    <div className="absolute top-full left-0 mt-1 w-56 xl:w-64 bg-white border border-gray-200 border-b-4 border-[#E0B973] rounded-md shadow-lg z-50">
                      <ul className="py-2">
                        {leftNavigation[1]?.dropdown?.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setDesktopDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo30-removebg-preview.png"
                  alt="Rishikul"
                  width={120}
                  height={60}
                  className="object-contain w-[80px] sm:w-[100px] lg:w-[120px]"
                />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex justify-end items-center">
              <div className="hidden sm:flex">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/yg_logo-removebg-preview.png"
                    alt="Yoga Alliance"
                    width={100}
                    height={100}
                    className="object-contain w-[60px] sm:w-[80px] lg:w-[100px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  {/* Mobile Drawer */}
  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300",
          scrolled ? "translate-y-[-40px] sm:translate-y-[-44px]" : "translate-y-0"
        )}
      >
        {/* Top Header Bar */}
        <div 
          className="w-full bg-[#ffe4c4] text-[#1F2937] py-2 sm:py-2.5 px-2 sm:px-4"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 max-w-[90rem] mx-auto">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 justify-center sm:justify-start">
              <a 
                href="tel:+919520024333" 
                className="flex items-center gap-1 hover:text-[#3E8E7E] transition-colors"
              >
                <Phone size={12} className="sm:w-3 sm:h-3" />
                <span className="text-xs sm:text-sm font-medium">+91-9520024333</span>
              </a>
              <a 
                href="mailto:rishikulyogshalagoa@gmail.com" 
                className="flex items-center gap-1 hover:text-[#3E8E7E] transition-colors"
              >
                <Mail size={12} className="sm:w-3 sm:h-3" />
                <span className="hidden md:inline text-xs sm:text-sm font-medium">rishikulyogshalagoa@gmail.com</span>
                <span className="md:hidden text-xs font-medium">Email Us</span>
              </a>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-3 text-[#1F2937]">
                <a
                  href="https://www.facebook.com/share/1Cjee3xdbp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3E8E7E] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://www.instagram.com/rishikulyogshalagoa/?igsh=MXJtNW0wYmFkZ3MwbA%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3E8E7E] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@rishikulyogshalagoa?si=gXYn1x60tu2cRbKc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3E8E7E] transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-[#F9FAF8]">
          <div className="mx-auto max-w-[90rem] px-2 sm:px-4 lg:px-8">
            <div className="grid grid-cols-3 items-center h-16 sm:h-20">
              {/* Left Side Menu */}
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-12">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent focus:bg-transparent active:bg-transparent p-1 sm:p-2"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu size={20} className="sm:w-6 sm:h-6" />
                </Button>

                <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-[#1F2937]">
                  <div className="relative">
                    <button
                      onClick={() => toggleDesktopDropdown("Program")}
                      className="flex items-center gap-1 hover:text-[#E0B973] transition-colors py-2"
                    >
                      COURSES
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          desktopDropdown === "Program" && "rotate-180"
                        )}
                      />
                    </button>
                    {desktopDropdown === "Program" && (
                      <div className="absolute top-full left-0 mt-1 w-56 xl:w-64 bg-white border border-gray-200 border-b-4 border-[#E0B973] rounded-md shadow-lg z-50">
                        <ul className="py-2">
                          {leftNavigation[0]?.dropdown?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-gray-100 transition-colors"
                                onClick={() => setDesktopDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => toggleDesktopDropdown("Retreat")}
                      className="flex items-center gap-1 hover:text-[#E0B973] transition-colors py-2"
                    >
                      RETREATS
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          desktopDropdown === "Retreat" && "rotate-180"
                        )}
                      />
                    </button>
                    {desktopDropdown === "Retreat" && (
                      <div className="absolute top-full left-0 mt-1 w-56 xl:w-64 bg-white border border-gray-200 border-b-4 border-[#E0B973] rounded-md shadow-lg z-50">
                        <ul className="py-2">
                          {leftNavigation[1]?.dropdown?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block px-3 xl:px-4 py-2 text-xs xl:text-sm hover:bg-gray-100 transition-colors"
                                onClick={() => setDesktopDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </nav>
              </div>

              {/* Center Logo */}
              <div className="flex justify-center">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/logo30-removebg-preview.png"
                    alt="Rishikul"
                    width={120}
                    height={60}
                    className="object-contain w-[80px] sm:w-[100px] lg:w-[120px]"
                  />
                </Link>
              </div>

              {/* Right Side */}
              <div className="flex justify-end items-center">
                <div className="hidden sm:flex">
                  <Link href="/" className="flex-shrink-0">
                    <Image
                      src="/yg_logo-removebg-preview.png"
                      alt="Yoga Alliance"
                      width={100}
                      height={100}
                      className="object-contain w-[60px] sm:w-[80px] lg:w-[100px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
            "fixed top-0 right-0 w-64 sm:w-72 h-screen overflow-y-auto bg-white shadow-lg transform transition-transform duration-300 rounded-tl-[25px] rounded-bl-[25px] border-l-4 border-[#3E8E7E]",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo30-removebg-preview.png"
                  alt="Rishikul"
                  width={100}
                  height={30}
                  className="ml-4 sm:ml-8"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent focus:bg-transparent active:bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>

            <nav className="text-[#1F2937] pl-2 mt-0 flex-1 overflow-y-auto">
              {renderDrawerNav()}
            </nav>

            {/* Social Media Links in Drawer */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-[#1F2937] mb-3">Follow Us</p>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://www.facebook.com/share/1Cjee3xdbp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F2937] hover:text-[#3E8E7E] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/rishikulyogshalagoa/?igsh=MXJtNW0wYmFkZ3MwbA%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F2937] hover:text-[#3E8E7E] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@rishikulyogshalagoa?si=gXYn1x60tu2cRbKc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F2937] hover:text-[#3E8E7E] transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <div className="relative w-full h-[80px] rounded-lg overflow-hidden">
                <Image
                  src="/yg_logo-removebg-preview.png"
                  alt="Yoga Alliance"
                  width={100}
                  height={50}
                  className="object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
