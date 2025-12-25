"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Logo files from the Experience From section
const LOGOS = [
  "google.svg",
  "ibm.svg",
  "bostonuniversity.svg",
  "fidelity.svg",
  "redhat.svg",
  "ringlet.png",
]

export function ClientLogos() {
  return (
    <section id="trusted-by" className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl text-center mb-12 text-white"
        >
          Experience From
        </motion.h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* CSS Keyframes for the marquee animation */}
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

          {/* Scrolling logos row - duplicated for seamless loop */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8 shrink-0">
              {LOGOS.map((logo, index) => {
                const logoName = logo.replace(/\.(png|svg)$/, "")
                const logoLabel = logoName
                  .split(/[-_]/)
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")

                return (
                  <Image
                    key={`logo-1-${index}`}
                    src={`/logos/${logo}`}
                    alt={logoLabel}
                    width={150}
                    height={60}
                    className="w-auto h-10 md:h-12 opacity-80 brightness-[1.5] hover:opacity-100 hover:brightness-[2] transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  />
                )
              })}
            </div>
            {/* Second set of logos (duplicate for seamless loop) */}
            <div className="flex items-center gap-16 px-8 shrink-0">
              {LOGOS.map((logo, index) => {
                const logoName = logo.replace(/\.(png|svg)$/, "")
                const logoLabel = logoName
                  .split(/[-_]/)
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")

                return (
                  <Image
                    key={`logo-2-${index}`}
                    src={`/logos/${logo}`}
                    alt={logoLabel}
                    width={150}
                    height={60}
                    className="w-auto h-10 md:h-12 opacity-80 brightness-[1.5] hover:opacity-100 hover:brightness-[2] transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
