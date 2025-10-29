"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Section } from "@/components/ui/section";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GrantConnectionsBeam } from "@/components/ui/grant-connections-beam";
import TypingText from "@/components/ui/shadcn-io/typing-text/index";
import { cn } from "@/lib/utils";

interface HeroButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  target?: string;
  rel?: string;
}

interface HeroProps {
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function HeroSection({
  description = "Discover high-fit opportunities, get AI-powered eligibility analysis, and manage the entire grant lifecycle in one intelligent platform designed for education leaders.",
  mockup = (
    <Image
      src="/dashboard.png"
      alt="GrantWare AI Dashboard - Grant Management Interface"
      width={1232}
      height={753}
      className="w-full h-auto rounded-lg"
      priority
    />
  ),
  badge = false,
  buttons = [
    {
      text: "Book a Call",
      href: "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
      variant: "default",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      text: "Learn More",
      variant: "glow",
      onClick: () => {
        const element = document.querySelector("#features");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
    },
  ],
  className,
}: HeroProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Section
      className={cn(
        "px-8 sm:px-12 md:px-16 lg:px-28 overflow-hidden pt-0 pb-0 sm:pt-0 sm:pb-0 md:pt-0 md:pb-0 relative isolate fade-bottom bg-gradient-to-b from-[#5788d8] from-0% via-[#7ea9e0] via-15% to-[#b5d5f0] to-40%",
        className
      )}
    >
      {/* Base blue gradient - matching Cluely's hero with faster transition to lighter tones */}
      {/* Navbar */}
      <nav className="w-full mb-12">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="font-sans text-xl font-bold text-white">
                GrantWare <span className="text-white/90">AI</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => scrollToSection("#features")}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("#faq")}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                Enterprise
              </button>
              <button
                onClick={() => {
                  if (window.location.pathname === "/about") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    window.location.href = "/about";
                  }
                }}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                Careers
              </button>
              <button
                onClick={() => scrollToSection("#faq")}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                Blog
              </button>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg"
              >
                <a
                  href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 md:hidden text-white hover:bg-white/10"
                  >
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <button
                      onClick={scrollToTop}
                      className="flex items-center gap-2 text-xl font-bold"
                    >
                      <span className="font-sans text-xl font-bold">
                        GrantWare <span className="text-primary">AI</span>
                      </span>
                    </button>
                    <button
                      onClick={() => scrollToSection("#features")}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      Pricing
                    </button>
                    <button
                      onClick={() => scrollToSection("#faq")}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      Enterprise
                    </button>
                    <button
                      onClick={() => (window.location.href = "/about")}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      Careers
                    </button>
                    <button
                      onClick={() => scrollToSection("#faq")}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      Blog
                    </button>
                    <Button
                      variant="default"
                      size="lg"
                      asChild
                      className="mt-4 bg-blue-600 hover:bg-blue-700"
                    >
                      <a
                        href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a Call
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-container mx-auto pt-[0px]">
        <div className="grid lg:grid-cols-[65%_35%] gap-12 items-center z-[2] relative">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            {/* Badge */}
            {badge !== false && badge}

            {/* Main Heading */}
            <h1 className="animate-appear relative z-10 text-3xl leading-none font-semibold text-white sm:text-4xl sm:leading-none md:text-5xl md:leading-none font-[family-name:var(--font-source-serif)]">
              Automated Funding <br />
              <TypingText
                text={["Discovery", "Writing", "Management"]}
                as="span"
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                className="text-3xl sm:text-4xl md:text-5xl leading-none font-semibold text-white italic block my-1"
                cursorClassName="bg-white h-7 sm:h-8 md:h-10"
                showCursor={true}
              />
              <br />
              for your organization.
            </h1>

            {/* Description */}
            <p className="animate-appear text-white relative z-10 mx-auto lg:mx-0 font-medium text-balance opacity-0 delay-100 text-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            {buttons !== false && buttons.length > 0 && (
              <div className="animate-appear relative z-10 flex justify-center lg:justify-start gap-4 opacity-0 delay-300">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    className="h-10 px-5"
                    asChild={!!button.href}
                    onClick={button.onClick}
                  >
                    {button.href ? (
                      <a
                        href={button.href}
                        target={button.target}
                        rel={button.rel}
                      >
                        {button.icon}
                        {button.text}
                        {button.iconRight}
                      </a>
                    ) : (
                      <>
                        {button.icon}
                        {button.text}
                        {button.iconRight}
                      </>
                    )}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right side - Animated beam */}
          <div className="ml-[-140px] mb-[50px] hidden lg:flex items-center justify-center">
            <GrantConnectionsBeam />
          </div>
        </div>

        {/* Dashboard Mockup - Full width below */}
        {mockup !== false && (
          <div className="relative w-full max-w-4xl mx-auto pt-16 pb-12 z-[1]">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup
                type="responsive"
                className="bg-background/90 w-full rounded-xl border-0"
              >
                {mockup}
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        )}
      </div>
    </Section>
  );
}
