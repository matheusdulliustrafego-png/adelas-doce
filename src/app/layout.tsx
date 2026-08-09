import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const siteUrl = "https://delasdoce.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Delas Doce | Doces Artesanais e Encomendas",
  description:
    "Conheça as delícias da Delas Doce 🍓 Brigadeiros, bolos, brownies, morangos e encomendas preparados com carinho. Faça seu pedido pelo WhatsApp.",
  keywords: [
    "doceria",
    "confeitaria",
    "doces artesanais",
    "morango do amor",
    "encomenda de doces",
    "Delas Doce",
  ],
  openGraph: {
    title: "Delas Doce | Doces Artesanais e Encomendas",
    description:
      "Brigadeiros, morangos, bolos e encomendas especiais preparados com carinho. Faça seu pedido pelo WhatsApp.",
    url: siteUrl,
    siteName: "Delas Doce",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/bombom-morango.jpeg", width: 1200, height: 1500, alt: "Bombom de morango da Delas Doce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delas Doce | Doces Artesanais e Encomendas",
    description: "Doces artesanais feitos com carinho. Peça pelo WhatsApp 🍓💕",
    images: ["/images/bombom-morango.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#e6395a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
