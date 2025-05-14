import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryProvider } from '@/components/providers/query-provider';
import { Toaster } from "@/components/ui/toaster";
import { FloatingPhoneDock } from "@/components/floating-phone-dock";
import { MobileMenuProvider } from "@/contexts/mobile-menu-context";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Linda Vista Vending | Premium Vending Solutions in San Gabriel Valley',
  description: 'Family-owned vending service providing premium snacks, drinks, and coffee solutions throughout the San Gabriel Valley. Reliable, efficient, and customer-focused.',
  keywords: ['vending machines', 'San Gabriel Valley', 'snack vending', 'beverage vending', 'coffee vending', 'office vending', 'commercial vending'],
  authors: [{ name: 'Linda Vista Vending' }],
  creator: 'Linda Vista Vending',
  publisher: 'Linda Vista Vending',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lindavistavending.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Linda Vista Vending | Premium Vending Solutions',
    description: 'Family-owned vending service providing premium snacks, drinks, and coffee solutions throughout the San Gabriel Valley.',
    url: 'https://lindavistavending.com',
    siteName: 'Linda Vista Vending',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Linda Vista Vending Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linda Vista Vending | Premium Vending Solutions',
    description: 'Family-owned vending service providing premium snacks, drinks, and coffee solutions throughout the San Gabriel Valley.',
    images: ['/twitter-image.jpg'],
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
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`scroll-smooth antialiased ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <MobileMenuProvider>
          <QueryProvider>
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:p-4 focus:bg-white focus:text-black"
            >
              Skip to main content
            </a>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
            <FloatingPhoneDock />
          </QueryProvider>
        </MobileMenuProvider>
        <Toaster />
      </body>
    </html>
  );
}