"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "24/7 service and maintenance support for peace of mind"
  },
  {
    icon: Heart,
    title: "Quality",
    description: "Premium products and state-of-the-art equipment"
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Quick response times and proactive maintenance"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to exceeding customer expectations"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A family-owned business committed to excellence in vending services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Since 1995, Linda Vista Vending has been a trusted partner in the San Gabriel Valley,
              providing premium vending solutions to businesses and properties throughout the region.
            </p>
            <p className="text-muted-foreground">
              What started as a small family business has grown into a leading vending service provider,
              thanks to our commitment to quality, reliability, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative h-[300px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};