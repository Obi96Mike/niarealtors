import { NextResponse } from "next/server";
import { insights } from "@/data/insights";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const post = insights.find((item) => item.slug === params.slug);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
