import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { DeleteDevelopmentButton } from "./delete-button";

export default async function AdminDevelopmentsPage() {
  const developments = await prisma.development.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="section-shell py-10 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-text-dark">Developments</h1>
          <p className="text-sm text-muted-foreground">
            Manage developments and link units to each project.
          </p>
        </div>
        <Button asChild className="bg-brand hover:bg-[#0b3424] text-white">
          <Link href="/admin/developments/new">Add Development</Link>
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-background-neutral">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Slug</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Location</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Status</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Price From</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Created</th>
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {developments.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-muted-foreground" colSpan={7}>
                  No developments yet. Create your first one.
                </td>
              </tr>
            ) : (
              developments.map((dev) => (
                <tr key={dev.id} className="hover:bg-background-neutral/60">
                  <td className="px-4 py-3 font-medium text-text-dark">{dev.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{dev.slug}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {dev.location}, {dev.region}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      {dev.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {dev.currency} {dev.startingPrice.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(dev.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/admin/units?developmentId=${dev.id}`}
                        className="text-brand hover:underline"
                      >
                        Manage Units
                      </Link>
                      <Link
                        href={`/buy/developments/${dev.slug}`}
                        className="text-muted-foreground hover:text-brand"
                      >
                        View
                      </Link>
                      <DeleteDevelopmentButton slug={dev.slug} />
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
