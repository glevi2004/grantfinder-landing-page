"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/hero-section";
import { PinnedFeaturesSection } from "@/components/ui/pinned-features-section";
import AboutSection from "@/components/sections/about-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/layout/footer";
import { BackgroundPatternProvider } from "@/contexts/background-pattern-context";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // Handle hash navigation for smooth scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Check for hash on mount
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackgroundPatternProvider>
      {/* Fixed Book a Call Button */}
      <ShimmerButton
        asChild
        className={cn(
          "fixed top-4 right-4 z-50 hidden md:inline-flex transition-all duration-300",
          isAtTop && "mr-[100px]"
        )}
      >
        <a
          href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call
        </a>
      </ShimmerButton>

      <main className="min-h-screen w-full overflow-hidden text-foreground ">
        <HeroSection />

        <PinnedFeaturesSection />

        <div id="about">
          <AboutSection />
        </div>

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
