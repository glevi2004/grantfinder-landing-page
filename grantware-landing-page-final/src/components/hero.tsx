"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { GrantwareConnectionsBeam } from "@/components/grantware-connections-beam"
import { HeroShaderGradient } from "@/components/hero-shader-gradient"
import { motion } from "framer-motion"

const TYPING_WORDS = ["easier", "faster", "smarter"]
const TYPING_SPEED = 120
const DELETING_SPEED = 60
const PAUSE_DURATION = 1800

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const typeEffect = useCallback(() => {
    const currentWord = TYPING_WORDS[wordIndex]

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        return setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, TYPING_SPEED)
      } else {
        // Finished typing, pause then start deleting
        return setTimeout(() => {
          setIsDeleting(true)
        }, PAUSE_DURATION)
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, DELETING_SPEED)
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
        return undefined
      }
    }
  }, [displayText, wordIndex, isDeleting])

  useEffect(() => {
    const timeout = typeEffect()
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [typeEffect])

  const scrollToFeatures = () => {
    const element = document.querySelector("#features")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-16 px-6 min-h-[90vh]">
      {/* Shader Gradient Background */}
      <HeroShaderGradient />

      {/* Hero Content - sits above gradient */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[55%_45%] items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-left leading-[1.1] mb-6 text-white"
            >
              <span className="block">Win funding for your</span>
              <span className="block">
                organization{" "}
                <span className="inline-block min-w-[3ch]">
                  <span className="text-[#7cb3ff]">{displayText}</span>
                  <span className="animate-pulse text-[#7cb3ff]">|</span>
                </span>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-left text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed"
            >
              Discover high-fit opportunities, draft faster with AI, and manage the entire grant lifecycle in one intelligent platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <ShimmerButton size="lg" className="rounded-full px-8 text-base" asChild>
                <a
                  href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 15-min demo
                </a>
              </ShimmerButton>

              <Button
                variant="ghost"
                size="lg"
                className="rounded-full px-8 text-base border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/40 text-white transition-all"
                onClick={scrollToFeatures}
              >
                Learn more
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center lg:justify-start -ml-12"
          >
            <GrantwareConnectionsBeam />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
