"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Mail, Phone, Linkedin } from "lucide-react";

interface TeamProfileProps {
  onNavigate: (page: string, id?: string) => void;
}

export function TeamProfile({ onNavigate }: TeamProfileProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?auto=format&fit=max&w=1600&q=80"
          alt="Sarah Kamau"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-8 left-0 right-0">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white">
              <button onClick={() => onNavigate("home")} className="hover:underline">Home</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("team")} className="hover:underline">Our Team</button>
              <span className="mx-2">/</span>
              <span>Sarah Kamau</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <h1 className="mb-2 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Sarah Kamau
            </h1>
            <p className="text-xl text-white/90">Managing Director</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <div className="relative mb-6 h-[400px] overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=1600&q=80"
                alt="Sarah Kamau"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-lg bg-secondary p-6">
              <h3 className="mb-4 text-lg" style={{ color: "#0D402D" }}>
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <a href="mailto:sarah@niarealtors.co.ke" className="transition-colors hover:text-primary">
                    sarah@niarealtors.co.ke
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <a href="tel:+254700111111" className="transition-colors hover:text-primary">
                    +254 700 111 111
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Linkedin className="mr-3 h-5 w-5 text-primary" />
                  <a href="https://www.linkedin.com/company/nia-realtors/" className="transition-colors hover:text-primary">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <button className="mt-6 w-full rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]">
                Schedule a Meeting
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl" style={{ color: "#0D402D" }}>
              Biography
            </h2>
            <div className="prose max-w-none space-y-4 text-muted-foreground">
              <p>
                Sarah Kamau is the Managing Director of Nia Realtors, bringing over 15 years of experience in Kenya&apos;s
                real estate industry. Under her leadership, Nia Realtors has become one of the most trusted names in
                property sales and rentals across Nairobi and beyond.
              </p>
              <p>
                With a Bachelor&apos;s degree in Business Administration from the University of Nairobi and an MBA from
                Strathmore Business School, Sarah combines academic excellence with practical industry knowledge. Her
                career began in property valuation before transitioning to sales.
              </p>
              <p>
                Sarah&apos;s approach is built on integrity, expertise, and client satisfaction. She believes every
                property transaction is a life-changing moment and advocates for ethical practices and transparency.
              </p>
              <p>
                Her expertise spans residential developments, commercial properties, and investment advisory. She has
                closed deals worth over KSh 5 billion and is passionate about making property ownership accessible to
                young professionals and first-time buyers.
              </p>
              <p>
                Beyond her professional achievements, Sarah mentors young women in real estate and speaks at industry
                conferences on market trends and ethics. She enjoys family time, travel, architecture, and running.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-lg" style={{ color: "#0D402D" }}>
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Luxury Residential",
                  "Commercial Properties",
                  "Investment Advisory",
                  "Property Development",
                  "Market Analysis",
                ].map((item) => (
                  <span key={item} className="rounded-full bg-secondary px-4 py-2 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-6xl opacity-50">"</div>
            <blockquote className="mb-6 text-2xl italic">
              Real estate is not just about properties—it&apos;s about people, dreams, and building lasting relationships.
              Every client deserves honesty, expertise, and unwavering dedication.
            </blockquote>
            <cite className="text-lg not-italic">— Sarah Kamau</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
