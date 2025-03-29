"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#87CEEB] to-[#FFD700]">
            Elevate Your Space with Premium Vending Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Transform your property into a more attractive, amenity-rich destination
          </p>
          <Button size="lg" className="bg-[#87CEEB] hover:bg-[#87CEEB]/90">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};