import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "light" | "neutral" | "brand";
  id?: string;
}

export function Section({ children, className, background = "light", id }: SectionProps) {
  const backgroundClass =
    background === "brand"
      ? "bg-brand text-white"
      : background === "neutral"
        ? "bg-background-neutral"
        : "bg-white";

  return (
    <section id={id} className={cn(backgroundClass, "py-12 md:py-16", className)}>
      <div className="section-shell">{children}</div>
    </section>
  );
}
