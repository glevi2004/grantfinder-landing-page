"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Glow from "@/components/ui/glow";

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
  linkedin?: string;
}

export default function AboutSection() {
  const [showAllAdvisors, setShowAllAdvisors] = useState(false);

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
      name: "Dharit Shah",
      role: "Senior Data Scientist at Red Hat",
      description:
        "As a seasoned Senior Data Scientist at Red Hat, Dharit brings extensive experience in AI and machine learning. With a Master's degree in Information Systems from Northeastern University, he provides cutting-edge technical guidance to ensure GrantWare AI stays at the forefront of innovation.",
      image: "/Dharit Shah.jpeg",
      linkedin: "https://www.linkedin.com/in/dharit-shah-22032959/",
    },
    {
      name: "Arpit Kothari",
      role: "Director of Software Engineering at Fidelity Investments",
      description:
        "As Director of Software Engineering at Fidelity Investments, Arpit brings extensive experience in building scalable enterprise systems and leading high-performing engineering teams. His expertise in software architecture and product development helps guide GrantWare AI's technical strategy and platform scalability.",
      image: "/Arpit.png",
      linkedin: "https://www.linkedin.com/in/kothariarpit/",
    },
    {
      name: "Lisa Vu",
      role: "Software Engineer at Google",
      description:
        "As a Software Engineer at Google, Lisa brings expertise in building large-scale distributed systems and innovative product features. Her experience in developing cutting-edge technology solutions and best practices in software engineering helps ensure GrantWare AI delivers a world-class user experience.",
      image: "/lisa.png",
      linkedin: "https://www.linkedin.com/in/lisaqvu/",
    },
    {
      name: "Vince Conzola",
      role: "Principal Interaction Designer at Red Hat",
      description:
        "As Principal Interaction Designer at Red Hat, Vince brings extensive experience in user experience design and creating intuitive, user-centered interfaces. His expertise in interaction design and design thinking helps ensure GrantWare AI delivers an exceptional and accessible user experience for education leaders.",
      image: "/vince.png",
      linkedin: "https://www.linkedin.com/in/vince-conzola-623a672/",
    },
    {
      name: "Dr. Rebecca Aviles",
      role: "Assistant Superintendent for Elementary Education",
      description:
        "Dr. Rebecca Aviles is a dedicated educator and servant leader with over 20+ years of experience who has utilized her unique experiences serving diverse communities to implement rigorous academic programming, support data-driven school cultures, and spearhead the mentorship and growth of administrative teams through her eclectic style of leadership. Currently serving at Peekskill City School District.",
      image: "/Rebecca-Aviles.jpeg",
      linkedin:
        "https://www.linkedin.com/in/dr-rebecca-aviles-rodriguez-4a75752b1/",
    },
    {
      name: "Robert Rodriguez",
      role: "Assistant Superintendent for Human Resources",
      description:
        "Robert Rodriguez is a decorated and recognized educator with over 20+ years of experience, currently serving as Assistant Superintendent of Schools in the Uniondale Union Free School District.",
      image: "/Robert Rodriguez New.JPG",
      linkedin: "https://www.linkedin.com/in/robert-rodriguez-919230126/",
    },
    {
      name: "Colette Basiliere",
      role: "Founding Software Engineer at Ringlet",
      description:
        "As Founding Software Engineer at Ringlet, Colette brings startup expertise and a deep understanding of building products from the ground up. Her experience in full-stack development and early-stage product engineering helps guide GrantWare AI's innovation and rapid iteration as we build the future of grant management.",
      image: "/colette.png",
      linkedin: "https://www.linkedin.com/in/colettebasiliere/",
    },
    {
      name: "Ziba Cranmer",
      role: "Director of BU SPARK!",
      description:
        "As Director of BU SPARK! at Boston University, Ziba connects students, faculty, and community partners to create meaningful technology solutions. Her expertise in innovation ecosystems, student entrepreneurship, and technology for social impact helps GrantWare AI build strong partnerships with educational institutions and understand the unique needs of the education sector.",
      image: "/ziba.png",
      linkedin: "https://www.linkedin.com/in/zibacranmer/",
    },
    {
      name: "James Grady",
      role: "Principal at Design Axl",
      description:
        "As Principal at Design Axl, James brings extensive expertise in product design, design strategy, and creating impactful user experiences. His deep understanding of design systems and user-centered methodologies helps GrantWare AI craft intuitive, accessible solutions that truly serve the needs of education professionals.",
      image: "/grady.png",
      linkedin: "https://www.linkedin.com/in/jamesjgrady/",
    },
    {
      name: "Asad Malik",
      role: "AI Researcher at Boston University",
      description:
        "As an AI Researcher at Boston University, Asad brings cutting-edge expertise in artificial intelligence and machine learning research. His deep understanding of AI methodologies and academic research helps ensure GrantWare AI leverages the latest advancements in AI technology to deliver innovative solutions for education funding.",
      image: "/asad.png",
      linkedin: "https://www.linkedin.com/in/asadmalik93/",
    },
  ];

  return (
    <>
      {/* About Section with Gradient Background */}
      <Section
        className="relative isolate !bg-gradient-to-b from-[0] via-[#5788d8] via-40% to-[#0]"
        id="team"
      >
        {/* Meet Our Team */}
        <div className="max-w-container mx-auto px-4 pb-8 md:pb-24">
          <motion.div
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold tracking-tight font-[family-name:var(--font-source-serif)] text-white">
              About Us
            </h2>
          </motion.div>
          <Glow
            variant="top"
            className="animate-appear-zoom opacity-0 delay-500"
          />

          <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard member={member} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Advisors */}
        <div className="max-w-container mx-auto px-4 pb-8" id="advisors">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold tracking-tight font-[family-name:var(--font-source-serif)] text-white">
              Our Advisors
            </h2>
          </motion.div>

          <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-12">
            {(showAllAdvisors ? advisors : advisors.slice(0, 4)).map(
              (advisor, index) => (
                <motion.div
                  key={advisor.name}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AdvisorCard advisor={advisor} index={index} />
                </motion.div>
              )
            )}
          </div>

          {/* View More Link */}
          {advisors.length > 4 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllAdvisors(!showAllAdvisors)}
                className="flex items-center gap-2 text-[#5788d8] hover:text-[#7ea9e0] transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                {showAllAdvisors ? "View Less" : "View More"}
                {showAllAdvisors ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Experience From */}
        <div className="py-8 md:py-12 relative" id="sponsors">
          <div className="max-w-container mx-auto px-4">
            <motion.div
              className="text-center mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#5788d8] md:text-white text-4xl font-bold font-[family-name:var(--font-source-serif)] mb-14">
                Experience From
              </h2>
            </motion.div>

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
                  animation: scroll 15s linear infinite;
                }
                @media (min-width: 768px) {
                  .animate-scroll {
                    animation: scroll 30s linear infinite;
                  }
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="flex animate-scroll z-100">
                <div className="flex items-center gap-16 px-8 shrink-0">
                  {LOGOS.map((logo, index) => {
                    const logoName = logo.replace(/\.(png|svg)$/, "");
                    const logoLabel = logoName
                      .split(/[-_]/)
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ");

                    return (
                      <Image
                        key={`logo-1-${index}`}
                        src={`/logos/${logo}`}
                        alt={logoLabel}
                        width={150}
                        height={60}
                        className="w-auto h-12 hover:opacity-100 transition-opacity"
                      />
                    );
                  })}
                </div>
                <div className="flex items-center gap-16 px-8 shrink-0">
                  {LOGOS.map((logo, index) => {
                    const logoName = logo.replace(/\.(png|svg)$/, "");
                    const logoLabel = logoName
                      .split(/[-_]/)
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
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
        </div>
      </Section>
    </>
  );
}

// TeamCard component
function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div className="flex flex-col items-center text-center bg-white hover:bg-white py-8 px-6 rounded-xl border border-border shadow-[0_0_20px_rgba(90,139,242,0.15)] hover:shadow-[0_0_30px_rgba(90,139,242,0.3)] hover:border-primary/50 transition-all duration-500 w-full h-full pointer-events-auto">
      <div className="shrink-0 h-32 w-32 rounded-full overflow-hidden mb-5 pointer-events-none">
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
          className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors pointer-events-auto relative z-10"
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

// AdvisorCard component
function AdvisorCard({ advisor, index }: { advisor: Advisor; index: number }) {
  return (
    <div className="flex flex-col items-center text-center bg-white hover:bg-white py-8 px-6 rounded-xl border border-border shadow-[0_0_20px_rgba(90,139,242,0.15)] hover:shadow-[0_0_30px_rgba(90,139,242,0.3)] hover:border-primary/50 transition-all duration-500 w-full h-full pointer-events-auto">
      <div className="shrink-0 h-32 w-32 rounded-full overflow-hidden mb-5 pointer-events-none">
        <Image
          src={advisor.image || "/images/placeholder.jpg"}
          alt={advisor.name}
          width={128}
          height={128}
          className="w-full h-full object-cover object-[center_20%] scale-125"
          quality={95}
        />
      </div>
      <h3 className="text-lg font-semibold">{advisor.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{advisor.role}</p>
      {advisor.linkedin && (
        <a
          href={advisor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors pointer-events-auto relative z-10"
        >
          LinkedIn
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
