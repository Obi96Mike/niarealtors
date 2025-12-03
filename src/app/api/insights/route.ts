import { NextResponse } from "next/server";
import { insights } from "@/data/insights";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const data = category
    ? insights.filter(
        (post) => post.category?.toLowerCase() === category.toLowerCase()
      )
    : insights;

  return NextResponse.json(data);
}
