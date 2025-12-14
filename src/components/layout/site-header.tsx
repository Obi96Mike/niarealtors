"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Facebook, Instagram, Search as SearchIcon, Linkedin, Music2 } from "lucide-react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { SearchOverlay } from "@/components/shared/search-overlay";
import { XLogo } from "@/components/icons/XLogo";

export default function SiteHeader() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = ({ mode, query }: { mode: "buy" | "rent"; query: string }) => {
    const target =
      mode === "buy"
        ? `/buy/developments?query=${encodeURIComponent(query)}`
        : `/rent/residential?query=${encodeURIComponent(query)}`;
    router.push(target);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <MobileNav />
          <Link href="/" className="text-xl font-bold text-brand">
            Nia Realtors
          </Link>
        </div>
        <MainNav />
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.facebook.com/profile.php?id=61578951969809&rdid=Ncb82fbVg2pO9Ndn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mWADvSJL%2F#"
            target="_blank"
            rel="noreferrer"
            className="text-text-dark hover:text-brand"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/niahavens"
            target="_blank"
            rel="noreferrer"
            className="text-text-dark hover:text-brand"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/NiaRealtors"
            target="_blank"
            rel="noreferrer"
            className="text-text-dark hover:text-brand"
            aria-label="X"
          >
            <XLogo className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/nia-realtors/"
            target="_blank"
            rel="noreferrer"
            className="text-text-dark hover:text-brand"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@niahavens"
            target="_blank"
            rel="noreferrer"
            className="text-text-dark hover:text-brand"
            aria-label="TikTok"
          >
            <Music2 className="h-5 w-5" />
          </a>
          <Button
            variant="outline"
            size="icon"
            aria-label="Open search"
            className="border-brand/30 text-brand hover:bg-brand hover:text-white"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open search"
          className="border-brand/30 text-brand hover:bg-brand hover:text-white lg:hidden"
          onClick={() => setSearchOpen(true)}
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      </div>
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} onSubmit={handleSearch} />
    </header>
  );
}
