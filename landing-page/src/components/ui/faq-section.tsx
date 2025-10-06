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
      "We aggregate federal grants (Grants.gov), state Department of Education funding, and major foundation opportunities. This includes Title I, IDEA, ESSA programs, STEM grants, literacy initiatives, technology funding, and specialized programs for multilingual learners and students with disabilities.",
    defaultOpen: false,
  },
  {
    question: "How Much Time Can We Realistically Save With GrantWare AI?",
    answer:
      "Our pilot districts report 50-70% reduction in search and eligibility review time. What used to take weeks of hunting across multiple websites now takes hours. The AI eligibility analysis eliminates the need to manually parse dense RFPs just to discover you're not eligible.",
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
      "Absolutely. GrantWare AI includes role-based permissions, collaborative editing, comment threads, track changes, and reviewer workflows. Team members can work simultaneously while maintaining version control and approval processes.",
    defaultOpen: false,
  },
  {
    question: "What Size Districts Is This Designed For?",
    answer:
      "GrantWare AI is designed to be valuable for K-12 districts of all sizes, from small offices with a single coordinator to larger, multi-person grant management teams.",
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
    <section className="py-20 lg:py-24 bg-[#F9F6F3]" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-[#696969] leading-relaxed">
            Everything you need to know about GrantWare AI and how it
            transforms grant management for K-12 districts.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-7">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className={`bg-[#FEFBF8] rounded-3xl px-8 py-12 transition-all duration-300 ${
                  isOpen ? "border-[1.5px] border-[rgba(225,234,255,0.8)]" : ""
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-source-serif)] text-[#696969] capitalize leading-tight flex-1">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-10 w-10 text-[#020617]" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 mt-6" : "max-h-0"
                  }`}
                >
                  <p className="text-lg sm:text-xl text-[#696969] leading-relaxed max-w-[898px]">
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
