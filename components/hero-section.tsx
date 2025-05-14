"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-3xl space-y-6 sm:space-y-8 md:space-y-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
              Elevate Your Workplace with Personalized Vending Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Family-owned. Community-driven. Tailored vending services for the San Gabriel Valley.
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-6 sm:px-8 py-6 sm:py-7"
                onClick={() => window.location.href = '/#coverage'}
              >
                Let&apos;s make your business a little more delicious! 
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </motion.div>
          {/* Right: Mountain Image (large, clean, no card) */}
          <div className="flex-1 flex items-center justify-center w-full max-w-2xl h-full">
            <Image
              src="/images/logo-mountains-only.png"
              alt="Mountain Logo"
              width={900}
              height={600}
              className="object-contain w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};