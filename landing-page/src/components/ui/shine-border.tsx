"use client";

import { cn } from "@/lib/utils";

type ShineBorderProps = {
  shineColor?: string[];
  className?: string;
  duration?: number;
};

export function ShineBorder({
  shineColor = ["#5a8bf2", "#7ba3f5", "#9bbaf8"],
  className,
  duration = 14,
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-lg",
        className
      )}
      style={{
        background: `linear-gradient(90deg, ${shineColor.join(", ")})`,
        backgroundSize: "200% 100%",
        animation: `shine ${duration}s linear infinite`,
      }}
    >
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </div>
  );
}

