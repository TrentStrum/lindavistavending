"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Linda Vista Vending&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily access our services for personal, non-commercial use subject to the following conditions:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>You must not modify or copy materials</li>
                <li>You must not use materials for commercial purposes</li>
                <li>You must not attempt to decompile or reverse engineer any software</li>
                <li>You must not remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Account Creation</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Notify us of unauthorized use</li>
                <li>Keep account information updated</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Prohibited Activities</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Violating laws or regulations</li>
                <li>Impersonating others</li>
                <li>Interfering with service operation</li>
                <li>Engaging in fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality are owned by Linda Vista Vending and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Service Modifications</h2>
              <p>
                We reserve the right to modify or discontinue any part of our services without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p>
                Linda Vista Vending shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
              <p>
                Any dispute arising from these terms shall be resolved through:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Informal negotiations</li>
                <li>Mediation</li>
                <li>Binding arbitration</li>
                <li>Legal proceedings in applicable courts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Account Termination</h2>
              <p>We may terminate or suspend your account and access to our services:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>For violations of these terms</li>
                <li>For fraudulent activities</li>
                <li>At our sole discretion</li>
                <li>Upon your request</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <address className="not-italic mt-2">
                Linda Vista Vending<br />
                Legal Department<br />
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