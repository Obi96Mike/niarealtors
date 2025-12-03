// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const development = await prisma.development.findUnique({
    where: { slug },
    include: { units: true },
  });
  if (!development) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(development);
}

export async function PUT(request: NextRequest, context: Context) {
  const { slug } = await context.params;
  try {
    const body = await request.json();
    const development = await prisma.development.update({
      where: { slug },
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

export async function DELETE(_request: NextRequest, context: Context) {
  const { slug } = await context.params;
  try {
    await prisma.development.delete({ where: { slug } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to delete development", details: (error as Error).message },
      { status: 500 }
    );
  }
}
