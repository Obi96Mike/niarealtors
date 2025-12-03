"use client";

import { SingleRental } from "./SingleRental";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function SingleRentalPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return <SingleRental onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
