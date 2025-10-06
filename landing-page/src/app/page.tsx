"use client";

import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
// import { WaitlistCTASection } from "@/components/ui/waitlist-cta-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const router = useRouter();

  const handleJoinWaitlist = (formData?: any) => {
    // If form data is provided, could handle it here
    // For now, just redirect to waitlist page
    router.push("/waitlist");
  };

  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection
          onGetStarted={handleJoinWaitlist}
          onLearnMore={handleLearnMore}
        />

        <div id="features">
          <FeatureSection />
        </div>

        {/* <WaitlistCTASection onSubmit={handleJoinWaitlist} /> */}

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
