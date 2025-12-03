"use client";

import SingleDevelopmentPage from "@/components/pages/SingleDevelopmentPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <SingleDevelopmentPage params={params} />;
}
