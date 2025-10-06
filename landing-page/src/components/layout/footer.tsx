export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faq" },
    { label: "About", href: "#cta" },
  ];

  return (
    <footer className="bg-[#1A1D29] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#5A8BF2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl font-[family-name:var(--font-source-serif)]">
                  GrantWare AI
                </span>
                <span className="text-sm text-[#5A8BF2] -mt-1 font-semibold"></span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-base">
              AI-powered grant management workspace designed specifically for
              K-12 school districts. Transform how your team discovers,
              evaluates, and wins education funding.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg font-[family-name:var(--font-source-serif)]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#5A8BF2] transition-colors duration-200 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} GrantWare AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
