"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  defaultInterests?: string[];
  propertyId?: string;
  propertyName?: string;
  compact?: boolean;
}

export function LeadForm({
  defaultInterests = [],
  propertyId,
  propertyName,
  compact,
}: LeadFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          interests: defaultInterests,
          propertyId,
          propertyName,
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to send");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError((err as Error).message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-3 rounded-xl border border-border bg-white p-4 shadow-sm",
        compact ? "md:p-4" : "md:p-6"
      )}
    >
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-text-dark">Get in touch</h3>
        {propertyName ? (
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>Property:</span>
            <Badge variant="outline" className="border-brand/30 text-brand">
              {propertyName}
            </Badge>
          </div>
        ) : null}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Input
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Textarea
        placeholder="Tell us what you’re looking for"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={compact ? 3 : 4}
      />
      <div className="flex items-center gap-3">
        <Button
          type="submit"
          className="bg-brand hover:bg-[#0b3424] text-white"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit enquiry"}
        </Button>
        {status === "success" ? (
          <span className="text-sm text-green-700">Sent! We’ll respond shortly.</span>
        ) : null}
        {status === "error" ? (
          <span className="text-sm text-error">Error: {error}</span>
        ) : null}
      </div>
    </form>
  );
}
