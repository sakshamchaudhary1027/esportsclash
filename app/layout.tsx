

export const metadata = {
  title: "EsportsClash – Compete. Win. Dominate.",
  description:
    "EsportsClash is a competitive esports platform to join and host tournaments for BGMI, Free Fire, Valorant and more.",
  keywords: [
    "esports tournaments",
    "BGMI tournaments",
    "Free Fire tournaments",
    "Valorant tournaments",
    "Esports India",
  ],
  
  openGraph: {
    title: "EsportsClash",
    description:
      "Join competitive esports tournaments and win real prizes.",
    url: "https://esportsclash.in",
    siteName: "EsportsClash",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EsportsClash",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-[#0b0b0f]">
  <Navbar />
  <main className="w-full min-h-screen">
    {children}
  </main>
  <Footer />
</body>

    </html>
  );
}
import type { Metadata } from "next";

export const metadataBase: Metadata = {
  metadataBase: new URL("https://esportsclash.in"),
  title: "EsportsClash",
  description: "Competitive esports tournaments platform",
};
