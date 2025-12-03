import { NextResponse } from "next/server";
import { residentialRentals } from "@/data/residentialRentals";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase();

  const data = query
    ? residentialRentals.filter(
        (rental) =>
          rental.title.toLowerCase().includes(query) ||
          rental.locationArea.toLowerCase().includes(query) ||
          rental.locationRegion.toLowerCase().includes(query)
      )
    : residentialRentals;

  return NextResponse.json(data);
}
