"use client";

import NavbarSection from "@/components/sections/navbar-section";
import HeroSection from "@/components/sections/hero-section";
import { PinnedFeaturesSection } from "@/components/ui/pinned-features-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/layout/footer";
import { BackgroundPatternProvider } from "@/contexts/background-pattern-context";

export default function Home() {
  return (
    <BackgroundPatternProvider>
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <NavbarSection />
        <HeroSection />
      
      <PinnedFeaturesSection />

      <div id="faq">
        <FAQSection />
      </div>

      <div id="cta">
        <CTASection />
      </div>

        <Footer />
      </main>
    </BackgroundPatternProvider>
  );
}
