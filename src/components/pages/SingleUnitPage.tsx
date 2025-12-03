"use client";

import { SingleUnit } from "./SingleUnit";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function SingleUnitPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return <SingleUnit onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
