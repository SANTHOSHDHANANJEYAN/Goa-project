import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Rishikulyogshalagoa',
  description:
    'Find peace, balance and spiritual growth at Rishikul Yogshala Goa. Join our classes, retreats and wellness programs.',
  keywords: [
    'Yoga in Goa',
    'Rishikul Yogshala',
    'Yoga Teacher Training Goa',
    '200 Hour YTT Goa',
    'Yoga Retreat India',
    'Meditation Retreat Goa',
    'Wellness Retreat',
    'Beach Yoga'
  ],
  other: {
    'google-site-verification': 'hOYvN1XlKBpsse_YAD-ymspC8VnZ85bXGeLFwCPgYBM',
    'google-site-verification-2': '9PVyCKWm5kSFl1C3Dv4h7Ri8VH4QbtTqep1Uwg5K_yU', // custom label to avoid key conflict
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="hOYvN1XlKBpsse_YAD-ymspC8VnZ85bXGeLFwCPgYBM"
        />
        <meta
          name="google-site-verification"
          content="9PVyCKWm5kSFl1C3Dv4h7Ri8VH4QbtTqep1Uwg5K_yU"
        />
        <meta
          name="keywords"
          content="Yoga in Goa, Rishikul Yogshala, Yoga Teacher Training Goa, 200 Hour YTT Goa, Yoga Retreat India, Meditation Retreat Goa, Wellness Retreat, Beach Yoga"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-image-[url('/backgd.jpg')]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
