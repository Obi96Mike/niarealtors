"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Facebook, Instagram, Linkedin, Music2 } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";

interface HeaderProps {
  onSearchClick: () => void;
  onAdminClick: () => void;
  isAdmin: boolean;
}

export function Header({ onSearchClick, onAdminClick, isAdmin }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLink = (href: string, label: string, extra?: React.ReactNode) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(label.toLowerCase())}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Link
        href={href}
        className={`py-2 transition-colors ${pathname.startsWith(href) ? "text-primary" : "text-foreground hover:text-primary"}`}
      >
        {label}
      </Link>
      {extra}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
              <span className="font-semibold text-white">NR</span>
            </div>
            <span className="text-xl font-semibold text-[#0D402D]">Tabor Realtors</span>
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLink("/buy", "Buy", (
              activeDropdown === "buy" ? (
                <div className="absolute left-0 top-full z-50 mt-0 w-48 rounded-lg border border-border bg-white py-2 shadow-lg">
                  <Link href="/buy/developments" className="block px-4 py-2 text-sm hover:bg-secondary">
                    Developments
                  </Link>
                  <Link href="/buy" className="block px-4 py-2 text-sm hover:bg-secondary">
                    All Properties
                  </Link>
                </div>
              ) : null
            ))}
            {navLink("/rent", "Rent", (
              activeDropdown === "rent" ? (
                <div className="absolute left-0 top-full z-50 mt-0 w-48 rounded-lg border border-border bg-white py-2 shadow-lg">
                  <Link href="/rent/residential" className="block px-4 py-2 text-sm hover:bg-secondary">
                    Residential
                  </Link>
                  <Link href="/rent/commercial" className="block px-4 py-2 text-sm hover:bg-secondary">
                    Commercial
                  </Link>
                </div>
              ) : null
            ))}
            <Link href="/about" className="text-foreground transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/about/team" className="text-foreground transition-colors hover:text-primary">
              Our Team
            </Link>
            <Link href="/insights" className="text-foreground transition-colors hover:text-primary">
              Insights
            </Link>
            <Link href="/contact" className="text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onSearchClick}
              className="p-2 text-foreground transition-colors hover:text-primary"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <div className="hidden items-center space-x-3 lg:flex">
              <a href="https://www.facebook.com/profile.php?id=61578951969809&rdid=Ncb82fbVg2pO9Ndn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mWADvSJL%2F#" className="text-foreground transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/niahavens" className="text-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/NiaRealtors" className="text-foreground transition-colors hover:text-primary" aria-label="X">
                <XLogo className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/nia-realtors/" className="text-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@niahavens" className="text-foreground transition-colors hover:text-primary" aria-label="TikTok">
                <Music2 className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              <Link href="/buy" className="text-left text-foreground hover:text-primary">
                Buy
              </Link>
              <div className="pl-4 space-y-2">
                <Link href="/buy/developments" className="block text-sm text-muted-foreground hover:text-primary">
                  Developments
                </Link>
                <Link href="/buy" className="block text-sm text-muted-foreground hover:text-primary">
                  All Properties
                </Link>
              </div>
              <Link href="/rent" className="text-left text-foreground hover:text-primary">
                Rent
              </Link>
              <div className="pl-4 space-y-2">
                <Link href="/rent/residential" className="block text-sm text-muted-foreground hover:text-primary">
                  Residential
                </Link>
                <Link href="/rent/commercial" className="block text-sm text-muted-foreground hover:text-primary">
                  Commercial
                </Link>
              </div>
              <Link href="/about" className="text-left text-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/about/team" className="text-left text-foreground hover:text-primary">
                Our Team
              </Link>
              <Link href="/insights" className="text-left text-foreground hover:text-primary">
                Insights
              </Link>
              <Link href="/contact" className="text-left text-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
