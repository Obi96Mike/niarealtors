"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

interface SearchOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (payload: { mode: "buy" | "rent"; query: string }) => void;
}

export function SearchOverlay({ open, onOpenChange, onSubmit }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"buy" | "rent">("buy");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onSubmit?.({ mode, query });
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-text-dark">
            Search properties with natural language
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Tabs defaultValue="buy" onValueChange={(v) => setMode(v as "buy" | "rent")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="rent">Rent</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. 3 bedroom in Kilimani with a pool"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
            <Button onClick={handleSubmit} className="bg-brand hover:bg-[#0b3424] text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            We&apos;ll parse bedrooms, location, and budget to filter through the listings.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
