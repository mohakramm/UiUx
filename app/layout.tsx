import type { Metadata } from "next";
import { Fraunces, Work_Sans, Caveat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ebaad Akram · Portfolio",
    template: "%s · Ebaad Akram",
  },
  description:
    "Ebaad Akram is a software engineering student learning interface design in public. Field notes on design in the wild, small interface studies, and an honest account of the route so far.",
  openGraph: {
    title: "Ebaad Akram · Portfolio",
    description:
      "Systems by training, stories by choice. Field notes, interface studies, and the route from engineering to design.",
    url: site.url,
    siteName: "Ebaad Akram",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebaad Akram · Portfolio",
    description: "I make complicated systems make sense.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${workSans.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}>
      <body className="grain min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
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
