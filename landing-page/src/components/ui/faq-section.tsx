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
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items = [
    {
      question: "How Does GrantWare AI Determine Grant Eligibility For My District?",
      answer: "GrantWare AI analyzes your district profile (enrollment, demographics, FRPL/MLL/SWD percentages, academic performance, and program priorities) against grant requirements using advanced AI. We provide a 0-100 match score with detailed rationale showing exactly why a grant is or isn't a good fit for your specific situation."
    },
    {
      question: "What Types Of Grants Does The Platform Perform?",
      answer: "We bring together federal, state, and major foundation grants. We can also integrate any specific grant sources your district needs — wherever your grants are, we'll bring them to you."
    },
    {
      question: "How Much Time Can We Realistically Save With GrantWare AI?",
      answer: "Teams should expect to see 50–70% time reduction across search, writing, and management. What once took weeks of hunting across sites now takes minutes with unified discovery. The AI eligibility analysis eliminates the need to manually parse dense RFPs just to discover you're not eligible. For writing, guided drafting produces a ready-to-edit proposal mapped to the RFP. For management, auto-generated timelines, tasks, and reminders keep work on track without bouncing between tools."
    },
    {
      question: "Is My District Data Secure And FERPA Compliant?",
      answer: "Yes. We use enterprise-grade security with encryption, role-based access controls, and audit logging. Our platform is designed for organizational email/SSO integration and follows FERPA guidelines for educational data privacy. Your district data never leaves our secure environment."
    },
    {
      question: "Can Multiple Team Members Collaborate On Grant Proposals?",
      answer: "Absolutely. Our platform offers all the collaboration features you'd expect from Word or Google Docs — real-time editing, comments, track changes, and version control — but with AI that helps draft, edit, and organize your proposals automatically. Team members can work together seamlessly while maintaining permissions, review workflows, and approval processes."
    },
    {
      question: "What Size Districts Is This Designed For?",
      answer: "GrantWare AI is designed to be valuable for K-12 districts of all sizes, from small offices with a single coordinator to larger grant management teams."
    },
    {
      question: "Do You Provide Training And Onboarding Support?",
      answer: "Yes. We provide comprehensive onboarding including district profile setup, team training sessions, and ongoing support. Our goal is to get your team productive within the first week, with minimal disruption to your existing workflows."
    }
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
        </div>
      </div>
    </Section>
  );
}
