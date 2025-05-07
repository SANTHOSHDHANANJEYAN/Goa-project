import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-muted bg-cover bg-center dark:bg-gray-900 dark:text-white" style={{ backgroundImage: 'url(/footer-bg.jpg)' }}>
      {/* Decorative Background (Optional if you need additional styling) */}
      {/* <div className="absolute inset-0 -z-10">
        <img
          src="/footer-bg.jpg" // Ensure this path is correct, and the image is in the public folder
          alt="Decorative Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-accent dark:text-accent-light">Rishikul Yogshala Goa</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed dark:text-muted-foreground-dark">
              Yoga Teacher Training does not necessarily mean performing difficult asanas which pertain to abject failure. The process is inclined towards replenishment of our heart, mind, and soul; it blends them to carve a shiny new personality.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-foreground/70 hover:text-accent transition-colors dark:text-foreground/50 dark:hover:text-accent-light">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-foreground/70 hover:text-accent transition-colors dark:text-foreground/50 dark:hover:text-accent-light">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-foreground/70 hover:text-accent transition-colors dark:text-foreground/50 dark:hover:text-accent-light">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-foreground dark:text-foreground-light">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Yoga Courses', 'Retreats', 'Gallery', 'Contact', 'Payment'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-foreground/70 hover:text-accent transition-colors dark:text-foreground/50 dark:hover:text-accent-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yoga Courses */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-foreground dark:text-foreground-light">Yoga Courses</h3>
            <ul className="space-y-2 text-sm">
              {[
                '21 Days Course',
                '50 Hr Multi-Style-Yoga TTC',
                '100 Hr Multi-Style-Yoga TTC',
                '200 Hr Multi-Style-Yoga TTC',
                '300 Hr Multi-Style-Yoga TTC'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-foreground/70 hover:text-accent transition-colors dark:text-foreground/50 dark:hover:text-accent-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-foreground dark:text-foreground-light">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-accent dark:text-accent-light" />
                <span className="text-foreground/70 dark:text-foreground/50">
                  128, Thorlebag, Querim, Arambol, Goa 403524.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent dark:text-accent-light" />
                <span className="text-foreground/70 dark:text-foreground/50">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent dark:text-accent-light" />
                <span className="text-foreground/70 dark:text-foreground/50">rishikulyogshalagoa@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border dark:border-border-dark">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
              &copy; {new Date().getFullYear()} Rishikul Yogshala Goa. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors dark:text-muted-foreground-dark dark:hover:text-accent-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors dark:text-muted-foreground-dark dark:hover:text-accent-light">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
