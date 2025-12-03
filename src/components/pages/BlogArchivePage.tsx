"use client";

import { BlogArchive } from "./BlogArchive";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function BlogArchivePage() {
  const router = useRouter();
  return <BlogArchive onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
