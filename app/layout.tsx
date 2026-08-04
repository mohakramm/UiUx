import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ebaad Akram — UI/UX & Product Design",
    template: "%s · Ebaad Akram",
  },
  description:
    "Software engineering student and product-minded designer. I design interfaces that make complicated systems feel human — case studies in privacy-first social discovery, workflow design, and consumer product concepts.",
  openGraph: {
    title: "Ebaad Akram — UI/UX & Product Design",
    description:
      "Software engineering student and product-minded designer. Case studies at the intersection of systems, stories, and people.",
    url: site.url,
    siteName: "Ebaad Akram",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebaad Akram — UI/UX & Product Design",
    description: "I design interfaces that make complicated systems feel human.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="grain min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
