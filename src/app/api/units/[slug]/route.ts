import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const unit = await prisma.unit.findUnique({
    where: { slug: params.slug },
    include: { development: true },
  });
  if (!unit) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(unit);
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json();
    const unit = await prisma.unit.update({
      where: { slug: params.slug },
      data: {
        slug: body.slug,
        title: body.title,
        propertyType: body.propertyType,
        bedrooms: body.bedrooms !== undefined ? Number(body.bedrooms) : undefined,
        bathrooms: body.bathrooms !== undefined ? Number(body.bathrooms) : undefined,
        isEnsuite: body.isEnsuite !== undefined ? Boolean(body.isEnsuite) : undefined,
        sizeSqm: body.sizeSqm !== undefined ? Number(body.sizeSqm) : undefined,
        floorNumber: body.floorNumber !== undefined ? Number(body.floorNumber) : undefined,
        price: body.price !== undefined ? Number(body.price) : undefined,
        currency: body.currency,
        availabilityStatus: body.availabilityStatus,
        description: body.description,
        developmentId: body.developmentId !== undefined ? Number(body.developmentId) : undefined,
      },
    });
    return NextResponse.json(unit);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to update unit", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await prisma.unit.delete({ where: { slug: params.slug } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to delete unit", details: (error as Error).message },
      { status: 500 }
    );
  }
}
