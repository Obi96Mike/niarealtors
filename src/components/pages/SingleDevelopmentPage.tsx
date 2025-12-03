"use client";

import { SingleDevelopment } from "./SingleDevelopment";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";
import { useEnquiry } from "@/components/EnquiryContext";

interface SingleDevelopmentPageProps {
  params: { slug: string };
}

export default function SingleDevelopmentPage({ params }: SingleDevelopmentPageProps) {
  const router = useRouter();
  const { openEnquiry } = useEnquiry();

  return (
    <SingleDevelopment
      onNavigate={(p, id) => router.push(mapPageToPath(p, id))}
      onEnquire={(name) => openEnquiry(name)}
      isAdmin={false}
    />
  );
}
