import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "CheloStudio",
  description: "Estudio creativo enfocado en producción audiovisual, branding y contenido digital.",
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
