"use client";

import { useMemo, useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Bed, Bath, Maximize, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { countryCallingCodes } from "@/data/countryCodes";

interface SingleUnitProps {
  onNavigate: (page: string, id?: string) => void;
}

export function SingleUnit({ onNavigate }: SingleUnitProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+254",
    message: "",
  });
  const sortedCountryCodes = useMemo(
    () => [...countryCallingCodes].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  const images = [
    "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-white py-4">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground">
            <button onClick={() => onNavigate("home")} className="hover:text-primary">Home</button>
            <span className="mx-2">/</span>
            <button onClick={() => onNavigate("buy")} className="hover:text-primary">Buy</button>
            <span className="mx-2">/</span>
            <button onClick={() => onNavigate("developments")} className="hover:text-primary">Developments</button>
            <span className="mx-2">/</span>
            <button onClick={() => onNavigate("development")} className="hover:text-primary">The Gardens Residence</button>
            <span className="mx-2">/</span>
            <span>Unit B2</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="relative mb-4 h-[500px] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={images[currentImageIndex]}
                alt="Unit B2"
                className="h-full w-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 overflow-hidden rounded-lg ${
                    index === currentImageIndex ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <ImageWithFallback src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <div>
              <div className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                Available
              </div>
              <h1 className="mb-2 text-3xl" style={{ color: "#0D402D", fontWeight: 600 }}>
                Unit B2 - 3 Bedroom Apartment
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">The Gardens Residence, Karen</p>
              <div className="mb-8 text-3xl" style={{ color: "#0D402D", fontWeight: 600 }}>
                KSh 28.5M
              </div>

              <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-secondary p-6">
                <div className="flex items-center">
                  <Bed className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                    <div className="font-medium">3</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                    <div className="font-medium">3</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Maximize className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Size</div>
                    <div className="font-medium">2,400 sqft</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Floor</div>
                    <div className="font-medium">2nd Floor</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl" style={{ color: "#0D402D" }}>
                  Description
                </h3>
                <p className="text-muted-foreground">
                  This stunning 3-bedroom apartment offers spacious living areas with floor-to-ceiling windows that flood
                  the space with natural light. The modern kitchen features high-end appliances and ample storage. Each
                  bedroom includes built-in wardrobes, with the master suite offering an en-suite bathroom and private
                  balcony with garden views.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl" style={{ color: "#0D402D" }}>
                  Features
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  {[
                    "En-suite bathrooms",
                    "Built-in wardrobes",
                    "Modern kitchen",
                    "Private balcony",
                    "2 Parking spaces",
                    "Storage room",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <div className="mb-6 rounded-lg border border-border bg-white p-6 shadow-lg">
                <div className="mb-1 text-sm text-muted-foreground">Price</div>
                <div className="mb-6 text-3xl" style={{ color: "#0D402D", fontWeight: 600 }}>
                  KSh 28.5M
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="rounded border border-border bg-input-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {sortedCountryCodes.map(({ code, name, dialCode }) => (
                          <option key={`${code}-${dialCode}`} value={dialCode}>
                            {name} ({dialCode})
                          </option>
                        ))}
                      </select>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 rounded border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
