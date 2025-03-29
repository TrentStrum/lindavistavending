"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const serviceAreas = [
  "Alhambra",
  "Arcadia",
  "Azusa",
  "Baldwin Park",
  "Claremont",
  "Covina",
  "Diamond Bar",
  "El Monte",
  "Glendora",
  "Hacienda Heights",
  "La Puente",
  "Monrovia",
  "Pasadena",
  "Pomona",
  "Rosemead",
  "San Gabriel",
  "Temple City",
  "Walnut",
  "West Covina",
  "Whittier"
];

export const CoverageArea = () => {
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");

  const checkZipCode = () => {
    // This is a simplified check. In production, you'd want to check against a real database
    const validZips = ["91731", "91732", "91733", "91734", "91735"];
    setMessage(validZips.includes(zipCode) 
      ? "Great news! We service your area." 
      : "Sorry, we don't currently service this area.");
  };

  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Service Coverage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proudly serving the San Gabriel Valley and surrounding areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="p-2 bg-gray-50 rounded-md text-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Check Your ZIP Code</h3>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                maxLength={5}
                className="text-lg"
              />
              <Button 
                onClick={checkZipCode}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Check Availability
              </Button>
              {message && (
                <p className={`text-sm ${message.includes("Great") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};