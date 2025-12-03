import { ResidentialRental } from "@/types/realEstate";

export const residentialRentals: ResidentialRental[] = [
  {
    id: "rent-riverside-loft",
    slug: "riverside-loft",
    title: "Riverside Loft | 3 Bedroom + DSQ",
    locationRegion: "Nairobi",
    locationArea: "Riverside",
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 185,
    pricePerMonth: 260000,
    currency: "KES",
    status: "Now Letting",
    amenities: [
      "Heated pool",
      "Backup generator",
      "High-speed lifts",
      "Gym",
      "DSQ",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Sun-filled corner apartment with floor-to-ceiling windows, open kitchen, ensuite bedrooms, and DSQ. Secure compound close to Lavington and Westlands.",
  },
  {
    id: "rent-kilimani-duplex",
    slug: "kilimani-duplex",
    title: "Kilimani Duplex | 4 Bedroom Sky Villa",
    locationRegion: "Nairobi",
    locationArea: "Kilimani",
    bedrooms: 4,
    bathrooms: 4,
    sizeSqm: 240,
    pricePerMonth: 320000,
    currency: "KES",
    status: "Now Letting",
    amenities: ["Sky lounge", "Pool", "Full backup", "Fingerprint access"],
    galleryImages: [
      "https://images.unsplash.com/photo-1505691938895-83fbcb106bce?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Elegant duplex with double-height living, panoramic city views, and premium European finishes. Steps from Adlife Plaza and Yaya Centre.",
  },
  {
    id: "rent-parklands-2br",
    slug: "parklands-2br",
    title: "Parklands | 2 Bedroom Modern",
    locationRegion: "Nairobi",
    locationArea: "Parklands",
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 118,
    pricePerMonth: 140000,
    currency: "KES",
    status: "Waitlisting",
    amenities: ["Gym", "Borehole", "Fibre-ready"],
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Bright, efficient layout ideal for professionals. Close to Westlands and UN Avenue with easy access to schools and shopping.",
  },
];
