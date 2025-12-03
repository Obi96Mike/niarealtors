import { NextResponse } from "next/server";
import { teamMembers } from "@/data/team";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const member = teamMembers.find((item) => item.slug === params.slug);
  if (!member) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(member);
}
