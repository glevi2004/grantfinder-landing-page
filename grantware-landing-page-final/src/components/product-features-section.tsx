"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import type React from "react"
import { motion } from "framer-motion"
// import { useTheme } from "@/components/theme-context"

// Default fallback duration for tabs without videos (in seconds)
const FALLBACK_DURATION = 5

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

interface FeatureCard {
  title: string
  description: string
  videoSrc?: string
}

export function ProductFeaturesSection() {
  // const { isGradient } = useTheme()
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const [durations, setDurations] = useState<Record<number, number>>({})
  const [isInView, setIsInView] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null)

  const cards: FeatureCard[] = [
    {
      title: "Discover Opportunities",
      description: "AI-powered grant matching finds the best funding opportunities tailored to your organization.",
      videoSrc: "/videos/platform-features/discover-opportunities.mp4",
    },
    {
      title: "Draft with AI",
      description: "Generate compelling proposals faster with intelligent writing assistance and templates.",
      videoSrc: "/videos/platform-features/draft-with-ai.mp4",
    },
    {
      title: "Manage & Track",
      description: "Centralized dashboard to track applications, deadlines, and compliance in one place.",
      // videoSrc will be added when video is ready
    },
  ]

  const activeCardData = cards[activeCard]
  const hasVideo = !!activeCardData.videoSrc

  // Get the duration for the current card (use video duration if known, else fallback)
  const currentDuration = durations[activeCard] ?? FALLBACK_DURATION

  // Check if we should start/run the progress animation
  // For video tabs: only when video is ready (metadata loaded)
  // For non-video tabs: immediately when in view
  const shouldAnimate = isInView && hasStarted && (hasVideo ? isVideoReady : true)

  // Advance to the next card
  const advanceToNextCard = useCallback(() => {
    setActiveCard((prev) => (prev + 1) % cards.length)
    setAnimationKey((prev) => prev + 1)
    setIsVideoReady(false) // Reset for next video
  }, [cards.length])

  // Clear any existing fallback timer
  const clearFallbackTimer = useCallback(() => {
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current)
      fallbackTimerRef.current = null
    }
  }, [])

  // Start fallback timer for tabs without videos
  const startFallbackTimer = useCallback((duration: number) => {
    clearFallbackTimer()
    fallbackTimerRef.current = setTimeout(() => {
      advanceToNextCard()
    }, duration * 1000)
  }, [clearFallbackTimer, advanceToNextCard])

  // Handle video metadata loaded - store duration and mark as ready
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      const duration = videoRef.current.duration
      setDurations((prev) => ({
        ...prev,
        [activeCard]: duration,
      }))
      setIsVideoReady(true)
    }
  }, [activeCard])

  // Handle video ended - advance to next card
  const handleVideoEnded = useCallback(() => {
    advanceToNextCard()
  }, [advanceToNextCard])

  // Handle card click
  const handleCardClick = useCallback((index: number) => {
    clearFallbackTimer()
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
    setIsVideoReady(false) // Reset video ready state
    setHasStarted(true) // User interaction means we should start
  }, [clearFallbackTimer])

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsInView(entry.isIntersecting)
        
        // Start on first view
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-50px 0px", // Add some margin for better UX
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted])

  // Effect to manage video playback based on view state and video readiness
  useEffect(() => {
    if (!isInView || !hasStarted) {
      // Pause video and clear timers when not in view
      if (videoRef.current) {
        videoRef.current.pause()
      }
      clearFallbackTimer()
      return
    }

    // In view and started
    if (hasVideo && videoRef.current) {
      // For video tabs: play the video
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {
        // Autoplay blocked - use fallback
        setIsVideoReady(true)
        startFallbackTimer(FALLBACK_DURATION)
      })
    } else {
      // For non-video tabs: start fallback timer
      startFallbackTimer(currentDuration)
    }

    return () => {
      clearFallbackTimer()
    }
  }, [activeCard, hasVideo, isInView, hasStarted, clearFallbackTimer, startFallbackTimer, currentDuration])

  // Effect to start fallback timer for non-video tabs when shouldAnimate becomes true
  useEffect(() => {
    if (shouldAnimate && !hasVideo) {
      startFallbackTimer(currentDuration)
    }
  }, [shouldAnimate, hasVideo, currentDuration, startFallbackTimer])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="w-full flex flex-col justify-center items-center bg-transparent py-16 md:py-24"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-8 items-stretch">
          {/* Left Column - Feature Cards */}
          <div className="w-full flex flex-col justify-between items-stretch gap-4 order-2 lg:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard
              // Get duration for this specific card's progress bar
              // Only use actual duration if we have it, otherwise use fallback
              const cardDuration = durations[index] ?? FALLBACK_DURATION
              
              // Determine if this card's progress should animate
              // For active video tabs: only animate when video is ready
              // For active non-video tabs: animate when in view
              const cardHasVideo = !!card.videoSrc
              const shouldAnimateProgress = isActive && shouldAnimate && (cardHasVideo ? isVideoReady : true)

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
                      key={`${animationKey}-${index}-${isVideoReady}`}
                      className="h-1 bg-[#5b8cff]"
                      style={{
                        animation: shouldAnimateProgress 
                          ? `progressBar ${cardDuration}s linear forwards` 
                          : "none",
                        width: shouldAnimateProgress ? undefined : "0%",
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

          {/* Right Column - Video/Preview Box */}
          <div className="w-full flex justify-center lg:justify-start items-stretch order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full min-h-[320px] md:min-h-[400px] lg:min-h-0 bg-white shadow-xl border border-gray-200 overflow-hidden rounded-2xl flex flex-col justify-center items-center"
            >
              {hasVideo ? (
                <video
                  ref={videoRef}
                  key={activeCard}
                  src={activeCardData.videoSrc}
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full transition-all duration-300 flex items-center justify-center ${
                    activeCard === 1
                      ? "bg-gradient-to-br from-indigo-50 to-indigo-100"
                      : "bg-gradient-to-br from-slate-50 to-slate-100"
                  }`}
                >
                  <span className="text-gray-400 text-sm">Video coming soon</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
