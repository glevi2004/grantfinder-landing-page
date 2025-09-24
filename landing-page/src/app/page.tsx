"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const handleGetStarted = () => {
    // Placeholder for future implementation
    console.log("Get Started clicked");
  };

  const handleSignIn = () => {
    // Placeholder for future implementation
    console.log("Sign In clicked");
  };

  const handleScheduleDemo = () => {
    // Placeholder for future implementation
    console.log("Schedule Demo clicked");
  };

  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={handleGetStarted} />

      <main>
        <HeroSection
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
        />

        <div id="features">
          <FeatureSection />
        </div>

        <FAQSection />

        <CTASection
          onGetStarted={handleGetStarted}
          onScheduleDemo={handleScheduleDemo}
        />
      </main>

      <Footer />
    </div>
  );
}
