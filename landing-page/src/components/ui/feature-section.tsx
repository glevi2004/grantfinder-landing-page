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
    <section className="py-20 bg-[#F1ECE5]" id="features" style={{
      backgroundSize: '20px 20px'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Everything you need to{" "}
            <span className="text-[#5A8BF2]">win more Grants</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#696969] leading-relaxed max-w-5xl mx-auto">
            From discovery to submission, GrantWare AI streamlines every step
            of your grant management process with intelligent automation and
            collaborative tools.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-8 mb-12 px-8 py-4">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <div key={tab.id} className="flex items-center gap-8">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className="flex flex-col items-center gap-3 transition-all duration-300"
                >
                  <div
                    className={`p-5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#5A8BF2] shadow-lg"
                        : "bg-[#E9E9EB] border-[3px] border-[#D7D9DD]"
                    }`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        isActive ? "text-[#F9F6F3]" : "text-[#696969]"
                      }`}
                    />
                  </div>
                  <p className="text-lg sm:text-xl text-[#696969] font-normal">
                    {tab.label}
                  </p>
                </button>

                {index < tabs.length - 1 && (
                  <ArrowRight className="h-16 w-12 text-[#D7D9DD]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 px-7">
            {/* Left Side - Content */}
            <div className="flex-1 flex flex-col gap-14 py-4">
              <div className="flex flex-col gap-7">
                <h3 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-source-serif)] text-[#696969] capitalize leading-tight">
                  {featureContent[activeTab].title}
                </h3>
                <p className="text-lg sm:text-xl text-[#696969] leading-relaxed">
                  {featureContent[activeTab].description}
                </p>
                <div className="flex flex-col gap-4 p-4">
                  {featureContent[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CircleCheckBig className="h-6 w-6 text-[#5A8BF2] flex-shrink-0" />
                      <p className="text-lg sm:text-xl text-[#696969]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-[680px] h-3.5 bg-[#E9E9EB] rounded-full overflow-hidden">
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
            <div className="flex-1 h-[472px] min-w-[320px]">
              <div className="w-full h-full bg-[#C4C4C4] rounded-3xl flex items-center justify-center overflow-hidden">
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
