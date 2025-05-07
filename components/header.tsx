  "use client";

  import { useState, useEffect } from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
  import { useTheme } from "next-themes";
  import { cn } from "@/lib/utils";
  import { Button } from "@/components/ui/button";
  import Image from "next/image";

  const yellowItems = ["About Us", "Yoga Courses", "Retreats", "Gallery", "Contact Us", "Payment"];

  const leftNavigation = [
    
    {
      name: "Yoga Courses",
      dropdown: [
        { name: "21 Days Course", href: "/app/services" },
        { name: "50 Hr Multi-Style-Yoga TTC", href: "/app/50" },
        { name: "100 Hr Multi-Style-Yoga TTC", href: "/app/100" },
        { name: "200 Hr Multi-Style-Yoga TTC", href: "/app/200" },
        { name: "300 Hr Multi-Style-Yoga TTC", href: "/app/300" }
      ]
    },
    {
      name: "Retreats",
      dropdown: [
        { name: "7 DAY Retreat", href: "/app/retreats" },
        { name: "14 DAY Retreat", href: "/schedule/bali" },
        { name: "21 DAY Retreat", href: "/schedule/thailand" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
  ];

  const rightNavigation = [
    {
      name: "About Us",
      dropdown: [
        { name: "Our Teachers", href: "/about#story" },
        { name: "Our Reviews", href: "/about#team" },
        { name: "Blogs", href: "/about#philosophy" },
        { name: "FAQs", href: "/about#philosophy" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
    { name: "Payment", href: "/contact" },
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
                    {item.dropdown.map((subItem: any, idx: number) => (
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent dark:bg-gray-900 backdrop-blur-md shadow-sm py-3 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            
            {/* Left: Menu + Links */}
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={24} />
              </Button>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-primary">
                <Link href="/services">PROGRAMS</Link>
                <Link href="/about">ABOUT</Link>
              </nav>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo2.png" alt="Rishikul" width={140} height={50} className="object-contain" />
              </Link>
            </div>

            {/* Right: Text + Theme */}
            <div className="flex justify-end items-center gap-4">
              <div className="hidden md:flex flex-col text-[13px] leading-tight text-right text-primary">
                <span>YOGA SCHOOL IN GOA, INDIA</span>
                <span>ACCREDITED BY YOGA ALLIANCE</span>
              </div>
              {mounted && (
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Drawer for Mobile */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={cn(
              "fixed top-0 left-0 w-72 h-screen overflow-y-auto bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 min-h-screen flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo2.png" alt="Rishikul" width={120} height={30} className="ml-12" />   
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
