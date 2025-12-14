import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Music2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { XLogo } from "@/components/icons/XLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578951969809&rdid=Ncb82fbVg2pO9Ndn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mWADvSJL%2F#" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/niahavens" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/nia-realtors/" },
  { label: "TikTok", icon: Music2, href: "https://www.tiktok.com/@niahavens" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/254708085761" },
  { label: "X", icon: XLogo, href: "https://x.com/NiaRealtors" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-brand text-white">
      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nia Realtors</h3>
            <p className="text-sm text-white/80">
              We curate developments, rentals, and commercial spaces that elevate how you
              live and work in Nairobi.
            </p>
            <Link
              href="/about"
              className="inline-flex w-fit items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand transition hover:bg-white/90"
            >
              Learn More
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-sm text-white/80">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p>14 Riverside Drive, Nairobi</p>
            <p>Mon - Sat: 8:30am - 6:00pm</p>
            <p>
              Email:{" "}
              <a href="mailto:hello@niarealtors.com" className="hover:text-white">
                hello@niarealtors.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+254708085761" className="hover:text-white">
                +254 708 085 761
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm text-white/80">
              Market updates, new launches, and curated listings—straight to your inbox.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row" action="/api/newsletter" method="post">
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-white/90 text-text-dark placeholder:text-muted-foreground"
              />
              <Button type="submit" className="bg-white text-brand hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-white"
              >
                <Icon className="h-4 w-4 text-white" />
                {label}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/70">
            © 2025 Nia Realtors. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
