"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const yellowItems = ["About Us", "Program", "Retreat", "Our Teachers", "Our Reviews", "Blogs", "Gallery", "Contact Us", "Payment"];

const leftNavigation = [
  {
    name: "Courses",
    dropdown: [
      { name: "50 Hr Multi-Style-Yoga TTC", href: "/50hrsyogattc#InIndia" },
      { name: "100 Hr Multi-Style-Yoga TTC", href: "/100hrsyogattc#InIndia" },
      { name: "200 Hr Multi-Style-Yoga TTC", href: "/200hrsyogattc#InIndia" },
      { name: "300 Hr Multi-Style-Yoga TTC", href: "/300hrsyogattc#InIndia" },
      { name: "21 Days Yoga Immersion Course", href: "/21dayscourses#InIndia" }
    ]
  },
  {
    name: "Retreats",
    dropdown: [
      { name: "7 Days Yoga Holiday Retreat", href: "/7daysretreat#ImIndia" },
      { name: "14 Days Yoga Detox Retreat", href: "/14daysretreat#InIndia" },
      { name: "21 Days Yoga Wellness Retreat", href: "/21daysretreat#InIndia" }
    ]
  },
  { name: "Our Teachers", href: "/About_Teachers#InGoa" },
  { name: "Our Reviews", href: "/about#InGoa" },
  { name: "Blogs", href: "/Blog#InGoa" },
  { name: "Gallery", href: "/gallery#InGoa" }
];

const rightNavigation = [
  { name: "About Us", href: "/Aboutyogshala#InGoa" },
  { name: "Contact Us", href: "/contact#InGoa" },
  { name: "Payment", href: "/contact#InGoa" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const pathname = usePathname();
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
              className={cn("block text-base font-medium py-2 text-[#1F2937]", isYellow && "text-[#1F2937]")}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {item.name}
            </Link>
          ) : (
            <>
              <button
                className={cn(
                  "w-full flex justify-between items-center text-base font-medium py-2 text-[#1F2937] hover:text-[#3E8E7E]",
                  isYellow && "text-[#1F2937]"
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
                  {item.dropdown?.map((subItem, idx) => (
                    <div key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className="block text-sm py-1 text-[#1F2937] hover:text-[#3E8E7E]"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
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

          {index !== allItems.length - 1 && <div className="border-t border-gray-300 my-2" />}
        </div>
      );
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9FAF8] backdrop-blur-md shadow-sm py-3 transition-colors">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-[3rem] ">
            <Button variant="ghost" size="icon" className="hover:bg-transparent focus:bg-transparent active:bg-transparent" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </Button>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1F2937]">
              <div className="relative">
                <button
                  onClick={() => toggleDesktopDropdown("Program")}
                  className="flex items-center gap-1 hover:text-[#E0B973]"
                >
                  COURSES
                  <ChevronDown size={16} className={cn("transition-transform", desktopDropdown === "Program" && "rotate-180")} />
                </button>
                {desktopDropdown === "Program" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 border-b-4 border-[#E0B973] rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      {leftNavigation[0]?.dropdown?.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
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
                  className="flex items-center gap-1 hover:text-[#E0B973]"
                >
                  RETREATS
                  <ChevronDown size={16} className={cn("transition-transform", desktopDropdown === "Retreat" && "rotate-180")} />
                </button>
                {desktopDropdown === "Retreat" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 border-b-4 border-[#E0B973] rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      {leftNavigation[1]?.dropdown?.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
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

          <div className="flex justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo30-removebg-preview.png" alt="Rishikul" width={120} height={60} className="object-contain" />
            </Link>
          </div>

          <div className="flex justify-end items-center gap-4">
            <div className="hidden md:flex flex-col text-[13px] leading-tight text-right text-[#1F2937]">
              <Link href="/" className="flex-shrink-0">
                <Image src="/yg_logo-removebg-preview.png" alt="Yoga Alliance" width={100} height={100} className="object-contain" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 w-72 h-screen overflow-y-auto bg-white shadow-lg transform transition-transform duration-300 rounded-tl-[25px] rounded-bl-[25px] border-l-4 border-[#3E8E7E]",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-[0.5rem] ml-[1rem]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo30-removebg-preview.png" alt="Rishikul" width={120} height={30} className="ml-[2.5rem]" />
              </Link>
              <Button variant="ghost" size="icon" className="hover:bg-transparent focus:bg-transparent active:bg-transparent" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </Button>
            </div>

            <nav className="text-[#1F2937] pl-[0.5rem] mt-0">
              {renderDrawerNav()}
            </nav>

            <div className="mt-auto mb-8 pt-4">
              <div className="relative w-full h-[90px] rounded-lg overflow-hidden">
                <Image src="/yg_logo-removebg-preview.png" alt="Yoga image" width={120} height={50} className="object-cover ml-[3rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
