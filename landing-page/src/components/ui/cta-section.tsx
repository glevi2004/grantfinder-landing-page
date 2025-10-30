"use client";

import { ReactNode, useRef } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedBeam } from "@/components/ui/shadcn-io/animated-beam/index";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  target?: string;
  rel?: string;
}

interface CTASectionProps {
  title?: ReactNode;
  description?: ReactNode;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export function CTASection({
  title = "Ready to see GrantWare in action?",
  description,
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
}: CTASectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef1 = useRef<HTMLDivElement>(null);
  const leftRef2 = useRef<HTMLDivElement>(null);
  const leftRef3 = useRef<HTMLDivElement>(null);
  const rightRef1 = useRef<HTMLDivElement>(null);
  const rightRef2 = useRef<HTMLDivElement>(null);
  const rightRef3 = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-[#FF6B47] to-[#FF8C6B] py-24 sm:py-32",
        className
      )}
      id="cta"
    >
      {/* Left side beams */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div
          ref={leftRef1}
          className="absolute left-0 top-[-150px] w-32 h-32 rounded-full border-4 border-[#A8C5FF]/40"
        />
        <div
          ref={leftRef2}
          className="absolute left-[-50px] top-0 w-40 h-40 rounded-full border-4 border-[#B8F8E4]/40"
        />
        <div
          ref={leftRef3}
          className="absolute left-0 top-[150px] w-32 h-32 rounded-full border-4 border-[#FFE5A8]/40"
        />
      </div>

      {/* Right side beams */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div
          ref={rightRef1}
          className="absolute right-0 top-[-150px] w-32 h-32 rounded-full border-4 border-[#A8C5FF]/40"
        />
        <div
          ref={rightRef2}
          className="absolute right-[-50px] top-0 w-40 h-40 rounded-full border-4 border-[#B8F8E4]/40"
        />
        <div
          ref={rightRef3}
          className="absolute right-0 top-[150px] w-32 h-32 rounded-full border-4 border-[#FFE5A8]/40"
        />
      </div>

      {/* Animated Beams */}
      {containerRef.current && centerRef.current && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef1}
            toRef={centerRef}
            gradientStartColor="#A8C5FF"
            gradientStopColor="#B8F8E4"
            curvature={-100}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef2}
            toRef={centerRef}
            gradientStartColor="#B8F8E4"
            gradientStopColor="#FFE5A8"
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef3}
            toRef={centerRef}
            gradientStartColor="#FFE5A8"
            gradientStopColor="#A8C5FF"
            curvature={100}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightRef1}
            gradientStartColor="#A8C5FF"
            gradientStopColor="#B8F8E4"
            curvature={-100}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightRef2}
            gradientStartColor="#B8F8E4"
            gradientStopColor="#FFE5A8"
            curvature={0}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightRef3}
            gradientStartColor="#FFE5A8"
            gradientStopColor="#A8C5FF"
            curvature={100}
            reverse
          />
        </>
      )}

      <div className="max-w-container mx-auto relative z-10" ref={centerRef}>
        <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-source-serif)] text-white">
            {title}
          </h2>

          {/* Description (optional) */}
          {description && (
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}

          {/* Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
      </div>
    </Section>
  );
}
