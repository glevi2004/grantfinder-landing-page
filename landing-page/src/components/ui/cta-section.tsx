import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onGetStarted?: () => void;
  onScheduleDemo?: () => void;
}

export function CTASection({ onGetStarted, onScheduleDemo }: CTASectionProps) {
  return (
    <section className="py-16 bg-[#F9F6F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Container */}
        <div
          className="max-w-5xl mx-auto rounded-2xl px-12 py-16"
          style={{
            background: `linear-gradient(135deg, 
              rgba(205, 220, 255, 0.35) 0%, 
              rgba(180, 200, 255, 0.25) 25%, 
              rgba(220, 210, 255, 0.30) 50%, 
              rgba(200, 215, 255, 0.28) 75%, 
              rgba(215, 220, 255, 0.32) 100%)`,
          }}
        >
          <div className="text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2] font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
              Ready to Transform Your{" "}
              <span className="text-[#5A8BF2]">
                District&apos;s Grant Success
              </span>
              ?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#696969] leading-relaxed mb-8 max-w-4xl mx-auto">
              GrantWare AI is currently in a private beta. We are partnering
              with schooldistricts to build the future of grant management. Join
              our waitlist to be considered for the pilot and help shape a tool
              that meets your unique needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onGetStarted}
                className="bg-[#5A8BF2] hover:bg-[#4A6EDB] text-[#F5F5F5] rounded-lg px-6 py-3 h-12 font-semibold text-sm capitalize"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={onScheduleDemo}
                className="bg-[#F9F6F3] border-[1.5px] border-[#5A8BF2] text-[#5A8BF2] hover:bg-[#5A8BF2]/10 rounded-lg px-6 py-3 h-12 font-semibold text-sm capitalize"
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
