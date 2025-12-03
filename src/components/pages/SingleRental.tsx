"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Bed, Bath, Maximize, Wifi, Car, Shield, ChevronLeft, ChevronRight } from "lucide-react";

interface SingleRentalProps {
  onNavigate: (page: string, id?: string) => void;
}

export function SingleRental({ onNavigate }: SingleRentalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+254",
    moveInDate: "",
    message: "",
  });

  const images = [
    "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1662454419736-de132ff75638?auto=format&fit=max&w=1600&q=80",
    "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
  ];

  const amenities = [
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Car, label: "Parking Space" },
    { icon: Shield, label: "24/7 Security" },
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
            <button onClick={() => onNavigate("rent")} className="hover:text-primary">Rent</button>
            <span className="mx-2">/</span>
            <button onClick={() => onNavigate("residential-rentals")} className="hover:text-primary">Residential</button>
            <span className="mx-2">/</span>
            <span>Kilimani Executive Apartment</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-4 h-[500px] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={images[currentImageIndex]}
                alt="Kilimani Executive Apartment"
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

            <div className="mb-8 grid grid-cols-4 gap-4">
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
              <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
                Now Letting
              </div>
              <h1 className="mb-3 text-3xl" style={{ color: "#0D402D", fontWeight: 600 }}>
                Kilimani Executive Apartment
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">Kilimani, Nairobi</p>

              <div className="mb-8 flex items-center space-x-6 rounded-lg bg-secondary p-6">
                <div className="flex items-center">
                  <Bed className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                    <div className="font-medium">2</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                    <div className="font-medium">2</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Maximize className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Size</div>
                    <div className="font-medium">1,400 sqft</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl" style={{ color: "#0D402D" }}>
                  Description
                </h3>
                <p className="mb-4 text-muted-foreground">
                  This beautifully appointed 2-bedroom apartment in the heart of Kilimani offers modern living at its
                  finest. The open-plan living and dining area is bathed in natural light, creating a warm and inviting
                  atmosphere. The modern kitchen comes fully equipped with quality appliances and ample storage.
                </p>
                <p className="text-muted-foreground">
                  Both bedrooms are generously sized with built-in wardrobes, and the master bedroom features an en-suite
                  bathroom. Located in a secure building with 24/7 security, covered parking, and excellent access to
                  shopping centers, restaurants, and major roads.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl" style={{ color: "#0D402D" }}>
                  Amenities
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.label} className="flex items-center rounded-lg bg-secondary p-4">
                      <amenity.icon className="mr-3 h-5 w-5 text-primary" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl" style={{ color: "#0D402D" }}>
                  Location
                </h3>
                <div className="flex h-[300px] items-center justify-center rounded-lg bg-secondary">
                  <p className="text-muted-foreground">Map View - Kilimani, Nairobi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6 rounded-lg border border-border bg-white p-6 shadow-lg">
                <div className="mb-1 text-sm text-muted-foreground">Rent Per Month</div>
                <div className="mb-6 text-3xl" style={{ color: "#0D402D", fontWeight: 600 }}>
                  KSh 120,000
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
                      Email *
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
                      Phone *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="rounded border border-border bg-input-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="+254">+254</option>
                        <option value="+255">+255</option>
                        <option value="+256">+256</option>
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
                    <label htmlFor="moveInDate" className="mb-2 block text-sm">
                      Preferred Move-in Date
                    </label>
                    <input
                      id="moveInDate"
                      type="date"
                      value={formData.moveInDate}
                      onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                      className="w-full rounded border border-border bg-input-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
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
                    Schedule Viewing
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
