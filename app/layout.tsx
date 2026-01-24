import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "EsportsClash",
  description: "India’s next-generation esports tournament platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0b0f] text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
