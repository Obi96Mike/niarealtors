import { NextResponse } from "next/server";
import { teamMembers } from "@/data/team";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: Context) {
  const { slug } = await context.params;
  const member = teamMembers.find((item) => item.slug === slug);
  if (!member) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(member);
}
