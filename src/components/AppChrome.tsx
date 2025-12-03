"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchOverlay } from "./SearchOverlay";
import { WhatsAppWidget } from "./WhatsAppWidget";
import { AdminBar } from "./AdminBar";
import { AdminLoginModal } from "./AdminLoginModal";
import { EnquiryModal } from "./EnquiryModal";
import { EnquiryProvider } from "./EnquiryContext";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryProperty, setEnquiryProperty] = useState<string | undefined>(undefined);
  const pathname = usePathname();

  const openEnquiry = (propertyName?: string) => {
    setEnquiryProperty(propertyName);
    setEnquiryOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header onSearchClick={() => setSearchOpen(true)} onAdminClick={() => setAdminLoginOpen(true)} isAdmin={isAdmin} />
      <AdminBar isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(false)} />
      <EnquiryProvider value={{ openEnquiry }}>
        <main className="flex-1">{children}</main>
      </EnquiryProvider>
      <Footer />
      <WhatsAppWidget />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} propertyName={enquiryProperty} />
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLogin={() => setIsAdmin(true)}
      />
    </div>
  );
}
