"use client";

import { Shield, X } from "lucide-react";

interface AdminBarProps {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export function AdminBar({ isAdmin, onToggleAdmin }: AdminBarProps) {
  if (!isAdmin) return null;

  return (
    <div className="bg-[#0D402D] py-2 px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-semibold">Admin Mode Active</span>
        </div>
        <button
          onClick={onToggleAdmin}
          className="flex items-center gap-2 text-sm transition-colors hover:text-white/80"
        >
          <span>Exit Admin Mode</span>
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
