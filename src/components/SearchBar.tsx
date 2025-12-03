"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
  const [propertyType, setPropertyType] = useState("");
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (propertyType) params.set("type", propertyType);
    if (region) params.set("region", region);
    if (location) params.set("location", location);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (budget) params.set("budget", budget);
    const target = activeTab === "buy" ? "/buy/developments" : "/rent/residential";
    router.push(params.toString() ? `${target}?${params.toString()}` : target);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-xl">
      <div className="mb-6 flex border-b border-border">
        <button
          onClick={() => setActiveTab("buy")}
          className={`px-6 py-3 border-b-2 transition-colors ${
            activeTab === "buy"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("rent")}
          className={`px-6 py-3 border-b-2 transition-colors ${
            activeTab === "rent"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Rent
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="townhouse">Townhouse</option>
          <option value="commercial">Commercial</option>
        </select>

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Region</option>
          <option value="nairobi">Nairobi</option>
          <option value="mombasa">Mombasa</option>
          <option value="kisumu">Kisumu</option>
          <option value="nakuru">Nakuru</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Location</option>
          <option value="westlands">Westlands</option>
          <option value="karen">Karen</option>
          <option value="kilimani">Kilimani</option>
          <option value="lavington">Lavington</option>
          <option value="runda">Runda</option>
        </select>

        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>

        <div className="flex gap-2">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="flex-1 rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Budget</option>
            <option value="0-50k">Up to KSh 50K</option>
            <option value="50k-100k">KSh 50K - 100K</option>
            <option value="100k-200k">KSh 100K - 200K</option>
            <option value="200k+">KSh 200K+</option>
          </select>
          <button
            onClick={handleSearch}
            className="flex items-center justify-center rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
