// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { getUnitBySlug } from "@/data/units";
import { getDevelopmentById } from "@/data/developments";

type Context = { params: Promise<{ slug: string }> };

// Read-only mock handler: Vercel build-safe (no Prisma/DB required)
export async function GET(_request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const unit = getUnitBySlug(slug);
  if (!unit) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const development = getDevelopmentById(unit.developmentId);
  return NextResponse.json({ ...unit, development });
}

export async function PUT() {
  return NextResponse.json(
    { error: "Disabled in static build. Connect a real DB to enable writes." },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Disabled in static build. Connect a real DB to enable writes." },
    { status: 405 }
  );
}
