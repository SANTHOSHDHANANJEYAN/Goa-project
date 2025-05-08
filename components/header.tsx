"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const yellowItems = ["About Us", "Program", "Retreat", "Our Teachers", "Our Reviews", "Blogs", "Gallery", "Contact Us", "Payment"];

const navigation = [
  {
    name: "Program",
    dropdown: [
      { name: "50 Hr Multi-Style-Yoga TTC", href: "/50" },
      { name: "100 Hr Multi-Style-Yoga TTC", href: "/100" },
      { name: "200 Hr Multi-Style-Yoga TTC", href: "/200" },
      { name: "300 Hr Multi-Style-Yoga TTC", href: "/300" },
      { name: "21 Days Yoga Immersion Course", href: "/services" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Payment", href: "/contact" }
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
    return navigation.map((item) => {
      const isYellow = yellowItems.includes(item.name);
      return (
        <div key={item.name}>
          {!item.dropdown ? (
            <Link
              href={item.href}
              className={cn("block text-base font-medium py-2", isYellow && "text-blue-500")}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>
      );
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
              <div className="relative group">
                <button className="text-sm font-medium text-primary flex items-center gap-1">
                  PROGRAMS <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                  <Link href="/50" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">50 Hr Multi-Style Yoga TTC</Link>
                  <Link href="/100" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">100 Hr Multi-Style Yoga TTC</Link>
                  <Link href="/200" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">200 Hr Multi-Style Yoga TTC</Link>
                  <Link href="/300" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">300 Hr Multi-Style Yoga TTC</Link>
                  <Link href="/services" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">21 Days Yoga Immersion</Link>
                </div>
              </div>
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
