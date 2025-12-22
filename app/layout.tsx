import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  { label: "Contact", href: "/contact" },
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

          <footer className="border-t border-slate-100/50 bg-gradient-to-b from-white to-slate-50">
            <div className="px-4 py-6 sm:px-6 sm:py-10 md:px-12 md:py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6 mb-8">
                <div className="text-center sm:text-left">
                  <Link href="/" className="inline-block mb-3">
                    <Image
                      src="/images/Final-Logo-Light-bgremoved.png"
                      alt="AstroSoft Technology"
                      width={80}
                      height={80}
                      className="h-auto w-14 sm:w-16 md:w-20 mx-auto sm:mx-0"
                    />
                  </Link>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Building resilient, elegant software for the future.
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3">
                    Product
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-slate-900 transition"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-slate-900 transition"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="hover:text-slate-900 transition"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3">
                    Company
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <Link
                        href="/privacy"
                        className="hover:text-slate-900 transition"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="mailto:astrosofttechnology@gmail.com"
                        className="hover:text-slate-900 transition"
                      >
                        astrosoftechnology@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3">
                    Connect
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-slate-900 transition"
                      >
                        Get in touch
                      </Link>
                    </li>
                    <li>
                      <a
                        href="tel:+94786692313"
                        className="hover:text-slate-900 transition"
                      >
                        +94 78 669 2313
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/94786692313"
                        className="hover:text-slate-900 transition"
                      >
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/astrosoft-technology/"
                        className="hover:text-slate-900 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/astrosoft-technology/"
                        className="hover:text-slate-900 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-200/50 pt-6 text-center text-xs sm:text-sm text-slate-500">
                <p>
                  © {new Date().getFullYear()} AstroSoft Technology. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
