"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useBackgroundPattern } from "@/contexts/background-pattern-context";

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
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function HeroSection({
  title = "Discover The Perfect Grants For Your School District",
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
  badge = (
    <Badge 
      variant="outline" 
      className="animate-appear border-border/20 bg-background/80 backdrop-blur-md shadow-lg hover:bg-background/90 transition-all duration-300"
    >
      <span className="text-muted-foreground text-xs font-semibold">
        Built By School Districts For School Districts
      </span>
      <span className="mx-2 text-muted-foreground/50">•</span>
      <a 
        href="#about" 
        className="flex items-center gap-1 text-foreground text-xs font-semibold hover:text-primary transition-colors duration-200"
      >
        Read more
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
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
  const { pattern } = useBackgroundPattern();

  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0 relative isolate",
        className,
      )}
    >
      {/* Background Patterns - Extend behind navbar */}
      {pattern === "grid" && (
        <InteractiveGridPattern
          className={cn(
            "fixed inset-0 w-full h-screen -z-10"
          )}
          numSquares={70}
          maxOpacity={1.0}
          width={50}
          height={50}
        />
      )}
      {pattern === "beams" && (
        <div className="fixed inset-0 w-full h-screen -z-10">
          <BackgroundBeams />
        </div>
      )}
      
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-[0px] sm:gap-16">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-12 z-[2] relative">
          {/* Badge */}
          {badge !== false && badge}

          {/* Main Heading */}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-5xl leading-none font-semibold text-balance text-transparent drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] sm:text-6xl sm:leading-none md:text-[76px] md:leading-none font-[family-name:var(--font-source-serif)] max-w-[1248px]">
            {title}
          </h1>

          {/* Description */}
          <p className="animate-appear text-muted-foreground relative z-10 max-w-[544px] font-medium text-balance opacity-0 delay-100 text-xl leading-7">
            {description}
          </p>

          {/* CTA Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
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

          {/* Dashboard Mockup */}
          {mockup !== false && (
            <div className="relative w-full max-w-4xl mx-auto pt-12 z-[1]">
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
      </div>
    </Section>
  );
}
