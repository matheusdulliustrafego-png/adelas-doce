"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Peça pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-cocoa px-4 py-2 text-sm font-medium text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Peça pelo WhatsApp 💕
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform duration-200 ease-out hover:scale-110 active:scale-95">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
