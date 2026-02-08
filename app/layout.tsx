import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { GOOGLE_MAPS_API_KEY } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Aarav Cabs Goa - Best Taxi Service in Goa | Airport Transfer & City Tours',
    template: '%s | Aarav Cabs',
  },
  description: 'Aarav Cabs offers reliable taxi services in Goa with 30+ vehicles (Hatchback, Sedan, SUV). Book airport transfers, city tours, and long-distance rides. Available 24/7.',
  keywords: [
    'taxi Goa',
    'taxi service Goa',
    'Goa taxi booking',
    'airport transfer Goa',
    'Dabolim airport taxi',
    'Mopa airport taxi',
    'Goa taxi service',
    'taxi in Goa',
    'Goa cab service',
    'Aarav Cabs',
  ],
  authors: [{ name: 'Aarav Cabs' }],
  creator: 'Aarav Cabs',
  publisher: 'Aarav Cabs',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aaravcabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Aarav Cabs',
    title: 'Aarav Cabs Goa - Best Taxi Service in Goa',
    description: 'Reliable taxi service in Goa with 30+ vehicles. Book airport transfers, city tours, and long-distance rides.',
    images: [
      {
        url: '/images/goa-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Aarav Cabs - Taxi Service in Goa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarav Cabs Goa - Best Taxi Service in Goa',
    description: 'Reliable taxi service in Goa with 30+ vehicles.',
    images: ['/images/goa-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00bcd4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="IN-GA" />
        <meta name="geo.placename" content="Goa" />
        <meta name="geo.position" content="15.2993;74.1240" />
        <meta name="ICBM" content="15.2993, 74.1240" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aarav Cabs" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17922270851"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17922270851');
          `}
        </Script>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="lazyOnload"
          id="google-maps-script"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden min-w-0`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
