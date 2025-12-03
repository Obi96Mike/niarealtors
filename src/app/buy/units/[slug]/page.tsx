"use client";

import SingleUnitPage from "@/components/pages/SingleUnitPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <SingleUnitPage params={params} />;
}
