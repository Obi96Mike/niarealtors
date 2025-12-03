import { NextResponse } from "next/server";
import { addSubscriber } from "@/data/newsletterStore";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let email: string | null = null;

    if (contentType.includes("application/json")) {
      const body = await request.json();
      email = typeof body.email === "string" ? body.email.trim() : null;
    } else {
      const form = await request.formData();
      const value = form.get("email");
      email = typeof value === "string" ? value.trim() : null;
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    addSubscriber(email);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to subscribe", details: (error as Error).message },
      { status: 500 }
    );
  }
}
