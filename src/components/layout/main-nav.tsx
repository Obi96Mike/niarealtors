import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/insights", label: "Insights" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about/team", label: "Our Team" },
];

export function MainNav() {
  return (
    <nav className="hidden items-center gap-8 text-sm font-medium text-text-dark lg:flex">
      {mainLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-brand transition-colors"
        >
          {link.label}
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-text-dark hover:text-brand">
          About Us
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {aboutLinks.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="/contact"
        className="hover:text-brand transition-colors font-medium"
      >
        Contact Us
      </Link>
    </nav>
  );
}
