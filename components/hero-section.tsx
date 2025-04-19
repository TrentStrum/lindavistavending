"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-8 md:space-y-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#87CEEB] to-[#FFD700] leading-tight md:leading-tight lg:leading-tight">
            Elevate Your Workplace with Personalized Vending Solutions
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Family-owned. Community-driven. Tailored vending services for the San Gabriel Valley.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#87CEEB] hover:bg-[#87CEEB]/90 text-base md:text-lg px-8"
            >
              Let&apos;s make your business a little more delicious! <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};