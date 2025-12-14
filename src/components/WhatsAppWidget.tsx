"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <button
      onClick={() => window.open("https://wa.me/254708085761", "_blank")}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-colors hover:bg-[#20BA5A]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </button>
  );
}
