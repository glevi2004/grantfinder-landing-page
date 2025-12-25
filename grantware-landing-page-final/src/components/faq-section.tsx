"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is GrantWare AI and who is it for?",
    answer:
      "GrantWare AI is a comprehensive grant discovery and management platform designed for organizations seeking funding. It's perfect for nonprofits, research institutions, startups, and enterprises looking to streamline their grant application processes.",
  },
  {
    question: "How does the AI-powered grant matching work?",
    answer:
      "Our platform uses advanced AI to analyze your organization's profile, past successful applications, and funding goals. It then matches you with relevant grant opportunities, calculates compatibility scores, and prioritizes the best fits for your needs.",
  },
  {
    question: "Can I integrate GrantWare with my existing tools?",
    answer:
      "Yes! GrantWare integrates seamlessly with popular CRM systems, document management software, and collaboration tools. We support APIs and webhooks for custom integrations with your existing workflow.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive documentation, and onboarding assistance to help you get started quickly.",
  },
  {
    question: "Is my data secure with GrantWare?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, redundant data centers.",
  },
  {
    question: "How do I get started with GrantWare?",
    answer:
      "Getting started is simple! Sign up for our free trial, connect your existing systems, and our onboarding team will help you set up your first grant tracking workflow within 24 hours.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="w-full flex justify-center items-start bg-transparent">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12 max-w-7xl">
        {/* Left Column - Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5"
        >
          <h2 className="w-full flex flex-col justify-center text-white font-semibold leading-tight md:leading-[44px] font-serif text-4xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="w-full text-white/80 text-base font-normal leading-7">
            Find answers to common questions about
            <br className="hidden md:block" />
            GrantWare AI and how it can help you.
          </p>
        </motion.div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="w-full border-b border-white/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-white/10 transition-colors duration-200 rounded-lg"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-white text-base font-medium leading-6">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDown
                        className={`w-6 h-6 text-white/60 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-white/70 text-sm font-normal leading-6">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
