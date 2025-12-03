"use client";

import TeamProfilePage from "@/components/pages/TeamProfilePage";

export default function Page({ params }: { params: { slug: string } }) {
  return <TeamProfilePage params={params} />;
}
