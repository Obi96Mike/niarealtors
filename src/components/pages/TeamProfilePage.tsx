"use client";

import { TeamProfile } from "./TeamProfile";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function TeamProfilePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return <TeamProfile onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
