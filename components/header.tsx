"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define types for our navigation items
interface NavItemWithDropdown {
  name: string;
  dropdown: Array<{
    name: string;
    href: string;
  }>;
  href?: never;
}

interface NavItemWithoutDropdown {
  name: string;
  href: string;
  dropdown?: never;
}

type NavigationItem = NavItemWithDropdown | NavItemWithoutDropdown;

const yellowItems = ["About Us", "Programs", "Retreats", "Our Teachers", "Our Reviews", "Blogs", "Gallery", "Contact Us", "Payment"];

const leftNavigation: NavigationItem[] = [
  {
    name: "Programs",
    dropdown: [
      { name: "200HRS YTT ONLINE", href: "/programs/200-online" },
      { name: "300HRS YTT ONLINE", href: "/programs/300-online" },
      { name: "200HRS YTT IN BALI (MELATI)", href: "/programs/200-bali-melati" },
      { name: "200HRS YTT IN BALI (YOGA AMERTHAM)", href: "/programs/200-bali-amritham" },
      { name: "200HRS YTT IN BALI (THE MANSION)", href: "/programs/200-bali-mansion" },
      { name: "200HRS YTT IN BALI (PELAGA)", href: "/programs/200-bali-pelaga" },
      { name: "9/18DAYS MEDITATION TEACHER TRAINING (BALI)", href: "/programs/meditation-bali" },
      { name: "200HRS HYBRID YTT (BALI)", href: "/programs/200-hybrid-bali" },
      { name: "200HRS YTT IN INDIA (RISHIKESH)", href: "/programs/200-india-rishikesh" },
      { name: "300HRS YTT IN INDIA (RISHIKESH)", href: "/programs/300-india-rishikesh" }
    ]
  },
  {
    name: "Retreats",
    dropdown: [
      { name: "7 Days Holiday Retreat", href: "/retreats/7-days" },
      { name: "14 Days Wellness Retreat", href: "/retreats/14-days" },
      { name: "21 Days Detox Retreat", href: "/retreats/21-days" }
    ]
  },
  { name: "Our Teachers", href: "/teachers" },
  { name: "Our Reviews", href: "/reviews" },
  { name: "Blogs", href: "/blogs" },
  { name: "Gallery", href: "/gallery" }
];

const rightNavigation: NavigationItem[] = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Payment", href: "/payment" }
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleDropdown = (name: string) => {
    setExpandedDropdown((prev) => (prev === name ? null : name));
  };

  const renderDrawerNav = () => {
    return [...leftNavigation, ...rightNavigation].map((item) => {
      const isYellow = yellowItems.includes(item.name);
      
      if ('href' in item) {
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn("block text-base font-medium py-2", isYellow && "text-blue-500")}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        );
      } else {
        return (
          <div key={item.name}>
            <button
              className={cn(
                "w-full flex justify-between items-center text-base font-medium py-2",
                isYellow && "text-blue-500"
              )}
              onClick={() => toggleDropdown(item.name)}
            >
              <span>{item.name}</span>
              <ChevronDown
                size={16}
                className={cn("transition-transform", expandedDropdown === item.name && "rotate-180")}
              />
            </button>
            {expandedDropdown === item.name && (
              <div className="ml-4 space-y-2">
                {item.dropdown.map((subItem, idx) => (
                  <div key={subItem.name}>
                    <Link
                      href={subItem.href}
                      className="block text-sm py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                    {idx !== item.dropdown.length - 1 && (
                      <div className="border-t border-gray-200 dark:border-gray-700" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-md shadow-sm py-3 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left: Menu + Links */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </Button>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-primary">
              <Link href="/programs">PROGRAMS</Link>
              <Link href="/about">ABOUT</Link>
            </nav>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/YA2.png" alt="Rishikul" width={120} height={60} className="object-contain" />
            </Link>
          </div>

          {/* Right: Text + Theme */}
          <div className="flex justify-end items-center gap-4">
            <div className="hidden md:flex flex-col text-[13px] leading-tight text-right text-primary">
              <Link href="/" className="flex-shrink-0">
                <Image src="/YAlogo-removebg-preview.png" alt="Yoga Alliance" width={60} height={100} className="object-contain" />
              </Link>
            </div>
            {mounted && (
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Right Drawer for Mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 w-72 h-screen overflow-y-auto bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 min-h-screen flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/YA2.png" alt="Rishikul" width={120} height={40} className="ml-6" />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </Button>
            </div>
            <nav className="space-y-4">{renderDrawerNav()}</nav>
          </div>
        </div>
      </div>
    </header>
  );
}