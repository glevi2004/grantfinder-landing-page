"use client"

import { useState, useRef } from "react"
import { useLegalOutline } from "@/components/use-legal-outline"

export function LegalOutlineRail() {
  const { items, activeId, scrollTo } = useLegalOutline()
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Don't render if no items discovered
  if (items.length === 0) {
    return null
  }

  return (
    <nav
      ref={navRef}
      aria-label="Page outline"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={(e) => {
        // Only collapse if focus leaves the entire nav
        if (!navRef.current?.contains(e.relatedTarget as Node)) {
          setIsExpanded(false)
        }
      }}
      className={`
        fixed right-4 top-1/2 -translate-y-1/2 z-40
        hidden xl:flex flex-col items-end
        transition-all duration-300 ease-out
        ${isExpanded ? "w-64" : "w-4"}
      `}
    >
      {/* Container with frosted glass effect matching header pill */}
      <div
        className={`
          relative flex flex-col gap-1 py-3 px-2
          max-h-[70vh] overflow-y-auto
          transition-all duration-300 ease-out
          ${
            isExpanded
              ? "bg-gray-100/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        {items.map((item) => {
          const isActive = activeId === item.id

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                group flex items-center gap-3
                transition-all duration-200 ease-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b8cff] focus-visible:ring-offset-2 rounded-lg
                ${isExpanded ? "w-full px-3 py-2 hover:bg-gray-200/70" : "p-1"}
              `}
              title={!isExpanded ? item.label : undefined}
            >
              {/* Dot indicator */}
              <span
                className={`
                  flex-shrink-0 rounded-full transition-all duration-200
                  ${
                    isActive
                      ? "w-2.5 h-2.5 bg-[#5b8cff]"
                      : "w-1.5 h-1.5 bg-gray-400 group-hover:bg-gray-600"
                  }
                `}
              />

              {/* Label - only visible when expanded */}
              <span
                className={`
                  text-left text-sm leading-tight truncate
                  transition-all duration-300 ease-out
                  ${
                    isExpanded
                      ? "opacity-100 max-w-full"
                      : "opacity-0 max-w-0 overflow-hidden"
                  }
                  ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 group-hover:text-gray-900"
                  }
                `}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Collapsed rail track (visual guide when collapsed) */}
      {!isExpanded && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full pointer-events-none" />
      )}
    </nav>
  )
}
