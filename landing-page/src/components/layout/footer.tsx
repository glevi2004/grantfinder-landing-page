export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faq" },
    { label: "Contributor Program", href: "#cta" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-[#1A1D29] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-white font-bold text-xl font-[family-name:var(--font-source-serif)]">
                GrantWare
              </span>
              <span className="text-[#5A8BF2] font-bold text-xl font-[family-name:var(--font-source-serif)]">
                AI
              </span>
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
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-[#5A8BF2] transition-colors duration-200 text-base text-left"
                  >
                    {link.label}
                  </button>
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
