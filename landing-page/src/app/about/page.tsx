"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import NavbarSection from "@/components/sections/navbar-section";
import { Footer } from "@/components/layout/footer";
import Glow from "@/components/ui/glow";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

interface Advisor {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Ryan Rodriguez",
      role: "Co-Founder & CEO",
      description:
        "Ryan is passionate about transforming education through technology and empowering school districts to secure the funding they need to succeed.",
      image: "/Ryan Rodriguez.JPEG",
    },
    {
      name: "Gabriel Levi Ramos",
      role: "Co-Founder & CTO",
      description:
        "Gabriel leads the technical vision of GrantWare AI, building innovative solutions that combine AI and ML to revolutionize grant management.",
      image: "/Gabriel Levi Ramos.jpeg",
    },
    {
      name: "Adrian Dybacki",
      role: "Co-Founding Engineer",
      description:
        "Adrian brings deep technical expertise to the GrantWare AI platform, architecting scalable solutions that serve school districts nationwide.",
      image: "/Adrian Dybacki.jpeg",
    },
  ];

  const advisors: Advisor[] = [
    {
      name: "Dr. Rebecca Aviles",
      role: "Assistant Superintendent for Elementary Education",
      description:
        "Dr. Rebecca Aviles is a dedicated educator and servant leader with over 20+ years of experience who has utilized her unique experiences serving diverse communities to implement rigorous academic programming, support data-driven school cultures, and spearhead the mentorship and growth of administrative teams through her eclectic style of leadership. Currently serving at Peekskill City School District.",
      image: "/Rebecca-Aviles.jpeg",
    },
    {
      name: "Robert Rodriguez",
      role: "Assistant Superintendent for Human Resources",
      description:
        "Robert Rodriguez is a decorated and recognized educator with over 20+ years of experience, currently serving as Assistant Superintendent of Schools in the Uniondale Union Free School District.",
      image: "/Robert Rodriguez New.JPG",
    },
    {
      name: "Dharit Shah",
      role: "Senior Data Scientist at Red Hat",
      description:
        "As a seasoned Senior Data Scientist at Red Hat, Dharit brings extensive experience in AI and machine learning. With a Master's degree in Information Systems from Northeastern University, he provides cutting-edge technical guidance to ensure GrantWare AI stays at the forefront of innovation.",
      image: "/Dharit Shah.jpeg",
    },
  ];

  return (
    <>
      <NavbarSection />
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        {/* Our Vision Section */}
        <Section className="pt-24 pb-16 md:pt-32 md:pb-24 relative animate-appear opacity-0" id="vision">
          <div className="max-w-container mx-auto px-4">
            <div className="text-center space-y-6 max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-[family-name:var(--font-source-serif)] animate-appear opacity-0 delay-100">
                Our Vision
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg animate-appear opacity-0 delay-200">
                <p>
                  GrantWare AI&apos;s mission is to empower school districts with intelligent tools
                  that simplify the entire grant lifecycle. We believe that every district
                  deserves access to funding opportunities that can transform their communities. We are all so different, yet each district faces similar challenges when it
                  comes to discovering, applying for, and managing grants. GrantWare AI is putting
                  an end to the one-size-fits-all model. Through looking at each district with a holistic lens, we believe we can use the
                  power of AI & ML to match districts with the perfect grants and streamline the
                  entire process from discovery to reporting.
                </p>
              </div>
            </div>
            <Glow variant="top" className="animate-appear-zoom opacity-0 delay-500" />
          </div>
        </Section>

        {/* Meet Our Team Section */}
        <Section className="py-16 md:py-24" id="team">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-16 animate-appear opacity-0 delay-300">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight font-[family-name:var(--font-source-serif)]">
                Meet Our Team
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {teamMembers.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* Our Advisors Section */}
        <Section className="py-16 md:py-24" id="advisors">
          <div className="max-w-container mx-auto">
            <div className="text-center mb-16 animate-appear opacity-0 delay-500">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight font-[family-name:var(--font-source-serif)]">
                Our Advisors
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {advisors.map((advisor, index) => (
                <AdvisorCard key={advisor.name} advisor={advisor} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* Sponsors Section */}
        <Section className="py-16 md:py-24" id="sponsors">
          <div className="max-w-container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-source-serif)]">
                Backed by Industry Leaders
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex items-center justify-center h-24">
                    <Image
                      src="/red-hat-logo.png"
                      alt="Red Hat"
                      width={200}
                      height={80}
                      className="h-16 w-auto opacity-90"
                    />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Red Hat is the world&apos;s leading provider of enterprise open source solutions,
                    using a community-powered approach to deliver high-performing Linux, cloud,
                    container, and Kubernetes technologies. Red Hat&apos;s support empowers GrantWare AI
                    to build on cutting-edge, reliable infrastructure that serves school districts
                    with enterprise-grade security and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// TeamCard component with intersection observer
function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center bg-background dark:bg-muted/20 py-8 px-6 rounded-xl border border-border shadow-[0_0_20px_rgba(90,139,242,0.15)] hover:shadow-[0_0_30px_rgba(90,139,242,0.3)] hover:border-primary/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="shrink-0 h-24 w-24 rounded-full overflow-hidden mb-5">
        <Image
          src={member.image || "/images/placeholder.jpg"}
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover object-center object-[center_20%] scale-125"
          quality={95}
          priority={member.name === "Ryan Rodriguez"}
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
      <p className="mt-2 mb-6 text-sm text-muted-foreground leading-relaxed">
        {member.description}
      </p>
    </div>
  );
}

// AdvisorCard component with intersection observer
function AdvisorCard({ advisor, index }: { advisor: Advisor; index: number }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center bg-muted/50 dark:bg-muted/20 py-8 px-6 rounded-xl border border-border shadow-[0_0_20px_rgba(90,139,242,0.15)] hover:shadow-[0_0_30px_rgba(90,139,242,0.3)] hover:border-primary/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="shrink-0 h-24 w-24 rounded-full overflow-hidden mb-5">
        <Image
          src={advisor.image || "/images/placeholder.jpg"}
          alt={advisor.name}
          width={96}
          height={96}
          className="w-full h-full object-cover object-center object-[center_20%] scale-125"
          quality={95}
        />
      </div>
      <h3 className="text-lg font-semibold">{advisor.name}</h3>
      <p className="text-muted-foreground text-sm mb-2">{advisor.role}</p>
      <p className="mt-2 mb-6 text-sm text-muted-foreground leading-relaxed">
        {advisor.description}
      </p>
    </div>
  );
}

