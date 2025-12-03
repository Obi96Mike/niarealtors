import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { DeleteUnitButton } from "./delete-button";

interface UnitsPageProps {
  searchParams?: { developmentId?: string };
}

export default async function AdminUnitsPage({ searchParams }: UnitsPageProps) {
  const developmentId = searchParams?.developmentId
    ? Number(searchParams.developmentId)
    : undefined;

  const units = await prisma.unit.findMany({
    where: developmentId ? { developmentId } : undefined,
    orderBy: { createdAt: "desc" },
    include: { development: true },
  });

  const developments = await prisma.development.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="section-shell py-10 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-text-dark">Units</h1>
          <p className="text-sm text-muted-foreground">
            {developmentId
              ? `Filtering by development #${developmentId}`
              : "Manage units across developments."}
          </p>
        </div>
        <Button asChild className="bg-brand hover:bg-[#0b3424] text-white">
          <Link href="/admin/units/new">Add Unit</Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/admin/units"
          className={`rounded-full border px-3 py-1 ${developmentId ? "border-border text-muted-foreground" : "border-brand text-brand"}`}
        >
          All
        </Link>
        {developments.map((dev) => (
          <Link
            key={dev.id}
            href={`/admin/units?developmentId=${dev.id}`}
            className={`rounded-full border px-3 py-1 ${developmentId === dev.id ? "border-brand text-brand" : "border-border text-muted-foreground"}`}
          >
            {dev.name}
          </Link>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-background-neutral">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Title</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Slug</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Bedrooms</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Status</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Price</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Development</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {units.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted-foreground" colSpan={6}>
                  No units found.
                </td>
              </tr>
            ) : (
              units.map((unit) => (
                <tr key={unit.id} className="hover:bg-background-neutral/60">
                  <td className="px-4 py-3 font-medium text-text-dark">{unit.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{unit.slug}</td>
                  <td className="px-4 py-3 text-muted-foreground">{unit.bedrooms}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      {unit.availabilityStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {unit.currency} {unit.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {unit.development?.name || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/buy/units/${unit.slug}`}
                        className="text-muted-foreground hover:text-brand"
                      >
                        View
                      </Link>
                      <DeleteUnitButton slug={unit.slug} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
