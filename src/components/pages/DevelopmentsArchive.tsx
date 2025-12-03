"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { PropertyCard } from "@/components/PropertyCard";

interface DevelopmentsArchiveProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
}

export function DevelopmentsArchive({ onNavigate, onEnquire }: DevelopmentsArchiveProps) {
  const [filters, setFilters] = useState({
    location: "",
    bedrooms: "",
    priceRange: "",
    status: "",
  });

  const developments = [
    {
      id: "gardens-residence",
      images: [
        "https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Just Launched",
      name: "The Gardens Residence",
      location: "Karen, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      size: "2,400 sqft",
      price: "KSh 28.5M",
    },
    {
      id: "westlands-heights",
      images: [
        "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Selling Fast",
      name: "Westlands Heights",
      location: "Westlands, Nairobi",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,800 sqft",
      price: "KSh 18.5M",
    },
    {
      id: "runda-villas",
      images: [
        "https://images.unsplash.com/photo-1764337362016-ae7923282ff6?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1709420838688-ccd0517d6a2d?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Coming Soon",
      name: "Runda Villas",
      location: "Runda, Nairobi",
      bedrooms: 4,
      bathrooms: 4,
      size: "3,500 sqft",
      price: "KSh 45M",
    },
    {
      id: "kilimani-towers",
      images: [
        "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Kilimani Towers",
      location: "Kilimani, Nairobi",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,600 sqft",
      price: "KSh 16M",
    },
    {
      id: "lavington-court",
      images: [
        "https://images.unsplash.com/photo-1569571480156-6c3901ef7500?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Lavington Court",
      location: "Lavington, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      size: "2,200 sqft",
      price: "KSh 32M",
    },
    {
      id: "riverside-estate",
      images: [
        "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Selling Fast",
      name: "Riverside Estate",
      location: "Riverside Drive, Nairobi",
      bedrooms: 4,
      bathrooms: 4,
      size: "3,200 sqft",
      price: "KSh 52M",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764337362016-ae7923282ff6?auto=format&fit=max&w=1600&q=80"
          alt="Developments"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("buy")} className="hover:text-white">Buy</button>
              <span className="mx-2">/</span>
              <span>Developments</span>
            </nav>
            <h1 className="text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Property Developments
            </h1>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Locations</option>
              <option value="karen">Karen</option>
              <option value="westlands">Westlands</option>
              <option value="runda">Runda</option>
              <option value="kilimani">Kilimani</option>
              <option value="lavington">Lavington</option>
            </select>
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Prices</option>
              <option value="0-20m">Up to KSh 20M</option>
              <option value="20m-35m">KSh 20M - 35M</option>
              <option value="35m-50m">KSh 35M - 50M</option>
              <option value="50m+">KSh 50M+</option>
            </select>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="launching">Just Launched</option>
              <option value="selling">Selling Fast</option>
              <option value="coming">Coming Soon</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Showing {developments.length} developments</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {developments.map((dev) => (
              <PropertyCard
                key={dev.id}
                type="development"
                images={dev.images}
                status={dev.status}
                name={dev.name}
                location={dev.location}
                bedrooms={dev.bedrooms}
                bathrooms={dev.bathrooms}
                size={dev.size}
                price={dev.price}
                onEnquire={() => onEnquire(dev.name)}
                onViewDetails={() => onNavigate("development", dev.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
