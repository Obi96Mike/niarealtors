export type AvailabilityStatus = "Available" | "Reserved" | "Sold";
export type RentalStatus = "Now Letting" | "Waitlisting";

export interface Location {
  region: string;
  area: string;
}

export interface Unit {
  id: string;
  slug: string;
  developmentId: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  isEnsuite: boolean;
  sizeSqm: number;
  floorNumber: number;
  price: number;
  currency: string;
  availabilityStatus: AvailabilityStatus;
  galleryImages: string[];
  description: string;
}

export interface Development {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  locationRegion: string;
  locationArea: string;
  bedsRange: string;
  priceFrom: number;
  currency: string;
  status: string;
  sharedAmenities: string[];
  heroImage: string;
  galleryImages: string[];
  description: string;
  units: Unit[];
}

export interface CommercialForSale {
  id: string;
  slug: string;
  name: string;
  locationRegion: string;
  locationArea: string;
  sizeSqft: number;
  price: number | null;
  currency: string;
  onApplication?: boolean;
  galleryImages: string[];
  description: string;
}

export interface ResidentialRental {
  id: string;
  slug: string;
  title: string;
  locationRegion: string;
  locationArea: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number;
  pricePerMonth: number;
  currency: string;
  status: RentalStatus;
  amenities: string[];
  galleryImages: string[];
  description: string;
}

export interface CommercialRental {
  id: string;
  slug: string;
  name: string;
  locationRegion: string;
  locationArea: string;
  sizeSqft: number;
  price: number | null;
  currency: string;
  rateType: string;
  onApplication?: boolean;
  galleryImages: string[];
  description: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  headshot: string;
  heroImage: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  authorName: string;
  publishedAt: string;
  readTimeMinutes: number;
  featuredImage: string;
  content: string;
  views: number;
  commentsCount: number;
  likes: number;
  tags?: string[];
  category?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  interests: string[];
  propertyId?: string;
  propertyName?: string;
  message?: string;
  createdAt: string;
}
