import { NextResponse } from "next/server";
import { teamMembers } from "@/data/team";

export async function GET() {
  return NextResponse.json(teamMembers);
}
