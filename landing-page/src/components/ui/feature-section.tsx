"use client";

import { useState } from "react";
import {
  Search,
  PenLine,
  Clock,
  CircleCheckBig,
  ArrowRight,
} from "lucide-react";

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

const tabs: Tab[] = [
  { id: "discovery", label: "Discovery", icon: Search },
  { id: "writing", label: "Writing", icon: PenLine },
  { id: "management", label: "Management", icon: Clock },
];

const featureContent: Record<string, FeatureContent> = {
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
};

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState("discovery");
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(
    new Set(["discovery"])
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setVisitedTabs((prev) => new Set([...prev, tabId]));
  };

  return (
    <section
      className="py-20 bg-[#F1ECE5]"
      id="features"
      style={{
        backgroundSize: "20px 20px",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Everything you need to{" "}
            <span className="text-[#5A8BF2]">win more Grants</span>
          </h2>
          <p className="text-base sm:text-lg text-[#696969] leading-relaxed max-w-5xl mx-auto">
            From discovery to submission, GrantWare AI streamlines every step of
            your grant management process with intelligent automation and
            collaborative tools.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-6 mb-8 px-6 py-3">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const isVisited = visitedTabs.has(tab.id);
            const Icon = tab.icon;

            return (
              <div key={tab.id} className="flex items-center gap-6">
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className="flex flex-col items-center gap-2 transition-all duration-300"
                >
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${
                      (activeTab === "discovery" && tab.id === "discovery") ||
                      (activeTab === "writing" &&
                        (tab.id === "discovery" || tab.id === "writing")) ||
                      activeTab === "management"
                        ? "bg-[#5A8BF2] shadow-lg"
                        : "bg-[#E9E9EB] border-2 border-[#D7D9DD]"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        (activeTab === "discovery" && tab.id === "discovery") ||
                        (activeTab === "writing" &&
                          (tab.id === "discovery" || tab.id === "writing")) ||
                        activeTab === "management"
                          ? "text-[#F9F6F3]"
                          : "text-[#696969]"
                      }`}
                    />
                  </div>
                  <p className="text-base sm:text-lg text-[#696969] font-normal">
                    {tab.label}
                  </p>
                </button>

                {index < tabs.length - 1 && (
                  <ArrowRight
                    className={`h-6 w-6 transition-colors duration-300 ${
                      (activeTab === "writing" && index === 0) ||
                      activeTab === "management"
                        ? "text-[#5A8BF2]"
                        : "text-[#D7D9DD]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 px-7">
            {/* Left Side - Content */}
            <div className="flex-1 flex flex-col gap-8 py-4">
              <div className="flex flex-col gap-5">
                <h3 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-source-serif)] text-[#696969] capitalize leading-tight">
                  {featureContent[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-[#696969] leading-relaxed">
                  {featureContent[activeTab].description}
                </p>
                <div className="flex flex-col gap-3 p-3">
                  {featureContent[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CircleCheckBig className="h-5 w-5 text-[#5A8BF2] flex-shrink-0" />
                      <p className="text-base sm:text-lg text-[#696969]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-[500px] h-2.5 bg-[#E9E9EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#5A8BF2] rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width:
                      activeTab === "discovery"
                        ? "33.33%"
                        : activeTab === "writing"
                        ? "66.67%"
                        : "100%",
                  }}
                />
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 h-[350px] min-w-[280px]">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={featureContent[activeTab].imageUrl}
                  alt={featureContent[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
