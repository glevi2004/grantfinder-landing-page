import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface CTASectionProps {
  onGetStarted?: () => void;
  onScheduleDemo?: () => void;
}

export function CTASection({ onGetStarted, onScheduleDemo }: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your District's
            <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Grant Success?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            GrantFinder AI is currently in a private beta. We are partnering
            with schooldistricts to build the future of grant management. Join
            our waitlist to be considered for the pilot and help shape a tool
            that meets your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={onGetStarted}
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>

          {/* <p className="text-blue-200 text-sm">
            Free 30-day trial • No credit card required • Setup in under 10
            minutes
          </p> */}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-indigo-800/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
}
