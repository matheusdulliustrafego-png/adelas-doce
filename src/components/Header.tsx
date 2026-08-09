"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { INSTAGRAM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#catalogo", label: "Nossos Doces" },
  { href: "#encomendas", label: "Encomendas" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "bg-cream/90 shadow-[0_2px_20px_-4px_rgba(58,36,32,0.12)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container-max section-pad flex h-18 items-center justify-between py-3">
        <Link href="#inicio" aria-label="Delas Doce — início">
          <Logo className="h-14 w-14" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-cocoa/80 transition-colors hover:text-berry"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-cocoa/80 transition-colors hover:text-berry"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-berry px-5 py-2.5 text-[15px] font-semibold text-cream shadow-[0_8px_20px_-6px_rgba(230,57,90,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-berry-dark hover:shadow-[0_12px_24px_-6px_rgba(230,57,90,0.6)] lg:inline-flex"
        >
          Fazer meu pedido 🍓
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-pink-soft lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-18 bottom-0 z-30 flex flex-col bg-cream transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-lg font-medium text-cocoa transition-colors hover:bg-pink-soft"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-lg font-medium text-cocoa transition-colors hover:bg-pink-soft"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        <div className="section-pad pb-10">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-berry px-5 py-4 text-lg font-semibold text-cream shadow-[0_8px_20px_-6px_rgba(230,57,90,0.55)]"
          >
            Fazer meu pedido 🍓
          </a>
        </div>
      </div>
    </header>
  );
}
