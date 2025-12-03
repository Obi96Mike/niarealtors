import { NextResponse } from "next/server";
import { residentialRentals } from "@/data/residentialRentals";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const rental = residentialRentals.find((item) => item.slug === params.slug);
  if (!rental) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(rental);
}
