"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "How does GrantFinder AI determine grant eligibility for my district?",
    answer:
      "GrantFinder AI analyzes your district profile (enrollment, demographics, FRPL/MLL/SWD percentages, academic performance, and program priorities) against grant requirements using advanced AI. We provide a 0-100 match score with detailed rationale showing exactly why a grant is or isn't a good fit for your specific situation.",
  },
  {
    question: "What types of grants does the platform cover?",
    answer:
      "We aggregate federal grants (Grants.gov), state Department of Education funding, and major foundation opportunities. This includes Title I, IDEA, ESSA programs, STEM grants, literacy initiatives, technology funding, and specialized programs for multilingual learners and students with disabilities.",
  },
  {
    question: "How much time can we realistically save with GrantFinder AI?",
    answer:
      "Our pilot districts report 50-70% reduction in search and eligibility review time. What used to take weeks of hunting across multiple websites now takes hours. The AI eligibility analysis eliminates the need to manually parse dense RFPs just to discover you're not eligible.",
  },
  {
    question: "Is my district data secure and FERPA compliant?",
    answer:
      "Yes. We use enterprise-grade security with encryption, role-based access controls, and audit logging. Our platform is designed for organizational email/SSO integration and follows FERPA guidelines for educational data privacy. Your district data never leaves our secure environment.",
  },
  {
    question: "Can multiple team members collaborate on grant proposals?",
    answer:
      "Absolutely. GrantFinder AI includes role-based permissions, collaborative editing, comment threads, track changes, and reviewer workflows. Team members can work simultaneously while maintaining version control and approval processes.",
  },
  {
    question: "What size districts is this designed for?",
    answer:
      "GrantFinder AI is optimized for small-to-medium districts with lean grants teams (2-6 staff members). However, larger districts with centralized grants offices also benefit from our streamlined workflows and AI-powered efficiency gains.",
  },
  {
    question: "Do you provide training and onboarding support?",
    answer:
      "Yes. We provide comprehensive onboarding including district profile setup, team training sessions, and ongoing support. Our goal is to get your team productive within the first week, with minimal disruption to your existing workflows.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer district-based pricing with unlimited users per district. Pricing varies by district size and includes full access to discovery, analysis, collaboration tools, and support. Contact us for a custom quote based on your specific needs.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about GrantFinder AI and how it
            transforms grant management for K-12 districts.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
