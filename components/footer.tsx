"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

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
    { name: "lindavistavending@gmail.com", href: "mailto:lindavistavending@gmail.com" },
    { name: "(626) 869-6457", href: "tel:+16268696457" },
    { name: "Open Daily: 7am-9pm", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Linda Vista Vending"
              className="h-auto w-auto"
              width={100}
              height={100}
            />
          </Link>
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
              className="text-primary hover:text-primary/80 transition-colors"
            >
              JovianCloudWorks.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};