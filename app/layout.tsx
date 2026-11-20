import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "An independent research laboratory, established 2025. Federated learning, autonomous driving, time-series forecasting, and quantum computation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hwangresearch.com"),
  title: "Hwang's Research",
  description,
  keywords: [
    "Hwang's Research",
    "Federated Learning",
    "Autonomous Driving",
    "Time-Series Forecasting",
    "Quantum Computing",
    "Research Laboratory",
  ],
  authors: [{ name: "Sunjun Hwang" }],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Hwang's Research",
    description,
    url: "https://hwangresearch.com",
    siteName: "Hwang's Research",
    type: "website",
    images: [{ url: "/videos/hero.jpg", width: 1536, height: 864, alt: "Hwang's Research" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hwang's Research",
    description,
    images: ["/videos/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory text-ink font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
