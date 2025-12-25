"use client"

import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function HeaderPill() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        {/* The pill navbar */}
        <div className="relative mx-auto max-w-[700px] w-full">
          <div className="flex items-center justify-between px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-[0px_0px_0px_2px_rgba(255,255,255,0.1)]">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="font-serif text-lg font-medium text-white">
                GrantWare <span className="text-white/80">AI</span>
              </span>
            </Link>

            {/* Center: Nav links (desktop only) */}
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="#features"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#approach"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Process
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </nav>

            {/* Right: CTA Button */}
            <ShimmerButton size="sm" className="rounded-full px-5 text-sm">
              Get Started
            </ShimmerButton>
          </div>
        </div>
      </div>
    </header>
  )
}

