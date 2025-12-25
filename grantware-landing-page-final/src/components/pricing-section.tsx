"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const pricing = {
    starter: {
      monthly: 0,
      annually: 0,
    },
    professional: {
      monthly: 20,
      annually: 16,
    },
    enterprise: {
      monthly: 200,
      annually: 160,
    },
  }

  return (
    <section id="pricing" className="w-full flex flex-col justify-center items-center gap-8 bg-transparent py-16 md:py-24">
      {/* Header Section */}
      <div className="w-full px-6 md:px-24 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4"
        >
          {/* Pricing Badge - translucent for gradient */}
          <div className="px-3.5 py-1.5 bg-white/15 backdrop-blur-md shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-full flex justify-start items-center gap-2 border border-white/25">
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/90"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-white/90 text-xs font-medium leading-3">
              Plans & Pricing
            </div>
          </div>

          {/* Title - Updated copy and white color */}
          <h2 className="self-stretch text-center text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight">
            Less than a missed funding opportunity
          </h2>

          {/* Description - white/80 for gradient visibility */}
          <p className="self-stretch text-center text-white/80 text-base font-normal leading-7">
            Scale your operations with flexible pricing that grows with your team.
            <br />
            Start free, upgrade when you're ready.
          </p>
        </motion.div>
      </div>

      {/* Billing Toggle - Clean single pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-full bg-white/15 backdrop-blur-md p-1 flex items-center"
      >
        <button
          onClick={() => setBillingPeriod("annually")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            billingPeriod === "annually"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          Annually
        </button>
        <button
          onClick={() => setBillingPeriod("monthly")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            billingPeriod === "monthly"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          Monthly
        </button>
      </motion.div>

      {/* Pricing Cards Section - No borders */}
      <div className="w-full max-w-6xl mx-auto px-6 flex justify-center items-center">
        {/* Pricing Cards Container */}
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-6">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex-1 max-w-full md:max-w-none px-6 py-8 rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-12 bg-white shadow-xl"
          >
            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-9">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-gray-900 text-lg font-medium leading-7">Starter</div>
                <div className="w-full max-w-[242px] text-gray-500 text-sm font-normal leading-5">
                  Perfect for individuals and small teams getting started.
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="relative h-[60px] flex items-center text-gray-900 text-5xl font-medium leading-[60px] font-serif">
                    <span className="invisible">${pricing.starter[billingPeriod]}</span>
                    <span
                      className="absolute inset-0 flex items-center transition-all duration-500"
                      style={{
                        opacity: billingPeriod === "annually" ? 1 : 0,
                        transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                        filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                      }}
                    >
                      ${pricing.starter.annually}
                    </span>
                    <span
                      className="absolute inset-0 flex items-center transition-all duration-500"
                      style={{
                        opacity: billingPeriod === "monthly" ? 1 : 0,
                        transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                        filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                      }}
                    >
                      ${pricing.starter.monthly}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm font-medium">
                    per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-900 hover:bg-gray-100">
                Start for free
              </Button>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              {[
                "Up to 3 projects",
                "Basic documentation tools",
                "Community support",
                "Standard templates",
                "Basic analytics",
              ].map((feature, index) => (
                <div key={index} className="self-stretch flex justify-start items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400" />
                  <div className="flex-1 text-gray-700 text-[12.5px] font-normal leading-5">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Plan (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 max-w-full md:max-w-none px-6 py-8 bg-gray-900 rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-12 shadow-xl ring-2 ring-white/20"
          >
            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-9">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-white text-lg font-medium leading-7">Professional</div>
                <div className="w-full max-w-[242px] text-white/70 text-sm font-normal leading-5">
                  Advanced features for growing teams and businesses.
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="relative h-[60px] flex items-center text-white text-5xl font-medium leading-[60px] font-serif">
                    <span className="invisible">${pricing.professional[billingPeriod]}</span>
                    <span
                      className="absolute inset-0 flex items-center transition-all duration-500"
                      style={{
                        opacity: billingPeriod === "annually" ? 1 : 0,
                        transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                        filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                      }}
                    >
                      ${pricing.professional.annually}
                    </span>
                    <span
                      className="absolute inset-0 flex items-center transition-all duration-500"
                      style={{
                        opacity: billingPeriod === "monthly" ? 1 : 0,
                        transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                        filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                      }}
                    >
                      ${pricing.professional.monthly}
                    </span>
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                  </div>
                </div>
              </div>

              <Button className="w-full rounded-full bg-white text-gray-900 hover:bg-white/90">
                Get started
              </Button>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              {[
                "Unlimited projects",
                "Advanced documentation tools",
                "Priority support",
                "Custom templates",
                "Advanced analytics",
                "Team collaboration",
                "API access",
                "Custom integrations",
              ].map((feature, index) => (
                <div key={index} className="self-stretch flex justify-start items-center gap-3">
                  <Check className="w-4 h-4 text-[#5b8cff]" />
                  <div className="flex-1 text-white text-[12.5px] font-normal leading-5">{feature}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 max-w-full md:max-w-none px-6 py-8 bg-white rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-12 shadow-xl"
          >
            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-9">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-gray-900 text-lg font-medium leading-7">Enterprise</div>
                <div className="w-full max-w-[242px] text-gray-500 text-sm font-normal leading-5">
                  Complete solution for large organizations and enterprises.
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="relative h-[60px] flex items-center text-gray-900 text-5xl font-medium leading-[60px] font-serif">
                    <span className="invisible">${pricing.enterprise[billingPeriod]}</span>
                    <span
                      className="absolute inset-0 flex items-center transition-all duration-500"
                      style={{
                        opacity: billingPeriod === "annually" ? 1 : 0,
                        transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                        filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                      }}
                    >
                      ${pricing.enterprise.annually}
                    </span>
                    <span
                      className="absolute inset-0 flex items-center transition-all duration-500"
                      style={{
                        opacity: billingPeriod === "monthly" ? 1 : 0,
                        transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                        filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                      }}
                    >
                      ${pricing.enterprise.monthly}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm font-medium">
                    per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                  </div>
                </div>
              </div>

              <Button className="w-full rounded-full bg-[#5b8cff] text-white hover:bg-[#4a7be9]">
                Contact sales
              </Button>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              {[
                "Everything in Professional",
                "Dedicated account manager",
                "24/7 phone support",
                "Custom onboarding",
                "Advanced security features",
                "SSO integration",
                "Custom contracts",
                "White-label options",
              ].map((feature, index) => (
                <div key={index} className="self-stretch flex justify-start items-center gap-3">
                  <Check className="w-4 h-4 text-gray-400" />
                  <div className="flex-1 text-gray-700 text-[12.5px] font-normal leading-5">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
