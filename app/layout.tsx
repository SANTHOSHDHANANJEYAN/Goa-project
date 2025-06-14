import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from 'next/head'; // ✅ Added for meta tag support

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
  description: 'Find peace, balance and spiritual growth at Rishikul Yogshala Goa. Join our classes, retreats and wellness programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* ✅ Google site verification meta tag */}
        <meta
          name="google-site-verification"
          content="hOYvN1XlKBpsse_YAD-ymspC8VnZ85bXGeLFwCPgYBM"
        />
      </Head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-image-[url('/backgd.jpg')]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
