"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

interface WaitlistCTASectionProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  fullName: string;
  workEmail: string;
  schoolDistrict: string;
  role: string;
  state: string;
  county: string;
}

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
];

export function WaitlistCTASection({ onSubmit }: WaitlistCTASectionProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    workEmail: "",
    schoolDistrict: "",
    role: "",
    state: "",
    county: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Diamond Gradient Background - 90% opacity */}
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(90, 139, 242, 0.17) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(249, 246, 243, 0.20) 0%, transparent 50%),
              linear-gradient(135deg, rgba(90, 139, 242, 0.08) 0%, transparent 50%, rgba(249, 246, 243, 0.12) 100%)
            `
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Ready to transform your grant process?
          </h2>
          <p className="text-base sm:text-lg text-[#696969] leading-relaxed">
            Join the GrantWare AI Waitlist! Be among the first to experience
            the future of grant discovery and management.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[#F9F6F3]/75 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-base font-medium text-[#696969]"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-[#F9F6F3]/80 border border-[#B4B4B4] rounded-lg px-4 py-2.5 text-base text-[#696969] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A8BF2] focus:border-transparent transition-all"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="workEmail"
                  className="text-base font-medium text-[#696969]"
                >
                  Work Email*
                </label>
                <input
                  type="email"
                  id="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={(e) => handleChange("workEmail", e.target.value)}
                  placeholder="your.email@district.edu"
                  className="bg-[#F9F6F3]/80 border border-[#B4B4B4] rounded-lg px-4 py-2.5 text-base text-[#696969] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A8BF2] focus:border-transparent transition-all"
                />
              </div>

              {/* School District */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="schoolDistrict"
                  className="text-base font-medium text-[#696969]"
                >
                  School District*
                </label>
                <input
                  type="text"
                  id="schoolDistrict"
                  required
                  value={formData.schoolDistrict}
                  onChange={(e) =>
                    handleChange("schoolDistrict", e.target.value)
                  }
                  placeholder="Enter your school district"
                  className="bg-[#F9F6F3]/80 border border-[#B4B4B4] rounded-lg px-4 py-2.5 text-base text-[#696969] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A8BF2] focus:border-transparent transition-all"
                />
              </div>

              {/* Role */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="role"
                  className="text-base font-medium text-[#696969]"
                >
                  Role*
                </label>
                <input
                  type="text"
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  placeholder="e.g., Grant Writer, Superintendent, etc"
                  className="bg-[#F9F6F3]/80 border border-[#B4B4B4] rounded-lg px-4 py-2.5 text-base text-[#696969] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A8BF2] focus:border-transparent transition-all"
                />
              </div>

              {/* State */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="state"
                  className="text-base font-medium text-[#696969]"
                >
                  State*
                </label>
                <div className="relative">
                  <select
                    id="state"
                    required
                    value={formData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    className="bg-[#F9F6F3] border border-[#B4B4B4] rounded-lg px-5 py-3.5 text-lg text-[#696969] w-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#5A8BF2] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">Select your state</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[#696969] pointer-events-none" />
                </div>
              </div>

              {/* County */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="county"
                  className="text-base font-medium text-[#696969]"
                >
                  County*
                </label>
                <input
                  type="text"
                  id="county"
                  required
                  value={formData.county}
                  onChange={(e) => handleChange("county", e.target.value)}
                  placeholder="Enter your County"
                  className="bg-[#F9F6F3]/80 border border-[#B4B4B4] rounded-lg px-4 py-2.5 text-base text-[#696969] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A8BF2] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#5A8BF2] hover:bg-[#4A6EDB] text-[#F5F5F5] rounded-lg px-6 py-3 h-12 font-semibold text-base"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true', '_blank');
              }}
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

