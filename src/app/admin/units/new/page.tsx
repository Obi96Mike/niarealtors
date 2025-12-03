import Link from "next/link";
import { NewUnitForm } from "./new-unit-form";
import { developments } from "@/data/developments";

export default async function NewUnitPage() {
  const devOptions = developments.map((dev) => ({ id: dev.id, name: dev.name }));
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
        <NewUnitForm developments={devOptions} />
      </div>
    </div>
  );
}
