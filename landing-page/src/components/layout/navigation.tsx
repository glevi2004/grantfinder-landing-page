"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features", hasDropdown: true },
    { href: "#faq", label: "FAQs", hasDropdown: true },
    { href: "#about", label: "About", hasDropdown: false },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white max-w-[1312px] mx-auto">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo - Left Side */}
            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              >
                <span className="text-zinc-950 font-bold text-lg font-[family-name:var(--font-geist-sans)]">
                  GrantWare AI
                </span>
              </button>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.href} className="flex items-center">
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-zinc-100 transition-colors duration-200 text-zinc-950 font-medium text-sm"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="h-3 w-3" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Desktop Actions - Right Side */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
                    "_blank"
                  )
                }
                className="bg-gradient-to-b from-zinc-900 to-zinc-900/80 hover:from-zinc-800 hover:to-zinc-800/80 text-white rounded-md px-4 py-2 h-9 font-medium text-sm shadow-sm"
              >
                Book a call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-zinc-950 hover:text-zinc-700 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-zinc-200">
              <div className="px-8 py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between w-full text-left px-3 py-2 text-zinc-950 hover:bg-zinc-50 rounded-md transition-colors duration-200 text-sm font-medium"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                ))}
                <div className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-b from-zinc-900 to-zinc-900/80 hover:from-zinc-800 hover:to-zinc-800/80 text-white rounded-md text-sm h-9"
                    onClick={() =>
                      window.open(
                        "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
                        "_blank"
                      )
                    }
                  >
                    Book a call
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
