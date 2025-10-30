export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faq" },
    { label: "About Us", href: "#about" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-container mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-foreground font-bold text-2xl font-[family-name:var(--font-source-serif)]">
                GrantWare
              </span>
              <span className="text-[#4169e1] font-bold text-2xl font-[family-name:var(--font-source-serif)]">
                AI
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-base">
              Discover high-fit opportunities, get AI-powered eligibility
              analysis, and manage the entire grant lifecycle in one intelligent
              platform.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg font-[family-name:var(--font-source-serif)]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-base text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} GrantWare AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
