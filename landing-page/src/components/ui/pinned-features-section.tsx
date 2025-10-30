"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, PenLine, Clock, CircleCheckBig } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
      <span className="text-[#4169e1]">win more Grants</span>
    </>
  ),
  subtitle = "From discovery to submission, GrantWare AI streamlines every step of your grant management process with intelligent automation and collaborative tools.",
  features = [
    {
      id: "search",
      icon: Search,
      title: "Unified Grant Discovery",
      description:
        "We match grants to your organization's goals, priorities, and data, delivering the best fits in minutes not hours. Or just ask our AI for a specific grant and we'll locate it for you.",
      benefits: [
        "One search across federal, state, and foundations",
        "Best-fit matches based on your organization profile",
        "Plain-English reasons why each grant fits",
        "Start a project with tasks and deadlines in one click",
      ],
      imageUrl: "/features/discovery.png",
    },
    {
      id: "writing",
      icon: PenLine,
      title: "Guided Grant Writing",
      description:
        "Turn a high-fit match into a complete proposal. We generate a first draft from the funder's RFP—you stay in control to edit, add context, and finalize.",
      benefits: [
        "Full draft built from the RFP, tailored to your organization profile",
        "Use AI to edit, rewrite, or insert in organization content",
        "Integrates with Google Workspace and Microsoft 365",
        "Reuse past winning applications.",
      ],
      imageUrl: "/features/writing.png",
    },
    {
      id: "management",
      icon: Clock,
      title: "Intelligent Grant Management",
      description:
        "An agentic platform that keeps everything moving—opportunities, tasks, deadlines, and files—in one place. You won't need another tool.",
      benefits: [
        "New opportunity alerts tailored to your organization",
        "Smart timelines, milestones, and tasks",
        "Roles & permissions for your team",
        "Share files and comments without leaving the app",
      ],
      imageUrl: "/features/management.png",
    },
  ],
  className,
}: PinnedFeaturesSectionProps) {
  // Track which feature image to display
  const [activeFeature, setActiveFeature] = useState<string>("search");
  const [viewedFeatures, setViewedFeatures] = useState<Set<string>>(
    new Set(["search"])
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollLocked = useRef(false);

  // Get the currently active feature data
  const currentFeature =
    features.find((f) => f.id === activeFeature) || features[0];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if section is in view
      const isInView = rect.top < viewportHeight && rect.bottom > 0;

      if (!isInView) {
        return;
      }

      // Calculate how far down the section we've scrolled
      // When section top reaches top of viewport, progress starts at 0
      // When section has scrolled its full height, progress is at 1
      const sectionHeight = rect.height;
      const scrolledIntoSection = -rect.top;
      const scrollProgress = Math.max(
        0,
        Math.min(1, scrolledIntoSection / (sectionHeight * 0.6))
      );

      // Each feature needs 1/3 of the scroll progress
      // First feature: 0 - 0.33
      // Second feature: 0.33 - 0.66
      // Third feature: 0.66 - 1.0
      let targetFeatureIndex = 0;
      if (scrollProgress >= 0.66) {
        targetFeatureIndex = 2;
      } else if (scrollProgress >= 0.33) {
        targetFeatureIndex = 1;
      }

      const targetFeatureId = features[targetFeatureIndex].id;

      // Update active feature if it changed
      if (targetFeatureId !== activeFeature) {
        setActiveFeature(targetFeatureId);
        setViewedFeatures((prev) => new Set([...prev, targetFeatureId]));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeFeature, features, viewedFeatures]);

  return (
    <Section
      ref={sectionRef}
      className={cn(
        "bg-background relative pt-12 sm:pt-16 md:pt-20 min-h-screen",
        className
      )}
      id="features"
    >
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight font-[family-name:var(--font-source-serif)]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid - Image on Left, Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Feature Image (Desktop Only) */}
          <motion.div
            className="hidden lg:sticky lg:top-24 w-full lg:h-[450px] rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature) => (
              <Image
                key={feature.id}
                src={feature.imageUrl}
                alt={`${feature.title} interface preview`}
                fill
                className={cn(
                  "object-contain sm:object-cover transition-opacity duration-300 absolute inset-0 pointer-events-none",
                  activeFeature === feature.id
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                )}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority={feature.id === "search"}
              />
            ))}
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion
              type="single"
              collapsible
              value={activeFeature}
              onValueChange={(value) => {
                if (value) {
                  setActiveFeature(value);
                  setViewedFeatures((prev) => new Set([...prev, value]));
                }
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
                      {/* Mobile Image */}
                      <div className="lg:hidden w-full h-[250px] sm:h-[300px] rounded-2xl overflow-hidden border border-border shadow-lg bg-muted mb-6 relative">
                        <Image
                          src={feature.imageUrl}
                          alt={`${feature.title} interface preview`}
                          fill
                          className="object-contain sm:object-cover"
                          sizes="100vw"
                        />
                      </div>

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
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
