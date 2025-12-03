import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { NewUnitForm } from "./new-unit-form";

export default async function NewUnitPage() {
  const developments = await prisma.development.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div className="section-shell py-10 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-text-dark">Add Unit</h1>
          <p className="text-sm text-muted-foreground">
            Create a unit and link it to a development.
          </p>
        </div>
        <Link href="/admin/units" className="text-brand hover:underline">
          Back to list
        </Link>
      </div>
      <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <NewUnitForm developments={developments} />
      </div>
    </div>
  );
}
