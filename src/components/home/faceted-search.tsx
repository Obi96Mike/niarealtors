"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";

const propertyTypes = ["Apartment", "Duplex", "Townhouse", "Commercial"];

export function FacetedSearch() {
  const router = useRouter();
  const [mode, setMode] = useState<"buy" | "rent">("buy");
  const [propertyType, setPropertyType] = useState("");
  const [region, setRegion] = useState("");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [budget, setBudget] = useState("");

  const regions = useMemo(
    () => Array.from(new Set(locations.map((loc) => loc.region))),
    []
  );

  const filteredAreas = useMemo(
    () => (region ? locations.filter((loc) => loc.region === region) : locations),
    [region]
  );

  const handleSubmit = () => {
    const params = new URLSearchParams();
    if (propertyType) params.set("type", propertyType);
    if (region) params.set("region", region);
    if (area) params.set("area", area);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (budget) params.set("budget", budget);

    const target =
      mode === "buy"
        ? "/buy/developments"
        : "/rent/residential";

    const url = params.toString() ? `${target}?${params.toString()}` : target;
    router.push(url);
  };

  return (
    <div className="rounded-2xl border border-border bg-white shadow-lg">
      <div className="border-b border-border px-6 py-4">
        <Tabs defaultValue="buy" onValueChange={(v) => setMode(v as "buy" | "rent")}>
          <TabsList className="w-full">
            <TabsTrigger value="buy" className="w-1/2">
              Buy
            </TabsTrigger>
            <TabsTrigger value="rent" className="w-1/2">
              Rent
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid gap-4 px-6 py-4 md:grid-cols-3 lg:grid-cols-6">
        <Select onValueChange={setPropertyType} value={propertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setRegion} value={region}>
          <SelectTrigger>
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setArea} value={area} disabled={!filteredAreas.length}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {filteredAreas.map((loc) => (
              <SelectItem key={`${loc.region}-${loc.area}`} value={loc.area}>
                {loc.area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setBedrooms} value={bedrooms}>
          <SelectTrigger>
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={String(num)}>
                {num}+ Beds
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="number"
          placeholder="Max budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <Button className="bg-brand hover:bg-[#0b3424]" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
}
