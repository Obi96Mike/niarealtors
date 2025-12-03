"use client";

import { DevelopmentsArchive } from "./DevelopmentsArchive";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";
import { useEnquiry } from "@/components/EnquiryContext";

export default function DevelopmentsArchivePage() {
  const router = useRouter();
  const { openEnquiry } = useEnquiry();
  return (
    <DevelopmentsArchive
      onNavigate={(p, id) => router.push(mapPageToPath(p, id))}
      onEnquire={(name) => openEnquiry(name)}
    />
  );
}
