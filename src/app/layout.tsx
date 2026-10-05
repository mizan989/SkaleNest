import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../../public/fonts/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skalenest.com"),
  alternates: {
    canonical: "/",
  },
  title: "SkaleNest — Website Design, Development & Digital Marketing",
  description:
    "SkaleNest designs, develops, and deploys high-performance websites and creates strategic digital marketing campaigns for growing businesses.",
  keywords: [
    "SkaleNest",
    "website design",
    "web development",
    "digital marketing",
    "frontend development",
    "custom websites",
  ],
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo1.png", type: "image/png" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo1.png",
  },
  openGraph: {
    title: "SkaleNest — Website Design, Development & Digital Marketing",
    description:
      "Modern website design, full-stack development, and digital marketing solutions.",
    type: "website",
    url: "https://skalenest.com",
    siteName: "SkaleNest",
    images: [
      {
        url: "/logo1.png",
        width: 1280,
        height: 1280,
        alt: "SkaleNest Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkaleNest — Website Design, Development & Digital Marketing",
    description:
      "Modern website design, full-stack development, and digital marketing solutions.",
    images: ["/logo1.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-[#F7F6F2] text-[#171715] antialiased selection:bg-[#C9A45C]/20 selection:text-[#171715]">
        {children}
      </body>
    </html>
  );
}

