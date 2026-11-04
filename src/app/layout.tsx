import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.andex.tech"), icons: { icon: "/icon.svg" },
  title: { default: "Andex — Tecnología que mueve tu negocio", template: "%s | Andex" },
  description: "Software y hardware que trabajan con vos. Conocé AndexMarket, nuestro sistema de ventas, y los tótems Andex diseñados para tu negocio.",
  openGraph: { title: "Andex — Tecnología que mueve tu negocio", description: "AndexMarket y tótems a medida. Desde Mendoza, para lo que viene.", locale: "es_AR", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}

