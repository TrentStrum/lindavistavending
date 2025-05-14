"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from 'next/image';
import { useMobileMenu } from "@/contexts/mobile-menu-context";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Coverage", href: "/#coverage" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b"
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Linda Vista Vending"
              className="h-auto w-auto"
              width={100}
              height={100}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                {isHomePage ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop CTA Button */}
          <Button 
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.location.href = '/#coverage'}
          >
            Get Started
          </Button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-white md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="absolute top-0 left-0 right-0 px-4 h-16 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo.png"
                      alt="Linda Vista Vending"
                      className="h-auto w-auto"
                      width={60}
                      height={60}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto pt-24 px-6">
                  <ul className="space-y-6">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        {isHomePage ? (
                          <a
                            href={item.href}
                            className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-t">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = '/#coverage';
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};