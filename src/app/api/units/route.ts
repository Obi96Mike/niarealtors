import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const developmentId = searchParams.get("developmentId");
  const developmentSlug = searchParams.get("developmentSlug");

  const where: Prisma.UnitWhereInput = {};

  if (developmentId) {
    const id = Number(developmentId);
    if (!Number.isNaN(id)) {
      where.developmentId = id;
    }
  }

  if (developmentSlug) {
    where.development = { slug: developmentSlug };
  }

  const units = await prisma.unit.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { development: true },
  });

  return NextResponse.json(units);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = [
      "slug",
      "title",
      "propertyType",
      "bedrooms",
      "bathrooms",
      "price",
      "currency",
      "availabilityStatus",
      "developmentId",
    ];
    const missing = required.filter((field) => body[field] === undefined || body[field] === null || body[field] === "");
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const unit = await prisma.unit.create({
      data: {
        slug: body.slug,
        title: body.title,
        propertyType: body.propertyType,
        bedrooms: Number(body.bedrooms),
        bathrooms: Number(body.bathrooms),
        isEnsuite: Boolean(body.isEnsuite),
        sizeSqm: body.sizeSqm ? Number(body.sizeSqm) : null,
        floorNumber: body.floorNumber ? Number(body.floorNumber) : null,
        price: Number(body.price),
        currency: body.currency,
        availabilityStatus: body.availabilityStatus,
        description: body.description ?? null,
        developmentId: Number(body.developmentId),
      },
    });

    return NextResponse.json(unit, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to create unit", details: (error as Error).message },
      { status: 500 }
    );
  }
}
