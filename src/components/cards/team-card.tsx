import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  slug: string;
  headshot: string;
  className?: string;
}

export function TeamCard({ name, role, slug, headshot, className }: TeamCardProps) {
  return (
    <Link
      href={`/about/team/${slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm",
        className
      )}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={headshot}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold text-text-dark">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </Link>
  );
}
