import { NextRequest, NextResponse } from "next/server";
import { developments } from "@/data/developments";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const development = developments.find((dev) => dev.slug === slug);
  if (!development) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(development);
}

export async function PUT() {
  return NextResponse.json(
    { error: "Updating developments is disabled in this demo." },
    { status: 501 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Deleting developments is disabled in this demo." },
    { status: 501 }
  );
}
