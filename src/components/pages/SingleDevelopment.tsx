"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { PropertyCard } from "@/components/PropertyCard";
import { ImageUploadModal } from "@/components/ImageUploadModal";
import { Wifi, Car, Dumbbell, TreePine, Shield, Waves, Plus, Image as ImageIcon } from "lucide-react";

interface SingleDevelopmentProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
  isAdmin?: boolean;
}

export function SingleDevelopment({ onNavigate, onEnquire, isAdmin = false }: SingleDevelopmentProps) {
  const [unitFilters, setUnitFilters] = useState({ propertyType: "", bedrooms: "" });
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [developmentGallery, setDevelopmentGallery] = useState<string[]>([
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=max&w=1600&q=80",
  ]);

  const handleImageUpload = (newImages: string[]) => setDevelopmentGallery([...developmentGallery, ...newImages]);

  const amenities = [
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Car, label: "Secure Parking" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: TreePine, label: "Landscaped Gardens" },
    { icon: Shield, label: "24/7 Security" },
    { icon: Waves, label: "Swimming Pool" },
  ];

  const units = [
    {
      id: "unit-1",
      images: [
        "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Unit A1 - 2 Bedroom Apartment",
      location: "The Gardens Residence",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,800 sqft",
      price: "KSh 18.5M",
    },
    {
      id: "unit-2",
      images: [
        "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Available",
      name: "Unit B2 - 3 Bedroom Apartment",
      location: "The Gardens Residence",
      bedrooms: 3,
      bathrooms: 3,
      size: "2,400 sqft",
      price: "KSh 28.5M",
    },
    {
      id: "unit-3",
      images: [
        "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
        "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
      ],
      status: "Reserved",
      name: "Unit C3 - 4 Bedroom Penthouse",
      location: "The Gardens Residence",
      bedrooms: 4,
      bathrooms: 4,
      size: "3,500 sqft",
      price: "KSh 48M",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80"
          alt="The Gardens Residence"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-8 left-0 right-0">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white">
              <button onClick={() => onNavigate("home")} className="hover:underline">Home</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("buy")} className="hover:underline">Buy</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("developments")} className="hover:underline">Developments</button>
              <span className="mx-2">/</span>
              <span>The Gardens Residence</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
                Just Launched
              </div>
              <h1 className="mb-3 text-4xl" style={{ color: "#0D402D", fontWeight: 600 }}>
                The Gardens Residence
              </h1>
              <p className="text-xl text-muted-foreground">Karen, Nairobi • Premium Residential Development</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              The Gardens Residence is a premium residential development nestled in the prestigious Karen area of Nairobi.
              This exclusive development offers a unique blend of modern architecture, luxury amenities, and serene
              natural surroundings.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="m-0 text-2xl" style={{ color: "#0D402D" }}>
                Development Gallery
              </h2>
              {isAdmin ? (
                <button
                  onClick={() => setUploadModalOpen(true)}
                  className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
                >
                  <Plus className="h-5 w-5" /> Add Images
                </button>
              ) : null}
            </div>
            {developmentGallery.length ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {developmentGallery.map((image, index) => (
                  <div key={image} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={image}
                      alt={`Development ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-secondary p-12 text-center">
                <ImageIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="mb-4 text-muted-foreground">No images uploaded yet</p>
                {isAdmin ? (
                  <button
                    onClick={() => setUploadModalOpen(true)}
                    className="rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
                  >
                    Upload Images
                  </button>
                ) : null}
              </div>
            )}
          </div>

          <div className="mb-16">
            <h2 className="mb-8 text-2xl" style={{ color: "#0D402D" }}>
              Shared Amenities
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {amenities.map((amenity) => (
                <div key={amenity.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <amenity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{amenity.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-6 text-2xl" style={{ color: "#0D402D" }}>
              Location
            </h2>
            <div className="flex h-[400px] items-center justify-center rounded-lg bg-secondary">
              <p className="text-muted-foreground">Map View - Karen, Nairobi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl" style={{ color: "#0D402D" }}>
            Available Units
          </h2>
          <div className="mb-8 flex flex-wrap gap-4">
            <select
              value={unitFilters.propertyType}
              onChange={(e) => setUnitFilters({ ...unitFilters, propertyType: e.target.value })}
              className="rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Property Types</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
            </select>
            <select
              value={unitFilters.bedrooms}
              onChange={(e) => setUnitFilters({ ...unitFilters, bedrooms: e.target.value })}
              className="rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Bedrooms</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
              <PropertyCard
                key={unit.id}
                type="development"
                images={unit.images}
                status={unit.status}
                name={unit.name}
                location={unit.location}
                bedrooms={unit.bedrooms}
                bathrooms={unit.bathrooms}
                size={unit.size}
                price={unit.price}
                onEnquire={() => onEnquire(unit.name)}
                onViewDetails={() => onNavigate("unit", unit.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {isAdmin ? (
        <ImageUploadModal
          isOpen={uploadModalOpen}
          onClose={() => setUploadModalOpen(false)}
          onUpload={handleImageUpload}
          title="Upload Development Images"
        />
      ) : null}
    </div>
  );
}
