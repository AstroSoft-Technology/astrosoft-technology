import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Matches the NavBar's container precisely:
          mx-auto max-w-7xl px-4 sm:px-6 md:px-12
      */}
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 md:px-12">
        <div className="rounded-[2.5rem] border border-slate-200/60 bg-white p-8 md:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
            {/* Brand */}
            <div className="flex flex-col items-start sm:min-h-[200px] md:min-h-[220px]">
              <Link href="/" className="mb-2">
                <Image
                  src="/images/Final-Logo-Light-bgremoved.png"
                  alt="AstroSoft Technology"
                  width={160}
                  height={160}
                  className="h-auto w-24 md:w-32 lg:w-40 transform origin-left md:scale-125 lg:scale-150"
                  priority
                />
              </Link>
              <p className="max-w-[280px] text-sm text-slate-500 leading-relaxed mt-auto">
                Building resilient, elegant software for the future.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-3">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
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
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-3">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-3">
                Connect
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
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
          <div className="mt-8 border-t border-slate-100 pt-5 flex flex-col items-center justify-center gap-2">
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
