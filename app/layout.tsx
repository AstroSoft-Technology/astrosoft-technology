import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
];

export const metadata: Metadata = {
  title: "AstroSoft Technology",
  description: "Professional software solutions for modern enterprises.",
  icons: {
    icon: "/images/Final-Logo-Light-bgremoved.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base`}
      >
        <div className="min-h-screen bg-grid text-slate-900">
          <NavBar />

          <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 md:pt-32 pb-24 lg:pb-12">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
