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
    <section id="pricing" className="w-full flex flex-col justify-center items-center gap-2 bg-background">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-border flex justify-center items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4"
        >
          {/* Pricing Badge */}
          <div className="px-3.5 py-1.5 bg-background shadow-[0px_0px_0px_4px_rgba(0,0,0,0.03)] overflow-hidden rounded-full flex justify-start items-center gap-2 border border-border">
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-foreground text-xs font-medium leading-3">
              Plans & Pricing
            </div>
          </div>

          {/* Title */}
          <h2 className="self-stretch text-center text-foreground text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight">
            Choose the perfect plan for your business
          </h2>

          {/* Description */}
          <p className="self-stretch text-center text-muted-foreground text-base font-normal leading-7">
            Scale your operations with flexible pricing that grows with your team.
            <br />
            Start free, upgrade when you're ready.
          </p>
        </motion.div>
      </div>

      {/* Billing Toggle Section */}
      <div className="self-stretch px-6 md:px-16 py-9 relative flex justify-center items-center gap-4">
        {/* Horizontal line */}
        <div className="w-full max-w-[1060px] h-0 absolute left-1/2 transform -translate-x-1/2 top-[63px] border-t border-border z-0"></div>

        {/* Toggle Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-3 relative bg-secondary/50 border border-border backdrop-blur-sm flex justify-center items-center rounded-lg z-20"
        >
          <div className="p-0.5 bg-muted/30 rounded-full border border-border flex justify-center items-center gap-0.5 relative">
            <div
              className={`absolute top-0.5 w-[calc(50%-1px)] h-[calc(100%-4px)] bg-background shadow-sm rounded-full transition-all duration-300 ease-in-out ${
                billingPeriod === "annually" ? "left-0.5" : "right-0.5"
              }`}
            />

            <button
              onClick={() => setBillingPeriod("annually")}
              className="px-4 py-1 rounded-full flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 transition-colors duration-300 ${
                  billingPeriod === "annually" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Annually
              </div>
            </button>

            <button
              onClick={() => setBillingPeriod("monthly")}
              className="px-4 py-1 rounded-full flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 transition-colors duration-300 ${
                  billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Monthly
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pricing Cards Section */}
      <div className="self-stretch border-b border-t border-border flex justify-center items-center">
        <div className="flex justify-center items-start w-full max-w-6xl">
          {/* Pricing Cards Container */}
          <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch gap-0 py-12 md:py-0">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-8 border border-border overflow-hidden flex flex-col justify-start items-start gap-12 bg-background"
            >
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground/90 text-lg font-medium leading-7">Starter</div>
                  <div className="w-full max-w-[242px] text-muted-foreground text-sm font-normal leading-5">
                    Perfect for individuals and small teams getting started.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-medium leading-[60px] font-serif">
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
                    <div className="text-muted-foreground text-sm font-medium">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full rounded-full">
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
                    <Check className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1 text-foreground/80 text-[12.5px] font-normal leading-5">
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
              className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-8 bg-primary border border-primary overflow-hidden flex flex-col justify-start items-start gap-12"
            >
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-primary-foreground text-lg font-medium leading-7">Professional</div>
                  <div className="w-full max-w-[242px] text-primary-foreground/70 text-sm font-normal leading-5">
                    Advanced features for growing teams and businesses.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-primary-foreground text-5xl font-medium leading-[60px] font-serif">
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
                    <div className="text-primary-foreground/70 text-sm font-medium">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground">
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
                    <Check className="w-4 h-4 text-[oklch(0.65_0.18_45)]" />
                    <div className="flex-1 text-primary-foreground text-[12.5px] font-normal leading-5">{feature}</div>
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
              className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-8 bg-background border border-border overflow-hidden flex flex-col justify-start items-start gap-12"
            >
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-foreground/90 text-lg font-medium leading-7">Enterprise</div>
                  <div className="w-full max-w-[242px] text-muted-foreground text-sm font-normal leading-5">
                    Complete solution for large organizations and enterprises.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-foreground text-5xl font-medium leading-[60px] font-serif">
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
                    <div className="text-muted-foreground text-sm font-medium">
                      per {billingPeriod === "monthly" ? "month" : "year"}, per user.
                    </div>
                  </div>
                </div>

                <Button className="w-full rounded-full">
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
                    <Check className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1 text-foreground/80 text-[12.5px] font-normal leading-5">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

