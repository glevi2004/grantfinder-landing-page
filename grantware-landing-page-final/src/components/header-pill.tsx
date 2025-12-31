"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { scrollToSection, scrollToTop } from "@/components/smooth-scroll"
import { trackEvent } from "@/components/google-analytics"
// import { useTheme } from "@/components/theme-context"

export function HeaderPill() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"
  
  // To re-enable gradient toggle, uncomment:
  // const { isGradient, toggleTheme } = useTheme()

  // Smooth scroll to a section by ID using Lenis (only on home page)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    if (isHomePage) {
      scrollToSection(targetId)
    } else {
      // Navigate to home page with hash
      router.push(`/#${targetId}`)
    }
  }

  // Smooth scroll to top of page using Lenis
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isHomePage) {
      scrollToTop()
    } else {
      router.push("/")
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        {/* The pill navbar */}
        <div className="relative mx-auto max-w-[700px] w-full">
          <div className="flex items-center justify-between px-4 py-2 backdrop-blur-md border rounded-full shadow-[0px_0px_0px_2px_rgba(255,255,255,0.1)] bg-gray-100/90 border-gray-200">
            {/* Left: Logo - scrolls to top */}
            <a
              href="/"
              onClick={handleScrollToTop}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span className="font-serif text-lg font-medium text-gray-900">
                GrantWare{" "}
                <span className="text-gray-600">AI</span>
              </span>
            </a>

            {/* Center: Nav links (desktop only) */}
            <nav className="hidden md:flex items-center gap-4">
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "features")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#approach"
                onClick={(e) => handleSmoothScroll(e, "approach")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Process
              </a>
              {/* Pricing - COMMENTED OUT - To re-enable, uncomment below */}
              {/* <a
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, "pricing")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Pricing
              </a> */}
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                FAQ
              </a>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                About
              </Link>
            </nav>

            {/* Right: CTA Button */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle - COMMENTED OUT FOR NOW */}
              {/* To re-enable, uncomment useTheme hook above and this button: */}
              {/* <button
                onClick={toggleTheme}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
              >
                {isGradient ? "☀️ Light" : "🌈 Gradient"}
              </button> */}

              {/* Get Started - COMMENTED OUT - To re-enable, uncomment below */}
              {/* <ShimmerButton 
                size="sm" 
                className="rounded-xl px-5 text-sm"
                onClick={() => trackEvent("get_started_click", { location: "navbar", label: "Get Started" })}
              >
                Get Started
              </ShimmerButton> */}

              <ShimmerButton 
                size="sm" 
                className="rounded-xl px-5 text-sm"
                asChild
              >
                <a
                  href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("book_call_click", { location: "navbar", label: "Book a call" })}
                >
                  Book a call
                </a>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
