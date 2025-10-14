import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export function HeroSection({ onLearnMore }: HeroSectionProps) {

  return (
    <section className="relative bg-white h-[1393px] max-w-[1312px] mx-auto">
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col gap-24 h-full pt-20 pb-0 px-8 w-full">
          {/* Content */}
          <div className="flex flex-col gap-12 items-center relative z-10 w-full">
            {/* Badge */}
            <div className="flex gap-2 items-center justify-center px-2.5 py-1 rounded-full border border-zinc-200">
              <span className="text-zinc-500 font-semibold text-xs leading-4">
                Built By School Districts For School Districts
              </span>
              <a
                href="#"
                className="flex gap-1 items-center cursor-pointer"
              >
                <span className="text-zinc-950 font-semibold text-xs leading-4">
                  Read more
                </span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="bg-gradient-to-r from-zinc-950 to-zinc-950 bg-clip-text text-transparent font-semibold leading-none text-[76px] text-center w-full whitespace-pre-wrap font-[family-name:var(--font-source-serif)]">
              Discover The Perfect Grants For Your School District
            </h1>

            {/* Subheading */}
            <p className="font-medium leading-7 text-xl text-center text-zinc-500 w-[544px] whitespace-pre-wrap font-[family-name:var(--font-geist-sans)]">
              Discover high-fit opportunities, get AI-powered eligibility analysis, and manage the entire grant lifecycle in one intelligent platform designed for education leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-start">
              <Button
                className="bg-gradient-to-b from-zinc-900 to-zinc-900/80 hover:from-zinc-800 hover:to-zinc-800/80 text-white rounded-md px-4 py-2 h-9 font-medium text-sm shadow-sm"
                onClick={() =>
                  window.open(
                    "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
                    "_blank"
                  )
                }
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                className="bg-gradient-to-t from-zinc-50 to-zinc-100 border border-zinc-200 hover:bg-zinc-100 text-zinc-950 rounded-md px-4 py-2 h-9 font-medium text-sm"
                onClick={onLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1 min-h-0 min-w-0 relative rounded-xl w-full z-0">
            {/* Glows */}
            <div className="absolute h-[1069px] left-[-217px] right-[-248px] top-[-285px]">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Frame */}
            <div className="absolute bg-zinc-50 flex flex-col gap-2.5 items-start left-0 pb-0 pt-2 px-2 right-0 rounded-2xl top-0">
              <div className="aspect-[1232/753] pointer-events-none relative rounded-lg w-full">
                <div className="absolute inset-0 rounded-lg">
                  {/* Placeholder for the main illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-lg flex items-center justify-center">
                    <div className="text-zinc-500 text-lg font-medium">
                      Grant Management Dashboard
                    </div>
                  </div>
                </div>
                <div className="absolute border border-white inset-0 rounded-lg" />
              </div>
            </div>

            {/* Fade */}
            <div className="absolute bg-gradient-to-b from-transparent inset-0 to-white/90 to-[85.5%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
