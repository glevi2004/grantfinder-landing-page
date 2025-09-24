import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Search,
  Brain,
  Users,
  FileText,
  BarChart3,
  Clock,
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
    icon: BarChart3,
    title: "Success Analytics",
    description:
      "Track your funding pipeline, monitor success rates, and identify opportunities for continuous improvement.",
    benefits: [
      "Pipeline visualization",
      "Success rate tracking",
      "Performance insights",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
