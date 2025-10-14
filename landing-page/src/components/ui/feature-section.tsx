"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  PenLine,
  Clock,
  CircleCheckBig,
  ArrowRight,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeatureContent {
  title: string;
  description: string;
  benefits: string[];
  imageUrl?: string;
}

interface FeatureSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  tabs?: Tab[];
  featureContent?: Record<string, FeatureContent>;
  defaultTab?: string;
  className?: string;
}

export function FeatureSection({
  title = (
    <>
      Everything you need to{" "}
      <span className="text-primary">win more Grants</span>
    </>
  ),
  subtitle = "From discovery to submission, GrantWare AI streamlines every step of your grant management process with intelligent automation and collaborative tools.",
  tabs = [
    { id: "discovery", label: "Discovery", icon: Search },
    { id: "writing", label: "Writing", icon: PenLine },
    { id: "management", label: "Management", icon: Clock },
  ],
  featureContent = {
    discovery: {
      title: "Unified Grant Discovery",
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
    writing: {
      title: "Guided Grant Writing",
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
    management: {
      title: "Intelligent Grant Management",
      description:
        "An agentic platform that keeps everything moving—opportunities, tasks, deadlines, and files—in one place. You won't need another tool.",
      benefits: [
        "New opportunity alerts tailored to your district",
        "Smart timelines, milestones, and tasks",
        "Roles & permissions for your team",
        "Share files and comments without leaving the app",
      ],
      imageUrl: "/features/management.png",
    },
  },
  defaultTab = "discovery",
  className,
}: FeatureSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <Section
      className={cn("bg-muted/30", className)}
      id="features"
    >
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight font-[family-name:var(--font-source-serif)] text-muted-foreground">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-5xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-6 mb-8 px-6 py-3">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const tabIndex = tabs.findIndex(t => t.id === tab.id);
            const activeIndex = tabs.findIndex(t => t.id === activeTab);
            const isActive = tabIndex <= activeIndex;

            return (
              <div key={tab.id} className="flex items-center gap-6">
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className="flex flex-col items-center gap-2 transition-all duration-300"
                >
                  <div
                    className={cn(
                      "p-4 rounded-full transition-all duration-300",
                      isActive
                        ? "bg-primary shadow-lg"
                        : "bg-muted border-2 border-border"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        isActive ? "text-primary-foreground" : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground font-normal">
                    {tab.label}
                  </p>
                </button>

                {index < tabs.length - 1 && (
                  <ArrowRight
                    className={cn(
                      "h-6 w-6 transition-colors duration-300",
                      activeIndex > index ? "text-primary" : "text-border"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side - Content */}
            <div className="flex-1 flex flex-col gap-8 py-4">
              <div className="flex flex-col gap-5">
                <h3 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-source-serif)] text-foreground leading-tight">
                  {featureContent[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {featureContent[activeTab].description}
                </p>
                <div className="flex flex-col gap-3 p-3">
                  {featureContent[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-base sm:text-lg text-muted-foreground">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-[500px] h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${((tabs.findIndex(t => t.id === activeTab) + 1) / tabs.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 h-[350px] min-w-[280px]">
              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-border shadow-lg">
                <Image
                  src={
                    featureContent[activeTab].imageUrl ||
                    "/features/discovery.png"
                  }
                  alt={featureContent[activeTab].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
