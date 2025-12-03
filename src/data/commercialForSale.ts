import { CommercialForSale } from "@/types/realEstate";

export const commercialForSale: CommercialForSale[] = [
  {
    id: "commsale-lavington-hub",
    slug: "lavington-hub-offices",
    name: "Lavington Hub Offices",
    locationRegion: "Nairobi",
    locationArea: "Lavington",
    sizeSqft: 5200,
    price: 78000000,
    currency: "KES",
    galleryImages: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Boutique office block with rooftop terrace, backup power, ample parking, and easy access to both Lavington and Kilimani.",
  },
  {
    id: "commsale-thika-warehouses",
    slug: "thika-warehouses",
    name: "Thika Industrial Warehouses",
    locationRegion: "Kiambu",
    locationArea: "Thika Road",
    sizeSqft: 12000,
    price: null,
    currency: "KES",
    onApplication: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Flexible light-industrial warehouses with dock levelers, 12m clear heights, and 3-phase power.",
  },
];
