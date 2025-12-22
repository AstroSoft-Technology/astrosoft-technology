import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Matches the NavBar's container precisely:
          mx-auto max-w-7xl px-4 sm:px-6 md:px-12
      */}
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 md:px-12">
        <div className="rounded-[2.5rem] border border-slate-200/60 bg-white p-8 md:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
            {/* Brand */}
            <div className="flex flex-col items-start">
              <Link href="/" className="mb-6">
                <Image
                  src="/images/Final-Logo-Light-bgremoved.png"
                  alt="AstroSoft Technology"
                  width={80}
                  height={80}
                  className="h-auto w-16 md:w-20"
                />
              </Link>
              <p className="max-w-[240px] text-sm text-slate-500 leading-relaxed">
                Building resilient, elegant software for the future.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">
                Product
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-slate-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:astrosofttechnology@gmail.com"
                    className="hover:text-slate-900 transition-colors"
                  >
                    astrosoft@tech.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">
                Connect
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Get in touch
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:+94786692313"
                    className="hover:text-slate-900 transition-colors"
                  >
                    +94 78 669 2313
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/94786692313"
                    className="hover:text-slate-900 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/astrosoft-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          {/* REDUCED SPACING: mt-8 (was 16) and pt-4 (was 8) */}
          {/* Bottom Copyright Bar */}
          <div className="mt-8 border-t border-slate-100 pt-4 flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                astrosoft{" "}
                <span className="text-sky-600 font-semibold">technologies</span>
              </span>

              <p className="text-[11px] text-slate-400 font-medium">
                © {new Date().getFullYear()} AstroSoft Technology. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
