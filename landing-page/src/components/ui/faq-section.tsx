"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
  additionalItems?: {
    segment: string;
    faqs: FAQItem[];
  }[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items = [
    {
      question:
        "How Does GrantWare AI Determine Grant Eligibility For My Organization?",
      answer:
        "GrantWare AI analyzes your organization profile—such as demographics, mission, budget, service area, performance metrics, and program priorities—against grant requirements and provides a 0–100 match score with a detailed rationale explaining exactly why a grant is or isn't a good fit for your organization.",
    },
    {
      question: "Can I upload my organization's existing grant data?",
      answer:
        "Yes. You can upload your past proposals, reports, and funding history to train your AI profile and improve drafting accuracy over time.",
    },
    {
      question: "What Types Of Grants Does The Platform Cover?",
      answer:
        "We bring togetherfederal, state, foundation, and corporate grants. We can also integrate any specific grant sources your district needs — wherever your grants are, we'll bring them to you.",
    },
    {
      question: "How Much Time Can We Realistically Save With GrantWare AI?",
      answer:
        "Teams should expect to see 50–70% time reduction across search, writing, and management. What once took weeks of hunting across sites now takes minutes with unified discovery. The AI eligibility analysis eliminates the need to manually parse dense RFPs just to discover you're not eligible. For writing, guided drafting produces a ready-to-edit proposal mapped to the RFP. For management, auto-generated timelines, tasks, and reminders keep work on track without bouncing between tools.",
    },
    {
      question: "Is My Data Secure And Compliant?",
      answer:
        "Yes. We use enterprise-grade security with encryption, role-based access controls, and audit logging. Our platform is designed for organizational email/SSO integration and follows FERPA guidelines for educational data privacy.",
    },
    {
      question: "Can Multiple Team Members Collaborate On Grant Proposals?",
      answer:
        "Absolutely. Our platform offers all the collaboration features you'd expect from Word or Google Docs — real-time editing, comments, track changes, and version control — but with AI that helps draft, edit, and organize your proposals automatically. Team members can work together seamlessly while maintaining permissions, review workflows, and approval processes.",
    },
    {
      question: "What Size Organizations Is This Designed For?",
      answer:
        "GrantWare AI is built for organizations of all sizes, from small offices with a single coordinator to larger grant management teams.",
    },
    {
      question: "Do You Provide Training And Onboarding Support?",
      answer:
        "Yes. We provide comprehensive onboarding including organization profile setup, team training sessions, office hours, and ongoing support. Our goal is to get your team productive within the first week, with minimal disruption to your existing workflows.",
    },
  ],
  additionalItems = [
    {
      segment: "🏫 Education Institutions (K–12, Higher Ed)",
      faqs: [
        {
          question:
            "How does GrantWare AI support both K–12 and higher education institutions?",
          answer:
            "We tailor eligibility analysis and drafting models to your context—whether that's Title I funding for K–12 districts or research and workforce grants for universities. Each institution's profile captures its unique data (e.g., enrollment, demographics, research focus, accreditation, performance metrics) for precise matching.",
        },
      ],
    },
    {
      segment: "🏛️ Government Agencies",
      faqs: [
        {
          question:
            "How does GrantWare AI integrate with existing government systems?",
          answer:
            "Our platform connects with tools like Microsoft 365, Google Workspace, SharePoint, and document management systems commonly used in agencies.",
        },
        {
          question:
            "Can we automate recurring grant cycles or compliance reporting?",
          answer:
            "Yes. AI agents can automatically track upcoming cycles, pre-fill recurring data, and generate compliance or audit reports—reducing repetitive manual work and ensuring nothing slips through.",
        },
      ],
    },
    {
      segment: "🌍 Non-Profits and Foundations",
      faqs: [
        {
          question:
            "Can GrantWare AI help small non-profits with limited staff?",
          answer:
            "Definitely. The platform is designed to help lean teams scale their funding operations—handling discovery, eligibility, and drafting automatically so staff can focus on mission delivery rather than administration.",
        },
      ],
    },
    {
      segment: "🎓 Universities and Research Institutions",
      faqs: [
        {
          question:
            "Does GrantWare AI support research-specific grants (NSF, NIH, etc.)?",
          answer:
            "Yes. Our models are trained to handle academic and research grants, understanding scientific jargon, eligibility criteria, and formatting standards like biosketches, abstracts, and data management plans.",
        },
      ],
    },
  ],
  className,
}: FAQSectionProps) {
  return (
    <Section className={cn("", className)}>
      <div className="max-w-container mx-auto">
        <div className="flex flex-col gap-12 items-center max-w-[720px] mx-auto">
          {/* Title */}
          {subtitle && (
            <p className="text-primary text-sm font-semibold uppercase tracking-wider text-center">
              {subtitle}
            </p>
          )}
          <h2 className="text-foreground font-semibold leading-none text-4xl sm:text-5xl md:text-[48px] text-center w-full font-[family-name:var(--font-source-serif)]">
            {title}
          </h2>

          {/* FAQ Items */}
          <Accordion type="multiple" className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional FAQs by Segment */}
          {additionalItems && additionalItems.length > 0 && (
            <>
              <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-[-10px] mt-16 font-[family-name:var(--font-source-serif)]">
                Organizations We Support
              </h3>
              <Accordion type="multiple" className="w-full">
                {additionalItems.map((segment, segmentIndex) => (
                  <AccordionItem
                    key={segmentIndex}
                    value={`segment-${segmentIndex}`}
                  >
                    <AccordionTrigger className="text-base font-medium text-left">
                      {segment.segment}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        {segment.faqs.map((faq, faqIndex) => (
                          <div key={faqIndex} className="space-y-2">
                            <p className="font-medium text-foreground">
                              {faq.question}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
