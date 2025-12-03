import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const development = await prisma.development.findUnique({
    where: { slug: params.slug },
    include: { units: true },
  });
  if (!development) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(development);
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json();
    const development = await prisma.development.update({
      where: { slug: params.slug },
      data: {
        slug: body.slug,
        name: body.name,
        location: body.location,
        region: body.region,
        status: body.status,
        startingPrice: body.startingPrice !== undefined ? Number(body.startingPrice) : undefined,
        currency: body.currency,
        description: body.description,
        featuredImage: body.featuredImage,
        bedsSummary: body.bedsSummary,
      },
    });
    return NextResponse.json(development);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to update development", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await prisma.development.delete({ where: { slug: params.slug } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to delete development", details: (error as Error).message },
      { status: 500 }
    );
  }
}
