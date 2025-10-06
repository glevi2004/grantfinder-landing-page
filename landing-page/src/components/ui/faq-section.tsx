"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "How Does GrantWare AI Determine Grant Eligibility For My District?",
    answer:
      "GrantWare AI analyzes your district profile (enrollment, demographics, FRPL/MLL/SWD percentages, academic performance, and program priorities) against grant requirements using advanced AI. We provide a 0-100 match score with detailed rationale showing exactly why a grant is or isn't a good fit for your specific situation.",
    defaultOpen: false,
  },
  {
    question: "What Types Of Grants Does The Platform Perform?",
    answer:
      "We bring together federal, state, and major foundation grants. We can also integrate any specific grant sources your district needs — wherever your grants are, we’ll bring them to you.",
    defaultOpen: false,
  },
  {
    question: "How Much Time Can We Realistically Save With GrantWare AI?",
    answer:
      "Teams should expect to see 50–70% time reduction across search, writing, and management. What once took weeks of hunting across sites now takes minutes with unified discovery. The AI eligibility analysis eliminates the need to manually parse dense RFPs just to discover you're not eligible. For writing, guided drafting produces a ready-to-edit proposal mapped to the RFP. For management, auto-generated timelines, tasks, and reminders keep work on track without bouncing between tools.",
    defaultOpen: false,
  },
  {
    question: "Is My District Data Secure And FERPA Compliant?",
    answer:
      "Yes. We use enterprise-grade security with encryption, role-based access controls, and audit logging. Our platform is designed for organizational email/SSO integration and follows FERPA guidelines for educational data privacy. Your district data never leaves our secure environment.",
    defaultOpen: false,
  },
  {
    question: "Can Multiple Team Members Collaborate On Grant Proposals?",
    answer:
      "Absolutely. Our platform offers all the collaboration features you’d expect from Word or Google Docs — real-time editing, comments, track changes, and version control — but with AI that helps draft, edit, and organize your proposals automatically. Team members can work together seamlessly while maintaining permissions, review workflows, and approval processes.",
    defaultOpen: false,
  },
  {
    question: "What Size Districts Is This Designed For?",
    answer:
      "GrantWare AI is designed to be valuable for K-12 districts of all sizes, from small offices with a single coordinator to larger grant management teams.",
    defaultOpen: false,
  },
  {
    question: "Do You Provide Training And Onboarding Support?",
    answer:
      "Yes. We provide comprehensive onboarding including district profile setup, team training sessions, and ongoing support. Our goal is to get your team productive within the first week, with minimal disruption to your existing workflows.",
    defaultOpen: false,
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>(
    faqs.map((faq, index) => (faq.defaultOpen ? index : -1)).filter((i) => i !== -1)
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="pt-20 lg:pt-24 pb-8 relative overflow-hidden bg-white" id="faq">
      {/* Diamond Gradient Background - 90% opacity */}
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(90, 139, 242, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 30% 30%, rgba(90, 139, 242, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 70% 70%, rgba(90, 139, 242, 0.08) 0%, transparent 40%),
              linear-gradient(135deg, rgba(90, 139, 242, 0.05) 0%, rgba(90, 139, 242, 0.12) 50%, rgba(90, 139, 242, 0.05) 100%)
            `
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#696969] leading-relaxed">
            Everything you need to know about GrantWare AI and how it
            transforms grant management for K-12 districts.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className={`bg-[#FEFBF8] rounded-2xl px-6 py-6 transition-all duration-300 ${
                  isOpen ? "border-[1.5px] border-[rgba(225,234,255,0.8)]" : ""
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <h3 className="text-lg sm:text-xl font-semibold font-[family-name:var(--font-source-serif)] text-[#696969] capitalize leading-tight flex-1">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-6 w-6 text-[#020617]" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-base sm:text-lg text-[#696969] leading-relaxed max-w-[898px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
