import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shrysapp",
  description: "Shreyas' personal portfolio built with Next.js",
};

// Global layout with Navbar and Footer wrapping all routes.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", maxWidth: 960, margin: "0 auto", padding: "0 1rem" }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
