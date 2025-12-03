"use client";

import { Target, Heart, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface AboutUsProps {
  onNavigate: (page: string, id?: string) => void;
}

export function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581093805071-a04e696db334?auto=format&fit=crop&w=1600&q=80"
          alt="About Nia Realtors"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl md:text-6xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              About Nia Realtors
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90">
              Kenya&apos;s premier real estate destination, dedicated to excellence and integrity
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-6 text-3xl" style={{ color: "#0D402D" }}>
              Our Vision
            </h2>
            <p className="mb-4 text-muted-foreground">
              To be Kenya&apos;s most trusted and innovative real estate partner, transforming the property landscape
              through exceptional service, integrity, and deep market expertise.
            </p>
            <p className="text-muted-foreground">
              We envision a future where every client finds their perfect property match, backed by transparent
              processes, professional guidance, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=crop&w=1600&q=80"
              alt="Our Vision"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 relative h-96 overflow-hidden rounded-lg lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=crop&w=1600&q=80"
              alt="Our Philosophy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-6 text-3xl" style={{ color: "#0D402D" }}>
              Our Philosophy
            </h2>
            <p className="mb-4 text-muted-foreground">
              At Nia Realtors, we believe that real estate is more than just transactions—it&apos;s about building
              relationships, understanding dreams, and creating lasting value for our clients.
            </p>
            <p className="text-muted-foreground">
              Our client-first philosophy means we listen carefully, act with integrity, and go above and beyond to
              ensure every interaction exceeds expectations. We&apos;re not just selling properties; we&apos;re helping
              you build your future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl" style={{ color: "#0D402D" }}>
              What We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Comprehensive real estate services tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Property Sales", icon: Award, desc: "Expert guidance in buying and selling residential and commercial properties across Kenya" },
              { title: "Property Rentals", icon: Users, desc: "Curated selection of rental properties from studios to luxury villas and commercial spaces" },
              { title: "Investment Advisory", icon: TrendingUp, desc: "Strategic insights and market analysis to help you make informed investment decisions" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-secondary p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl" style={{ color: "#0D402D" }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl" style={{ color: "#0D402D" }}>
              Our Approach
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A systematic, client-focused methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Listen & Understand", desc: "We start by deeply understanding your needs, preferences, and goals" },
              { step: "02", title: "Research & Match", desc: "Our team conducts thorough market research to find perfect matches" },
              { step: "03", title: "Guide & Support", desc: "We provide expert guidance throughout the entire process" },
              { step: "04", title: "Close & Follow-up", desc: "Seamless transactions and continued support after closing" },
            ].map((item) => (
              <div key={item.step} className="rounded-lg bg-white p-6">
                <div className="mb-4 text-4xl font-semibold" style={{ color: "#0D402D", opacity: 0.2 }}>
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg" style={{ color: "#0D402D" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl" style={{ color: "#0D402D" }}>
              Our Commitment
            </h2>
            <div className="space-y-4">
              {[
                "Transparent and honest communication at every step",
                "Deep market knowledge and local expertise",
                "Personalized service tailored to your unique needs",
                "Professional integrity in all our dealings",
                "Long-term relationships built on trust",
                "Continuous market research and innovation",
              ].map((commitment) => (
                <div key={commitment} className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=crop&w=1600&q=80"
              alt="Our Commitment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl" style={{ color: "#FFFFFF" }}>
            Ready to Find Your Dream Property?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Let our experienced team guide you through your real estate journey
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate("contact")}
              className="rounded bg-white px-8 py-3 text-primary transition-colors hover:bg-white/90"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate("team")}
              className="rounded border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white/10"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
