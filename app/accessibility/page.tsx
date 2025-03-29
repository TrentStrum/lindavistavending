"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Accessibility() {
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
            <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p>
                Linda Vista Vending is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Conformance Status</h2>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website strives to conform to WCAG 2.1 level AA standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Clear heading structure</li>
                <li>Alt text for images</li>
                <li>Proper color contrast</li>
                <li>Keyboard navigation</li>
                <li>ARIA labels where needed</li>
                <li>Responsive design</li>
                <li>Focus indicators</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Assistive Technologies</h2>
              <p>Our website supports various assistive technologies, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Screen readers</li>
                <li>Voice recognition software</li>
                <li>Screen magnification software</li>
                <li>Alternative input devices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Known Issues</h2>
              <p>
                While we strive for accessibility, some content may not yet be fully accessible. We are actively working to resolve any accessibility issues. If you encounter any problems, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
              </p>
              <address className="not-italic mt-2">
                Linda Vista Vending<br />
                Accessibility Team<br />
                Email: accessibility@lindavistavending.com<br />
                Phone: (626) 555-0123
              </address>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}