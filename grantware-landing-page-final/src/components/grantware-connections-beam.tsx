"use client"

import { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

// Animation timing constants (total cycle = 12 seconds)
const BEAM_DURATION = 2.5
const CYCLE_DURATION = 12

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})
Circle.displayName = "Circle"

export function GrantwareConnectionsBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const userRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const googleDriveRef = useRef<HTMLDivElement>(null)
  const slackRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const writingRef = useRef<HTMLDivElement>(null)
  const managementRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[550px] w-full max-w-2xl items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-16 px-4">
        {/* Left: Person icon - shifted up slightly to align beam with icon center */}
        <div className="flex flex-col justify-center">
          <Circle ref={userRef} className="-translate-y-1">
            <Icons.user />
          </Circle>
        </div>

        {/* Center: GrantWare "G" */}
        <div className="flex flex-col justify-center">
          <Circle ref={centerRef} className="size-20">
            <span className="font-serif text-3xl font-semibold text-foreground">G</span>
          </Circle>
        </div>

        {/* Right: Stacked icons */}
        <div className="flex flex-col justify-center gap-3">
          <Circle ref={googleDriveRef}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={slackRef}>
            <Icons.slack />
          </Circle>
          <Circle ref={searchRef}>
            <Icons.search />
          </Circle>
          <Circle ref={writingRef}>
            <Icons.writing />
          </Circle>
          <Circle ref={managementRef}>
            <Icons.management />
          </Circle>
        </div>
      </div>

      {/* PHASE 1: Person → G (starts at 0s) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userRef}
        toRef={centerRef}
        duration={BEAM_DURATION}
        delay={0}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />

      {/* PHASE 2: G → Features (starts at 3s, staggered) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={googleDriveRef}
        duration={BEAM_DURATION}
        delay={3}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={slackRef}
        duration={BEAM_DURATION}
        delay={3.1}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={searchRef}
        duration={BEAM_DURATION}
        delay={3.2}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={writingRef}
        duration={BEAM_DURATION}
        delay={3.3}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={managementRef}
        duration={BEAM_DURATION}
        delay={3.4}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />

      {/* PHASE 3: Features → G (starts at 6s, reverse direction) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={googleDriveRef}
        duration={BEAM_DURATION}
        delay={6}
        reverse={true}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={slackRef}
        duration={BEAM_DURATION}
        delay={6.1}
        reverse={true}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={searchRef}
        duration={BEAM_DURATION}
        delay={6.2}
        reverse={true}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={writingRef}
        duration={BEAM_DURATION}
        delay={6.3}
        reverse={true}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={managementRef}
        duration={BEAM_DURATION}
        delay={6.4}
        reverse={true}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />

      {/* PHASE 4: G → Person (starts at 9s, reverse direction) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userRef}
        toRef={centerRef}
        duration={BEAM_DURATION}
        delay={9}
        reverse={true}
        gradientStartColor="#5b8cff"
        gradientStopColor="#4169e1"
      />
    </div>
  )
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  slack: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        fill="#E01E5A"
      />
    </svg>
  ),
  search: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  writing: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      <path d="m15 5 3 3" />
    </svg>
  ),
  management: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
}

