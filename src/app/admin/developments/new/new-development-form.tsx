"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const statusOptions = ["Just Launched", "Construction Ongoing", "Sold Out"];

export function NewDevelopmentForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    slug: "",
    location: "",
    region: "",
    status: "Just Launched",
    startingPrice: "",
    currency: "KES",
    bedsSummary: "",
    featuredImage: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/developments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          startingPrice: Number(form.startingPrice),
        }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to create development");
      }
      router.push("/admin/developments");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Name</label>
          <Input
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Slug</label>
          <Input
            required
            value={form.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
            placeholder="enaki-forestside"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Location</label>
          <Input
            required
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Kileleshwa"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Region</label>
          <Input
            required
            value={form.region}
            onChange={(e) => handleChange("region", e.target.value)}
            placeholder="Nairobi"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Status</label>
          <Select
            value={form.status}
            onValueChange={(val) => handleChange("status", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Starting Price</label>
          <Input
            required
            type="number"
            value={form.startingPrice}
            onChange={(e) => handleChange("startingPrice", e.target.value)}
            placeholder="16000000"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Currency</label>
          <Input
            required
            value={form.currency}
            onChange={(e) => handleChange("currency", e.target.value)}
            placeholder="KES"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Beds Summary</label>
          <Input
            required
            value={form.bedsSummary}
            onChange={(e) => handleChange("bedsSummary", e.target.value)}
            placeholder="1, 2, 3 & 4 Bedroom"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-text-dark">Featured Image URL</label>
          <Input
            required
            value={form.featuredImage}
            onChange={(e) => handleChange("featuredImage", e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-text-dark">Description</label>
          <Textarea
            required
            rows={5}
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>
      {error ? <p className="text-sm text-error">{error}</p> : null}
      <Button
        type="submit"
        className="bg-brand hover:bg-[#0b3424] text-white"
        disabled={submitting}
      >
        {submitting ? "Creating..." : "Create Development"}
      </Button>
    </form>
  );
}
