"use client";

import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";

export default function SearchSection() {
  const features = [
    "One search across federal, state, and foundations",
    "Best-fit matches based on your district profile",
    "Plain-English reasons why each grant fits",
    "Start a project with tasks and deadlines in one click",
  ];

  return (
    <Section className="bg-background">
      <div className="max-w-container mx-auto">
        {/* Main Section Title */}
        <h2 className="font-[family-name:var(--font-source-serif)] text-5xl font-semibold leading-none text-foreground mb-12">
          Search For Grants Faster
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              We match grants to your district&apos;s needs and demographics,
              delivering the best fits in minutes not hours. Or just ask our AI
              for a specific grant and we&apos;ll locate it for you.
            </p>

            {/* Feature List with Checkmarks */}
            <ul className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="size-4 text-primary" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-base text-foreground/90 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Mockup with Glow */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl border border-border/50 bg-gradient-to-br from-border/30 to-border/10 p-8 shadow-xl">
              {/* AI Search Interface Placeholder */}
              <div className="aspect-[4/3] w-full flex items-center justify-center rounded-lg bg-gradient-to-br from-muted/50 to-muted/20">
                <div className="text-center space-y-2">
                  <div className="text-6xl">🔍</div>
                  <div className="text-muted-foreground text-lg font-medium">
                    AI Search Interface
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect Behind Mockup */}
            <div className="absolute inset-0 -z-10">
              <Glow variant="center" className="opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
