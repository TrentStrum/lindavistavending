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
      <main className="pt-16 sm:pt-20">
        <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
          <HeroSection />
        </div>
        <div className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesSection />
          </div>
        </div>
        <div className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CoverageArea />
          </div>
        </div>
        <div className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </div>
        </div>
        <section 
          id="contact" 
          className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm className="max-w-xl sm:max-w-2xl mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}