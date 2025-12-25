import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif">
              GrantWare <span className="text-foreground/70">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#approach" className="text-sm text-foreground hover:text-primary transition-colors">
              Process
            </Link>
            <Link href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button - no action for now */}
          <ShimmerButton size="default" className="rounded-full px-6">
            Get Started
          </ShimmerButton>
        </div>
      </div>
    </header>
  )
}
