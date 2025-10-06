import WaitlistForm from "@/components/ui/waitlist-form";

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-[-20px] max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Join the GrantWare AI Waitlist
          </h1>
          <p className="text-lg text-blue-100">
            Be among the first to experience the future of grant discovery and
            management.
          </p>
        </div>
        <WaitlistForm />
      </div>

      {/* Background Elements - same as CTA Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-indigo-800/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
}
