"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { IconBrandLinkedin } from "@tabler/icons-react"
import { scrollToSection } from "@/components/smooth-scroll"

export function FooterSection() {
  // Smooth scroll handler for anchor links using Lenis
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    scrollToSection(targetId)
  }

  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start bg-white relative z-10 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0 max-w-7xl mx-auto w-full">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <Link href="/" className="text-xl font-semibold">
            <span className="font-serif text-gray-900">GrantWare <span className="text-gray-500">AI</span></span>
          </Link>
          <div className="text-gray-500 text-sm font-medium leading-[18px]">
            Win the funding your organization deserves.
          </div>

          {/* Social Media Icons - LinkedIn and Email only */}
          <div className="flex justify-start items-start gap-4">
            <Link 
              href="https://www.linkedin.com/company/grantware/posts/?feedView=all" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-[#5b8cff] transition-colors"
            >
              <IconBrandLinkedin size={20} />
            </Link>
            <a 
              href="mailto:ryanrod@bu.edu"
              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-[#5b8cff] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-12">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-gray-500 text-sm font-medium leading-5">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <a 
                href="#features" 
                onClick={(e) => handleSmoothScroll(e, "features")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                Features
              </a>
              <a 
                href="#approach" 
                onClick={(e) => handleSmoothScroll(e, "approach")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                How it Works
              </a>
              <a 
                href="#approach-2" 
                onClick={(e) => handleSmoothScroll(e, "approach-2")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                Workflow
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleSmoothScroll(e, "pricing")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-gray-500 text-sm font-medium leading-5">Company</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <a 
                href="#trusted-by" 
                onClick={(e) => handleSmoothScroll(e, "trusted-by")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                About us
              </a>
              <a 
                href="#trusted-by" 
                onClick={(e) => handleSmoothScroll(e, "trusted-by")}
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                Our Team
              </a>
              <a 
                href="mailto:ryanrod@bu.edu"
                className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-gray-500 text-sm font-medium leading-5">Legal</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <Link href="/terms" className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-700 text-sm font-normal leading-5 hover:text-[#5b8cff] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-gray-200 flex items-center justify-center bg-white">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} GrantWare AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
