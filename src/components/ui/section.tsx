import { cn } from "@/lib/utils";
import * as React from "react";



function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn(
        "bg-background text-foreground px-4 py-12 sm:py-24 md:py-32 md:pt-20",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
