"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-gray max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how Linda Vista Vending uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
              <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Authentication cookies</li>
                <li>Security cookies</li>
                <li>Load balancing cookies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Performance Cookies</h3>
              <p>These cookies allow us to count visits and traffic sources to measure and improve site performance.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Analytics cookies</li>
                <li>Traffic monitoring</li>
                <li>User behavior tracking</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3 Functionality Cookies</h3>
              <p>These cookies enable enhanced functionality and personalization.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Language preferences</li>
                <li>Region settings</li>
                <li>User preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.4 Targeting Cookies</h3>
              <p>These cookies may be set through our site by our advertising partners.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Advertising cookies</li>
                <li>Social media cookies</li>
                <li>Marketing cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Cookie Duration</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Session Cookies: These cookies are temporary and expire once you close your browser</li>
                <li>Persistent Cookies: These cookies remain on your device until they expire or you delete them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
              <p>We use cookies from the following third parties:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics</li>
                <li>Payment processors</li>
                <li>Social media platforms</li>
                <li>Advertising networks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Managing Cookies</h2>
              <p>You can control cookies through your browser settings:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Privacy & Security → Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have questions about our Cookie Policy, please contact us at:
              </p>
              <address className="not-italic mt-2">
                Linda Vista Vending<br />
                Email: lindavistavending@gmail.com<br />
                Phone: (626) 869-6457
              </address>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}