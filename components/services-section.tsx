"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const services = [
  {
    title: "Micro-Markets",
    description: "Self-service convenience stores with fresh food and beverages",
    image: "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?w=800&q=80",
    features: ["24/7 Access", "Fresh Food", "Cashless Payments"]
  },
  {
    title: "Combo Vending",
    description: "Modern machines offering snacks and cold beverages",
    image: "https://images.unsplash.com/photo-1525789351284-e1e7de240152?w=800&q=80",
    features: ["Smart Technology", "Digital Payments", "Real-time Monitoring"]
  },
  {
    title: "Coffee Solutions",
    description: "Premium coffee and espresso machines",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80",
    features: ["Specialty Drinks", "Bean-to-Cup", "Regular Maintenance"]
  },
  {
    title: "Smart Vending",
    description: "Next-generation machines with touchless technology",
    image: "https://images.unsplash.com/photo-1597528662465-55ece5734101?w=800&q=80",
    features: ["Contactless Payments", "Mobile App", "Digital Display"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive vending solutions designed to enhance your space and delight your customers
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
              <Card className="h-full overflow-hidden">
                <div className="relative w-full">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span className="text-sm">{feature}</span>
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