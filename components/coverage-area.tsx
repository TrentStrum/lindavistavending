"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";
import { useToast } from "@/hooks/use-toast";

const serviceAreas = [
  "Alhambra",

  "Glendale",
  "Monterey Park",
  "Pasadena",
  "San Gabriel",
  "South Pasadena"
];

const zipCodeData = {
  "91801": "Alhambra",
  "91802": "Alhambra",
  "91803": "Alhambra",
  "91804": "Alhambra",
  "91896": "Alhambra",
  "91899": "Alhambra",
  "91775": "San Gabriel",
  "91776": "San Gabriel",
  "91778": "San Gabriel",
  "91030": "South Pasadena",
  "91031": "South Pasadena",
  "91101": "Pasadena",
  "91102": "Pasadena",
  "91103": "Pasadena",
  "91104": "Pasadena",
  "91105": "Pasadena",
  "91106": "Pasadena",
  "91107": "Pasadena",
  "91108": "Pasadena",
  "91109": "Pasadena",
  "91110": "Pasadena",
  "91114": "Pasadena",
  "91115": "Pasadena",
  "91116": "Pasadena",
  "91117": "Pasadena",
  "91118": "Pasadena",
  "91121": "Pasadena",
  "91123": "Pasadena",
  "91124": "Pasadena",
  "91125": "Pasadena",
  "91126": "Pasadena",
  "91129": "Pasadena",
  "91182": "Pasadena",
  "91184": "Pasadena",
  "91185": "Pasadena",
  "91188": "Pasadena",
  "91189": "Pasadena",
  "91199": "Monterey Park",
  "91754": "Monterey Park",
  "91755": "Monterey Park",
  "91756": "Glendale",
  "91201": "Glendale",
  "91202": "Glendale",
  "91203": "Glendale",
  "91204": "Glendale",
  "91205": "Glendale",
  "91206": "Glendale",
  "91207": "Glendale",
  "91208": "Glendale",
  "91209": "Glendale",
  "91210": "Glendale",
  "91221": "Glendale",
  "91222": "Glendale",
  "91225": "Glendale"
};

export const CoverageArea = () => {
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();

  const handleEmailSuccess = () => {
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    setShowContactForm(false);
  };

  const handleEmailError = (error: Error) => {
    toast({
      title: "Error sending message",
      description: error.message || "Please try again later.",
      variant: "destructive",
    });
  };

  const checkZipCode = () => {
    if (zipCode in zipCodeData) {
      const city = zipCodeData[zipCode as keyof typeof zipCodeData];
      setMessage(`Great news! We service ${city} (${zipCode}).`);
      setShowContactForm(true);
    } else {
      setMessage("Sorry, we don't currently service this area.");
      setShowContactForm(false);
    }
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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Service Coverage</h2>
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
            <h3 className="text-2xl font-semibold mb-6 text-primary">Service Areas</h3>
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
            <h3 className="text-2xl font-semibold mb-6 text-primary">Check Your ZIP Code</h3>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    checkZipCode();
                  }
                }}
                maxLength={5}
                className="text-lg"
              />
              <Button 
                onClick={checkZipCode}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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

      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Great News! We Service Your Area
            </DialogTitle>
            <p className="text-center text-muted-foreground mt-2">
              Please provide your business information and we&apos;ll get in touch with you shortly.
            </p>
          </DialogHeader>
          <ContactForm 
            onSuccess={handleEmailSuccess}
            onError={handleEmailError}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};