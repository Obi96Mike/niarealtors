import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  title: string;
  tagline?: string;
  location?: string;
  image: string;
  badge?: string;
  priceLabel: string;
  meta?: string[];
  href: string;
  enquireHref?: string;
  className?: string;
}

export function PropertyCard({
  title,
  tagline,
  location,
  image,
  badge,
  priceLabel,
  meta,
  href,
  enquireHref,
  className,
}: PropertyCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-white shadow-sm", className)}>
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
        {badge ? (
          <Badge className="absolute left-3 top-3 bg-white text-brand shadow">
            {badge}
          </Badge>
        ) : null}
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{location}</p>
            <h3 className="text-lg font-semibold text-text-dark">{title}</h3>
            {tagline ? <p className="text-sm text-muted-foreground">{tagline}</p> : null}
          </div>
          <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            {priceLabel}
          </span>
        </div>
        {meta && meta.length ? (
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {meta.map((item) => (
              <span key={item} className="rounded-full bg-background-neutral px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        ) : null}
        <div className="flex flex-wrap gap-3 pt-2">
          {enquireHref ? (
            <Button asChild className="bg-brand hover:bg-[#0b3424] text-white">
              <Link href={enquireHref}>Enquire</Link>
            </Button>
          ) : null}
          <Button asChild variant="outline" className="border-brand/30 text-brand hover:bg-brand hover:text-white">
            <Link href={href}>Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
