import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductFeaturesSection } from "@/components/product-features-section"
import { ClientLogos } from "@/components/client-logos"
import { ApproachSection } from "@/components/approach-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header / Navigation */}
      <Header />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Product Features (from Brillance, adapted) */}
      <ProductFeaturesSection />

      {/* Section 3: Trusted By / Client Logos */}
      <ClientLogos />

      {/* Section 4: Our Approach (Part 1) */}
      <ApproachSection
        id="approach"
        title="Our Approach"
        subtitle="A proven process that transforms your vision into high-converting digital experiences"
        steps={[
          {
            number: "01",
            title: "Discovery & Strategy",
            description:
              "We dive deep into your organization's goals, funding needs, and competitive landscape to craft a grant acquisition strategy that aligns with your mission.",
          },
          {
            number: "02",
            title: "AI-Powered Matching",
            description:
              "Our AI analyzes thousands of grant opportunities to find the perfect matches for your organization, saving you countless hours of manual research.",
          },
          {
            number: "03",
            title: "Application Support",
            description:
              "We provide intelligent writing assistance, deadline tracking, and document management to streamline your application process.",
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
    </main>
  )
}
