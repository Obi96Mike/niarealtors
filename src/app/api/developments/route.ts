import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.development.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const requiredFields = [
      "slug",
      "name",
      "location",
      "region",
      "status",
      "startingPrice",
      "currency",
      "description",
      "featuredImage",
      "bedsSummary",
    ];

    const missing = requiredFields.filter((field) => !body[field]);
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const development = await prisma.development.create({
      data: {
        slug: body.slug,
        name: body.name,
        location: body.location,
        region: body.region,
        status: body.status,
        startingPrice: Number(body.startingPrice),
        currency: body.currency,
        description: body.description,
        featuredImage: body.featuredImage,
        bedsSummary: body.bedsSummary,
      },
    });

    return NextResponse.json(development, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to create development", details: (error as Error).message },
      { status: 500 }
    );
  }
}
