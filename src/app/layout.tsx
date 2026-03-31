import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "CheloStudio | Dirección Creativa & Producción Audiovisual",
  description: "Estudio creativo boutique especializado en elevar marcas a través de una dirección creativa impecable y contenido visual sofisticado.",
  metadataBase: new URL("https://www.chelostudio.com"),
  themeColor: "#000000",
  openGraph: {
    title: "CheloStudio | Dirección Creativa",
    description: "Producción Audiovisual y Contenido Digital de alto impacto. Elevando marcas a través de la excelencia cinematográfica.",
    url: "https://www.chelostudio.com",
    siteName: "CheloStudio",
    images: [
      {
        url: "/og-black.png",
        width: 1024,
        height: 1024,
        alt: "Chelo Studio Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheloStudio",
    description: "Elevando marcas a través de la excelencia cinematográfica.",
    images: ["/og-black.png"],
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
