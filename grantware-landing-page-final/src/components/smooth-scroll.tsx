"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

// Navbar height offset for smooth scrolling to sections
const NAVBAR_OFFSET = 80

// Global lenis instance for external access
let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function scrollToSection(targetId: string) {
  const element = document.getElementById(targetId)
  if (element && lenisInstance) {
    lenisInstance.scrollTo(element, { offset: -NAVBAR_OFFSET })
  } else if (element) {
    // Fallback if Lenis not ready
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0)
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    
    if (prefersReducedMotion) {
      return // Don't initialize Lenis if user prefers reduced motion
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis
    lenisInstance = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}

