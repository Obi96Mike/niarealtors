import { NextResponse } from "next/server";
import { saveLead } from "@/data/leadsStore";

function normalizeInterests(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input.map(String).filter(Boolean);
  }
  if (typeof input === "string") {
    return input
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
      payload.interests = formData.getAll("interests");
    }

    const name = (payload.name as string | undefined)?.trim();
    const email = (payload.email as string | undefined)?.trim();
    const phone = (payload.phone as string | undefined)?.trim();
    const message = (payload.message as string | undefined)?.trim();
    const propertyId = (payload.propertyId as string | undefined)?.trim();
    const propertyName = (payload.propertyName as string | undefined)?.trim();
    const interests = normalizeInterests(payload.interests);

    if (!name || !email || !interests.length) {
      return NextResponse.json(
        { error: "Name, email, and at least one interest are required." },
        { status: 400 }
      );
    }

    const lead = saveLead({
      name,
      email,
      phone,
      message,
      interests,
      propertyId,
      propertyName,
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to save lead", details: (error as Error).message },
      { status: 500 }
    );
  }
}
