import WaitlistForm from "@/components/ui/waitlist-form";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
