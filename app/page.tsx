import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { CoverageArea } from "@/components/coverage-area";
import { AboutSection } from "@/components/about-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { MountainBackground } from "@/components/mountain-background";

export default function Home() {
  return (
    <>
      <Navbar />
      <MountainBackground />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <CoverageArea />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}