"use client";

import { ContactUs } from "./ContactUs";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function ContactUsPage() {
  const router = useRouter();
  return <ContactUs onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
