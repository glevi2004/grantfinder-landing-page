import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Search,
  Brain,
  Users,
  FileText,
  Clock,
  Link,
} from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    icon: Search,
    title: "Unified Grant Discovery",
    description:
      "Search across federal, state, and foundation sources with natural language queries tailored to your district profile.",
    benefits: [
      "70% faster grant discovery",
      "Aggregates all major funding sources",
      "Natural language search interface",
    ],
  },
  {
    icon: Brain,
    title: "AI Eligibility Analysis",
    description:
      "Get instant 0-100 match scores with detailed Go/No-Go rationale based on your district's unique profile.",
    benefits: [
      "50% reduction in ineligible pursuits",
      "Transparent AI reasoning",
      "District-specific fit scoring",
    ],
  },
  {
    icon: Users,
    title: "Collaborative Workspace",
    description:
      "Manage projects with role-based access, task tracking, and seamless team coordination from discovery to submission.",
    benefits: [
      "Role-based permissions",
      "Real-time collaboration",
      "Integrated task management",
    ],
  },
  {
    icon: FileText,
    title: "Guided Proposal Drafting",
    description:
      "AI-assisted writing with district-aware content, reusable templates, and compliance checking for stronger proposals.",
    benefits: [
      "District profile integration",
      "Reusable content library",
      "Automated compliance checking",
    ],
  },
  {
    icon: Clock,
    title: "Deadline Management",
    description:
      "Never miss an opportunity with intelligent deadline tracking, milestone management, and automated reminders.",
    benefits: [
      "Automated deadline alerts",
      "Milestone tracking",
      "Calendar integration",
    ],
  },
  {
    icon: Link,
    title: "Seamless Integrations",
    description:
      "Integrates with your existing Google Workspace and Microsoft 365 for Education accounts to streamline document management and team collaboration.",
    benefits: [
      "Google Workspace integration",
      "Microsoft 365 for Education support",
      "Streamlined document management",
    ],
  },
];

export function FeatureSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Win More Grants
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From discovery to submission, GrantFinder AI streamlines every step
            of your grant management process with intelligent automation and
            collaborative tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 leading-relaxed text-base mt-[-20px]">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
