"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useLegalOutline } from "@/components/use-legal-outline"

export function LegalOutlineSheet() {
  const { items, activeId, scrollTo } = useLegalOutline()
  const [isOpen, setIsOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const firstButtonRef = useRef<HTMLButtonElement>(null)

  // Handle escape key to close
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Focus first button when sheet opens
  useEffect(() => {
    if (isOpen && firstButtonRef.current) {
      firstButtonRef.current.focus()
    }
  }, [isOpen])

  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleItemClick = useCallback(
    (id: string) => {
      setIsOpen(false)
      // Small delay to allow sheet close animation before scrolling
      setTimeout(() => {
        scrollTo(id)
      }, 150)
    },
    [scrollTo]
  )

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        setIsOpen(false)
      }
    },
    []
  )

  // Don't render if no items discovered
  if (items.length === 0) {
    return null
  }

  return (
    <>
      {/* Floating Action Button - mobile only */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open page outline"
        className="
          fixed bottom-6 right-4 z-40
          xl:hidden
          flex items-center gap-2
          px-4 py-3
          bg-[#5b8cff] text-white
          rounded-full shadow-lg
          hover:bg-[#4a7de8] active:scale-95
          transition-all duration-200
          pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]
        "
      >
        {/* List icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        <span className="text-sm font-medium">Outline</span>
      </button>

      {/* Bottom Sheet Overlay */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            xl:hidden
            bg-black/30 backdrop-blur-sm
            animate-in fade-in duration-200
          "
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Page outline"
        >
          {/* Sheet Container */}
          <div
            ref={sheetRef}
            className="
              absolute bottom-0 left-0 right-0
              bg-gray-100/95 backdrop-blur-md
              border-t border-gray-200
              rounded-t-2xl
              shadow-2xl
              animate-in slide-in-from-bottom duration-300
              pb-[env(safe-area-inset-bottom,0px)]
            "
          >
            {/* Sheet Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Outline</h2>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close outline"
                className="
                  p-2 -mr-2
                  text-gray-500 hover:text-gray-900
                  rounded-lg hover:bg-gray-200/70
                  transition-colors duration-150
                "
              >
                {/* X icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Scrollable List */}
            <div className="max-h-[60vh] overflow-y-auto overscroll-contain">
              <nav className="px-3 py-2" aria-label="Page sections">
                {items.map((item, index) => {
                  const isActive = activeId === item.id

                  return (
                    <button
                      key={item.id}
                      ref={index === 0 ? firstButtonRef : undefined}
                      onClick={() => handleItemClick(item.id)}
                      className={`
                        w-full flex items-center gap-3
                        px-3 py-3
                        rounded-xl
                        text-left
                        transition-all duration-150
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b8cff] focus-visible:ring-offset-2
                        ${
                          isActive
                            ? "bg-[#5b8cff]/10"
                            : "hover:bg-gray-200/70 active:bg-gray-200"
                        }
                      `}
                    >
                      {/* Dot indicator */}
                      <span
                        className={`
                          flex-shrink-0 rounded-full
                          ${
                            isActive
                              ? "w-2.5 h-2.5 bg-[#5b8cff]"
                              : "w-2 h-2 bg-gray-400"
                          }
                        `}
                      />

                      {/* Label */}
                      <span
                        className={`
                          text-sm leading-snug
                          ${
                            isActive
                              ? "text-gray-900 font-medium"
                              : "text-gray-600"
                          }
                        `}
                      >
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Bottom safe area spacer */}
            <div className="h-2" />
          </div>
        </div>
      )}
    </>
  )
}

