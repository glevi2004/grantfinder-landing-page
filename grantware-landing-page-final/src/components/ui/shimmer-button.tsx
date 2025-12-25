"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ShimmerButton({
  className,
  children,
  asChild,
  ...props
}: ButtonProps) {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-150%);
          }
          20% {
            transform: translateX(150%);
          }
          100% {
            transform: translateX(150%);
          }
        }
        .shimmer-button::before {
          content: '';
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 4s infinite;
          pointer-events: none;
        }
      `}</style>
      <Button
        className={cn(
          "shimmer-button relative overflow-hidden bg-gradient-to-b from-[#5b8cff] to-[#4169e1] hover:from-[#5078e8] hover:to-[#3b5bdb] shadow-[0_12px_48px_rgba(59,91,219,0.6),0_4px_16px_rgba(59,91,219,0.4)] hover:shadow-[0_16px_56px_rgba(59,91,219,0.7),0_6px_20px_rgba(59,91,219,0.5)] transition-all border-none",
          className
        )}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    </>
  )
}

