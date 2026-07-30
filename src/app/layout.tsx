import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { CookieBanner } from "@/components/site/cookie-banner";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Napa Valley Concierge | Napa Concierge",
    template: "%s | Napa Valley Concierge",
  },
  description:
    "Curated Napa Valley concierge planning for wine tours, restaurants, airport pickup, pickleball, and signature local experiences.",
  applicationName: "Napa Concierge",
  keywords: [
    "Napa Valley concierge",
    "Napa wine tours",
    "Carneros Inn pickleball",
    "Napa lifestyle concierge",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
