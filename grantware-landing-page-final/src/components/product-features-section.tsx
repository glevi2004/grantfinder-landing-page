"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { motion } from "framer-motion"
// import { useTheme } from "@/components/theme-context"

// Badge component styled for light background
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-3.5 py-1.5 backdrop-blur-md shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-full flex justify-start items-center gap-2 border bg-gray-100 border-gray-200">
      <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-xs font-medium leading-3 text-gray-700">
        {text}
      </div>
    </div>
  )
}

export function ProductFeaturesSection() {
  // const { isGradient } = useTheme()
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Discover Opportunities",
      description: "AI-powered grant matching finds the best funding opportunities tailored to your organization.",
    },
    {
      title: "Draft with AI",
      description: "Generate compelling proposals faster with intelligent writing assistance and templates.",
    },
    {
      title: "Manage & Track",
      description: "Centralized dashboard to track applications, deadlines, and compliance in one place.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <section id="features" className="w-full flex flex-col justify-center items-center bg-transparent py-16 md:py-24">
      {/* Header Section */}
      <div className="w-full px-6 md:px-12 pb-12 md:pb-16 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4"
        >
          <Badge
            icon={
              <div className="w-2.5 h-2.5 outline outline-[1.17px] outline-offset-[-0.58px] rounded-full outline-gray-400"></div>
            }
            text="Platform Features"
          />
          <h2 className="self-stretch text-center text-3xl md:text-5xl lg:text-[3.25rem] font-semibold leading-tight md:leading-[1.1] font-serif tracking-tight md:whitespace-nowrap text-gray-900">
            Everything you need to win more Grants
          </h2>
          <p className="self-stretch text-center text-base font-normal leading-7 max-w-2xl mx-auto text-gray-600">
            From discovery to submission, GrantWare AI streamlines every step of your grant management process with intelligent automation and collaborative tools.
          </p>
        </motion.div>
      </div>

      {/* Content Section - Centered Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Column - Feature Cards */}
          <div className="w-full flex flex-col justify-center items-stretch gap-4 order-2 lg:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer rounded-xl ${
                    isActive
                      ? "bg-white shadow-lg border border-gray-200"
                      : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                >
                  {/* Progress bar */}
                  <div
                    className={`w-full h-1 overflow-hidden bg-gray-200 ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-1 bg-[#5b8cff]"
                      style={{
                        animation: isActive ? "progressBar 5s linear forwards" : "none",
                      }}
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className={`self-stretch flex justify-center flex-col text-sm font-semibold leading-6 ${
                      isActive ? "text-gray-900" : "text-gray-700"
                    }`}>
                      {card.title}
                    </div>
                    <div className={`self-stretch text-[13px] font-normal leading-[22px] whitespace-pre-line ${
                      isActive ? "text-gray-600" : "text-gray-500"
                    }`}>
                      {card.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column - Image/Preview Box */}
          <div className="w-full flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[580px] h-[280px] md:h-[420px] bg-white shadow-xl border border-white/30 overflow-hidden rounded-2xl flex flex-col justify-center items-center"
            >
              <div
                className={`w-full h-full transition-all duration-300 flex items-center justify-center ${
                  activeCard === 0
                    ? "bg-gradient-to-br from-blue-50 to-blue-100"
                    : activeCard === 1
                      ? "bg-gradient-to-br from-indigo-50 to-indigo-100"
                      : "bg-gradient-to-br from-slate-50 to-slate-100"
                }`}
              >
                <span className="text-gray-400 text-sm">Preview Area</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
