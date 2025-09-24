import WaitlistForm from "@/components/ui/waitlist-form";

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Join the GrantFinder AI Waitlist
          </h1>
          <p className="text-lg text-gray-600">
            Be among the first to experience the future of grant discovery and
            management.
          </p>
        </div>
        <WaitlistForm />
      </div>

      {/* Background Elements - same as HeroSection */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
}
