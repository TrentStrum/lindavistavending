"use client";

import { Mountain } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Coverage", href: "#coverage" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "/faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Accessibility", href: "/accessibility" },
  ],
  Contact: [
    { name: "info@lindavistavending.com", href: "mailto:info@lindavistavending.com" },
    { name: "(626) 555-0123", href: "tel:+16265550123" },
    { name: "Mon-Fri: 8am-6pm", href: "#" },
    { name: "Sat: 9am-3pm", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl">Linda Vista Vending</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium vending solutions for properties throughout the San Gabriel Valley.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <div className="mb-2">
            © {new Date().getFullYear()} Linda Vista Vending. All rights reserved.
          </div>
          <div>
            Built and designed by{" "}
            <a 
              href="https://joviancloudworks.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              JovianCloudWorks.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};