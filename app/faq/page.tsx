"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of vending machines do you offer?",
    answer: "We offer a wide range of vending solutions including snack machines, beverage machines, combo machines, and coffee machines. We also provide micro-market solutions for larger locations."
  },
  {
    question: "What areas do you service?",
    answer: "We primarily service the San Gabriel Valley area, including cities such as Pasadena, Alhambra, San Gabriel, Temple City, and surrounding areas. Contact us to check if your location is within our service area."
  },
  {
    question: "How often are machines restocked?",
    answer: "Our machines are regularly restocked based on usage patterns. We use advanced monitoring systems to track inventory levels and ensure products are always available."
  },
  {
    question: "What payment methods do your machines accept?",
    answer: "Our machines accept various payment methods including cash, credit cards, debit cards, and mobile payments (Apple Pay, Google Pay). Some locations also support employee badges or campus cards."
  },
  {
    question: "How do you handle machine maintenance and repairs?",
    answer: "We provide 24/7 service support. Our technicians respond promptly to any issues, and we perform regular preventive maintenance to ensure optimal machine performance."
  },
  {
    question: "What products do you stock in your machines?",
    answer: "We offer a diverse selection of snacks, beverages, and fresh food options. Our product mix can be customized based on location preferences and can include healthy options, traditional snacks, and premium beverages."
  },
  {
    question: "Is there a cost to have vending machines installed?",
    answer: "There is typically no cost for machine installation. We provide the equipment, installation, maintenance, and restocking services as part of our standard service agreement."
  },
  {
    question: "How do you handle product selection and pricing?",
    answer: "Product selection and pricing are customized for each location based on preferences and market conditions. We regularly review and adjust our offerings based on sales data and customer feedback."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto pt-16"
          >
            <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mb-8">
              Find answers to common questions about our vending services. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
              <p className="mb-4">
                Our team is here to help. Contact us through any of the following methods:
              </p>
              <ul className="space-y-2">
                <li>Email: trent.strum@gmail.com</li>
                <li>Phone: (626) 234-9057</li>
                <li>Hours: Mon-Fri 8am-6pm, Sat 9am-3pm</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}