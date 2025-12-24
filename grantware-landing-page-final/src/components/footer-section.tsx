import Link from "next/link"
import { Sparkles } from "lucide-react"
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"

export function FooterSection() {
  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0 max-w-7xl mx-auto w-full">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-foreground">GrantWare</span>
          </Link>
          <div className="text-muted-foreground text-sm font-medium leading-[18px]">
            AI-powered grant discovery
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            <Link href="#" className="w-6 h-6 flex items-center justify-center text-foreground hover:text-primary transition-colors">
              <IconBrandTwitter size={20} />
            </Link>
            <Link href="#" className="w-6 h-6 flex items-center justify-center text-foreground hover:text-primary transition-colors">
              <IconBrandLinkedin size={20} />
            </Link>
            <Link href="#" className="w-6 h-6 flex items-center justify-center text-foreground hover:text-primary transition-colors">
              <IconBrandGithub size={20} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-12">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-muted-foreground text-sm font-medium leading-5">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <Link href="#features" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Integrations
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                AI Matching
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Grant Database
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-muted-foreground text-sm font-medium leading-5">Company</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                About us
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Our team
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Brand
              </Link>
              <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-muted-foreground text-sm font-medium leading-5">Resources</div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href="#" className="self-stretch text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Terms of use
              </Link>
              <Link href="#" className="self-stretch text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                API Reference
              </Link>
              <Link href="#" className="self-stretch text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link href="#" className="self-stretch text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Community
              </Link>
              <Link href="#" className="self-stretch text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-border flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} GrantWare AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

