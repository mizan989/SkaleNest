import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkaleNest — Digital Marketing & High-Converting Website Creation",
  description:
    "We build high-converting websites, dominate Google Maps local SEO, produce high-retention video content, and automate WhatsApp CRM funnels for ambitious businesses.",
  keywords: [
    "website creation for business",
    "custom web design agency",
    "digital marketing agency",
    "high-converting websites",
    "local SEO agency",
    "Google Business Profile optimization",
    "WhatsApp marketing automation",
    "short-form video production",
    "conversion rate optimization",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SkaleNest — Digital Marketing & Website Creation for Businesses",
    description:
      "High-converting website design, local search dominance, visual content, and automated CRM growth systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
