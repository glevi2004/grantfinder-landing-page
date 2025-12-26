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
              title: "Create your organization profile",
              description:
                "Share your funding initiatives, budget, organization type, and basic organization information to help us understand your needs.",
            },
            {
              number: "02",
              title: "Upload Organization documents",
              description:
                "Upload your organization documents—this can be an annual report, strategic plan, or anything that tells us about your organization's mission and priorities.",
            },
            {
              number: "03",
              title: "Integrate your tools",
              description:
                "We integrate with all the essential tools you already use, so you no longer have to jump between them. Connect Google Drive, Slack, Notion, and more.",
            },
          ]}
        />

        {/* Section 5: Your AI Powered Funding Workflow */}
        <ApproachSection
          id="approach-2"
          title="Your AI Powered Funding Workflow"
          subtitle="From discovery to award management—GrantWare AI handles the heavy lifting"
          steps={[
            {
              number: "04",
              title: "Search & Eligibility",
              description:
                "Save weeks of manual research. Our AI scans thousands of opportunities to build a high-fit pipeline—fewer dead ends, more wins.",
            },
            {
              number: "05",
              title: "AI Powered Drafting",
              description:
                "Write proposals that sound like you. Our AI learns your voice and reuses winning content from past applications to draft faster and stronger.",
            },
            {
              number: "06",
              title: "Management & Collaboration",
              description:
                "One workspace for everything—track deadlines, manage files, collaborate with your team, and never miss a submission window again.",
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
