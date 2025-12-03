import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/shared/section";
import { PropertyCard } from "@/components/cards/property-card";
import { commercialForSale } from "@/data/commercialForSale";

export default function CommercialForSalePage() {
  return (
    <div>
      <PageHero
        title="Commercial For Sale"
        subtitle="Income-generating assets and strategic shells for owner-occupiers."
        image="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=80"
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commercialForSale.map((asset) => (
            <PropertyCard
              key={asset.id}
              title={asset.name}
              location={`${asset.locationArea}, ${asset.locationRegion}`}
              image={asset.galleryImages[0]}
              badge="For Sale"
              priceLabel={
                asset.onApplication || asset.price === null
                  ? "On Application"
                  : `${asset.currency} ${asset.price.toLocaleString()}`
              }
              meta={[`${asset.sizeSqft} sqft`]}
              href="#"
              enquireHref={`/contact?property=${asset.slug}`}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
