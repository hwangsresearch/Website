import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hwangresearch.com"),
  title: "Hwang's Research — Research Beyond Boundaries",
  description:
    "An independent research organization advancing intelligent systems, autonomous driving, quantum computing, and federated learning.",
  keywords: [
    "Hwang's Research",
    "AI Systems",
    "Federated Learning",
    "Autonomous Driving",
    "Quantum Computing",
    "Research Lab",
  ],
  authors: [{ name: "Sunjun Hwang" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Hwang's Research",
    description: "Research Beyond Boundaries",
    url: "https://hwangresearch.com",
    siteName: "Hwang's Research",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Hwang's Research",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hwang's Research",
    description: "Research Beyond Boundaries",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-base text-text-primary font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
