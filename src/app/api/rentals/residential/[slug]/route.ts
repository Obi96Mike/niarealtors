// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { residentialRentals } from "@/data/residentialRentals";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const rental = residentialRentals.find((item) => item.slug === slug);
  if (!rental) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(rental);
}
