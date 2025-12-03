"use client";

import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  slug: string;
}

export function DeleteDevelopmentButton({ slug }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete this development? This will remove its units.");
    if (!confirmed) return;
    const res = await fetch(`/api/developments/${slug}`, { method: "DELETE" });
    if (!res.ok) {
      alert("Failed to delete development");
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
