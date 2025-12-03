"use client";

import { BlogPost } from "./BlogPost";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function BlogPostPage() {
  const router = useRouter();
  return <BlogPost onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
