"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// List of logos in the /public/logos/ directory
// Add new logo filenames here (supports .png and .svg)
const LOGOS = [
  "google.svg",
  "ibm.svg",
  "bostonuniversity.svg",
  "fidelity.svg",
  "redhat.svg",
  "ringlet.png",
];

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedin?: string;
}

interface Advisor {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export default function AboutSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Ryan Rodriguez",
      role: "Co-Founder & CEO",
      description: "",
      image: "/Ryan Rodriguez.JPEG",
      linkedin: "https://www.linkedin.com/in/ryanrodriguez-/",
    },
    {
      name: "Gabriel Levi Ramos",
      role: "Co-Founder & CTO",
      description: "",
      image: "/Gabriel Levi Ramos.jpeg",
      linkedin: "https://www.linkedin.com/in/gabrielleviramos/",
    },
    {
      name: "Adrian Dybacki",
      role: "Co-Founding Engineer",
      description: "",
      image: "/Adrian Dybacki.jpeg",
      linkedin: "https://www.linkedin.com/in/adrian-dybacki/",
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
      {/* Meet Our Team Section */}
      <Section className="py-16 md:py-24 relative" id="team">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight font-[family-name:var(--font-source-serif)]">
              About Us
            </h2>
          </div>
          <Glow
            variant="top"
            className="animate-appear-zoom opacity-0 delay-500"
          />

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
          <div className="text-center mb-16">
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
      <Section
        className="py-8 md:py-12 relative bg-gradient-to-b from-[#5788d8] from-0% via-[#7ea9e0] via-15% to-[#b5d5f0] to-40%"
        id="sponsors"
      >
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-source-serif)]">
              Experience From
            </h2>
          </div>

          <div className="relative z-10 overflow-hidden">
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex animate-scroll">
              <div className="flex items-center gap-16 px-8 shrink-0">
                {LOGOS.map((logo, index) => {
                  const logoName = logo.replace(/\.(png|svg)$/, "");
                  const logoLabel = logoName
                    .split(/[-_]/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  return (
                    <Image
                      key={`logo-1-${index}`}
                      src={`/logos/${logo}`}
                      alt={logoLabel}
                      width={150}
                      height={60}
                      className="w-auto h-12 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-16 px-8 shrink-0">
                {LOGOS.map((logo, index) => {
                  const logoName = logo.replace(/\.(png|svg)$/, "");
                  const logoLabel = logoName
                    .split(/[-_]/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  return (
                    <Image
                      key={`logo-2-${index}`}
                      src={`/logos/${logo}`}
                      alt={logoLabel}
                      width={150}
                      height={60}
                      className="w-auto h-12 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="shrink-0 h-32 w-32 rounded-full overflow-hidden mb-5">
        <Image
          src={member.image || "/images/placeholder.jpg"}
          alt={member.name}
          width={128}
          height={128}
          className="w-full h-full object-cover object-[center_20%] scale-125"
          quality={95}
          priority={member.name === "Ryan Rodriguez"}
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
        >
          LinkedIn
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
      {member.description && (
        <p className="mt-2 mb-6 text-sm text-muted-foreground leading-relaxed">
          {member.description}
        </p>
      )}
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="shrink-0 h-24 w-24 rounded-full overflow-hidden mb-5">
        <Image
          src={advisor.image || "/images/placeholder.jpg"}
          alt={advisor.name}
          width={96}
          height={96}
          className="w-full h-full object-cover object-[center_20%] scale-125"
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
