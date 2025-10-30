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
import { ShimmerButton } from "@/components/ui/shimmer-button";
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
      text: "Book Your 15-Minute Demo",
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
        "px-8 sm:px-12 md:px-16 lg:px-28 overflow-hidden pb-0 sm:pt-0 sm:pb-0 md:pt-0 md:pb-0 relative isolate fade-bottom bg-gradient-to-b from-[#5788d8] from-0% via-[#7ea9e0] via-15% to-[#b5d5f0] to-40%",
        className
      )}
    >
      {/* Base blue gradient - matching Cluely's hero with faster transition to lighter tones */}
      {/* Navbar */}
      <nav className="w-full">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold text-white font-[family-name:var(--font-source-serif)]">
                GrantWare <span className="text-white/90">AI</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 mr-42">
              <button
                onClick={() => scrollToSection("#features")}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("#faq")}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors"
              >
                About Us
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-4">
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
                      onClick={() => scrollToSection("#about")}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => scrollToSection("#faq")}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      Blog
                    </button>
                    <ShimmerButton size="lg" asChild className="mt-4">
                      <a
                        href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a Call
                      </a>
                    </ShimmerButton>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-[65%_35%] gap-12 items-center z-[2] relative pt-8 pb-12 lg:pt-0 lg:pb-0">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left px-4 sm:px-0">
            {/* Badge */}
            {badge !== false && badge}

            {/* Main Heading */}
            <h1 className="animate-appear relative z-10 text-3xl leading-tight font-semibold text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-[family-name:var(--font-source-serif)]">
              Automated Funding <br />
              <TypingText
                text={["Discovery", "Writing", "Management"]}
                as="span"
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold text-white italic block my-1"
                cursorClassName="bg-white h-7 sm:h-8 md:h-10"
                showCursor={true}
              />
              <br />
              for your organization.
            </h1>

            {/* Description */}
            <p className="animate-appear text-white relative z-10 mx-auto lg:mx-0 font-medium text-balance opacity-0 delay-100 text-base sm:text-lg md:text-xl max-w-2xl">
              {description}
            </p>

            {/* CTA Buttons */}
            {buttons !== false && buttons.length > 0 && (
              <div className="animate-appear relative z-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 opacity-0 delay-300">
                {buttons.map((button, index) => {
                  const ButtonComponent = index === 0 ? ShimmerButton : Button;

                  return (
                    <ButtonComponent
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
                    </ButtonComponent>
                  );
                })}
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
          <div className="mt-8 sm:mt-12 lg:mt-[-20px] relative w-full max-w-4xl mx-auto z-[1] px-4 sm:px-0">
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
