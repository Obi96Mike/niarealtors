"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NewUnitFormProps {
  developments: { id: string | number; name: string }[];
}

const availabilityOptions = ["Available", "Reserved", "Sold"];

export function NewUnitForm({ developments }: NewUnitFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    isEnsuite: false,
    sizeSqm: "",
    floorNumber: "",
    price: "",
    currency: "KES",
    availabilityStatus: "Available",
    description: "",
    developmentId: developments[0]?.id?.toString() ?? "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/units", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          bedrooms: Number(form.bedrooms),
          bathrooms: Number(form.bathrooms),
          sizeSqm: form.sizeSqm ? Number(form.sizeSqm) : undefined,
          floorNumber: form.floorNumber ? Number(form.floorNumber) : undefined,
          price: Number(form.price),
          developmentId: form.developmentId,
        }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to create unit");
      }
      router.push("/admin/units");
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
          <label className="text-sm font-semibold text-text-dark">Title</label>
          <Input
            required
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Slug</label>
          <Input
            required
            value={form.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
            placeholder="unit-101"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Property Type</label>
          <Input
            required
            value={form.propertyType}
            onChange={(e) => handleChange("propertyType", e.target.value)}
            placeholder="Apartment, Penthouse"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Bedrooms</label>
          <Input
            required
            type="number"
            value={form.bedrooms}
            onChange={(e) => handleChange("bedrooms", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Bathrooms</label>
          <Input
            required
            type="number"
            value={form.bathrooms}
            onChange={(e) => handleChange("bathrooms", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 pt-6">
          <input
            id="isEnsuite"
            type="checkbox"
            checked={form.isEnsuite}
            onChange={(e) => handleChange("isEnsuite", e.target.checked)}
            className="h-4 w-4 rounded border-border text-brand focus:ring-brand"
          />
          <label htmlFor="isEnsuite" className="text-sm font-semibold text-text-dark">
            Ensuite
          </label>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Size (sqm)</label>
          <Input
            type="number"
            value={form.sizeSqm}
            onChange={(e) => handleChange("sizeSqm", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Floor Number</label>
          <Input
            type="number"
            value={form.floorNumber}
            onChange={(e) => handleChange("floorNumber", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark">Price</label>
          <Input
            required
            type="number"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
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
          <label className="text-sm font-semibold text-text-dark">Availability</label>
          <Select
            value={form.availabilityStatus}
            onValueChange={(val) => handleChange("availabilityStatus", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {availabilityOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-text-dark">Development</label>
          <Select
            value={form.developmentId}
            onValueChange={(val) => handleChange("developmentId", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select development" />
            </SelectTrigger>
            <SelectContent>
              {developments.map((dev) => (
                <SelectItem key={dev.id} value={dev.id.toString()}>
                  {dev.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-text-dark">Description</label>
          <Textarea
            rows={4}
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
        {submitting ? "Creating..." : "Create Unit"}
      </Button>
    </form>
  );
}
