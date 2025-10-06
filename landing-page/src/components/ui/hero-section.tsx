import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/navigation";

interface HeroSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

const words = ["Discover", "Write", "Manage"];

export function HeroSection({ onGetStarted, onLearnMore }: HeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

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

  return (
    <section className="relative overflow-hidden bg-[#F1ECE5] h-screen flex flex-col" style={{
      backgroundImage: `radial-gradient(circle, #D1D1D1 1.5px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }}>
      {/* Navigation */}
      <Navigation onGetStarted={onGetStarted} />
      
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
        .flip-enter {
          animation: flipIn 0.4s ease-out forwards;
        }
        .flip-exit {
          animation: flipOut 0.4s ease-in forwards;
        }
      `}</style>
      
      {/* Hero Content - Centered */}
      <div className="flex-1 flex items-center justify-center pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-[64px] font-bold mb-8 leading-[1.21] font-[family-name:var(--font-source-serif)] capitalize">
            <span className="text-[#5a8bf2]">
              <span 
                className="inline-block text-center"
                style={{ 
                  minWidth: '280px',
                  verticalAlign: 'top'
                }}
              >
                <span 
                  className={`inline-block ${isFlipping ? 'flip-exit' : 'flip-enter'}`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
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
          <p className="text-lg text-[#4A4A4A] mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover high-fit opportunities, get AI-powered eligibility
            analysis, and manage the entire grant lifecycle in one intelligent
            workspace designed for education leaders.
          </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#5A8BF2] hover:bg-[#4A6EDB] text-white px-8 py-3 text-lg rounded-lg"
                onClick={onGetStarted}
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#5A8BF2] text-[#5A8BF2] hover:bg-blue-50 px-8 py-3 text-lg rounded-lg"
                onClick={onLearnMore}
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
