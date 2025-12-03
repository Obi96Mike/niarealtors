import { NextResponse } from "next/server";
import { units } from "@/data/units";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const developmentId = searchParams.get("developmentId");
  const developmentSlug = searchParams.get("developmentSlug");

  let filtered = units;
  if (developmentId) {
    const idNum = Number(developmentId);
    if (!Number.isNaN(idNum)) {
      filtered = filtered.filter((u) => u.developmentId === String(idNum) || u.developmentId === idNum);
    }
  }
  if (developmentSlug) {
    filtered = filtered.filter((u) => u.developmentId === developmentSlug || u.slug.includes(developmentSlug));
  }
  return NextResponse.json(filtered);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json(
    { error: "Creating units is disabled in this demo.", received: body },
    { status: 501 }
  );
}
