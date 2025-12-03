"use client";

import { AboutUs } from "./AboutUs";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function AboutUsPage() {
  const router = useRouter();
  return <AboutUs onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
