import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onGetStarted?: () => void;
  onScheduleDemo?: () => void;
}

export function CTASection({ onGetStarted, onScheduleDemo }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#F9F6F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Container */}
        <div 
          className="max-w-6xl mx-auto rounded-3xl px-20 py-24"
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
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] font-[family-name:var(--font-source-serif)] text-[#696969] capitalize">
            Ready to Transform Your{" "}
            <span className="text-[#5A8BF2]">District&apos;s Grant Success</span>?
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#696969] leading-relaxed mb-10 max-w-5xl mx-auto">
            GrantWare AI is currently in a private beta. We are partnering
            with schooldistricts to build the future of grant management. Join
            our waitlist to be considered for the pilot and help shape a tool
            that meets your unique needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              onClick={onGetStarted}
              className="bg-[#5A8BF2] hover:bg-[#4A6EDB] text-[#F5F5F5] rounded-lg px-8 py-4 h-14 font-semibold text-base capitalize"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              onClick={onScheduleDemo}
              className="bg-[#F9F6F3] border-[1.5px] border-[#5A8BF2] text-[#5A8BF2] hover:bg-[#5A8BF2]/10 rounded-lg px-8 py-4 h-14 font-semibold text-base capitalize"
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
