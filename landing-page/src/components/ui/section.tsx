import * as React from "react";

import { cn } from "@/lib/utils";

const Section = React.forwardRef<HTMLElement, React.ComponentProps<"section">>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        data-slot="section"
        className={cn(
          "bg-background text-foreground px-4 py-12 sm:py-24 md:py-32",
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };
