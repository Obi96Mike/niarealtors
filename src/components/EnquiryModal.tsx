"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { countryCallingCodes } from "@/data/countryCodes";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
}

export function EnquiryModal({ isOpen, onClose, propertyName }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+254",
    subject: propertyName || "",
    message: "",
  });
  const sortedCountryCodes = useMemo(
    () => [...countryCallingCodes].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        message: formData.message,
        interests: ["Enquiry"],
        propertyName: formData.subject || propertyName,
      }),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-semibold text-[#0D402D]">Get In Touch</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Full Name *
            </label>
            <input
              required
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email Address *
            </label>
            <input
              required
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm">
              Phone Number *
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortedCountryCodes.map(({ code, name, dialCode }) => (
                  <option key={`${code}-${dialCode}`} value={dialCode}>
                    {name} ({dialCode})
                  </option>
                ))}
              </select>
              <input
                required
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm">
              Subject
            </label>
            <input
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Message *
            </label>
            <textarea
              required
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded border-2 border-border px-6 py-3 transition-colors hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
