import { Development } from "@/types/realEstate";

export const developments: Development[] = [
  {
    id: "dev-venus",
    slug: "venus-kileleshwa",
    name: "Venus Residences",
    tagline: "Beautiful 4 bedroom duplexes overlooking the Arboretum",
    locationRegion: "Nairobi",
    locationArea: "Kileleshwa",
    bedsRange: "3-4",
    priceFrom: 23000000,
    currency: "KES",
    status: "Just Launched",
    sharedAmenities: [
      "Heated swimming pool",
      "Sky gym & yoga studio",
      "Backup power",
      "High-speed lifts",
      "Children's play area",
      "Smart access control",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-83fbcb106bce?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Venus Residences is a boutique collection of duplex apartments designed for modern Nairobi living. Expansive glass, warm woods, and airy layouts bring light into every home while premium amenities create a true sanctuary.",
    units: [
      {
        id: "unit-venus-4br",
        slug: "venus-4br-duplex",
        developmentId: "dev-venus",
        title: "4 Bedroom Duplex with Garden",
        bedrooms: 4,
        bathrooms: 4,
        isEnsuite: true,
        sizeSqm: 265,
        floorNumber: 2,
        price: 32500000,
        currency: "KES",
        availabilityStatus: "Available",
        galleryImages: [
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
        ],
        description:
          "Double-volume living spaces, private garden terrace, German kitchen, and ensuite bedrooms with generous storage.",
      },
      {
        id: "unit-venus-3br",
        slug: "venus-3br-loft",
        developmentId: "dev-venus",
        title: "3 Bedroom Loft",
        bedrooms: 3,
        bathrooms: 3,
        isEnsuite: true,
        sizeSqm: 198,
        floorNumber: 5,
        price: 24500000,
        currency: "KES",
        availabilityStatus: "Reserved",
        galleryImages: [
          "https://images.unsplash.com/photo-1505691938895-83fbcb106bce?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
        ],
        description:
          "Sun-drenched loft with double-height windows, open-plan living, and ensuite bedrooms for modern families.",
      },
    ],
  },
  {
    id: "dev-aurora",
    slug: "aurora-riverside",
    name: "Aurora Riverside",
    tagline: "Waterfront apartments with sweeping city views",
    locationRegion: "Nairobi",
    locationArea: "Riverside",
    bedsRange: "2-3",
    priceFrom: 18500000,
    currency: "KES",
    status: "Construction Ongoing",
    sharedAmenities: [
      "Infinity pool",
      "Residents lounge",
      "Pet-friendly park",
      "Fiber-ready",
      "Solar water heating",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Aurora Riverside blends indoor-outdoor living with expansive balconies, soft neutral finishes, and refined detailing. Steps from diplomatic enclaves with quick access to Westlands and CBD.",
    units: [
      {
        id: "unit-aurora-3br",
        slug: "aurora-3br",
        developmentId: "dev-aurora",
        title: "3 Bedroom River View",
        bedrooms: 3,
        bathrooms: 3,
        isEnsuite: true,
        sizeSqm: 210,
        floorNumber: 9,
        price: 21500000,
        currency: "KES",
        availabilityStatus: "Available",
        galleryImages: [
          "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1200&q=80",
        ],
        description:
          "Corner unit with wraparound balcony, panoramic river views, and premium kitchen finishes.",
      },
      {
        id: "unit-aurora-2br",
        slug: "aurora-2br",
        developmentId: "dev-aurora",
        title: "2 Bedroom Haven",
        bedrooms: 2,
        bathrooms: 2,
        isEnsuite: true,
        sizeSqm: 138,
        floorNumber: 6,
        price: 18500000,
        currency: "KES",
        availabilityStatus: "Sold",
        galleryImages: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        ],
        description:
          "Bright open-plan living with full-height windows and tranquil river-facing balcony.",
      },
    ],
  },
];

export const getDevelopmentById = (id: string) =>
  developments.find((dev) => dev.id === id);

export const getDevelopmentBySlug = (slug: string) =>
  developments.find((dev) => dev.slug === slug);
