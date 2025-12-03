import { NextResponse } from "next/server";
import { commercialRentals } from "@/data/commercialRentals";

export async function GET() {
  return NextResponse.json(commercialRentals);
}
