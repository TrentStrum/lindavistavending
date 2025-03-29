import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Linda Vista Vending - Premium Vending Solutions',
  description: 'Transform your property into a more attractive, amenity-rich destination with Linda Vista Vista\'s premium vending solutions.',
  keywords: 'vending machines, property amenities, San Gabriel Valley, snack vending, beverage vending',
  authors: [{ name: 'Linda Vista Vending' }],
  openGraph: {
    title: 'Linda Vista Vending - Premium Vending Solutions',
    description: 'Transform your property with premium vending solutions in San Gabriel Valley',
    url: 'https://lindavistavending.com',
    siteName: 'Linda Vista Vending',
    images: [
      {
        url: 'https://lindavistavending.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linda Vista Vending - Premium Vending Solutions',
    description: 'Premium vending solutions in San Gabriel Valley',
    images: ['https://lindavistavending.com/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}