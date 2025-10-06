"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

interface NavigationProps {
  onGetStarted?: () => void;
}

export function Navigation({ onGetStarted }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQs" },
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
        <div className="bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 flex h-14 items-center justify-between shadow-sm">
          {/* Logo - Left Side */}
          <div className="flex items-center space-x-2 w-[160px]">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <span className="text-[#696969] font-bold text-lg font-[family-name:var(--font-source-serif)]">
                GrantWare
              </span>
              <span className="text-[#5A8BF2] font-bold text-lg font-[family-name:var(--font-source-serif)]">
                AI
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#696969] hover:text-gray-900 transition-colors duration-200 font-medium text-sm capitalize px-4 py-2"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions - Right Side */}
          <div className="hidden md:flex items-center justify-end w-[160px]">
            <Button
              onClick={onGetStarted}
              className="bg-[#5A8BF2] hover:bg-[#4A6EDB] text-[#F5F5F5] rounded-lg px-4 py-2 h-9 font-medium text-xs capitalize"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
          <div className="md:hidden mt-2 bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 text-[#696969] hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 space-y-2">
                <Button
                  className="w-full bg-[#5A8BF2] hover:bg-[#4A6EDB] text-[#F5F5F5] rounded-lg text-xs h-9"
                  onClick={onGetStarted}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
