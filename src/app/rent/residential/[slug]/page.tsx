"use client";

import SingleRentalPage from "@/components/pages/SingleRentalPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <SingleRentalPage params={params} />;
}
