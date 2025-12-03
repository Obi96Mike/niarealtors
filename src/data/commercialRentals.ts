import { CommercialRental } from "@/types/realEstate";

export const commercialRentals: CommercialRental[] = [
  {
    id: "commriverside-tower",
    slug: "riverside-tower-psf",
    name: "Riverside Tower | Grade A",
    locationRegion: "Nairobi",
    locationArea: "Riverside",
    sizeSqft: 6500,
    price: 230,
    currency: "KES",
    rateType: "per sqft / month",
    onApplication: false,
    galleryImages: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Grade A office spaces with VRV AC, backup power, fiber connectivity, 5 lifts, and ample parking. Flexible floor plates.",
  },
  {
    id: "commwestlands-retail",
    slug: "westlands-retail",
    name: "Westlands Retail Podium",
    locationRegion: "Nairobi",
    locationArea: "Westlands",
    sizeSqft: 2400,
    price: null,
    currency: "KES",
    rateType: "On Application",
    onApplication: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Prime street-level retail with double-height frontage and strong foot traffic from nearby corporate towers.",
  },
];
