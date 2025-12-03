"use client";

import { ResidentialRentals } from "./ResidentialRentals";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";
import { useEnquiry } from "@/components/EnquiryContext";

export default function ResidentialRentalsPage() {
  const router = useRouter();
  const { openEnquiry } = useEnquiry();
  return (
    <ResidentialRentals
      onNavigate={(p, id) => router.push(mapPageToPath(p, id))}
      onEnquire={(name) => openEnquiry(name)}
    />
  );
}
