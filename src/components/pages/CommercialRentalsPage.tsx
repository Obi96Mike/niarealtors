"use client";

import { CommercialRentals } from "./CommercialRentals";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";
import { useEnquiry } from "@/components/EnquiryContext";

export default function CommercialRentalsPage() {
  const router = useRouter();
  const { openEnquiry } = useEnquiry();
  return (
    <CommercialRentals
      onNavigate={(p, id) => router.push(mapPageToPath(p, id))}
      onEnquire={(name) => openEnquiry(name)}
    />
  );
}
