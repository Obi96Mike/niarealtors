"use client";

import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  slug: string;
}

export function DeleteUnitButton({ slug }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete this unit?");
    if (!confirmed) return;
    const res = await fetch(`/api/units/${slug}`, { method: "DELETE" });
    if (!res.ok) {
      alert("Failed to delete unit");
      return;
    }
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-error hover:underline"
      type="button"
    >
      Delete
    </button>
  );
}
