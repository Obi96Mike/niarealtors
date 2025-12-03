import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  href: string;
  image: string;
  stats?: { views?: number; comments?: number; likes?: number };
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  href,
  image,
  stats,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm",
        className
      )}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <span>{new Date(date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="text-lg font-semibold text-text-dark">{title}</h3>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
        {stats ? (
          <div className="mt-auto flex gap-3 text-xs text-muted-foreground">
            {stats.views !== undefined ? <span>{stats.views} views</span> : null}
            {stats.comments !== undefined ? <span>{stats.comments} comments</span> : null}
            {stats.likes !== undefined ? <span>{stats.likes} likes</span> : null}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
