"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { PropertyCard } from "@/components/PropertyCard";

interface ResidentialRentalsProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
}

export function ResidentialRentals({ onNavigate, onEnquire }: ResidentialRentalsProps) {
  const [filters, setFilters] = useState({
    location: "",
    bedrooms: "",
    priceRange: "",
    propertyType: "",
  });

  const quickFilters = ["Westlands", "Karen", "Kilimani", "Lavington", "Runda", "Kileleshwa"];

  const rentals = [
    {
      id: "kilimani-apartment",
      images: [
        "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Now Letting",
      name: "Kilimani Executive Apartment",
      location: "Kilimani, Nairobi",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,400 sqft",
      price: "KSh 120,000",
    },
    {
      id: "lavington-home",
      images: [
        "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Lavington Family Home",
      location: "Lavington, Nairobi",
      bedrooms: 4,
      bathrooms: 3,
      size: "3,000 sqft",
      price: "KSh 280,000",
    },
    {
      id: "westlands-studio",
      images: [
        "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Westlands Modern Studio",
      location: "Westlands, Nairobi",
      bedrooms: 1,
      bathrooms: 1,
      size: "650 sqft",
      price: "KSh 65,000",
    },
    {
      id: "karen-villa",
      images: [
        "https://images.unsplash.com/photo-1569571480156-6c3901ef7500?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Now Letting",
      name: "Karen Luxury Villa",
      location: "Karen, Nairobi",
      bedrooms: 5,
      bathrooms: 5,
      size: "4,500 sqft",
      price: "KSh 450,000",
    },
    {
      id: "runda-townhouse",
      images: [
        "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Runda Townhouse",
      location: "Runda, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      size: "2,100 sqft",
      price: "KSh 200,000",
    },
    {
      id: "kileleshwa-apartment",
      images: [
        "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Kileleshwa Apartment",
      location: "Kileleshwa, Nairobi",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,300 sqft",
      price: "KSh 95,000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80"
          alt="Residential Rentals"
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
              <span>Residential</span>
            </nav>
            <h1 className="text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Residential Rentals
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
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="townhouse">Townhouse</option>
              <option value="studio">Studio</option>
            </select>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Locations</option>
              <option value="westlands">Westlands</option>
              <option value="karen">Karen</option>
              <option value="kilimani">Kilimani</option>
              <option value="lavington">Lavington</option>
              <option value="runda">Runda</option>
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
              <option value="0-80k">Up to KSh 80K</option>
              <option value="80k-150k">KSh 80K - 150K</option>
              <option value="150k-250k">KSh 150K - 250K</option>
              <option value="250k+">KSh 250K+</option>
            </select>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-6">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <span className="py-2 text-sm text-muted-foreground">Quick filters:</span>
            {quickFilters.map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Showing {rentals.length} properties</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rentals.map((rental) => (
              <PropertyCard
                key={rental.id}
                type="rental"
                images={rental.images}
                status={rental.status}
                name={rental.name}
                location={rental.location}
                bedrooms={rental.bedrooms}
                bathrooms={rental.bathrooms}
                size={rental.size}
                price={rental.price}
                priceLabel="Per Month"
                onEnquire={() => onEnquire(rental.name)}
                onViewDetails={() => onNavigate("rental", rental.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
