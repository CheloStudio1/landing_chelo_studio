import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "CheloStudio | Dirección Creativa & Producción Audiovisual",
  description: "Estudio creativo boutique especializado en elevar marcas a través de una dirección creativa impecable y contenido visual sofisticado.",
  metadataBase: new URL("https://www.chelostudio.com"),
  openGraph: {
    title: "CheloStudio",
    description: "Dirección Creativa, Producción Audiovisual y Contenido Digital de alto impacto.",
    url: "https://www.chelostudio.com",
    siteName: "CheloStudio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CheloStudio Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheloStudio",
    description: "Elevando marcas a través de la excelencia cinematográfica.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
