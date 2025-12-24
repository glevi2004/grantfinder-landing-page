"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { motion } from "framer-motion"

// Badge component adapted to Spark design system
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-3.5 py-1.5 bg-background shadow-[0px_0px_0px_4px_rgba(0,0,0,0.03)] overflow-hidden rounded-full flex justify-start items-center gap-2 border border-border">
      <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-foreground text-xs font-medium leading-3">
        {text}
      </div>
    </div>
  )
}

export function ProductFeaturesSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Plan your schedules",
      description: "Explore your data, build your dashboard,\nbring your team together.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "Data to insights in minutes",
      description: "Transform raw data into actionable insights\nwith powerful analytics tools.",
      image: "/analytics-dashboard.png",
    },
    {
      title: "Collaborate seamlessly",
      description: "Work together in real-time with your team\nand share insights instantly.",
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
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
    <section id="features" className="w-full border-b border-border flex flex-col justify-center items-center bg-background">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-border flex justify-center items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4"
        >
          <Badge
            icon={
              <div className="w-2.5 h-2.5 outline outline-[1.17px] outline-foreground outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Platform Features"
          />
          <h2 className="self-stretch text-center text-foreground text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight">
            Streamline your business operations
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-base font-normal leading-7">
            Manage schedules, analyze data, and collaborate with your team
            <br />
            all in one powerful platform.
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
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
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer rounded-lg ${
                    isActive
                      ? "bg-secondary shadow-sm border border-primary/20"
                      : "border border-border hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-border overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-primary"
                      style={{
                        animation: isActive ? "progressBar 5s linear forwards" : "none",
                      }}
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-foreground text-sm font-semibold leading-6">
                      {card.title}
                    </div>
                    <div className="self-stretch text-muted-foreground text-[13px] font-normal leading-[22px] whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[580px] h-[250px] md:h-[420px] bg-secondary shadow-sm border border-border overflow-hidden rounded-lg flex flex-col justify-start items-start"
            >
              <div
                className={`w-full h-full transition-all duration-300 ${
                  activeCard === 0
                    ? "bg-gradient-to-br from-primary/5 to-primary/10"
                    : activeCard === 1
                      ? "bg-gradient-to-br from-accent/5 to-accent/10"
                      : "bg-gradient-to-br from-secondary to-muted"
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

