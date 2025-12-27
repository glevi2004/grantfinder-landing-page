"use client"

import Image from "next/image"
import { motion } from "framer-motion"
// import { useTheme } from "@/components/theme-context"

// Logo files from the Experience From section
const LOGOS = [
  "google.svg",
  "ibm.svg",
  "bostonuniversity.svg",
  "fidelity.svg",
  "redhat.svg",
  "ringlet.png",
  "spark.png",
]

function LogoItem({ logo, index }: { logo: string; index: number }) {
  const logoName = logo.replace(/\.(png|svg)$/, "")
  const logoLabel = logoName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Ringlet logo is white on transparent, so we need to invert it for visibility
  const isRinglet = logo.includes("ringlet")

  return (
    <div className="flex-shrink-0 px-6 md:px-10">
      <Image
        src={`/logos/${logo}`}
        alt={logoLabel}
        width={150}
        height={60}
        className={`w-auto h-10 md:h-12 transition-all opacity-70 grayscale hover:opacity-100 hover:grayscale-0 ${isRinglet ? "invert" : ""}`}
      />
    </div>
  )
}

export function ClientLogos() {
  // const { isGradient } = useTheme()

  // Create a doubled array for seamless loop
  const doubledLogos = [...LOGOS, ...LOGOS]

  return (
    <section id="trusted-by" className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-2xl md:text-3xl text-center mb-12 font-medium text-gray-900"
        >
          Experience From
        </motion.h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden group">
          {/* CSS Keyframes for the marquee animation */}
          <style jsx>{`
            @keyframes scroll-left {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            .scroll-animation {
              display: flex;
              width: max-content;
              animation: scroll-left 45s linear infinite;
            }
            .group:hover .scroll-animation {
              animation-play-state: paused;
            }
          `}</style>

          {/* Single container with doubled logos */}
          <div className="scroll-animation">
            {doubledLogos.map((logo, index) => (
              <LogoItem key={`logo-${index}`} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

