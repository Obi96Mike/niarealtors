"use client";

import { TeamArchive } from "./TeamArchive";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function TeamArchivePage() {
  const router = useRouter();
  return <TeamArchive onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
