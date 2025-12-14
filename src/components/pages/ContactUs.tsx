"use client";

import { useMemo, useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { countryCallingCodes } from "@/data/countryCodes";

interface ContactUsProps {
  onNavigate: (page: string, id?: string) => void;
}

export function ContactUs({ onNavigate }: ContactUsProps) {
  const sortedCountryCodes = useMemo(
    () => [...countryCallingCodes].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+254",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("home");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?auto=format&fit=max&w=1600&q=80"
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <span>Contact</span>
            </nav>
            <h1 className="mb-4 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Contact Us
            </h1>
            <p className="text-xl text-white/90">We&apos;re here to help with all your real estate needs</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-2xl" style={{ color: "#0D402D" }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  Full Name *
                </label>
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {sortedCountryCodes.map(({ code, name, dialCode }) => (
                      <option key={`${code}-${dialCode}`} value={dialCode}>
                        {name} ({dialCode})
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm">
                  Subject *
                </label>
                <input
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button type="submit" className="w-full rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="mb-6 text-2xl" style={{ color: "#0D402D" }}>
              Get in Touch
            </h2>
            <p className="mb-8 text-muted-foreground">
              Whether you&apos;re looking to buy, sell, or rent, our experienced team is ready to assist you. Reach out through any of the channels below.
            </p>

            <div className="mb-12 space-y-6">
              <div className="flex items-start rounded-lg bg-secondary p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ color: "#0D402D" }}>
                    Office Address
                  </h3>
                  <p className="text-muted-foreground">
                    ABC Place, 4th Floor,  
                    < br />
                    Westlands, Nairobi
                    <br />
                    Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start rounded-lg bg-secondary p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ color: "#0D402D" }}>
                    Phone
                  </h3>
                  <a href="tel:+254708085761" className="text-muted-foreground transition-colors hover:text-primary">
                    +254 708 085 761
                  </a>
                </div>
              </div>

              <div className="flex items-start rounded-lg bg-secondary p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ color: "#0D402D" }}>
                    Email
                  </h3>
                  <a
                    href="mailto:info@taborrealtors.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    info@taborrealtors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start rounded-lg bg-secondary p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1" style={{ color: "#0D402D" }}>
                    Office Hours
                  </h3>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4" style={{ color: "#0D402D" }}>
                Find Us
              </h3>
              <a
                href="https://maps.app.goo.gl/HV4AsjAcqY8W56V89"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-lg"
              >
                <ImageWithFallback
                  src="/ABC-Place-Nairobi.jpg"
                  alt="Map location - ABC Place, Westlands, Nairobi"
                  className="h-[300px] w-full object-cover transition duration-200 group-hover:brightness-90"
                />
                <span className="sr-only">Open map in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl" style={{ color: "#FFFFFF" }}>
            Ready to Find Your Dream Property?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Browse our extensive collection of properties or speak with our expert team
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate("buy")}
              className="rounded bg-white px-8 py-3 text-primary transition-colors hover:bg-white/90"
            >
              Browse Properties
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
