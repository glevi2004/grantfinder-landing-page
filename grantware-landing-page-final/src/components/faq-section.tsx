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
    question: "How does GrantWare AI determine grant eligibility for my organization?",
    answer:
      "GrantWare AI analyzes your organization profile—including demographics, mission, budget, service area, performance metrics, and program priorities—against grant requirements. It then provides a 0–100 match score with a detailed rationale explaining exactly why a grant is or isn't a good fit for your organization.",
  },
  {
    question: "Can I upload my organization's existing grant data?",
    answer:
      "Yes. You can upload your past proposals, reports, and funding history to train your AI profile and improve drafting accuracy over time.",
  },
  {
    question: "What types of grants does the platform cover?",
    answer:
      "We bring together federal, state, foundation, and corporate grants. We can also integrate any specific grant sources your organization needs—wherever your grants are, we'll bring them to you.",
  },
  {
    question: "How much time can we realistically save with GrantWare AI?",
    answer:
      "Teams typically see a 50–70% time reduction across search, writing, and management. What once took weeks of hunting across sites now takes minutes with unified discovery. Our AI eligibility analysis eliminates the need to manually parse dense RFPs just to discover you're not eligible. For writing, guided drafting produces a ready-to-edit proposal mapped to the RFP. For management, auto-generated timelines, tasks, and reminders keep work on track without bouncing between tools.",
  },
  {
    question: "Is my data secure and compliant?",
    answer:
      "Yes. We use enterprise-grade security with encryption, role-based access controls, and audit logging. Our platform is designed for organizational email/SSO integration and follows industry-standard data privacy guidelines.",
  },
  {
    question: "Can multiple team members collaborate on grant proposals?",
    answer:
      "Absolutely. Our platform offers all the collaboration features you'd expect from Word or Google Docs—real-time editing, comments, track changes, and version control—but with AI that helps draft, edit, and organize your proposals automatically. Team members can work together seamlessly while maintaining permissions, review workflows, and approval processes.",
  },
  {
    question: "What size organizations is GrantWare AI designed for?",
    answer:
      "GrantWare AI is built for organizations of all sizes, from small offices with a single grant coordinator to larger teams managing multiple funding streams simultaneously.",
  },
  {
    question: "Do you provide training and onboarding support?",
    answer:
      "Yes. We provide comprehensive onboarding including organization profile setup, team training sessions, office hours, and ongoing support. Our goal is to get your team productive within the first week, with minimal disruption to your existing workflows.",
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
            Everything you need to know about
            <br className="hidden md:block" />
            streamlining your grant process with AI.
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
