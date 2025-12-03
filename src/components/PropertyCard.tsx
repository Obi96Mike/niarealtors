"use client";

import { useState } from "react";
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  type: "development" | "rental" | "commercial";
  images: string[];
  status?: string;
  name: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  price: string;
  priceLabel?: string;
  onEnquire?: () => void;
  onViewDetails?: () => void;
}

export function PropertyCard({
  images,
  status,
  name,
  location,
  bedrooms,
  bathrooms,
  size,
  price,
  priceLabel = "From",
  onEnquire,
  onViewDetails,
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 cursor-pointer overflow-hidden" onClick={onViewDetails}>
        <ImageWithFallback
          src={images[currentImageIndex]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {status ? (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-white">
            {status}
          </div>
        ) : null}
        {images.length > 1 ? (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="p-5">
        <h3
          className="mb-2 cursor-pointer text-lg font-semibold text-[#0D402D] transition-colors hover:text-primary"
          onClick={onViewDetails}
        >
          {name}
        </h3>
        <div className="mb-3 flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
          {bedrooms !== undefined ? (
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              <span>{bedrooms} Bed</span>
            </div>
          ) : null}
          {bathrooms !== undefined ? (
            <div className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              <span>{bathrooms} Bath</span>
            </div>
          ) : null}
          {size ? (
            <div className="flex items-center">
              <Maximize className="mr-1 h-4 w-4" />
              <span>{size}</span>
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <div className="text-sm text-muted-foreground">{priceLabel}</div>
          <div className="text-2xl font-semibold text-[#0D402D]">{price}</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onEnquire}
            className="flex-1 rounded border-2 border-primary px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Enquire
          </button>
          <button
            onClick={onViewDetails}
            className="flex-1 rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-[#0a3222]"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
