import { NextResponse } from "next/server";
import { developments } from "@/data/developments";

export async function GET() {
  return NextResponse.json(developments);
}

export async function POST() {
  return NextResponse.json(
    { error: "Creating developments is disabled in this demo." },
    { status: 501 }
  );
}
