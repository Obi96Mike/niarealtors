"use client";

import { RentLanding } from "./RentLanding";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function RentLandingPage() {
  const router = useRouter();
  return <RentLanding onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
