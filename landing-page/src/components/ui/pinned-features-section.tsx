"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, PenLine, Clock, CircleCheckBig } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

// Custom hook for scroll-triggered animations
function useIntersectionObserver(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible] as const;
}

// Feature Item Component with enhanced scroll animations
function FeatureItem({ feature, index }: { feature: Feature; index: number }) {
  const [featureRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={featureRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left Column - Content */}
      <div className="space-y-6">
        {/* Title - Fade in */}
        <h3
          className={cn(
            "text-2xl sm:text-3xl font-bold font-[family-name:var(--font-source-serif)] leading-tight transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        >
          {feature.title}
        </h3>

        {/* Description - Fade in */}
        <p
          className={cn(
            "text-base sm:text-lg text-muted-foreground leading-relaxed transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {feature.description}
        </p>

        {/* Benefits List - Staggered slide from left */}
        <ul className="space-y-3 pt-2" role="list">
          {feature.benefits.map((benefit, benefitIndex) => (
            <li
              key={benefitIndex}
              className={cn(
                "flex items-start gap-3 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
              style={{
                transitionDelay: isVisible ? `${300 + benefitIndex * 100}ms` : "0ms",
              }}
            >
              <CircleCheckBig className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-base text-muted-foreground leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column - Image slides from right */}
      <div
        className={cn(
          "relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted transition-all duration-900 ease-out",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
        )}
        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
      >
        <Image
          src={feature.imageUrl}
          alt={`${feature.title} interface preview`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={index === 0}
        />
      </div>
    </div>
  );
}

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

  return (
    <Section
      className={cn("bg-background relative", className)}
      id="features"
    >
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-[family-name:var(--font-source-serif)]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features List with IDs for navbar anchors */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            return (
              <div id={feature.id} key={feature.id}>
                <FeatureItem feature={feature} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

