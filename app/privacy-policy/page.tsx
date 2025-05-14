"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Linda Vista Vending (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and payment information</li>
                <li>Location data</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Usage Information</h3>
              <p>We automatically collect:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions</li>
                <li>Send service updates</li>
                <li>Respond to inquiries</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers</li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
                <li>Business partners (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. GDPR and CCPA Compliance</h2>
              <h3 className="text-xl font-semibold mb-3">7.1 GDPR Rights</h3>
              <p>EU residents have the following rights:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Right to access</li>
                <li>Right to rectification</li>
                <li>Right to erasure</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.2 CCPA Rights</h3>
              <p>California residents have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Know what personal information is collected</li>
                <li>Know if personal information is sold or disclosed</li>
                <li>Say no to the sale of personal information</li>
                <li>Access their personal information</li>
                <li>Request deletion of their information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p>
                For privacy-related questions or concerns, contact us at:
              </p>
              <address className="not-italic mt-2">
                Linda Vista Vending<br />
                Privacy Officer<br />
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