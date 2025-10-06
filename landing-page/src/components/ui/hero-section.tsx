import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation } from "@/components/layout/navigation";

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const words = ["Discover", "Write", "Manage"];

export function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, 400); // Half of the flip animation duration
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show scroll button after 2 seconds
    const timer = setTimeout(() => {
      setShowScrollButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F1ECE5] h-screen flex flex-col">
      {/* Grid Background Layer - Upper Portion Only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D1D1D1 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      {/* Navigation */}
      <Navigation />

      <style jsx>{`
        @keyframes flipIn {
          0% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
        @keyframes flipOut {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          100% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
        }
        @keyframes bounceDown {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .flip-enter {
          animation: flipIn 0.4s ease-out forwards;
        }
        .flip-exit {
          animation: flipOut 0.4s ease-in forwards;
        }
        .bounce-down {
          animation: bounceDown 2s infinite;
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Content - Centered */}
      <div className="flex-1 flex items-center justify-center pt-10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Backed by Red Hat Badge */}
            <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-lg px-8 py-2 mb-8 shadow-sm border border-gray-200/20">
              <span className="text-sm font-medium text-gray-700 mr-4">
                Backed by
              </span>
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Red_Hat_Logo_2019.svg.png"
                  alt="Red Hat Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-[family-name:var(--font-source-serif)] capitalize">
              <span className="text-[#5a8bf2]">
                <span
                  className="inline-block text-center"
                  style={{
                    minWidth: "200px",
                    verticalAlign: "top",
                  }}
                >
                  <span
                    className={`inline-block ${
                      isFlipping ? "flip-exit" : "flip-enter"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {words[currentWordIndex]}
                  </span>
                </span>{" "}
                the Perfect Grants{" "}
              </span>
              <span className="text-[#696969]">for Your School District</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#4A4A4A] mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover high-fit opportunities, get AI-powered eligibility
              analysis, and manage the entire grant lifecycle in one intelligent
              platform designed for education leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[#5A8BF2] hover:bg-[#4A6EDB] text-white px-6 py-2.5 text-base rounded-lg"
                onClick={() =>
                  window.open(
                    "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
                    "_blank"
                  )
                }
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#5A8BF2] text-[#5A8BF2] hover:bg-blue-50 px-6 py-2.5 text-base rounded-lg"
                onClick={onLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Button */}
      {showScrollButton && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={scrollToFeatures}
            className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-white/80 transition-all duration-300 flex items-center justify-center group fade-in-up"
          >
            <ChevronDown className="h-5 w-5 text-[#696969] group-hover:text-[#5A8BF2] transition-colors duration-300 bounce-down" />
          </button>
        </div>
      )}
    </section>
  );
}
