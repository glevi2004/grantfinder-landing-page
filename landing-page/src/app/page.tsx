"use client";

import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const router = useRouter();

  const handleJoinWaitlist = () => {
    router.push("/waitlist");
  };

  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={handleJoinWaitlist} />

      <main>
        <HeroSection
          onGetStarted={handleJoinWaitlist}
          onLearnMore={handleLearnMore}
        />

        <div id="features">
          <FeatureSection />
        </div>

        <div id="faq">
          <FAQSection />
        </div>

        <div id="cta">
          <CTASection
            onGetStarted={handleJoinWaitlist}
            onScheduleDemo={handleLearnMore}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
