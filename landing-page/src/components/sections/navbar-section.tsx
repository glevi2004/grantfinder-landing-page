"use client";

import { Menu } from "lucide-react";
import { ReactNode } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GrantWareLogo } from "@/components/ui/grantware-logo";
import { ShineBorder } from "@/components/ui/shine-border";
import { useBackgroundPattern } from "@/contexts/background-pattern-context";

interface NavItem {
  title: string;
  href: string;
  description: string;
}

interface NavbarActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  target?: string;
  rel?: string;
  className?: string;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  showThemeToggle?: boolean;
  actions?: NavbarActionProps[];
  className?: string;
}

export default function NavbarSection({
  logo,
  name = "GrantWare AI",
  homeUrl = "/",
  showThemeToggle = true,
  actions = [
    {
      text: "Book a Call",
      href: "https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true",
      target: "_blank",
      rel: "noopener noreferrer",
      variant: "default",
      className: "hidden md:inline-flex",
    },
  ],
  className,
}: NavbarProps = {}) {
  const { pattern, setPattern } = useBackgroundPattern();
  
  const featuresItems: NavItem[] = [
    {
      title: "Search",
      href: "#search",
      description: "Unified discovery across federal, state, and foundations",
    },
    {
      title: "Writing",
      href: "#writing",
      description: "Draft proposals from the RFP and refine with AI",
    },
    {
      title: "Management",
      href: "#management",
      description: "Timelines, tasks, roles & collaboration in one place",
    },
  ];

  const faqItems: NavItem[] = [
    {
      title: "How does eligibility work?",
      href: "#faq",
      description: "AI compares your district profile to grant requirements",
    },
    {
      title: "What grant sources are covered?",
      href: "#faq",
      description: "Federal, state, and major foundations in one place",
    },
    {
      title: "How much time can we save?",
      href: "#faq",
      description: "50–70% reduction across search, writing, and management",
    },
    {
      title: "Is our data secure?",
      href: "#faq",
      description: "Enterprise security and FERPA-aligned practices",
    },
    {
      title: "Can teams collaborate?",
      href: "#faq",
      description: "Real‑time editing, comments, permissions, and workflows",
    },
    {
      title: "Onboarding & support",
      href: "#faq",
      description: "Guided setup, training, and ongoing assistance",
    },
  ];

  const scrollToCTA = () => {
    const element = document.querySelector("#cta");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const aboutItems: NavItem[] = [
    {
      title: "GrantWare AI's Vision",
      href: "/about#vision",
      description: "Our mission to empower school districts",
    },
    {
      title: "Meet Our Team",
      href: "/about#team",
      description: "The people building GrantWare AI",
    },
    {
      title: "Our Advisors",
      href: "/about#advisors",
      description: "Educational excellence guiding our path",
    },
    {
      title: "Our Sponsors",
      href: "/about#sponsors",
      description: "Industry leaders supporting our mission",
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      // Check if we're on the about page
      if (window.location.pathname === "/about") {
        // Navigate to home page with hash
        window.location.href = "/" + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname === "/about") {
      window.location.href = "/";
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full", className)}>
      {/* GLASSY PILL BACKGROUND - ADJUST THESE VALUES: */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-full shadow-xl border border-white/30 dark:border-white/20"></div>
      <NavbarComponent className="relative bg-transparent border-0 shadow-none px-10 py-5 w-full">
          <NavbarLeft>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {logo}
              {!logo && <GrantWareLogo />}
            </button>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {featuresItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          onSelect={() => scrollToSection(item.href)}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>FAQs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {faqItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          onSelect={() => scrollToSection(item.href)}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {aboutItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          onSelect={() => {
                            const hash = item.href.split('#')[1];
                            if (window.location.pathname === "/about" && hash) {
                              // Already on about page, smooth scroll to section
                              const element = document.getElementById(hash);
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                            } else {
                              // Navigate to about page with hash
                              window.location.href = item.href;
                              // After navigation, smooth scroll will happen automatically
                              setTimeout(() => {
                                const element = document.getElementById(hash);
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                              }, 100);
                            }
                          }}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </NavbarLeft>
          <NavbarRight>
            {/* Theme toggle and pattern toggle temporarily disabled per request */}
            {/* {showThemeToggle && <ModeToggle />} */}
            {/* <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setPattern(pattern === "grid" ? "beams" : "grid");
              }}
              className="hidden md:inline-flex text-xs"
            >
              {pattern === "grid" ? "Grid" : "Beams"}
            </Button> */}

            {/* Contributor Program Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToCTA}
              className="hidden md:inline-flex text-sm font-medium"
            >
              Contributor Program
            </Button>
            
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                className={action.className}
                asChild={!!action.href}
                onClick={action.onClick}
              >
                {action.href ? (
                  <a
                    href={action.href}
                    target={action.target}
                    rel={action.rel}
                  >
                    {action.text}
                  </a>
                ) : (
                  <>{action.text}</>
                )}
              </Button>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    {logo}
                    <span>{name}</span>
                  </button>
                  <button
                    onClick={() => scrollToSection("#features")}
                    className="text-muted-foreground hover:text-foreground text-left"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection("#faq")}
                    className="text-muted-foreground hover:text-foreground text-left"
                  >
                    FAQs
                  </button>
                  <button
                    onClick={() => window.location.href = '/about'}
                    className="text-muted-foreground hover:text-foreground text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={scrollToCTA}
                    className="text-muted-foreground hover:text-foreground text-left"
                  >
                    Contributor Program
                  </button>
                  <Button variant="default" size="lg" asChild className="mt-4">
                    <a
                      href="https://cal.com/team/grantware-ai/grantware-ai-demo-chat?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Call
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
          </NavbarComponent>
    </header>
  );
}

function ListItem({
  className,
  title,
  children,
  href,
  onSelect,
  ...props
}: React.ComponentProps<"a"> & { title: string; onSelect?: () => void }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          href={href}
          onClick={(e) => {
            e.preventDefault();
            onSelect?.();
          }}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

