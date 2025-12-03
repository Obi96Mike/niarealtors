"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface BuyLandingProps {
  onNavigate: (page: string, id?: string) => void;
}

export function BuyLanding({ onNavigate }: BuyLandingProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764337362016-ae7923282ff6?auto=format&fit=max&w=1600&q=80"
          alt="Buy Property"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Buy Property
            </h1>
            <p className="text-xl text-white/90">Discover your perfect investment opportunity</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div
            onClick={() => onNavigate("developments")}
            className="group relative h-[500px] cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80"
              alt="Developments"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="mb-4 text-3xl" style={{ color: "#FFFFFF" }}>
                Developments
              </h2>
              <p className="mb-6 text-white/90">
                Explore our premium residential developments with modern amenities and excellent locations
              </p>
              <div className="flex items-center text-white transition-transform group-hover:translate-x-2">
                <span className="mr-2">View Developments</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate("commercial")}
            className="group relative h-[500px] cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80"
              alt="Commercial"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="mb-4 text-3xl" style={{ color: "#FFFFFF" }}>
                Commercial Properties
              </h2>
              <p className="mb-6 text-white/90">
                Invest in prime commercial spaces perfect for businesses and high returns
              </p>
              <div className="flex items-center text-white transition-transform group-hover:translate-x-2">
                <span className="mr-2">View Commercial</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
