"use client"

import { ShimmerButton } from "@/components/ui/shimmer-button"

export function HeaderPill() {
  // Smooth scroll to a section by ID
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Smooth scroll to top of page
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        {/* The pill navbar */}
        <div className="relative mx-auto max-w-[700px] w-full">
          <div className="flex items-center justify-between px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-[0px_0px_0px_2px_rgba(255,255,255,0.1)]">
            {/* Left: Logo - scrolls to top */}
            <a 
              href="/" 
              onClick={handleScrollToTop}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span className="font-serif text-lg font-medium text-white">
                GrantWare <span className="text-white/80">AI</span>
              </span>
            </a>

            {/* Center: Nav links (desktop only) */}
            <nav className="hidden md:flex items-center gap-4">
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "features")}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#approach"
                onClick={(e) => handleSmoothScroll(e, "approach")}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Process
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, "pricing")}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>

            {/* Right: CTA Button */}
            <ShimmerButton size="sm" className="rounded-xl px-5 text-sm">
              Get Started
            </ShimmerButton>
          </div>
        </div>
      </div>
    </header>
  )
}
