import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  actions?: ReactNode;
  align?: "left" | "center";
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  actions,
  align = "left",
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-brand text-white">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-brand/70" />
        </div>
      ) : null}
      <div className="section-shell relative z-10 py-16 md:py-24">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" ? "mx-auto text-center" : "text-left"
          )}
        >
          {eyebrow ? (
            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-lg text-white/90 md:text-xl">{subtitle}</p>
          ) : null}
          {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </div>
  );
}
