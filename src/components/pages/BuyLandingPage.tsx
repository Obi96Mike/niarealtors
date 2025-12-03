"use client";

import { BuyLanding } from "./BuyLanding";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function BuyLandingPage() {
  const router = useRouter();
  return <BuyLanding onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
