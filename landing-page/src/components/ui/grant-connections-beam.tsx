"use client";

import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/shadcn-io/animated-beam/index";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function GrantConnectionsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full max-w-md items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.grantware />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-center gap-12">
          <Circle ref={div1Ref} className="size-14">
            <Icons.search />
          </Circle>
          <Circle ref={div2Ref} className="size-14">
            <Icons.writing />
          </Circle>
          <Circle ref={div3Ref} className="size-14">
            <Icons.management />
          </Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  grantware: () => (
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
      <path d="M9 11H3v5h6V11z" />
      <path d="M21 11h-6v5h6V11z" />
      <path d="M15 7H9v5h6V7z" />
      <line x1="9" y1="9.5" x2="3" y2="13" />
      <line x1="15" y1="9.5" x2="21" y2="13" />
    </svg>
  ),
};
