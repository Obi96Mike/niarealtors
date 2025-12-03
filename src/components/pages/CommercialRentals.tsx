"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { PropertyCard } from "@/components/PropertyCard";

interface CommercialRentalsProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
}

export function CommercialRentals({ onNavigate, onEnquire }: CommercialRentalsProps) {
  const [filters, setFilters] = useState({
    location: "",
    size: "",
    priceRange: "",
    propertyType: "",
  });

  const commercialProperties = [
    {
      id: "westlands-office",
      images: [
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Westlands Office Space",
      location: "Westlands, Nairobi",
      size: "2,500 sqft",
      price: "KSh 230 PSF",
      priceLabel: "Per Month",
    },
    {
      id: "kilimani-retail",
      images: [
        "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Kilimani Retail Unit",
      location: "Kilimani, Nairobi",
      size: "1,200 sqft",
      price: "KSh 180 PSF",
      priceLabel: "Per Month",
    },
    {
      id: "upperhill-office",
      images: [
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Now Letting",
      name: "Upper Hill Corporate Office",
      location: "Upper Hill, Nairobi",
      size: "4,000 sqft",
      price: "KSh 280 PSF",
      priceLabel: "Per Month",
    },
    {
      id: "cbd-office",
      images: [
        "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "CBD Prime Office",
      location: "CBD, Nairobi",
      size: "3,200 sqft",
      price: "KSh 250 PSF",
      priceLabel: "Per Month",
    },
    {
      id: "karen-warehouse",
      images: [
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Karen Warehouse",
      location: "Karen, Nairobi",
      size: "8,000 sqft",
      price: "KSh 120 PSF",
      priceLabel: "Per Month",
    },
    {
      id: "parklands-showroom",
      images: [
        "https://images.unsplash.com/photo-1635107624924-c209ff7330b7?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Now Letting",
      name: "Parklands Showroom",
      location: "Parklands, Nairobi",
      size: "1,800 sqft",
      price: "KSh 200 PSF",
      priceLabel: "Per Month",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80"
          alt="Commercial Rentals"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("rent")} className="hover:text-white">Rent</button>
              <span className="mx-2">/</span>
              <span>Commercial</span>
            </nav>
            <h1 className="text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Commercial Rentals
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <select
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Property Types</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="warehouse">Warehouse</option>
              <option value="showroom">Showroom</option>
            </select>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Locations</option>
              <option value="westlands">Westlands</option>
              <option value="kilimani">Kilimani</option>
              <option value="upperhill">Upper Hill</option>
              <option value="cbd">CBD</option>
              <option value="karen">Karen</option>
            </select>
            <select
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Sizes</option>
              <option value="0-2000">Up to 2,000 sqft</option>
              <option value="2000-5000">2,000 - 5,000 sqft</option>
              <option value="5000+">5,000+ sqft</option>
            </select>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Prices</option>
              <option value="0-150">Up to KSh 150 PSF</option>
              <option value="150-250">KSh 150 - 250 PSF</option>
              <option value="250+">KSh 250+ PSF</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Showing {commercialProperties.length} properties</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {commercialProperties.map((property) => (
              <PropertyCard
                key={property.id}
                type="commercial"
                images={property.images}
                status={property.status}
                name={property.name}
                location={property.location}
                size={property.size}
                price={property.price}
                priceLabel={property.priceLabel}
                onEnquire={() => onEnquire(property.name)}
                onViewDetails={() => onNavigate("commercial-rental", property.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
