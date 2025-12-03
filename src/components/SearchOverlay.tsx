"use client";

import { useState } from "react";
import { X, Search } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-4 pt-20">
        <div className="rounded-lg bg-white shadow-2xl">
          <div className="flex items-center border-b border-border p-6">
            <Search className="mr-3 h-6 w-6 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties, locations, or keywords..."
              className="flex-1 text-lg outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="ml-3 rounded-full p-2 transition-colors hover:bg-secondary"
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6">
            <div className="mb-4 text-muted-foreground">Popular Searches</div>
            <div className="flex flex-wrap gap-2">
              {["Westlands Apartments", "Karen Houses", "Kilimani Rentals", "Commercial Spaces"].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-full bg-secondary px-4 py-2 transition-colors hover:bg-primary hover:text-white"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
