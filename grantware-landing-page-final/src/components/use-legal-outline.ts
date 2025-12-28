"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { scrollToSection } from "@/components/smooth-scroll"

export interface OutlineItem {
  id: string
  label: string
}

export function useLegalOutline() {
  const [items, setItems] = useState<OutlineItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Discover headings on mount
  useEffect(() => {
    const article = document.querySelector("article[data-legal-doc]")
    if (!article) return

    const sections = article.querySelectorAll('section[id^="section-"]')
    const headings: OutlineItem[] = []

    sections.forEach((section) => {
      const h2 = section.querySelector("h2")
      if (h2) {
        headings.push({
          id: section.id,
          label: h2.textContent?.trim() || section.id,
        })
      }
    })

    setItems(headings)

    // Set up IntersectionObserver for active section tracking
    // rootMargin: top offset for header, bottom margin to detect "entering" viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most "in view"
        const visibleEntries = entries.filter((e) => e.isIntersecting)
        if (visibleEntries.length > 0) {
          // Pick the one closest to top
          const topmost = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          )
          setActiveId(topmost.target.id)
        }
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const scrollTo = useCallback((id: string) => {
    scrollToSection(id)
    setActiveId(id)
  }, [])

  return { items, activeId, scrollTo }
}

