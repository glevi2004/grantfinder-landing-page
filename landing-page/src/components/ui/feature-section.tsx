"use client";

import { useState } from "react";
import { Search, Users, Clock, CircleCheckBig, ArrowRight } from "lucide-react";

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
  { id: "collaboration", label: "Collaboration", icon: Users },
  { id: "management", label: "Management", icon: Clock },
];

const featureContent: Record<string, FeatureContent> = {
  discovery: {
    title: "Unified Grant Discovery",
    description:
      "Search across federal, state, and foundation sources with natural language queries tailored to your district profile.",
    benefits: [
      "70% faster grant discovery",
      "Aggregates all major funding sources",
      "Natural language search interface",
      "AI-powered matching algorithms",
    ],
  },
  collaboration: {
    title: "Collaborative Grant Workspace",
    description:
      "Manage grants from discovery to submission with AI-assisted proposal drafting, real-time collaboration, and task tracking, all tailored to your district's profile.",
    benefits: [
      "Role-based permissions",
      "Real-time collaboration",
      "Integrated task management",
      "Automated compliance checking",
    ],
  },
  management: {
    title: "Intelligent Deadline Management",
    description:
      "Never miss an opportunity with intelligent deadline tracking, milestone management, and automated reminders tailored to your team's workflow.",
    benefits: [
      "Automated deadline alerts",
      "Milestone tracking",
      "Calendar integration",
      "Smart notification system",
    ],
  },
};

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState("discovery");

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
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Everything you need to{" "}
            <span className="text-[#5A8BF2]">win more Grants</span>
          </h2>
          <p className="text-base sm:text-lg text-[#696969] leading-relaxed max-w-3xl mx-auto">
            From discovery to submission, GrantWare AI streamlines every step of
            your grant management process with intelligent automation and
            collaborative tools.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-6 mb-10 px-6 py-3">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <div key={tab.id} className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className="flex flex-col items-center gap-2 transition-all duration-300"
                >
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${
                      (activeTab === "discovery" && tab.id === "discovery") ||
                      (activeTab === "collaboration" &&
                        (tab.id === "discovery" ||
                          tab.id === "collaboration")) ||
                      activeTab === "management"
                        ? "bg-[#5A8BF2] shadow-lg"
                        : "bg-[#E9E9EB] border-2 border-[#D7D9DD]"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        (activeTab === "discovery" && tab.id === "discovery") ||
                        (activeTab === "collaboration" &&
                          (tab.id === "discovery" ||
                            tab.id === "collaboration")) ||
                        activeTab === "management"
                          ? "text-[#F9F6F3]"
                          : "text-[#696969]"
                      }`}
                    />
                  </div>
                  <p className="text-sm sm:text-base text-[#696969] font-normal">
                    {tab.label}
                  </p>
                </button>

                {index < tabs.length - 1 && (
                  <ArrowRight
                    className={`h-6 w-6 transition-colors duration-300 ${
                      (activeTab === "collaboration" && index === 0) ||
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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 px-4">
            {/* Left Side - Content */}
            <div className="flex-1 flex flex-col gap-8 py-3">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-source-serif)] text-[#696969] capitalize leading-tight">
                  {featureContent[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-[#696969] leading-relaxed">
                  {featureContent[activeTab].description}
                </p>
                <div className="flex flex-col gap-3 p-3">
                  {featureContent[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CircleCheckBig className="h-5 w-5 text-[#5A8BF2] flex-shrink-0" />
                      <p className="text-sm sm:text-base text-[#696969]">
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
                        : activeTab === "collaboration"
                        ? "66.67%"
                        : "100%",
                  }}
                />
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 h-[350px] min-w-[280px]">
              <div className="w-full h-full bg-[#C4C4C4] rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
