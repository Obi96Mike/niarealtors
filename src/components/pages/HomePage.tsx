"use client";

import { ArrowRight } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { BlogCard } from "@/components/BlogCard";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
}

export default function HomePage({ onNavigate, onEnquire }: HomePageProps) {
  return (
    <>
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709420838688-ccd0517d6a2d?auto=format&fit=max&w=1600&q=80"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl mb-4" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Find Your Dream Home in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover exceptional properties across the nation
            </p>
            <button
              onClick={() => onNavigate("developments")}
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded hover:bg-[#0a3222] transition-colors"
            >
              View Developments
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Featured Developments
              </h2>
              <p className="text-muted-foreground">Explore our premium property developments</p>
            </div>
            <button
              onClick={() => onNavigate("developments")}
              className="flex items-center text-primary hover:underline"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              type="development"
              images={[
                "https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80",
                "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
              ]}
              status="Just Launched"
              name="The Gardens Residence"
              location="Karen, Nairobi"
              bedrooms={3}
              bathrooms={3}
              size="2,400 sqft"
              price="KSh 28.5M"
              onEnquire={() => onEnquire("The Gardens Residence")}
              onViewDetails={() => onNavigate("development", "gardens-residence")}
            />

            <PropertyCard
              type="development"
              images={[
                "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
                "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
              ]}
              status="Selling Fast"
              name="Westlands Heights"
              location="Westlands, Nairobi"
              bedrooms={2}
              bathrooms={2}
              size="1,800 sqft"
              price="KSh 18.5M"
              onEnquire={() => onEnquire("Westlands Heights")}
              onViewDetails={() => onNavigate("development", "westlands-heights")}
            />

            <PropertyCard
              type="development"
              images={[
                "https://images.unsplash.com/photo-1764337362016-ae7923282ff6?auto=format&fit=max&w=1600&q=80",
                "https://images.unsplash.com/photo-1709420838688-ccd0517d6a2d?auto=format&fit=max&w=1600&q=80",
              ]}
              status="Coming Soon"
              name="Runda Villas"
              location="Runda, Nairobi"
              bedrooms={4}
              bathrooms={4}
              size="3,500 sqft"
              price="KSh 45M"
              onEnquire={() => onEnquire("Runda Villas")}
              onViewDetails={() => onNavigate("development", "runda-villas")}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Featured Rentals
              </h2>
              <p className="text-muted-foreground">Premium properties available for rent</p>
            </div>
            <button
              onClick={() => onNavigate("residential-rentals")}
              className="flex items-center text-primary hover:underline"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              type="rental"
              images={[
                "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
                "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
              ]}
              status="Now Letting"
              name="Kilimani Executive Apartment"
              location="Kilimani, Nairobi"
              bedrooms={2}
              bathrooms={2}
              size="1,400 sqft"
              price="KSh 120,000"
              priceLabel="Per Month"
              onEnquire={() => onEnquire("Kilimani Executive Apartment")}
              onViewDetails={() => onNavigate("rental", "kilimani-apartment")}
            />

            <PropertyCard
              type="rental"
              images={[
                "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
                "https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80",
              ]}
              status="Available"
              name="Lavington Family Home"
              location="Lavington, Nairobi"
              bedrooms={4}
              bathrooms={3}
              size="3,000 sqft"
              price="KSh 280,000"
              priceLabel="Per Month"
              onEnquire={() => onEnquire("Lavington Family Home")}
              onViewDetails={() => onNavigate("rental", "lavington-home")}
            />

            <PropertyCard
              type="rental"
              images={[
                "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?auto=format&fit=max&w=1600&q=80",
                "https://images.unsplash.com/photo-1764337362016-ae7923282ff6?auto=format&fit=max&w=1600&q=80",
              ]}
              status="Available"
              name="Westlands Office Space"
              location="Westlands, Nairobi"
              size="2,500 sqft"
              price="KSh 230 PSF"
              priceLabel="Per Month"
              onEnquire={() => onEnquire("Westlands Office Space")}
              onViewDetails={() => onNavigate("commercial-rental", "westlands-office")}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80"
                alt="About Nia Realtors"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="mb-6" style={{ color: "#0D402D" }}>
                About Nia Realtors
              </h2>
              <p className="text-muted-foreground mb-6">
                Nia Realtors is Kenya&apos;s premier real estate destination, dedicated to connecting discerning clients with exceptional properties across the nation. With years of experience and deep market knowledge, we provide personalized service that transforms your property dreams into reality.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of dedicated professionals brings unparalleled expertise in residential developments, luxury rentals, and commercial properties. We pride ourselves on our commitment to excellence, integrity, and client satisfaction.
              </p>
              <button
                onClick={() => onNavigate("about")}
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded hover:bg-[#0a3222] transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">Expert professionals dedicated to your success</p>
            </div>
            <button
              onClick={() => onNavigate("team")}
              className="flex items-center text-primary hover:underline"
            >
              View Full Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              image="https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?auto=format&fit=max&w=800&q=80"
              name="Sarah Kamau"
              role="Managing Director"
              email="sarah@niarealtors.co.ke"
              phone="+254 700 111 111"
              onViewProfile={() => onNavigate("team-profile", "sarah-kamau")}
            />

            <TeamMemberCard
              image="https://images.unsplash.com/photo-1581093805071-a04e696db334?auto=format&fit=max&w=800&q=80"
              name="James Mwangi"
              role="Head of Sales"
              email="james@niarealtors.co.ke"
              phone="+254 700 222 222"
              onViewProfile={() => onNavigate("team-profile", "james-mwangi")}
            />

            <TeamMemberCard
              image="https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?auto=format&fit=max&w=800&q=80"
              name="Grace Wanjiru"
              role="Senior Property Consultant"
              email="grace@niarealtors.co.ke"
              phone="+254 700 333 333"
              onViewProfile={() => onNavigate("team-profile", "grace-wanjiru")}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Latest Insights
              </h2>
              <p className="text-muted-foreground">Expert advice and market updates</p>
            </div>
            <button
              onClick={() => onNavigate("insights")}
              className="flex items-center text-primary hover:underline"
            >
              Read All Insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              image="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80"
              title="Investing in Kenya's Real Estate Market in 2025"
              excerpt="Discover the key trends and opportunities shaping Kenya's property market this year."
              author="Sarah Kamau"
              date="Dec 1, 2025"
              readTime="5 min read"
              views={1234}
              comments={23}
              likes={89}
              category="Property Investment"
              onReadMore={() => onNavigate("blog-post", "investing-kenya-2025")}
            />

            <BlogCard
              image="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80"
              title="Top 5 Neighborhoods in Nairobi for Young Professionals"
              excerpt="Find the perfect location that matches your lifestyle and budget."
              author="James Mwangi"
              date="Nov 28, 2025"
              readTime="7 min read"
              views={2156}
              comments={45}
              likes={167}
              category="Design & Lifestyle"
              onReadMore={() => onNavigate("blog-post", "top-neighborhoods")}
            />

            <BlogCard
              image="https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80"
              title="Understanding Property Development Timelines in Kenya"
              excerpt="What to expect when investing in off-plan developments."
              author="Grace Wanjiru"
              date="Nov 25, 2025"
              readTime="6 min read"
              views={987}
              comments={12}
              likes={54}
              category="Property Investment"
              onReadMore={() => onNavigate("blog-post", "development-timelines")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
