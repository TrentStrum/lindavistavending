import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { CoverageArea } from "@/components/coverage-area";
import { AboutSection } from "@/components/about-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { MountainBackground } from "@/components/mountain-background";
import { ErrorBoundary } from "@/components/error-boundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <Navbar />
      <MountainBackground />
      <main className="pt-20">
        <div className="min-h-[calc(100vh-5rem)]">
          <HeroSection />
        </div>
        <div className="py-24 md:py-32">
          <ServicesSection />
        </div>
        <div className="py-24 md:py-32 bg-white">
          <CoverageArea />
        </div>
        <div className="py-24 md:py-32">
          <AboutSection />
        </div>
        <section 
          id="contact" 
          className="py-24 md:py-32 bg-white"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              id="contact-heading" 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Contact Us
            </h2>
            <ContactForm className="max-w-2xl mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}