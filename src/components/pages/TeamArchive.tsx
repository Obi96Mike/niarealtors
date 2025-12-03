"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { TeamMemberCard } from "@/components/TeamMemberCard";

interface TeamArchiveProps {
  onNavigate: (page: string, id?: string) => void;
}

export function TeamArchive({ onNavigate }: TeamArchiveProps) {
  const teamMembers = [
    {
      id: "sarah-kamau",
      image: "https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=800&q=80",
      name: "Sarah Kamau",
      role: "Managing Director",
      email: "sarah@niarealtors.co.ke",
      phone: "+254 700 111 111",
    },
    {
      id: "james-mwangi",
      image: "https://images.unsplash.com/photo-1627161684850-52a7d958f8d7?auto=format&fit=max&w=800&q=80",
      name: "James Mwangi",
      role: "Head of Sales",
      email: "james@niarealtors.co.ke",
      phone: "+254 700 222 222",
    },
    {
      id: "grace-wanjiru",
      image: "https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=800&q=80",
      name: "Grace Wanjiru",
      role: "Senior Property Consultant",
      email: "grace@niarealtors.co.ke",
      phone: "+254 700 333 333",
    },
    {
      id: "david-omondi",
      image: "https://images.unsplash.com/photo-1627161684850-52a7d958f8d7?auto=format&fit=max&w=800&q=80",
      name: "David Omondi",
      role: "Commercial Property Specialist",
      email: "david@niarealtors.co.ke",
      phone: "+254 700 444 444",
    },
    {
      id: "mary-njeri",
      image: "https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=800&q=80",
      name: "Mary Njeri",
      role: "Rental Property Manager",
      email: "mary@niarealtors.co.ke",
      phone: "+254 700 555 555",
    },
    {
      id: "peter-kariuki",
      image: "https://images.unsplash.com/photo-1627161684850-52a7d958f8d7?auto=format&fit=max&w=800&q=80",
      name: "Peter Kariuki",
      role: "Investment Advisor",
      email: "peter@niarealtors.co.ke",
      phone: "+254 700 666 666",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581093805071-a04e696db334?auto=format&fit=max&w=1600&q=80"
          alt="Our Team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <span>Our Team</span>
            </nav>
            <h1 className="mb-4 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Our Team
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/90">
              Meet the dedicated professionals committed to your success
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl" style={{ color: "#0D402D" }}>
              Expert Professionals
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our team brings decades of combined experience in Kenya&apos;s real estate market, providing you with
              unmatched expertise and personalized service.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                image={member.image}
                name={member.name}
                role={member.role}
                email={member.email}
                phone={member.phone}
                onViewProfile={() => onNavigate("team-profile", member.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl" style={{ color: "#0D402D" }}>
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Get in touch with our team today to discuss your real estate needs
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="rounded bg-primary px-8 py-3 text-white transition-colors hover:bg-[#0a3222]"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
