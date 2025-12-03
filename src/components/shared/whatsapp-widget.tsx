import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/254708085761"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 transform rounded-full bg-brand px-4 py-3 text-white shadow-lg transition hover:bg-[#0b3424] md:flex"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Chat on WhatsApp
    </a>
  );
}
