"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, PenLine, Clock, CircleCheckBig } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Feature {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

interface PinnedFeaturesSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

export function PinnedFeaturesSection({
  title = (
    <>
      Everything you need to{" "}
      <span className="text-primary">win more Grants</span>
    </>
  ),
  subtitle = "From discovery to submission, GrantWare AI streamlines every step of your grant management process with intelligent automation and collaborative tools.",
  features = [
    {
      id: "search",
      icon: Search,
      title: "Search for Grants Faster",
      description:
        "We match grants to your district's needs and demographics, delivering the best fits in minutes not hours. Or just ask our AI for a specific grant and we'll locate it for you.",
      benefits: [
        "One search across federal, state, and foundations",
        "Best-fit matches based on your district profile",
        "Plain-English reasons why each grant fits",
        "Start a project with tasks and deadlines in one click",
      ],
      imageUrl: "/features/discovery.png",
    },
    {
      id: "writing",
      icon: PenLine,
      title: "Writing",
      description:
        "Turn a high-fit match into a complete proposal. We generate a first draft from the funder's RFP—you stay in control to edit, add context, and finalize.",
      benefits: [
        "Full draft built from the RFP, tailored to your district profile",
        "Use AI to edit, rewrite, or insert in district content",
        "Integrates with Google Workspace and Microsoft 365",
        "Reuse past winning applications.",
      ],
      imageUrl: "/features/writing.png",
    },
    {
      id: "management",
      icon: Clock,
      title: "Management",
      description:
        "An agentic platform that keeps everything moving—opportunities, tasks, deadlines, and files—in one place. You won't need another tool.",
      benefits: [
        "New opportunity alerts tailored to your district",
        "Smart timelines, milestones, and tasks",
        "Roles & permissions for your team",
        "Share files and comments without leaving the app.",
      ],
      imageUrl: "/features/management.png",
    },
  ],
  className,
}: PinnedFeaturesSectionProps) {
  // Track which feature image to display
  const [activeFeature, setActiveFeature] = useState<string>("search");

  // Get the currently active feature data
  const currentFeature =
    features.find((f) => f.id === activeFeature) || features[0];

  return (
    <Section
      className={cn(
        "bg-background relative pt-12 sm:pt-16 md:pt-20",
        className
      )}
      id="features"
    >
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight font-[family-name:var(--font-source-serif)]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features Grid - Image on Left, Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Feature Image */}
          <div className="lg:sticky lg:top-24 w-full h-[300px] lg:h-[450px] rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted">
            {features.map((feature) => (
              <Image
                key={feature.id}
                src={feature.imageUrl}
                alt={`${feature.title} interface preview`}
                fill
                className={cn(
                  "object-cover transition-opacity duration-300 absolute inset-0 pointer-events-none",
                  activeFeature === feature.id
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                )}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={feature.id === "search"}
              />
            ))}
          </div>

          {/* Right Column - Accordion */}
          <div className="relative z-10">
            <Accordion
              type="single"
              collapsible
              defaultValue="search"
              onValueChange={(value) => {
                if (value) setActiveFeature(value);
              }}
            >
              {features.map((feature) => (
                <AccordionItem
                  key={feature.id}
                  value={feature.id}
                  id={feature.id}
                >
                  <AccordionTrigger className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-source-serif)] hover:underline decoration-1">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {/* Description */}
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Benefits List */}
                      <ul className="space-y-3" role="list">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CircleCheckBig className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-base text-muted-foreground leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
}
