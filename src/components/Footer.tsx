import Logo from "@/components/Logo";
import InstagramIcon from "@/components/icons/InstagramIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#catalogo", label: "Nossos Doces" },
  { href: "#encomendas", label: "Encomendas" },
  { href: "#sobre", label: "Sobre" },
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-cocoa py-14 text-cream">
      <div className="container-max section-pad">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="flex max-w-xs flex-col items-center sm:items-start">
            <Logo className="h-16 w-16" />
            <p className="mt-4 text-sm text-cream/70">Doces feitos com carinho 🍓💕</p>
          </div>

          <nav className="flex flex-col items-center gap-3 sm:items-start">
            <span className="text-xs font-semibold uppercase tracking-wide text-cream/50">Menu</span>
            {LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/80 transition-colors hover:text-berry-light"
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href} className="text-sm text-cream/80 transition-colors hover:text-berry-light">
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <span className="text-xs font-semibold uppercase tracking-wide text-cream/50">Contato</span>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-berry-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-berry-light"
            >
              <InstagramIcon className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Delas Doce. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
