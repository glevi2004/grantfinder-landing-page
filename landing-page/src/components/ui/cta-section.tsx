import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onGetStarted?: () => void;
  onScheduleDemo?: () => void;
}

export function CTASection({ onGetStarted, onScheduleDemo }: CTASectionProps) {
  return (
    <section className="pt-8 pb-16 relative overflow-hidden bg-white" id="cta">
      {/* Diamond Gradient Background - 90% opacity */}
      <div className="absolute inset-0 opacity-90 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(90, 139, 242, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 30% 30%, rgba(90, 139, 242, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 70% 70%, rgba(90, 139, 242, 0.08) 0%, transparent 40%),
              linear-gradient(135deg, rgba(90, 139, 242, 0.05) 0%, rgba(90, 139, 242, 0.12) 50%, rgba(90, 139, 242, 0.05) 100%)
            `
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Gradient Container */}
        <div 
          className="max-w-5xl mx-auto rounded-2xl px-12 py-16"
          style={{
            background: `linear-gradient(135deg, 
              rgba(205, 220, 255, 0.35) 0%, 
              rgba(180, 200, 255, 0.25) 25%, 
              rgba(220, 210, 255, 0.30) 50%, 
              rgba(200, 215, 255, 0.28) 75%, 
              rgba(215, 220, 255, 0.32) 100%)`
          }}
        >
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2] font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Ready to Transform Your{" "}
            <span className="text-[#5A8BF2]">District&apos;s Grant Success</span>?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#696969] leading-relaxed mb-8 max-w-4xl mx-auto">
            GrantWare AI is currently in <strong>beta</strong>, <strong>schedule a call</strong> to join our Contributor Program and get early access: receive weekly updates, resources, and feedback forms; help pilot our platform and provide feedback to shape its development; early contributors may secure <strong>priority access and discounted first-year pricing</strong>. Don't miss the chance to be among the first to experience and contribute to a smarter, AI-powered grant platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => window.open('https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true', '_blank')}
              className="bg-[#5A8BF2] hover:bg-[#4A6EDB] text-[#F5F5F5] rounded-lg px-6 py-3 h-12 font-semibold text-base"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={onScheduleDemo}
              className="bg-[#F9F6F3] border-[1.5px] border-[#5A8BF2] text-[#5A8BF2] hover:bg-[#5A8BF2]/10 rounded-lg px-6 py-3 h-12 font-semibold text-base capitalize"
            >
              Learn More
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
