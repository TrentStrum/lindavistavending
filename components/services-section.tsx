"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import { useState } from "react";

const services = [
  {
    title: "Combo Vending",
    description: "Modern machines offering snacks and cold beverages",
    image: "/images/services/combo-machine.jpg",
    features: ["Mix and match snacks and drinks", "Smart Technology with real-time monitoring", "Cashless payment options", "Customizable product selections"]
  },
  {
    title: "Frozen Food Machines",
    description: "Offer your team more than just snacks — with frozen meals, ice cream, and cold entrees ready any time.",
    image: "/images/services/frozen-treat.jpg",
    features: ["Frozen meals, snacks, and treats", "Great for 24/7 or high-shift locations", "UVend™ sanitizing & temp control", "Mobile pay & card reader ready"]
  },
  {
    title: "Coffee Solutions",
    description: "Premium coffee and espresso machines to keep your team energized.",
    image: "/images/services/coffee.jpg",
    features: ["Specialty Drinks", "Bean-to-Cup", "Great flavor selection"]
  },
  {
    title: "High-capacity Machines",
    description: "For locations with high traffic, our high-capacity machines offer more space for your products.",
    image: "/images/services/snacks.jpg",
    features: ["Full cashless & ADA-compliant", "Contactless Payments", "Mobile App", "Dual-unit setup for max variety"]
  }
];

export const ServicesSection = () => {
  const [imageLoadError, setImageLoadError] = useState<Record<string, boolean>>({});

  const handleImageError = (serviceTitle: string) => {
    setImageLoadError(prev => ({ ...prev, [serviceTitle]: true }));
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Linda Vista Vending, we offer a range of vending solutions designed to meet the unique needs of each location.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-[280px] overflow-hidden">
                  <AspectRatio ratio={4 / 3} className="h-full">
                    <ImageWithLoading
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 2}
                      quality={90}
                      onError={(e) => {
                        console.error(`Error loading image for ${service.title}:`, service.image, e);
                        handleImageError(service.title);
                      }}
                    />
                  </AspectRatio>
                </div>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};