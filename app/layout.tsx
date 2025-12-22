import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = {
  title: "AstroSoft Technology",
  description: "Professional software solutions for modern enterprises.",
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
          <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-100/50">
            <div className="flex items-center justify-between px-6 py-3 sm:px-8 md:px-12">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/Final-Logo-Light-bgremoved.png"
                  alt="AstroSoft Technology"
                  width={80}
                  height={80}
                  priority
                  className="h-auto w-auto"
                />
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs font-semibold uppercase tracking-widest text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="text-xs font-semibold uppercase tracking-widest text-slate-900 hover:text-slate-600 transition"
              >
                Contact
              </Link>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20">
            {children}
          </main>

          <footer className="border-t border-slate-100/50 bg-gradient-to-b from-white to-slate-50">
            <div className="px-6 py-10 sm:px-8 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <Link href="/" className="inline-block mb-3">
                    <Image
                      src="/images/Final-Logo-Light-bgremoved.png"
                      alt="AstroSoft Technology"
                      width={125}
                      height={125}
                      className="h-auto w-auto"
                    />
                  </Link>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Building resilient, elegant software for the future.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3">
                    Product
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
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
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3">
                    Company
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
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
                        href="mailto:hello@astrosoft.tech"
                        className="hover:text-slate-900 transition"
                      >
                        hello@astrosoft.tech
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3">
                    Connect
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
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
                        href="tel:+15550142233"
                        className="hover:text-slate-900 transition"
                      >
                        +1 (555) 014-2233
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-200/50 pt-6 text-center text-sm text-slate-500">
                <p>
                  © {new Date().getFullYear()} AstroSoft Technology. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
