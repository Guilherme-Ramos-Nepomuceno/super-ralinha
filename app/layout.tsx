import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({weight: ['400'], subsets: ['latin']
 })

export const metadata: Metadata = {
  title: "Ser Mais Esporte e Lazer - Festivais",
  description: "Festivais do Programa Ser mais esporte e lazer - instituto manduvi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn("scroll-smooth",inter.className, bebas.className)}>{children}</body>
    </html>
  );
}
