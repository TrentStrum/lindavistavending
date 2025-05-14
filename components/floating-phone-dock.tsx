"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/contexts/mobile-menu-context";

export const FloatingPhoneDock = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const { isMobileMenuOpen } = useMobileMenu();

  if (isMobileMenuOpen) return null;

  return (
    <motion.div
      className="fixed right-4 bottom-4 z-50"
      style={{ y }}
    >
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-6 py-6 flex items-center gap-2"
        onClick={() => window.location.href = 'tel:+16268696457'}
      >
        <Phone className="h-5 w-5" />
        <span className="font-semibold">(626) 869-6457</span>
      </Button>
    </motion.div>
  );
}; 