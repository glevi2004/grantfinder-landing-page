"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"

// Team member data (exact from old landing page)
const teamMembers = [
  {
    name: "Ryan Rodriguez",
    role: "Co-Founder & CEO",
    image: "/about/Ryan Rodriguez.JPEG",
    linkedin: "https://www.linkedin.com/in/ryanrodriguez-/",
  },
  {
    name: "Gabriel Levi Ramos",
    role: "Co-Founder & CTO",
    image: "/about/Gabriel Levi Ramos.jpeg",
    linkedin: "https://www.linkedin.com/in/gabrielleviramos/",
  },
  {
    name: "Adrian Dybacki",
    role: "Co-Founding Engineer",
    image: "/about/Adrian Dybacki.jpeg",
    linkedin: "https://www.linkedin.com/in/adrian-dybacki/",
  },
]

// Advisor data (exact from old landing page)
const advisors = [
  {
    name: "Dharit Shah",
    role: "Senior Data Scientist at Red Hat",
    image: "/about/Dharit Shah.jpeg",
    linkedin: "https://www.linkedin.com/in/dharit-shah-22032959/",
  },
  {
    name: "Arpit Kothari",
    role: "Director of Software Engineering at Fidelity Investments",
    image: "/about/Arpit.png",
    linkedin: "https://www.linkedin.com/in/kothariarpit/",
  },
  {
    name: "Lisa Vu",
    role: "Software Engineer at Google",
    image: "/about/lisa.png",
    linkedin: "https://www.linkedin.com/in/lisaqvu/",
  },
  {
    name: "Vince Conzola",
    role: "Principal Interaction Designer at Red Hat",
    image: "/about/vince.png",
    linkedin: "https://www.linkedin.com/in/vince-conzola-623a672/",
  },
  {
    name: "Dr. Rebecca Aviles",
    role: "Assistant Superintendent for Elementary Education",
    image: "/about/Rebecca-Aviles.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-rebecca-aviles-rodriguez-4a75752b1/",
  },
  {
    name: "Robert Rodriguez",
    role: "Assistant Superintendent for Human Resources",
    image: "/about/Robert Rodriguez New.JPG",
    linkedin: "https://www.linkedin.com/in/robert-rodriguez-919230126/",
  },
  {
    name: "Colette Basiliere",
    role: "Founding Software Engineer at Ringlet",
    image: "/about/colette.png",
    linkedin: "https://www.linkedin.com/in/colettebasiliere/",
  },
  {
    name: "Ziba Cranmer",
    role: "Director of BU SPARK!",
    image: "/about/ziba.png",
    linkedin: "https://www.linkedin.com/in/zibacranmer/",
  },
  {
    name: "James Grady",
    role: "Principal at Design Axl",
    image: "/about/grady.png",
    linkedin: "https://www.linkedin.com/in/jamesjgrady/",
  },
  {
    name: "Asad Malik",
    role: "AI Researcher at Boston University",
    image: "/about/asad.png",
    linkedin: "https://www.linkedin.com/in/asadmalik93/",
  },
]

// Profile Card Component
function ProfileCard({
  name,
  role,
  image,
  linkedin,
  index,
}: {
  name: string
  role: string
  image: string
  linkedin: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center bg-white py-8 px-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-300 w-full h-full"
    >
      {/* Avatar */}
      <div className="shrink-0 h-32 w-32 rounded-full overflow-hidden mb-5 border-4 border-gray-100">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="w-full h-full object-cover object-[center_20%] scale-125"
          quality={95}
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

      {/* Role */}
      <p className="text-gray-500 text-sm mb-4">{role}</p>

      {/* LinkedIn Link */}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
        >
          LinkedIn
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  )
}

export default function AboutPage() {
  const [showAllAdvisors, setShowAllAdvisors] = useState(false)

  return (
    <main className="min-h-screen relative bg-white">
      {/* Header */}
      <HeaderPill />

      {/* Mission Section */}
      <section id="mission" className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl font-normal mb-8 text-gray-900"
          >
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6"
          >
            At GrantWare AI, we believe every organization deserves access to the funding that can transform their mission. 
            We're building intelligent tools that eliminate the complexity of grant discovery, application, and management—so 
            teams can focus on what matters most: making an impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed"
          >
            Built for teams that can't afford to miss funding windows.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900">
              Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section id="advisors" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900">
              Our Advisors
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {(showAllAdvisors ? advisors : advisors.slice(0, 4)).map(
              (advisor, index) => (
                <div key={advisor.name} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                  <ProfileCard
                    name={advisor.name}
                    role={advisor.role}
                    image={advisor.image}
                    linkedin={advisor.linkedin}
                    index={index}
                  />
                </div>
              )
            )}
          </div>

          {/* View More / View Less Toggle */}
          {advisors.length > 4 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllAdvisors(!showAllAdvisors)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium text-lg cursor-pointer"
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
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  )
}

