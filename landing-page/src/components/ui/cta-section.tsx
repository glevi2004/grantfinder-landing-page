"use client";

import { ReactNode } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

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
  title = (
    <>
      Join Our{" "}
      <span className="text-primary">Contributor Program</span>
    </>
  ),
  description = "GrantWare AI is currently in beta. Schedule a call to join our Contributor Program and get early access: receive weekly updates, resources, and feedback forms; help pilot our platform and provide feedback to shape its development; early contributors may secure priority access and discounted first-year pricing.",
  buttons = [
    {
      text: "Book a Demo",
      href: "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
      target: "_blank",
      rel: "noopener noreferrer",
      iconRight: <ArrowRight className="ml-2 h-5 w-5" />,
    },
    {
      text: "Learn More",
      variant: "outline",
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
  return (
    <Section className={cn("relative overflow-hidden bg-background", className)} id="cta">
      {/* Interactive Grid Background */}
      <InteractiveGridPattern
        className={cn(
          "absolute inset-0 w-full h-full"
        )}
        numSquares={70}
        maxOpacity={1.0}
        width={50}
        height={50}
      />

      <div className="max-w-container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 px-6 py-16 sm:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Limited Beta Access</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-source-serif)]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  className="h-12 px-8 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
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
      </div>
    </Section>
  );
}
