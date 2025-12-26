import { HeaderPill } from "@/components/header-pill"
import { Hero } from "@/components/hero"
import { HeroShaderGradient } from "@/components/hero-shader-gradient"
import { ProductFeaturesSection } from "@/components/product-features-section"
import { ClientLogos } from "@/components/client-logos"
import { ApproachSection } from "@/components/approach-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Full-page ShaderGradient background (fixed) */}
      <HeroShaderGradient />

      {/* All content sits above the gradient */}
      <div className="relative z-10">
        {/* Header Pill (fixed navbar) */}
        <HeaderPill />

        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Product Features (from Brillance, adapted) */}
        <ProductFeaturesSection />

        {/* Section 3: Trusted By / Client Logos */}
        <ClientLogos />

        {/* Section 4: How it Works */}
        <ApproachSection
          id="approach"
          title="How it Works"
          subtitle="Get started in minutes and let AI do the heavy lifting"
          steps={[
            {
              number: "01",
              title: "Input your organization info",
              description:
                "Share your funding initiatives, budget, org type, and basic info. Upload key docs like your annual report or strategic plan, and integrate your existing tools.",
            },
            {
              number: "02",
              title: "AI matches grants",
              description:
                "Our AI analyzes thousands of opportunities to find grants that match your eligibility and fit—saving weeks of manual research and eliminating dead ends.",
            },
            {
              number: "03",
              title: "Collaborate & draft faster",
              description:
                "Use AI-powered drafting that learns your voice and reuses your past wins. Collaborate with your team in real-time to submit stronger applications faster.",
            },
          ]}
        />

        {/* Section 5: Our Approach (Part 2) */}
        <ApproachSection
          id="approach-2"
          title="Continuous Support"
          subtitle="We don't stop at discovery—our platform supports you through the entire grant lifecycle"
          steps={[
            {
              number: "04",
              title: "Submission & Tracking",
              description:
                "Track all your applications in one place, receive status updates, and never miss a deadline with our intelligent notification system.",
            },
            {
              number: "05",
              title: "Award Management",
              description:
                "Once funded, manage your grants effectively with our compliance tracking, reporting tools, and budget management features.",
            },
            {
              number: "06",
              title: "Growth & Optimization",
              description:
                "Learn from successful applications, optimize your strategy over time, and scale your funding with data-driven insights.",
            },
          ]}
        />

        {/* Section 6: Pricing */}
        <PricingSection />

        {/* Section 7: FAQ */}
        <FAQSection />

        {/* Section 8: Footer */}
        <FooterSection />
      </div>
    </main>
  )
}
