import Link from "next/link";
import { NewDevelopmentForm } from "./new-development-form";

export default function NewDevelopmentPage() {
  return (
    <div className="section-shell py-10 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-text-dark">Add Development</h1>
          <p className="text-sm text-muted-foreground">
            Create a new development and then add units under it.
          </p>
        </div>
        <Link href="/admin/developments" className="text-brand hover:underline">
          Back to list
        </Link>
      </div>
      <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <NewDevelopmentForm />
      </div>
    </div>
  );
}
