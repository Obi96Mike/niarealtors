"use client";

import HomePage from "./HomePage";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";
import { useEnquiry } from "@/components/EnquiryContext";

export default function HomePageWrapper() {
  const router = useRouter();
  const { openEnquiry } = useEnquiry();
  return (
    <HomePage
      onNavigate={(p, id) => router.push(mapPageToPath(p, id))}
      onEnquire={(name) => openEnquiry(name)}
    />
  );
}
